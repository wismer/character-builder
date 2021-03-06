# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-07-04 20:16
from __future__ import unicode_literals

from django.conf import settings
import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_auto_20160625_1057'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='ability_scores',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.SmallIntegerField(), blank=True, default=list, null=True, size=None),
        ),
        migrations.AlterField(
            model_name='player',
            name='character_name',
            field=models.CharField(default='noname', max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='player',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
