from rest_framework import serializers
from django.db.models import Q

from .constants import ABILITIES
from .models import (
    SubRace,
    ParentRace,
    RacialTrait,
    Weapon,
    Trait,
    Armor,
    Skill,
    ParentCharacterClass,
    SubCharacterClass
)


class SubClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCharacterClass


class ParentCharacterClassSerializer(serializers.ModelSerializer):
    subclasses = SubClassSerializer(many=True)

    class Meta:
        model = ParentCharacterClass


class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapon


class ArmorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Armor


class RacialTraitSerializer(serializers.ModelSerializer):
    class Meta:
        model = RacialTrait


class RaceSerializerMixin(serializers.Serializer):
    racialtraits = RacialTraitSerializer(many=True)
    weapons = serializers.SerializerMethodField()

    def get_weapons(self, obj):
        q = Q()
        for weapon in obj.weapons:
            q |= Q(name__iexact=weapon)
        return Weapon.objects.filter(q).values_list('id', flat=True)


class SubRaceSerializer(RaceSerializerMixin, serializers.ModelSerializer):
    ability_scores = serializers.SerializerMethodField()
    skills = serializers.SerializerMethodField()

    def get_skills(self, subrace):
        return subrace.parent.skills + subrace.skills

    def get_ability_scores(self, obj):
        # do this in the model data, not here but this is fine for now TODO
        return [parentattr + childattr for parentattr, childattr in zip(obj.parent.ability_scores, obj.ability_scores)]

    class Meta:
        model = SubRace


class ParentRaceSerializer(RaceSerializerMixin, serializers.ModelSerializer):
    subraces = SubRaceSerializer(many=True)

    class Meta:
        model = ParentRace


class TraitSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = ('item_property',)
        model = Trait


class SkillSerializer(serializers.ModelSerializer):
    is_proficient = serializers.SerializerMethodField()

    def get_is_proficient(self, obj):
        return False

    class Meta:
        fields = ('id', 'name', 'desc', 'ability', 'is_proficient')
        model = Skill


class ResourceSerializer(serializers.Serializer):
    weapons = WeaponSerializer(many=True)
    armor = ArmorSerializer(many=True)
    traits = TraitSerializer(many=True)
    skills = SkillSerializer(many=True)
    character_classes = ParentCharacterClassSerializer(many=True)
