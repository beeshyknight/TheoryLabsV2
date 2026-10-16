# Theory Lab r1 v3.2.1 – self-contained hotfix

This build fixes the blank-screen failure seen after the v3.2 vertical update.

## What changed
- `index.html` is now self-contained: CSS, theory data, intervention/Joker data, r1 bridge and game engine are all bundled into one file.
- No JavaScript modules are required at runtime.
- Missing `js/` or `css/` paths can no longer leave the Creation blank.
- A visible startup/error screen is included, so a future runtime error will show a message rather than an empty display.
- The v3.2 vertical wheel deck and smaller text are retained.
- Images remain in `assets/images/`; if an image fails, the game still runs.

## Update GitHub Pages
Replace the files in the root of your existing repository with the contents of this folder. The important files are `index.html` and the `assets` folder.

Keep the same repository and the same GitHub Pages URL. You do not need a new Creation QR code. Commit the changes to `main`, wait for the Pages deployment to finish, then reload/reopen the Creation on the r1.

## Test first
Open `index.html` directly on a computer, or serve the folder locally and open `dev.html`. This hotfix does not require module hosting for the main app.
