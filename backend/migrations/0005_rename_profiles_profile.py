# Generated by Django 5.0.6 on 2024-08-25 15:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_profiles_delete_profile'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Profiles',
            new_name='Profile',
        ),
    ]
