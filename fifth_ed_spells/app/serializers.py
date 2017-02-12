from rest_framework import serializers
from django.db.models import Q

from .constants import abilities_all
from .models import (
    Player,
    SubRace,
    ParentRace,
    RacialTrait,
    Weapon,
    Armor,
    Class,
    ClassSpell,
    SubClass,
    Spell,
    Skill,
    Character,
    ParentCharacterClass,
    Encounter,
    CharacterState
)


def merge_ability_scores(parent, child=None):
    if not child:
        scores = parent.ability_scores
    else:
        scores = [p + c for p, c in zip(parent.ability_scores, child.ability_scores)]

    abilities = []
    for idx, val in enumerate(scores):
        score = abilities_all[idx]
        score['value'] = val
        abilities.append(score)
    return abilities


def abilities_tooltip(obj):
    abilities = []
    for idx, (lower, upper, desc) in abilities_all:
        if obj.ability_scores[idx] > 0:
            abilities.append(tuple(upper, desc))
    return abilities


def skills_tooltip(obj):
    skills = []
    for skill_name in obj.skills + obj.parent.skills:
        skill = Skill.objects.get(name=skill_name)
        skills.append(skill.tooltip)

    return skills


class RacialTraitSerializer(serializers.ModelSerializer):
    class Meta:
        model = RacialTrait


class RaceSerializerMixin(serializers.Serializer):
    racialtraits = RacialTraitSerializer(many=True)
    weapons = serializers.SerializerMethodField()
    ability_scores = serializers.SerializerMethodField()

    def get_ability_scores(self, obj):
        abilities = []
        for idx, val in enumerate(obj.ability_scores):
            score = abilities_all[idx].copy()
            score['value'] = val
            abilities.append(score)
        return abilities

    def get_weapons(self, obj):
        if not obj.weapons:
            return obj.weapons
        query = Q()
        for weapon in obj.weapons:
            query |= Q(name__iexact=weapon)
        weapons = Weapon.objects.filter(query)
        return map(lambda w: w.to_preview(), weapons)


class SubClassSpellSerializer(serializers.ModelSerializer):
    spell = serializers.SerializerMethodField()

    def get_spell(self, obj):
        return obj.spell.name

    class Meta:
        fields = ('id', 'spell', 'level_restriction')
        model = ClassSpell


class SubClassSerializer(serializers.ModelSerializer):
    available_spells = SubClassSpellSerializer(many=True)

    class Meta:
        model = SubClass


class SkillSerializer(serializers.ModelSerializer):
    is_proficient = serializers.SerializerMethodField()

    def get_is_proficient(self, skill):
        return False

    class Meta:
        fields = ('id', 'name', 'desc', 'ability', 'is_proficient')
        model = Skill


class ClassSerializer(serializers.ModelSerializer):
    subclasses = SubClassSerializer(many=True)
    skill_choices = serializers.SerializerMethodField()

    def get_skill_choices(self, klass):
        return [skill.id for skill in klass.skill_choices.all()]

    class Meta:
        model = Class


class SubRaceSerializer(RaceSerializerMixin, serializers.ModelSerializer):
    class Meta:
        model = SubRace


class ParentRaceSerializer(RaceSerializerMixin, serializers.ModelSerializer):
    subraces = SubRaceSerializer(many=True)

    class Meta:
        model = ParentRace

# ITEMS
# includes: Weapons, Armor, Tools, Trinkets


class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapon


class WeaponPreviewSerializer(WeaponSerializer):
    class Meta(WeaponSerializer.Meta):
        fields = (
            'id',
            'name',
            'damage',
            'damage_type',
            'special',
            'dice_count',
        )


class ArmorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Armor


class ItemSerializer(serializers.Serializer):
    weapons = serializers.SerializerMethodField()
    armor = serializers.SerializerMethodField()


