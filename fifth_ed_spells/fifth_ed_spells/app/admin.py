from django.contrib import admin
from .models import ParentRace, SubRace, RacialTrait



class RacialTraitAdminInline(admin.TabularInline):
    model = RacialTrait


class ParentRaceAdmin(admin.ModelAdmin):
    inlines = [RacialTraitAdminInline]


class RacialTraitAdmin(admin.ModelAdmin):
    pass


class SubRaceAdmin(admin.ModelAdmin):
    inlines = [RacialTraitAdminInline]


admin.site.register(ParentRace, ParentRaceAdmin)
admin.site.register(SubRace, SubRaceAdmin)
admin.site.register(RacialTrait, RacialTraitAdmin)
