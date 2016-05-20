from django.contrib import admin
from .models import (
    ParentRace,
    SubRace,
    RacialTrait,
    Item,
    Trait,
    TraitProperty,
    Weapon,
    Armor,
)


class TraitPropertyAdmin(admin.ModelAdmin):
    pass


class ItemAdmin(admin.ModelAdmin):
    pass


class ArmorAdmin(admin.ModelAdmin):
    pass


class WeaponAdmin(admin.ModelAdmin):
    pass


class RacialTraitAdminInline(admin.TabularInline):
    model = RacialTrait


class ParentRaceAdmin(admin.ModelAdmin):
    inlines = [RacialTraitAdminInline]


class RacialTraitAdmin(admin.ModelAdmin):
    pass


class TraitAdmin(admin.ModelAdmin):
    pass


class SubRaceAdmin(admin.ModelAdmin):
    inlines = [RacialTraitAdminInline]


admin.site.register(ParentRace, ParentRaceAdmin)
admin.site.register(SubRace, SubRaceAdmin)
admin.site.register(RacialTrait, RacialTraitAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Armor, ArmorAdmin)
admin.site.register(Weapon, WeaponAdmin)
admin.site.register(Trait, TraitAdmin)
admin.site.register(TraitProperty, TraitPropertyAdmin)
