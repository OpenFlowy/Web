OpenFlowy / FreeFlowy
=====================

A local-first, offline-first, login-optional, private, and free alternative to
WorkFlowy.

- This is [OpenFlowy][], like WorkFlowy
  - Also available at [FreeFlowy.com][]
- Use OpenFlowy to manage your tasks as a list
  - Each Task can have Subtasks
    - A Subtask can have more Subtasks
    - Like this
  - Once a Task is complete, you can mark it as Completed
    - <s style='color:grey'>Like this</s>
- Use [OpenFlowy][] without creating an account
- Use it even while disconnected from the Internet
- Export and import your data anytime, in clear

[OpenFlowy]: https://OpenFlowy.com
[FreeFlowy.com]: https://FreeFlowy.com

Development
===========

Clone Project
-------------

    mkdir -p OpenFlowy/Web/
    cd OpenFlowy/Web/
    git clone git@github.com:OpenFlowy/Web.git ./
    git worktree add -b web-output ../web-output origin/gh-pages

Build
-----

    npm run build

Run Live Server
---------------

    npm run live

Debug
-----

In VSCode, set the breakpoints in the functions/code you wish to debug using the
`F9` key, or by clicking red dot that shows up as you hover the mouse pointer
over the line number in the margin. Open the VSCode command palette
(`Ctrl`/`Cmd`+`Shift`+`P`), use command `DEBUG: Open Link`, and provide the URL
(in development mode: http://127.0.0.1:8080). This will launch a browser under
VSCode's debugger's control and load the web app from the provided URL.

When the control reaches a breakpoint, the VSCode debugger will focus on the
relevant line of code.

The debugging session can now be controlled using the debug toolbar shown
towards the top of the VSCode window. Closing the so launched browser will end
the debugging session.

Publish
-------

    # Build project, copy, and commit files to web-output branch
    npm run publish-web-output

    # If needed, reverse the effects of the above command with:
    (cd ../web-output/; git reset origin/gh-pages)

    # Publish the web app to Github Pages, and hence to the world/production
    git push origin web-output:gh-pages
