# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-01-23 21:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0023_encounter_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='is_npc',
            field=models.BooleanField(default=False),
        ),
    ]
