from rest_framework import viewsets
from rest_framework.response import Response

from .models import (
    ParentRace,
    Trait,
    Item,
    Skill,
    CharacterClass
)

from .serializers import (
    ParentRaceSerializer,
    ResourceSerializer,
)


class ParentRaceView(viewsets.ModelViewSet):
    queryset = ParentRace.objects.all()
    serializer_class = ParentRaceSerializer


class ItemView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ResourceSerializer

    def list(self, request):
        qs = self.get_queryset()
        data = {
            'weapons': [item.weapon for item in qs.filter(weapon__isnull=False)],
            'armor': [item.armor for item in qs.filter(weapon__isnull=True)],
            'traits': Trait.objects.all(),
            'skills': Skill.objects.all(),
            'character_classes': CharacterClass.objects.all(),
        }
        return Response(data=ResourceSerializer(data).data)
