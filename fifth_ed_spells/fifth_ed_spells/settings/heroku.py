import os
from urllib.parse import urlparse

import dj_database_url

from .base import *

SSLIFY_DISABLE = False
DATABASES = {}
DATABASES['default'] = dj_database_url.config()

# Honor the 'X-Forwarded-Proto' header for request.is_secure()
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

ALLOWED_HOSTS = []  # TODO

STATIC_ROOT = PROJECT_ROOT + '/static'

SESSION_ENGINE = 'django.contrib.sessions.backends.cached_db'

MIDDLEWARE_CLASSES += (
    'django.middleware.gzip.GZipMiddleware',
    'pipeline.middleware.MinifyHTMLMiddleware',
)

SECRET_KEY = env('SECRET_KEY')

# TODO:
# MEDIA_ROOT??

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto.S3BotoStorage'
AWS_QUERYSTRING_AUTH = False


# put the cloudfront distro here
# AWS_S3_CUSTOM_DOMAIN = 'foo.cloudfront.net'


EMAIL_BACKEND = 'sgbackend.SendGridBackend'


# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
TEMPLATES[0]['OPTIONS']['loaders'] = (
    ('django.template.loaders.cached.Loader', [
        'django.template.loaders.filesystem.Loader',
        'django.template.loaders.app_directories.Loader',
    ]),
)

# GEOS_LIBRARY_PATH = '/app/.heroku/vendor/lib/libgeos_c.so'
# GDAL_LIBRARY_PATH = '/app/.heroku/vendor/lib/libgdal.so'
