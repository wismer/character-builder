from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, views
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from rest_framework.authentication import (
    SessionAuthentication,
    BasicAuthentication
)

from fifth_ed_spells.account.models import User
from fifth_ed_spells.app.models import (
    BaseRace,
    ParentRace,
    SubRace,
    ParentCharacterClass,
    Player,
    Class,
    Skill,
    Armor,
    Weapon,
    Spell,
    Character,
    Encounter,
)

from .serializers import (
    ParentRaceSerializer,
    PlayerCharacterSerializer,
    ClassSerializer,
    ResourceSerializer,
    SpellSerializer,
    CharacterSerializer
)


class GameInformationView(viewsets.ViewSet):
    # races, items, classes, traits
    def list(self, request):
        data = {
            'races': ParentRace.objects.all(),
            'classes': Class.objects.all(),
            'weapons': Weapon.objects.all(),
            'armor': Armor.objects.all(),
            'skills': Skill.objects.all()
        }
        serialized_data = ResourceSerializer(data).data
        return Response(data=serialized_data)


class ParentRaceView(viewsets.ModelViewSet):
    queryset = ParentRace.objects.all()
    serializer_class = ParentRaceSerializer


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


class ClassView(viewsets.ModelViewSet):
    queryset = ParentCharacterClass.objects.all()
    serializer_class = ClassSerializer


class SpellView(viewsets.ModelViewSet):
    queryset = Spell.objects.all()
    serializer_class = SpellSerializer

    def get_queryset(self):
        qs = Spell.objects.all()
        query = self.request.query_params.get('name', None)
        if not query:
            return qs

        return qs.filter(name__icontains=query)


class EncounterView(viewsets.ViewSet):
    def create(self, request, *args, **kwargs):
        serializer = CharacterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        return Response(status=400)
