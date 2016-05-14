from rest_framework.routers import DefaultRouter

from .views import ParentRaceView


router = DefaultRouter()
router.register(r'races', ParentRaceView)
urlpatterns = router.urls
