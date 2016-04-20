from django.db import models
from django_extensions.db.models import AutoSlugField
from django.contrib.postgres.fields import ArrayField
from model_utils import Choices
from model_utils.models import TimeStampedModel
# Create your models here.

class CharacterClass(TimeStampedModel):
    name = models.CharField(max_length=500)
    skills = ArrayField(models.CharField(max_length=50), blank=False, default=list)
    skill_choices = models.IntegerField(default=0)
    armor = ArrayField(models.CharField(max_length=50), blank=False, default=list)
    weapons = ArrayField(models.CharField(max_length=50), blank=False, default=list)
    languages = ArrayField(models.CharField(max_length=50), blank=False, default=list)
    parent_class = models.ForeignKey('self', null=True, blank=True, related_name='subclasses')
    hp_die = models.IntegerField(default=0)

    def __str__(self):
        if self.parent_class:
            return '{0} {1}'.format(self.name, self.parent_class.name)

        return self.name


class Spell(TimeStampedModel):
    name = models.CharField(max_length=255)
    desc = models.CharField(max_length=5000)
    level = models.SmallIntegerField(default=0)
    requires_concentration = models.BooleanField(default=False)
    casting_time = models.CharField(max_length=255)
    components = models.ArrayField(models.CharField(max_length=10), default=list, blank=False)
    spell_range = models.CharField(max_length=255)
    duration = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Ability(TimeStampedModel):
    name = models.CharField(max_length=100)
    desc = models.CharField(max_length=5000)
    requirement = models.CharField(max_length=100)
