from django.conf.urls import url, include
from .views import LoginView

urlpatterns = [
    url(r'^auth/', include('djoser.urls')),
    url(r'^login/', LoginView.as_view(), name='login')
]
