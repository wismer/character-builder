from rest_framework.routers import DefaultRouter

from .views import (
    ParentRaceView,
    CharacterView,
    LoginView,
    ClassView,
    GameInformationView,
    SpellView,
    EncounterView
)

router = DefaultRouter()
router.register(r'^api/game', GameInformationView, base_name='game')
router.register(r'^api/encounter', EncounterView, base_name='encounter')
router.register(r'^races', ParentRaceView)
router.register(r'^character-classes', ClassView)
router.register(r'^players', CharacterView)
router.register(r'^api/login', LoginView)
router.register(r'^api/spell', SpellView)
urlpatterns = router.urls
