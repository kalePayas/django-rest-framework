from django.contrib import admin
from . import models

@admin.register(models.Post)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('title', 'id', 'status', 'slug', 'author')
    prepopulated_fields = {'slug': ('title', ),  }
    search_fields = ('status', )

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(models.Category)