from .models import User
from djoser.views import LoginView as DjoserLoginView
from rest_framework.response import Response
from .serializers import LoginSerializer, PlayerSerializer

class LoginView(DjoserLoginView):
    serializer_class = LoginSerializer
    resource_name = 'users'

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = PlayerSerializer(serializer.user)
        return Response(data=user.data)
