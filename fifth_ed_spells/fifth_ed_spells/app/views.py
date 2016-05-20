# Create your views here.
from decimal import *

from django.http import HttpResponse, Http404, HttpResponseRedirect, HttpResponseBadRequest
from django.contrib.auth import authenticate, login, logout
from django.conf import settings
from rest_framework import views, viewsets
from rest_framework.response import Response

from .models import (
    ParentRace,
    SubRace,
    RacialTrait,
    Trait,
    Weapon,
    Item
)
from .serializers import (
    SubRaceSerializer,
    ParentRaceSerializer,
    RacialTraitSerializer,
    BaseItemSerializer,
    ItemSerializer,
)


class ParentRaceView(viewsets.ModelViewSet):
    queryset = ParentRace.objects.all()
    serializer_class = ParentRaceSerializer


class ItemView(viewsets.ViewSet):
    def get_queryset(self):
        return {'items': Item.objects.all(), 'traits': Trait.objects.all()}

    def list(self, request):
        data = self.get_queryset()
        data = BaseItemSerializer(data).data
        return Response(data)
