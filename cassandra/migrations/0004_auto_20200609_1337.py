# Generated by Django 3.0.3 on 2020-06-09 13:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cassandra', '0003_art_year'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='art',
            options={'ordering': ['-year']},
        ),
    ]
