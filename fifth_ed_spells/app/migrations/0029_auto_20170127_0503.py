# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-01-27 05:03
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0028_auto_20170127_0503'),
    ]

    operations = [
        migrations.AlterField(
            model_name='characterstate',
            name='next_state',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='app.CharacterState'),
        ),
    ]
