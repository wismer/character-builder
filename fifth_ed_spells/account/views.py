from .models import User
from djoser.views import LoginView as DjoserLoginView


class LoginView(DjoserLoginView):
    def post(self, request, *args, **kwargs):
        import ipdb; ipdb.set_trace()
