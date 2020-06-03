from django.db import models
class Art(models.Model):
    art_image=models.ImageField(upload_to='art_img', null=True)
    label=models.CharField(max_length=25, blank=True)
    description=models.TextField(max_length=500, blank=True)

    def serialize(self):
        return{
         'id':self.id,
         'art_image':self.art_image.url,
         'description':self.description
        }

    def __str__(self):
        return self.label