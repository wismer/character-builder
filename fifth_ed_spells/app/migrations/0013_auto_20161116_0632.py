# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-11-16 06:32
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_auto_20161116_0626'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='parent_class',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='parent', related_query_name='children', to='app.Class'),
        ),
    ]
