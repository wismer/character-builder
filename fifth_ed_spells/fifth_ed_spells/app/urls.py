from rest_framework.routers import DefaultRouter

from .views import ParentRaceView, ResourceView, CharacterView


router = DefaultRouter()
router.register(r'^races', ParentRaceView)
router.register(r'^resources', ResourceView)
router.register(r'^player', CharacterView)
urlpatterns = router.urls
