# Django settings for project project.
from environ import Env, Path

env = Env()


Env.read_env('.env')
DEBUG = True
SSLIFY_DISABLE = False
root = Path(__file__) - 3
PROJECT_ROOT = root()
DEBUG = False
SSLIFY_DISABLE = True
CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
)
CORS_ORIGIN_ALLOW_ALL = True
ADMINS = (
    ('MM', 'm@m.com'),
)

MANAGERS = ADMINS


# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# In a Windows environment this must be set to your system time zone.
TIME_ZONE = 'UTC'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'en-us'

SITE_ID = 1

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True

# If you set this to False, Django will not format dates, numbers and
# calendars according to the current locale.
USE_L10N = True

# If you set this to False, Django will not use timezone-aware datetimes.
USE_TZ = True

# URL prefix for static files.
# Example: "http://example.com/static/", "http://static.example.com/"
STATIC_URL = '/static/'

# Additional locations of static files
STATICFILES_DIRS = (
    PROJECT_ROOT + '/static_source/',
)

# List of finder classes that know how to find static files in
# various locations.
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'pipeline.finders.CachedFileFinder',
    'pipeline.finders.PipelineFinder',
)

MIDDLEWARE_CLASSES = (
    'sslify.middleware.SSLifyMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    # Uncomment the next line for simple clickjacking protection:
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'social.apps.django_app.middleware.SocialAuthExceptionMiddleware',
)

ROOT_URLCONF = 'fifth_ed_spells.fifth_ed_spells.urls'

# Python dotted path to the WSGI application used by Django's runserver.
WSGI_APPLICATION = 'fifth_ed_spells.fifth_ed_spells.wsgi.application'

INSTALLED_APPS = (
    'django.contrib.contenttypes',
    'django.contrib.auth',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.admin',
    'rest_framework',
    'rest_framework.authtoken',
    'djoser',
    'corsheaders',
    'localflavor',
    'django_extensions',
    'model_utils',
    'pipeline',
    'djangojs',
    'casper',
    'easy_thumbnails',
    'registration',
    'import_export',
    'social.apps.django_app.default',
    'fifth_ed_spells.app',
    'fifth_ed_spells.account',
    'fifth_ed_spells.util',
)

# A sample logging configuration. The only tangible logging
# performed by this configuration is to send an email to
# the site admins on every HTTP 500 error when DEBUG=False.
# See http://docs.djangoproject.com/en/dev/topics/logging for
# more details on how to customize your logging configuration.
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}


AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'social.backends.facebook.FacebookOAuth2',
)

REST_FRAMEWORK = {
    'PAGE_SIZE': 1000,
    'EXCEPTION_HANDLER': 'rest_framework.views.exception_handler',
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_PAGINATION_CLASS':
        'rest_framework.pagination.PageNumberPagination',
    'DEFAULT_PARSER_CLASSES': (
        'djangorestframework_camel_case.parser.CamelCaseJSONParser',
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.FormParser',
        'rest_framework.parsers.MultiPartParser',
    ),
    'DEFAULT_RENDERER_CLASSES': (
        'djangorestframework_camel_case.render.CamelCaseJSONRenderer',
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ),
}

AUTH_USER_MODEL = 'account.User'
LOGIN_REDIRECT_URL = '/'
LOGIN_URL = '/account/login'
LOGOUT_URL = '/account/logout'
SESSION_COOKIE_SECURE = True

def prefixed_cookie(name):
    return 'fifth_ed_spells_{}'.format(name)

SESSION_COOKIE_NAME = prefixed_cookie('sessionid')
CSRF_COOKIE_NAME = prefixed_cookie('csrftoken')
LANGUAGE_COOKIE_NAME = prefixed_cookie('django_language')

TEST_RUNNER = 'django.test.runner.DiscoverRunner'

ALLOWED_HOSTS = [
    'localhost'
    '.herokuapp.com'
]

DEFAULT_FROM_EMAIL = 'hello@fifth_ed_spells.com'
SERVER_EMAIL = 'error@fifth_ed_spells.com'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [PROJECT_ROOT + '/templates'],
        'OPTIONS': {
            'loaders': [
                'django.template.loaders.filesystem.Loader',
                'django.template.loaders.app_directories.Loader',
            ],
            'context_processors': [
                'django.contrib.auth.context_processors.auth',
                'django.core.context_processors.debug',
                'django.core.context_processors.request',
                'django.core.context_processors.i18n',
                'django.core.context_processors.media',
                'django.core.context_processors.static',
                'django.core.context_processors.tz',
                'django.contrib.messages.context_processors.messages',
                'django.core.context_processors.media',
                'fifth_ed_spells.app.context_processors.settings',
                'social.apps.django_app.context_processors.backends',
                'social.apps.django_app.context_processors.login_redirect',
            ],
        },
    },
]


#### registration
ACCOUNT_ACTIVATION_DAYS = 7 # One-week activation window; you may, of course, use a different value.


#### pipeline

STATICFILES_STORAGE = 'pipeline.storage.PipelineCachedStorage'
#STATICFILES_STORAGE = 'util.gzipstorage.GZIPCachedStorage'

PIPELINE = {
    "STYLESHEETS": {
        'screen': {
            'source_filenames': (
                'sass/style.scss',
            ),
            'output_filename': 'css/screen.css',
            'variant': 'datauri',
            'extra_context': {
                'media': 'screen,projection',
            },
        },
        'vendor': {
            'source_filenames': (
                'css/vendor/base.css',
                'css/vendor/font-awesome.min.css',
                'css/vendor/select2.css',
            ),
            'output_filename': 'css/vendor.css',
        }
    },
    "CSS_COMPRESSOR": 'pipeline.compressors.cssmin.CSSMinCompressor',
    "JS": {
        'app': {
            'source_filenames': (
                'js/*.js',
                'js/*.coffee',
            ),
            'output_filename': 'js/app.js',
        },
        'vendor': {
            'source_filenames': (
                'js/vendor/jquery-1.11.0.min.js',
                'js/djangojs/django.js',
                'js/vendor/select2.min.js',
            ),
            'output_filename': 'js/vendor.js',
        }
    },
    "JS_COMPRESSOR": 'pipeline.compressors.jsmin.JSMinCompressor',
    "COMPILERS": (
        'pipeline.compilers.coffee.CoffeeScriptCompiler',
        'fifth_ed_spells.util.libsass_compiler.LibSassCompiler',
    ),
    "DISABLE_WRAPPER": True,
}


###social
SOCIAL_AUTH_PIPELINE = (
     'social.pipeline.social_auth.social_details',
     'social.pipeline.social_auth.social_uid',
     'social.pipeline.social_auth.auth_allowed',
     'social.pipeline.social_auth.social_user',
     'social.pipeline.user.get_username',
     'social.pipeline.user.create_user',
     'social.pipeline.social_auth.associate_user',
     'social.pipeline.social_auth.load_extra_data',
     'social.pipeline.user.user_details',
     'account.pipeline.save_facebook_details'
)


SOCIAL_AUTH_ENABLED_BACKENDS = ('facebook')
SOCIAL_AUTH_USER_MODEL = 'account.User'
SOCIAL_AUTH_DEFAULT_USERNAME = "new_social_auth_user"

STRIPE_PUBLIC_KEY = env('STRIPE_PUBLIC_KEY')
STRIPE_SECRET_KEY = env('STRIPE_SECRET_KEY')
