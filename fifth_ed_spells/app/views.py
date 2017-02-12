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
    ParentRace,
    ParentCharacterClass,
    Class,
    Skill,
    Armor,
    Weapon,
    Spell,
    Character,
    Encounter,
    CharacterState
)

from .serializers import (
    ParentRaceSerializer,
    ClassSerializer,
    ResourceSerializer,
    SpellSerializer,
    CharacterSerializer,
    BaseEncounterSerializer,
    EncounterCreationSerializer,
    EncounterUpdateSerializer,
    CharacterStateSerializer
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


class CharacterView(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer


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

    def update(self, request, pk=None):
        character_state = self.get_object()
        serializer = self.get_serializer(character_state, partial=True, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        next_state = self.get_serializer(character_state.next_state)
        return Response(data=next_state.data)
