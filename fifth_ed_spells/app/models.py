from django.db import models
from django.contrib.postgres.fields import ArrayField, JSONField
from model_utils.models import TimeStampedModel

from .util import default_components
from .constants import (
    ARMOR_TYPES,
    ARMOR_VALUES,
    ITEM_CATEGORIES,
    DIE_COUNT,
    DIE_CHOICES,
    SHORT_RANGE,
    LONG_RANGE,
    MUNDANE_DAMAGE_TYPES,
    SPELL_SHAPES,
    ABILITIES
)

related_fields = [
    ('skills', []),
    ('skill_choices', 0),
    ('armor', []),
    ('weapons', []),
    ('languages', []),
    ('hp_die', 0),
    ('saving_throws', [])
]


def to_nth(n):
    if n == 3:
        return '3rd'
    if n == 2:
        return '2nd'
    if n == 1:
        return '1st'

    return str(n) + 'th'


class Class(models.Model):
    name = models.CharField(max_length=500)
    languages = ArrayField(models.CharField(max_length=50), blank=True, default=list)
    hp_die = models.IntegerField(default=0)
    hp_lvl = JSONField(default={'die': 4, 'count': 1})
    saving_throws = ArrayField(models.CharField(max_length=20), blank=True, default=list)
    subclass_name = models.CharField(max_length=50)
    skill_count = models.IntegerField(default=0)
    skill_choices = models.ManyToManyField('Skill')
    spells = models.ManyToManyField('Spell')

    def __str__(self):
        return '{name} - {modifiers} based'.format(
            name=self.name,
            modifiers='/'.join(self.saving_throws)
        )

# class SkillChoices(models.Model):
#     subclass = models.ForeignKey('SubClass')
#     skill = models.ForeignKey('Skill')


class SubClass(models.Model):
    parent_class = models.ForeignKey('Class', related_name='subclasses')
    name = models.CharField(max_length=50)
    armor = ArrayField(models.CharField(max_length=20), blank=True, default=list)
    weapons = ArrayField(models.CharField(max_length=50), blank=True, default=list)
    spells = models.ManyToManyField(
        'Spell',
        through='ClassSpell',
    )


class BaseRace(models.Model):
    name = models.CharField(max_length=30)
    ability_scores = ArrayField(models.IntegerField(default=0), size=7, blank=False, default=list)
    has_darkvision = models.BooleanField(default=False)
    armor = ArrayField(models.CharField(max_length=50), blank=True, default=list)
    weapons = ArrayField(models.CharField(max_length=50), blank=True, default=list)
    languages = ArrayField(models.CharField(max_length=50), blank=True, default=list)
    skills = ArrayField(models.CharField(max_length=50), blank=True, default=list)
    speed = models.IntegerField(default=30)

    def __str__(self):
        return self.name

    @property
    def is_subrace(self):
        return hasattr(self, 'subrace')


class SubRace(BaseRace):
    parent = models.ForeignKey('ParentRace', related_name='subraces')

    def __str__(self):
        return self.name + ' ' + self.parent.name


class ParentRace(BaseRace):
    def __str__(self):
        return self.name


class PlayerClassManager(models.Manager):
    def create(self, **kwargs):
        parent_class = kwargs.get('parent_class')
        if parent_class:
            child_kwargs = {field: getattr(parent_class, field) + kwargs.get(field, default) for field, default in related_fields}
            kwargs.update(child_kwargs)

        return super().create(**kwargs)


class CharacterManager(models.Manager):
    def what(self):
        qs = self.get_queryset()
        for a in qs:
            print(a)


