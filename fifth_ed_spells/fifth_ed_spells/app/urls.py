from rest_framework.routers import DefaultRouter

from .views import ParentRaceView, ItemView, CharacterView


router = DefaultRouter()
router.register(r'^races', ParentRaceView)
router.register(r'^items', ItemView)
router.register(r'^player', CharacterView)
urlpatterns = router.urls
