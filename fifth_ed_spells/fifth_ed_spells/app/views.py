from rest_framework import viewsets
from rest_framework.response import Response

from .models import (
    ParentRace,
    Trait,
    Item
)
from .serializers import (
    ParentRaceSerializer,
    BaseItemSerializer,
)


class ParentRaceView(viewsets.ModelViewSet):
    queryset = ParentRace.objects.all()
    serializer_class = ParentRaceSerializer


class ItemView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = BaseItemSerializer

    def list(self, request):
        qs = self.get_queryset()
        data = {
            'weapons': [item.weapon for item in qs.filter(weapon__isnull=False)],
            'armor': [item.armor for item in qs.filter(weapon__isnull=True)],
            'traits': Trait.objects.all()
        }
        return Response(data=BaseItemSerializer(data).data)