class BaseCharacterClass(models.Model):
    name = models.CharField(max_length=500)
    skill_choices = models.IntegerField(default=0)
    languages = ArrayField(models.CharField(max_length=50), blank=True, default=list)
    hp_die = models.IntegerField(default=0)
    saving_throws = ArrayField(models.CharField(max_length=20), blank=True, default=list)
    objects = CharacterManager()
    things = CharacterManager()

    def is_subclass(self):
        return hasattr(self, 'subclass')

    def __str__(self):
        class_type = 'Parent'
        if hasattr(self, 'parent_class'):
            class_type = 'Sub-Class of {}'.format(self.parent_class.name)

        return '{name} - ({class_type})'.format(
            name=self.name,
            class_type=class_type
        )

    class Meta:
        abstract = True


class CharacterClass(BaseCharacterClass):
    armor = ArrayField(models.CharField(max_length=20), blank=True, default=list)
    weapons = ArrayField(models.CharField(max_length=50), blank=True, default=list)


class ParentCharacterClass(CharacterClass):
    pass


class SubCharacterClass(CharacterClass):
    parent_class = models.ForeignKey(
        'ParentCharacterClass',
        related_name='subclasses',
        null=True
    )
    objects = PlayerClassManager()


class RacialTrait(models.Model):
    name = models.CharField(max_length=30, blank=False)
    desc = models.TextField(max_length=500)
    race = models.ForeignKey('BaseRace', related_name='racialtraits')
    trait_type = ArrayField(
        models.CharField(max_length=30, blank=True),
        blank=True,
        default=list
    )
    trait_value = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return '{name} - {race}'.format(name=self.name, race=self.race)


class Item(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(
        max_length=50,
        choices=ITEM_CATEGORIES,
        default='weapon'
    )
    subcategory = models.CharField(
        max_length=50,
        null=True,
        blank=True,
        default='simple'
    )
    cost = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        default='0'
    )

    def __str__(self):
        return self.name


class Weapon(Item):
    damage = models.IntegerField(default=4, choices=DIE_CHOICES)
    dice_count = models.IntegerField(default=1, choices=DIE_COUNT)
    short_range = models.IntegerField(
        null=True,
        choices=SHORT_RANGE,
        blank=True
    )
    long_range = models.IntegerField(
        null=True,
        choices=LONG_RANGE,
        blank=True
    )
    versatile_dmg = models.IntegerField(
        null=True,
        choices=DIE_CHOICES,
        blank=True
    )
    versatile_dice = models.IntegerField(
        null=True,
        choices=DIE_COUNT,
        blank=True
    )
    damage_type = models.CharField(
        max_length=30,
        choices=MUNDANE_DAMAGE_TYPES
    )
    special = models.TextField(max_length=500, null=True, blank=True)

    def __str__(self):
        return '{name} {n}d{dmg} weapon'.format(
            name=self.item_ptr.name,
            n=self.dice_count,
            dmg=self.damage
        )

    def to_preview(self):
        return '{name} {n}d{dmg} {dmg_type} damage'.format(
            name=self.name,
            n=self.dice_count,
            dmg=self.damage,
            dmg_type=self.damage_type
        )

    class Meta:
        ordering = ['name']


class Armor(Item):
    armor_value = models.IntegerField(default=8, choices=ARMOR_VALUES)
    armor_class = models.CharField(max_length=30, choices=ARMOR_TYPES)
    stealth_disadvantage = models.BooleanField(default=False)
    strength_requirement = models.IntegerField(null=True)
    has_dex_modifier = models.BooleanField(default=False)
    weight = models.IntegerField(default=1)

    def __str__(self):
        return '{name} - AC{ac} ({armor_type})'.format(
            name=self.item_ptr.name,
            ac=self.armor_value,
            armor_type=self.armor_class
        )


class Spell(TimeStampedModel):
    name = models.CharField(max_length=255)
    desc = models.TextField()
    requires_concentration = models.BooleanField(default=False)
    casting_time = models.CharField(max_length=255)
    components = ArrayField(models.CharField(max_length=10), default=default_components, blank=False)
    components_desc = models.CharField(max_length=300, null=True)
    spell_range = models.CharField(max_length=255)
    spell_shape = models.CharField(max_length=30, choices=SPELL_SHAPES, null=True)
    level = models.SmallIntegerField(default=0)
    duration = models.CharField(max_length=255)
    school = models.CharField(max_length=50, default='???')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['level', 'name']


