from django.db import models
from django.contrib.postgres.fields import ArrayField
from model_utils.models import TimeStampedModel


related_fields = [
    ('skills', []),
    ('skill_choices', 0),
    ('armor', []),
    ('weapons', []),
    ('languages', []),
    ('hp_die', 0),
    ('saving_throws', [])
]


class PlayerClassManager(models.Manager):
    def create(self, **kwargs):
        parent_class = kwargs.get('parent_class')
        if parent_class:
            child_kwargs = {field: getattr(parent_class, field) + kwargs.get(field, default) for field, default in related_fields}
            kwargs.update(child_kwargs)

        return super().create(**kwargs)


class BasePlayerClass(TimeStampedModel):
    name = models.CharField(max_length=500)
    skills = ArrayField(models.CharField(max_length=50), blank=False, default=list)
    skill_choices = models.IntegerField(default=0)
    armor = ArrayField(models.CharField(max_length=50), blank=False, default=list)
    weapons = ArrayField(models.CharField(max_length=50), blank=False, default=list)
    languages = ArrayField(models.CharField(max_length=50), blank=False, default=list)
    hp_die = models.IntegerField(default=0)
    saving_throws = ArrayField(models.CharField(max_length=3), blank=False, default=list)

    def is_subclass(self):
        return hasattr(self, 'subclass')


class ParentClass(BasePlayerClass):
    def add_subclass(self, **kwargs):
        kwargs['parent_class'] = self
        return SubClass.objects.create(**kwargs)


class SubClass(BasePlayerClass):
    parent_class = models.ForeignKey('ParentClass', null=True)
    objects = PlayerClassManager()


# class CharacterClass(TimeStampedModel):
#     name = models.CharField(max_length=500)
#     skills = ArrayField(models.CharField(max_length=50), blank=False, default=list)
#     skill_choices = models.IntegerField(default=0)
#     armor = ArrayField(models.CharField(max_length=50), blank=False, default=list)
#     weapons = ArrayField(models.CharField(max_length=50), blank=False, default=list)
#     languages = ArrayField(models.CharField(max_length=50), blank=False, default=list)
#     hp_die = models.IntegerField(default=0)
#     parent_class = models.ForeignKey('self', null=True, blank=True, related_name='subclasses')
#
#     def __str__(self):
#         if self.parent_class:
#             return '{0} {1}'.format(self.name, self.parent_class.name)
#
#         return self.name


# class Spell(TimeStampedModel):
#     name = models.CharField(max_length=255)
#     desc = models.CharField(max_length=5000)
#     level = models.SmallIntegerField(default=0)
#     requires_concentration = models.BooleanField(default=False)
#     casting_time = models.CharField(max_length=255)
#     components = ArrayField(models.CharField(max_length=10), default=list, blank=False)
#     spell_range = models.CharField(max_length=255)
#     duration = models.CharField(max_length=255)
#
#     def __str__(self):
#         return self.name
#
#
# class SpellSchool(TimeStampedModel):
#     name = models.CharField(max_length=255)
#
#
# class Skill(TimeStampedModel):
#     name = models.CharField(max_length=50)
#     desc = models.CharField(max_length=1000)
#     attribute = models.CharField(max_length=50)
#
#
# class SpellProperties(TimeStampedModel):
#     subdomain = models.CharField(max_length=100)
#     spell = models.ForeignKey(Spell)
#     character_class = models.ForeignKey(CharacterClass)
#
#
# class Ability(TimeStampedModel):
#     name = models.CharField(max_length=100)
#     desc = models.CharField(max_length=5000)
#     requirement = models.CharField(max_length=100)
