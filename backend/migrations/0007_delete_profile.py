# Generated by Django 5.0.6 on 2024-08-26 11:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_remove_profile_address_remove_profile_dob_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Profile',
        ),
    ]
