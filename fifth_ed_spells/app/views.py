from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, views
from rest_framework.response import Response
from rest_framework.decorators import detail_route
from rest_framework.authentication import (
    SessionAuthentication,
    BasicAuthentication
)
from django.db.models import Q

from fifth_ed_spells.account.models import User
from fifth_ed_spells.app.models import (
    ParentRace,
    ParentCharacterClass,
    Class,
    Skill,
    Chapter,
    Armor,
    Weapon,
    Spell,
    Character,
    Encounter,
    CharacterState
)

from .serializers import (
    ParentRaceSerializer,
    ChapterSerializer,
    ClassSerializer,
    ResourceSerializer,
    SpellSerializer,
    CharacterSerializer,
    ActionSerializer,
    BaseEncounterSerializer,
    EncounterCreationSerializer,
    EncounterUpdateSerializer,
    CharacterStateSerializer,
    ClueSerializer
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


class LoginView(views.APIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    queryset = User.objects.all()


class ClassView(viewsets.ModelViewSet):
    queryset = ParentCharacterClass.objects.all()
    serializer_class = ClassSerializer


class SpellView(viewsets.ModelViewSet):
    queryset = Spell.objects.all()
    serializer_class = SpellSerializer

    def get_queryset(self):
        qs = Spell.objects.all()
        query = self.request.query_params.get('name', None)
        if not query or query is '':
            return qs

        return qs.filter(name__icontains=query)


class CharacterView(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

    def get_queryset(self):
        params = self.request.query_params
        if params.get('name'):
            return self.queryset.filter(
                Q(character_name__iexact=params.get('name')) |
                Q(player_name__iexact=params.get('name'))
            )
        return self.queryset


class EncounterView(viewsets.ModelViewSet):
    queryset = Encounter.objects.all()
    serializer_class = BaseEncounterSerializer

    def update(self, request, pk=None, partial=False):
        encounter = self.get_object()
        serializer = EncounterUpdateSerializer(encounter, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        serialized_response = self.get_serializer(encounter)
        return Response(data=serialized_response.data)

    def create(self, request, *args, **kwargs):
        serializer = EncounterCreationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data=serializer.data)


class RosterView(viewsets.ModelViewSet):
    queryset = CharacterState.objects.all()
    serializer_class = CharacterStateSerializer

    def update(self, request, pk=None, partial=False, encounter_id=None):
        character_state = self.get_object()
        serializer = self.get_serializer(character_state, partial=partial, data=request.data)
        serializer.is_valid(raise_exception=True)
        actions = serializer.save()
        encounter = BaseEncounterSerializer(character_state.encounter)
        return Response(data={
            'encounter': encounter.data,
            'actions': ActionSerializer(actions, many=True).data
        })


class ChapterView(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

    @detail_route(methods=['POST'])
    def add_clue(self, request, pk=None):
        # chapter = self.get_object()
        data = request.data
        data['chapter'] = pk
        serializer = ClueSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data=serializer.data)
