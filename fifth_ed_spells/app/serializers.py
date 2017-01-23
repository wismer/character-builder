from rest_framework_json_api import serializers
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
    SubCharacterClass
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

    def get_weapons(self, obj):
        import ipdb; ipdb.set_trace()


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
        exclude = ('modified', 'created')
