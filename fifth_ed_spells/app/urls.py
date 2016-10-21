from rest_framework.routers import DefaultRouter

from .views import ParentRaceView, ResourceView, CharacterView, LoginView

router = DefaultRouter()
router.register(r'^races', ParentRaceView)
router.register(r'^resources', ResourceView)
router.register(r'^players', CharacterView)
router.register(r'^api/login', LoginView)
urlpatterns = router.urls
