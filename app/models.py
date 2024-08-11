from django.db import models

# Create your models here.

class Location(models.Model):
    prefecture = models.CharField(max_length=100)  # 都道府県
    city_district = models.CharField(max_length=100)  # 市、区
    title = models.CharField(max_length=200)  # タイトル
    date = models.DateField()  # 日付
    image = models.ImageField(upload_to='images/')  # 画像
    description = models.TextField()  # 説明文
    external_url = models.URLField()  # 外部へのURL

    def __str__(self):
        return self.title


class LostFound(models.Model):
    prefecture = models.CharField(max_length=100)  # 都道府県
    city_district = models.CharField(max_length=100)  # 市、区
    title = models.CharField(max_length=200)  # タイトル
    date = models.DateField()  # 日付
    image = models.ImageField(upload_to='images/')  # 画像
    description = models.TextField()  # 説明文
    email = models.EmailField()  # 連絡先

    def __str__(self):
        return self.title