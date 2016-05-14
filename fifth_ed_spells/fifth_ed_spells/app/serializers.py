from rest_framework import serializers

from .models import SubRace, ParentRace, RacialTrait


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
