from django.db import models
class Art(models.Model):
    art_image=models.ImageField(upload_to='art_img', null=True)
    label=models.CharField(max_length=25, blank=True)
    description=models.TextField(max_length=500, blank=True)
    year=models.IntegerField(null=True)

    def serialize(self):
        return{
         'id':self.id,
         'art_image':self.art_image.url,
         'description':self.description,
         'label':self.label,
         'year':self.year
        }
    
    class Meta:
        ordering = ['-year']

    def __str__(self):
        return self.label

class Journal(models.Model):
    entry=models.ImageField(upload_to='journal_img', null=True)
    label=models.CharField(max_length=25, blank=True)
    year=models.IntegerField(null=True)

    def serialize(self):
        return{
         'id':self.id,
         'entry':self.entry.url,
         'label':self.label,
         'year':self.year
        }
    
    class Meta:
        ordering = ['-year']

    def __str__(self):
        return self.label