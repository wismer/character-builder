from djoser.serializers import (
    UserRegistrationSerializer as DjoserUserRegistrationSerializer,
    LoginSerializer as DjoserLoginSerializer
)
from rest_framework_json_api import serializers
from rest_framework.authtoken.models import Token



class UserRegistrationSerializer(DjoserUserRegistrationSerializer):
    pass


class LoginSerializer(DjoserLoginSerializer):
    pass
