# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-11-16 06:43
from __future__ import unicode_literals

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_auto_20161116_0632'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='armor',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), blank=True, default=list, size=None),
        ),
        migrations.AddField(
            model_name='class',
            name='weapons',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=50), blank=True, default=list, size=None),
        ),
    ]
