from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, views
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from fifth_ed_spells.account.models import User
from .models import (
    BaseRace,
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
        serializer = self.get_serializer(qs, many=True)
        return Response(data=serializer.data)


class CharacterView(viewsets.ModelViewSet):
    queryset = Player.objects.filter(pk__lt=30)
    serializer_class = PlayerCharacterSerializer

    @detail_route(methods=['PUT'])
    def race(self, request, pk=None):
        player = Player.objects.get(pk=pk)
        race = request.data.get('race')
        race = BaseRace.objects.get(id=race)
        player.race = race
        return Response(status=200, data={'race_name': race.name})

    def update(self, request, pk=None):
        if not pk:
            return Response(status=404)
        player = Player.objects.get(pk=pk)
        return Response(status=200, data={'id': player.id})

    def create(self, request, *args, **kwargs):
        qs = self.get_queryset()
        data = request.data
        race = SubRace.objects.get(pk=data.pop('race'))
        data['race'] = race
        player = qs.create(**data)
        return Response(status=200, data={'id': player.id, 'name': player.character_name})


class LoginView(views.APIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    queryset = User.objects.all()

    @csrf_exempt
    def post(self, request):
        import ipdb; ipdb.set_trace()
