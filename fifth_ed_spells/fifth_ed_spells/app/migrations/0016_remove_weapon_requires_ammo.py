# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-05-20 20:51
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0015_auto_20160520_2050'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='weapon',
            name='requires_ammo',
        ),
    ]