class ClassSpell(models.Model):
    level_restriction = models.SmallIntegerField(default=1)
    spell = models.ForeignKey('Spell', related_name='classes')
    subclass = models.ForeignKey('SubClass', related_name='available_spells')


class SpellProperty(models.Model):
    spell = models.ForeignKey('Spell')
    # character = models.ForeignKey('CharacterClass')
    subdomain = models.CharField(max_length=50, null=True)


class Player(TimeStampedModel):
    player = models.ForeignKey('account.User', null=True)
    # character = models.ForeignKey('CharacterClass')
    character_name = models.CharField(max_length=300, default='noname', null=True)
    ability_scores = ArrayField(models.SmallIntegerField(), default=list, blank=True, null=True)
    character_class = models.ForeignKey('CharacterClass', null=True)
    race = models.ForeignKey('BaseRace', null=True)
    level = models.SmallIntegerField(default=1)

    def __str__(self):
        if not self.race and not self.character_class:
            return self.character_name

        if not self.character_class:
            return '{name}, a level {nth} {race}'.format(
                name=self.character_name,
                nth=to_nth(self.level),
                race=str(self.race),
            )

        return '{name}, an {race} {klass} of the {nth} season'.format(
            name=self.character_name,
            race=str(self.race),
            klass=self.character_class.name,
            nth=to_nth(self.level)
        )


class Skill(models.Model):
    name = models.CharField(max_length=50)
    ability = models.CharField(max_length=50, choices=ABILITIES)
    desc = models.TextField()
    character_class = models.ForeignKey('CharacterClass', null=True, related_name='skills')

    @property
    def tooltip(self):
        return {'name': self.name, 'desc': self.desc}

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Character(TimeStampedModel):
    player_name = models.CharField(max_length=50, unique=True)
    character_name = models.CharField(max_length=50)
    armor_class = models.IntegerField(default=8)
    is_npc = models.BooleanField(default=False)
    passive_wisdom = models.IntegerField(default=8)
    initiative = models.IntegerField(default=8)
    max_hit_points = models.IntegerField(default=8)
    encounters = models.ManyToManyField('Encounter', through='CharacterState')

    def __str__(self):
        return '{c} ({n})'.format(c=self.character_name, n=self.player_name)


class RosterManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(next_state__isnull=True)

    def create(self, encounter=None, current_hit_points=None, initiative_roll=None, character=None):
        return super().create(
            name='{} ({})'.format(character.character_name, character.player_name),
            character=character,
            encounter=encounter,
            current_hit_points=current_hit_points or character.max_hit_points,
            initiative_roll=initiative_roll or character.initiative,
        )


class CharacterState(TimeStampedModel):
    name = models.CharField(max_length=50, blank=True, null=True)
    character = models.ForeignKey('Character')
    encounter = models.ForeignKey('Encounter', related_name='roster')
    initiative_roll = models.IntegerField(default=0)
    was_surprised = models.BooleanField(default=False)
    readied_action = models.BooleanField(default=False)
    current_hit_points = models.IntegerField(default=8)
    conditions = ArrayField(
        models.CharField(max_length=30), default=list, blank=True, null=True)
    next_state = models.OneToOneField('self', null=True)
    objects = RosterManager()

    def __str__(self):
        return '{} from {}'.format(self.name, self.encounter)

    class Meta:
        ordering = ['-initiative_roll']


class Encounter(TimeStampedModel):
    name = models.CharField(max_length=50)
    current_turn = models.IntegerField(default=1)
    surprise_round = models.BooleanField(default=False)

    def __str__(self):
        return self.name

# TODO
# Models to eventually add:
#   Creature
#   Party
#   User
#   SpellVariant
