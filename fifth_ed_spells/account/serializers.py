from djoser.serializers import (
    UserRegistrationSerializer as DjoserUserRegistrationSerializer,
    LoginSerializer as DjoserLoginSerializer
)
from rest_framework_json_api import serializers
from .models import User


class UserRegistrationSerializer(DjoserUserRegistrationSerializer):
    pass


class LoginSerializer(DjoserLoginSerializer):
    pass


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('player_set',)
