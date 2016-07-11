from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import detail_route

from .models import (
    ParentRace,
    SubRace,
    Trait,
    Item,
    Skill,
    ParentCharacterClass,
    Player
)

from .serializers import (
    ParentRaceSerializer,
    ResourceSerializer,
    PlayerCharacterSerializer
)


class ParentRaceView(viewsets.ModelViewSet):
    queryset = ParentRace.objects.all()
    serializer_class = ParentRaceSerializer


class ResourceView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ResourceSerializer

    def list(self, request):
        qs = self.get_queryset()
        data = {
            'weapons': [item.weapon for item in qs.filter(weapon__isnull=False)],
            'armor': [item.armor for item in qs.filter(weapon__isnull=True)],
            'traits': Trait.objects.all(),
            'skills': Skill.objects.all(),
            'character_classes': ParentCharacterClass.objects.all(),
        }
        return Response(data=ResourceSerializer(data).data)


class CharacterView(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerCharacterSerializer

    @detail_route(methods=['POST'])
    def change(self, request, pk=None):
        pass

    def create(self, request, *args, **kwargs):
        qs = self.get_queryset()
        data = request.data
        race = SubRace.objects.get(pk=data.pop('race'))
        data['race'] = race
        player = qs.create(**data)
        return Response(status=200, data={'id': player.id, 'name': player.character_name})
