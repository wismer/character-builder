from rest_framework.routers import DefaultRouter

from .views import (
    ParentRaceView,
    ChapterView,
    CharacterView,
    LoginView,
    ClassView,
    GameInformationView,
    SpellView,
    EncounterView,
    CharacterView,
    RosterView
)

router = DefaultRouter()
router.register(r'^api/game', GameInformationView, base_name='game')
router.register(r'^api/encounter', EncounterView, base_name='encounter')
router.register(r'^api/encounter/(?P<encounter_id>[^/.]+)/roster', RosterView, base_name='roster')
router.register(r'^api/character', CharacterView)
router.register(r'^races', ParentRaceView)
router.register(r'^character-classes', ClassView)
router.register(r'^api/login', LoginView)
router.register(r'^api/spell', SpellView)
router.register(r'^api/chapter', ChapterView)
urlpatterns = router.urls
