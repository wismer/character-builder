# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-11-19 04:05
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0017_auto_20161117_2124'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='trait',
            name='item_property',
        ),
        migrations.RemoveField(
            model_name='traitproperty',
            name='item',
        ),
        migrations.RemoveField(
            model_name='traitproperty',
            name='trait',
        ),
        migrations.RemoveField(
            model_name='item',
            name='traits',
        ),
        migrations.RemoveField(
            model_name='weapon',
            name='is_martial',
        ),
        migrations.AddField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('martial', 'Martial Weapon'), ('simple', 'Simple Weapon'), ('light', 'Light Armor'), ('medium', 'Medium Armor'), ('heavy', 'Heavy Armor'), ('shield', 'Shield')], default='weapon', max_length=50),
        ),
        migrations.AddField(
            model_name='item',
            name='subcategory',
            field=models.CharField(blank=True, default='simple', max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='subclass',
            name='name',
            field=models.CharField(default='asd', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='item',
            name='cost',
            field=models.DecimalField(decimal_places=2, default='0', max_digits=8),
        ),
        migrations.AlterField(
            model_name='subclass',
            name='parent_class',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subclasses', to='app.Class'),
        ),
        migrations.DeleteModel(
            name='Trait',
        ),
        migrations.DeleteModel(
            name='TraitProperty',
        ),
    ]
