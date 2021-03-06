# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-01-24 18:39
from __future__ import unicode_literals

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0024_auto_20170123_2145'),
    ]

    operations = [
        migrations.CreateModel(
            name='CharacterState',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('initiative_roll', models.IntegerField(default=0)),
                ('was_surprised', models.BooleanField(default=False)),
                ('readied_action', models.BooleanField(default=False)),
                ('current_hit_points', models.IntegerField(default=8)),
                ('conditions', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=30), blank=True, default=list, null=True, size=None)),
            ],
        ),
        migrations.RemoveField(
            model_name='character',
            name='conditions',
        ),
        migrations.RemoveField(
            model_name='character',
            name='current_hit_points',
        ),
        migrations.RemoveField(
            model_name='encounter',
            name='characters',
        ),
        migrations.RemoveField(
            model_name='encounter',
            name='turn_order',
        ),
        migrations.AddField(
            model_name='encounter',
            name='surprise_round',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='characterstate',
            name='character',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Character'),
        ),
        migrations.AddField(
            model_name='characterstate',
            name='encounter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='encounter_roster', to='app.Encounter'),
        ),
        migrations.AddField(
            model_name='character',
            name='encounters',
            field=models.ManyToManyField(through='app.CharacterState', to='app.Encounter'),
        ),
    ]