class ResourceSerializer(serializers.Serializer):
    races = ParentRaceSerializer(many=True)
    classes = ClassSerializer(many=True)
    skills = SkillSerializer(many=True)
    weapons = WeaponSerializer(many=True)
    armor = ArmorSerializer(many=True)


class SubClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubClass


class ParentCharacterClassSerializer(serializers.ModelSerializer):
    subclasses = SubClassSerializer(many=True)

    class Meta:
        model = ParentCharacterClass


class RaceSelectionSerializer(serializers.ModelSerializer):
    races = ParentRaceSerializer(many=True)
    weapons = WeaponSerializer(many=True)
    armor = ArmorSerializer(many=True)


class PlayerCharacterSerializer(serializers.ModelSerializer):
    race = serializers.SerializerMethodField()

    # obviously this will change
    def get_race(self, player):
        if hasattr(player.race, 'subrace'):
            return str(player.race.subrace)
        return str(player.race)

    class Meta:
        model = Player


class SpellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spell


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character


class NextStateSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('current_hit_points', 'readied_action', 'conditions', 'id')
        model = CharacterState


class CharacterStateSerializer(serializers.ModelSerializer):
    next_state = NextStateSerializer(required=False)

    def update(self, character_state, data):
        next_state = data.get('next_state', {})
        character_state.next_state = CharacterState.objects.create(
            encounter=character_state.encounter,
            character=character_state.character,
            current_hit_points=next_state.get('hit_points', character_state.current_hit_points),
            readied_action=next_state.get('readied_action', False),
            conditions=next_state.get('conditions', character_state.conditions)
        )
        character_state.next_state.save()
        character_state.save()
        return character_state

    class Meta:
        model = CharacterState


class CharacterStateUpdateSerializer(CharacterStateSerializer):
    class Meta(CharacterStateSerializer.Meta):
        fields = ('current_hit_points', 'characterstate')


class InitialRoster(CharacterStateSerializer):
    class Meta(CharacterStateSerializer.Meta):
        fields = ('current_hit_points', 'initiative_roll', 'character')
        extra_kwargs = {
            'encounter': {'required': False}
        }


class BaseEncounterSerializer(serializers.ModelSerializer):
    roster = CharacterStateSerializer(many=True)

    class Meta:
        model = Encounter
        fields = ('id', 'name', 'current_turn', 'created', 'modified', 'surprise_round', 'roster')


class EncounterCreationSerializer(BaseEncounterSerializer):
    characters = InitialRoster(many=True, write_only=True)

    def create(self, data):
        characters = data.pop('characters')
        encounter = super().create(data)
        for char in characters:
            encounter.roster.create(**char)
        return encounter

    class Meta(BaseEncounterSerializer.Meta):
        fields = ('name', 'characters', 'id')


class EncounterUpdateSerializer(BaseEncounterSerializer):
    end_of_round = serializers.BooleanField(required=False, read_only=True)
    roster = CharacterStateUpdateSerializer(many=True, required=True)

    def update(self, encounter, data):
        end_of_round = data.pop('end_of_round', False)
        if end_of_round:
            # encounter.current_turn = F('current_turn') + 1
            encounter.current_turn += 1
            encounter.save()
        for char in data['roster']:
            char_state = char['characterstate']
            char_state.next_state = CharacterState.objects.create(
                encounter=encounter,
                character=char_state.character,
                current_hit_points=char.get('current_hit_points', char_state.character.max_hit_points),
            )
            char_state.save()
        return encounter

    class Meta(BaseEncounterSerializer.Meta):
        fields = ('end_of_round',) + BaseEncounterSerializer.Meta.fields
        extra_kwargs = {
            'name': {'required': False},
            'roster': {'queryset': CharacterState.objects.filter(next_state__isnull=True)}
        }


class EncounterDataSerializer(serializers.Serializer):
    encounters = BaseEncounterSerializer(many=True)
    characters = CharacterSerializer(many=True)
