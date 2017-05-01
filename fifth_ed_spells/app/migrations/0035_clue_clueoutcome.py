# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-05-01 02:48
from __future__ import unicode_literals

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0034_auto_20170423_0226'),
    ]

    operations = [
        migrations.CreateModel(
            name='Clue',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('description', models.CharField(max_length=200)),
                ('required_stats', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=50), choices=[('strength', 'Strength'), ('dexterity', 'Dexterity'), ('constitution', 'Constitution'), ('wisdom', 'Wisdom'), ('intellect', 'Intellect'), ('charisma', 'Charisma'), ('investigation', 'Investigation'), ('deception', 'Deception'), ('perception', 'Perception'), ('athletics', 'Athletics'), ('acrobatics', 'Acrobatics'), ('sleight of hand', 'Sleight of Hand'), ('stealth', 'Stealth'), ('arcana', 'Arcana'), ('history', 'History'), ('nature', 'Nature'), ('religion', 'Religion'), ('animal handling', 'Animal Handling'), ('insight', 'Insight'), ('medicine', 'Medicine'), ('survival', 'Survival'), ('intimidation', 'Intimidation'), ('performance', 'Performance'), ('persuasion', 'Persuasion')], default=list, size=None)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='ClueOutcome',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('dc', models.IntegerField(default=5)),
                ('description', models.CharField(max_length=200, null=True)),
                ('clue', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dc_check_outcomes', to='app.Clue')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]