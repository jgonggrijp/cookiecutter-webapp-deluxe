## Preparing the database

```sql
create user {{cookiecutter.database_user}} with createdb with password '{{cookiecutter.database_password}}';
create database {{cookiecutter.database_name}};
grant all on database {{cookiecutter.database_name}} to {{cookiecutter.database_user}};
```


## Installing the packages

```console
$ pip install pip-tools psycopg2 --no-binary psycopg2
$ pip-sync
```

We need to install `psycopg2` with the `--no-binary` flag until we can upgrade to version 2.8 of `psycopg2`.


## Initializing Django

```console
$ python manage.py migrate
$ python manage.py createsuperuser
```


## Testing

Run `pytest` to execute all tests once or `pytest --looponfail` to retest continuously as files change. Use the [pytest-django helpers][1] when writing new tests. **Don't** write tests in the way described in the Django tutorial.

[1]: https://pytest-django.readthedocs.io/en/latest/helpers.html


## Livereload

```console
$ python manage.py livereload
```

This works for all Python modules, templates and static files that Django knows about. If the `DEBUG` setting is `True`, the livereload script is automatically inserted in HTML pages.