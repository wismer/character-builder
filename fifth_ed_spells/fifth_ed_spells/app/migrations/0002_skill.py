# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-05-29 19:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('ability', models.CharField(choices=[('strength', 'Strength'), ('constitution', 'Constitution'), ('dexterity', 'Dexterity'), ('intelligence', 'Intelligence'), ('wisdom', 'Wisdom'), ('charisma', 'Charisma')], max_length=50)),
                ('desc', models.TextField()),
            ],
        ),
    ]
