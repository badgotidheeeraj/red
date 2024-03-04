# Generated by Django 4.2.3 on 2023-11-03 06:49

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='MasterModule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('module_name', models.CharField(max_length=200)),
                ('json_field', models.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('json_field', models.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='ReviewModule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('request_name', models.CharField(max_length=255)),
                ('review_name', models.CharField(blank=True, max_length=255, null=True)),
                ('docx_file', models.FileField(blank=True, null=True, upload_to='documents/')),
                ('processed_file', models.JSONField(blank=True, null=True)),
                ('json_field', models.JSONField(blank=True, null=True)),
                ('created_at', models.DateTimeField(default=datetime.datetime.now)),
                ('review_type', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='RequestModule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('request_name', models.CharField(blank=True, max_length=1000, null=True, unique=True)),
                ('json_field', models.JSONField(blank=True, null=True)),
                ('created_at', models.DateTimeField(default=datetime.datetime.now)),
                ('ModuleName', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboard.mastermodule', verbose_name='Module Name')),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
