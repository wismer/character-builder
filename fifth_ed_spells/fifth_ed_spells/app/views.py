# Create your views here.
from decimal import *

from django.http import HttpResponse, Http404, HttpResponseRedirect, HttpResponseBadRequest
from django.contrib.auth import authenticate, login, logout
from django.conf import settings
from rest_framework import views, viewsets

from .models import ParentRace, SubRace, RacialTrait
from .serializers import SubRaceSerializer, ParentRaceSerializer, RacialTraitSerializer


class ParentRaceView(viewsets.ModelViewSet):
    queryset = ParentRace.objects.all()
    serializer_class = ParentRaceSerializer
