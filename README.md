# Theory Lab r1 — v3.3 Complete

Complete Rabbit r1 deployment package.

This build combines the reliable single-file v3.2.1 runtime with the full original Theory Lab asset set. It includes the vertical wheel-scrolling interface, smaller/tighter text, full theory/case/intervention/Joker data, Story Mode, Endless Casework and Pass-the-Device.

## Upload to GitHub Pages

Upload the CONTENTS of this folder to the root of the same GitHub repository you already use for the Creation.

The root should contain:

- `index.html`
- `dev.html`
- `README.md`
- `assets/`

Keep GitHub Pages configured as:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

Because the URL does not change, your existing Rabbit Creation QR can continue to point to the same GitHub Pages address.

## What is updated

- Vertical wheel navigation through theory cards, interventions and professional Wild/Joker cards.
- More compact typography for the 240×282 display.
- Centred/current card is visually emphasised.
- Long press opens fuller detail.
- Main runtime is self-contained in `index.html`, reducing the risk of a blank screen if an external JS/CSS file fails to load.
- Startup error handling is included so failures do not silently present a blank screen.
- Full original image and audio asset set is included.

## Desktop testing

From this folder run:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000/dev.html`

The simulator provides wheel up/down, side-click and long-press controls.
