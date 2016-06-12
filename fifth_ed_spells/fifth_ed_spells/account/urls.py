from django.conf.urls import url, include

from .views import RegistrationView


urlpatterns = [
    url(r'^register/$', RegistrationView.as_view(), name='registration_register'),
]

urlpatterns += [
    url(r'', include('registration.backends.simple.urls')),
]



