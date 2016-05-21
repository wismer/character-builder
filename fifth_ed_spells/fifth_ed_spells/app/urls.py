from rest_framework.routers import DefaultRouter

from .views import ParentRaceView, ItemView


router = DefaultRouter()
router.register(r'^races', ParentRaceView)
router.register(r'^items', ItemView)
urlpatterns = router.urls
