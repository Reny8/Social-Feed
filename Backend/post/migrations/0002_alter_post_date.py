# Generated by Django 4.0.6 on 2022-07-14 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='date',
            field=models.CharField(max_length=10),
        ),
    ]
