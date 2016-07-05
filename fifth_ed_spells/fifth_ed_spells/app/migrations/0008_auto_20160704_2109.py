# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-07-04 21:09
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_auto_20160704_2016'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='character_class',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='app.CharacterClass'),
        ),
        migrations.AddField(
            model_name='player',
            name='level',
            field=models.SmallIntegerField(default=1),
        ),
        migrations.AddField(
            model_name='player',
            name='race',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='app.BaseRace'),
        ),
    ]
