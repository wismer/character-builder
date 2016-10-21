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
    ParentCharacterClass,
    SubCharacterClass,
    Spell
)


class TraitInline(admin.TabularInline):
    model = TraitProperty


class TraitPropertyAdmin(admin.ModelAdmin):
    pass


class ItemAdmin(admin.ModelAdmin):
    inlines = [TraitInline]


class ArmorAdmin(admin.ModelAdmin):
    pass


class WeaponAdmin(admin.ModelAdmin):
    inlines = [TraitInline]


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


class SubClassAdmin(admin.ModelAdmin):
    pass


class ParentClassAdmin(admin.ModelAdmin):
    pass


class SpellAdmin(admin.ModelAdmin):
    list_per_page = 500
    list_filter = (
        'level',
        'school'
    )
    readonly_fields = [spell.name for spell in Spell._meta.fields]
    list_display = (
        'name',
        'level',
        'school',
    )

    search_fields = (
        'name',
    )


admin.site.register(Spell, SpellAdmin)
admin.site.register(SubCharacterClass, SubClassAdmin)
admin.site.register(ParentCharacterClass, ParentClassAdmin)
admin.site.register(ParentRace, ParentRaceAdmin)
admin.site.register(SubRace, SubRaceAdmin)
admin.site.register(RacialTrait, RacialTraitAdmin)
admin.site.register(Item, ItemAdmin)
admin.site.register(Armor, ArmorAdmin)
admin.site.register(Weapon, WeaponAdmin)
admin.site.register(Trait, TraitAdmin)
admin.site.register(TraitProperty, TraitPropertyAdmin)
