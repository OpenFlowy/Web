OpenFlowy
=========

A local-first, offline-first, login-optional, private, and free alternative to
WorkFlowy.

- You don't need an account to use OpenFlowy
- OpenFlowy can be used without internet
- You can export and import your data anytime

Development
===========

Clone Project
-------------

    mkdir OpenFlowy
    cd OpenFlowy
    git clone git@github.com:OpenFlowy/Web.git Web
    cd Web
    git worktree add -b build-output ../build-output origin/gh-pages

Build
-----

    npm run build

Run Live Server
---------------

    npm run live

Publish
-------

    npm run publish-build-output
    git push origin build-output:gh-pages