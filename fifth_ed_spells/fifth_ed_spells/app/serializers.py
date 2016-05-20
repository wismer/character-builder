from rest_framework import serializers

from .models import (
    SubRace,
    ParentRace,
    RacialTrait,
    Weapon,
    Trait,
    TraitProperty,
    Armor,
    Item,
)




class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapon


class ArmorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Armor


class ItemSerializer(serializers.ModelSerializer):
    item_detail = serializers.SerializerMethodField()

    def get_item_detail(self, obj):
        if hasattr(obj, 'weapon'):
            return WeaponSerializer(obj.weapon).data
        else:
            return ArmorSerializer(obj.armor).data

    class Meta:
        model = Item


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
        model = Trait


class BaseItemSerializer(serializers.Serializer):
    items = ItemSerializer(many=True)
    traits = TraitSerializer(many=True)
