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
redis_url = urlparse(env('REDISTOGO_URL', default='redis://localhost:6959'))
CACHES = {
    'default': {
        'BACKEND': 'redis_cache.RedisCache',
        'LOCATION': '%s:%s' % (redis_url.hostname, redis_url.port),
        'OPTIONS': {
            'DB': 0,
            'PASSWORD': redis_url.password,
            'PARSER_CLASS': 'redis.connection.HiredisParser',
            'PICKLE_VERSION': 2,
        },
    },
}

CACHES['default'] = env.cache('REDISTOGO_URL', default='redis://localhost:6959/?client_class=django_redis.client.DefaultClient&password=redis-un-githubbed-password', backend='redis_cache.RedisCache')

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
SENDGRID_USER = get_env_setting('SENDGRID_USERNAME')
SENDGRID_PASSWORD = get_env_setting('SENDGRID_PASSWORD')

STRIPE_PUBLIC_KEY = get_env_setting('STRIPE_PUBLIC_KEY')
STRIPE_SECRET_KEY = get_env_setting('STRIPE_SECRET_KEY')

AWS_ACCESS_KEY_ID = get_env_setting('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = get_env_setting('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = get_env_setting('AWS_STORAGE_BUCKET_NAME')


# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
TEMPLATES[0]['OPTIONS']['loaders'] = (
    ('django.template.loaders.cached.Loader', [
        'django.template.loaders.filesystem.Loader',
        'django.template.loaders.app_directories.Loader',
    ]),
)

# GEOS_LIBRARY_PATH = '/app/.heroku/vendor/lib/libgeos_c.so'
# GDAL_LIBRARY_PATH = '/app/.heroku/vendor/lib/libgdal.so'

# SOCIAL_AUTH_FACEBOOK_KEY = get_env_setting('SOCIAL_AUTH_FACEBOOK_KEY')
# SOCIAL_AUTH_FACEBOOK_SECRET = get_env_setting('SOCIAL_AUTH_FACEBOOK_SECRET')