from rest_framework import serializers

from .models import (
    SubRace,
    ParentRace,
    RacialTrait,
    Weapon,
    Trait,
    Armor,
)


class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapon


class ArmorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Armor


class RacialTraitSerializer(serializers.ModelSerializer):
    class Meta:
        model = RacialTrait


class SubRaceSerializer(serializers.ModelSerializer):
    racialtraits = RacialTraitSerializer(many=True)

    class Meta:
        model = SubRace


class ParentRaceSerializer(serializers.ModelSerializer):
    subraces = SubRaceSerializer(many=True)
    # racialtraits = serializers.SerializerMethodField()
    racialtraits = RacialTraitSerializer(many=True)

    class Meta:
        model = ParentRace


class TraitSerializer(serializers.ModelSerializer):
    class Meta:
        exclude = ('item_property',)
        model = Trait


class BaseItemSerializer(serializers.Serializer):
    weapons = WeaponSerializer(many=True)
    armor = ArmorSerializer(many=True)
    traits = TraitSerializer(many=True)
