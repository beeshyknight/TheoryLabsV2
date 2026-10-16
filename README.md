# Theory Lab r1 — v3.1 small-screen port

This is a dedicated Rabbit r1 port of the supplied **Theory Lab v3.1 Purposeful Decks + Endless** build. It is not the desktop page squeezed into 240 × 282. The underlying teaching content and game systems are retained, but interaction is rebuilt around the r1 wheel and side button.

## What is preserved

- the full supplied theory-card pool (`theoryData.js`)
- all 8 authored case scenarios
- the original procedural / Endless Casework generator
- the intervention deck
- professional Joker / Wild cards
- a random 7-card hand
- up to 4 theory lenses per consultation
- 10 Focus capacity
- 2 redraws
- first intervention free; later interventions carry a capacity cost in scoring
- one professional Wild per case
- 6 consultations
- trust, case progress and score
- authored and procedural reactive case developments
- Story, Endless and Pass-the-Device modes
- persistent save / continue
- the original dark navy, amber, cyan, teal, purple and discipline colour language
- supplied Theory Lab case-board and discipline image assets

## r1 interaction model

**Wheel up/down** moves between cases, dossier pages, cards, actions and menu choices.

**Side click** selects, toggles a theory card, chooses an intervention/Joker, or continues.

**Long press** opens the teaching detail for the current theory/intervention/Joker.

Rather than showing the whole desk at once, the r1 shows one playable object at a time. The theory hand therefore feels like physically turning through a small deck.

## Test it locally

Do not double-click `index.html` if your browser blocks ES modules from `file://` URLs. Serve the directory instead.

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/dev.html
```

`dev.html` is the desktop r1 simulator. The Creation itself is `index.html`.

## Put it on GitHub Pages

1. Create a new GitHub repository, for example `theory-lab-r1`.
2. Upload **the contents of this folder** so that `index.html` is at the repository root.
3. Commit/push the files.
4. In the repository choose **Settings → Pages**.
5. Under Build and deployment choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder.
7. Save.
8. GitHub will give you an HTTPS address similar to:

```text
https://YOURNAME.github.io/theory-lab-r1/
```

Open that URL on a normal browser first and check that the game loads.

## Turn the hosted URL into an r1 Creation

Rabbit's public `creations-sdk` repository currently includes:

- `plugin-demo`, which demonstrates Creation capabilities
- `qr`, a small self-hostable page for creating scannable Creation codes

Use the HTTPS GitHub Pages URL above as the URL for the Creation QR code, then scan the resulting code with the r1 using Rabbit's Creation flow.

Repository:

```text
https://github.com/rabbit-hmi-oss/creations-sdk
```

Because Rabbit is still developing the public Creation documentation, check the repository / Rabbit Creations page if the QR installation flow changes.

## Important files

```text
index.html                 r1 entry point
css/r1.css                 240 × 282 visual design
js/r1-app.js               small-screen game engine
js/r1-bridge.js            wheel, side-button, long-press and storage bridge
js/theoryData.js           original Theory Lab theories/cases/procedural generator
js/gameDataV2.js           original interventions/Wilds/reactions
assets/images/             selected original Theory Lab visual assets
dev.html                   desktop r1 simulator
```

## How the port differs from desktop Theory Lab

The desktop build lets students see the dossier, hand, interventions and Wilds together. On 240 × 282 this would become unreadable. The r1 build therefore uses a consultation loop:

```text
DOSSIER
  ↓
CONSULTATION MENU
  ↓
THEORY HAND → select up to 4 / 10 Focus
  ↓
INTERVENTION → optional
  ↓
PROFESSIONAL JOKER → optional, one per case
  ↓
REVIEW & COMMIT
  ↓
REACTIVE STORY
  ↓
NEXT CONSULTATION
```

The dossier itself is paginated into readable fragments. Long-pressing a theory moves through Purpose, Practice, Watch For, Reference and Practitioner Question pages, so the educational depth remains available without shrinking the type to an unusable size.

## Updating the theory content later

The r1 game imports the supplied `theoryData.js` and `gameDataV2.js` directly. If a later desktop Theory Lab version keeps the same object structure, those files can usually be replaced with the newer versions and the r1 shell will inherit the new cards/cases automatically.

If the data structure changes, update the imports and the small number of field references in `js/r1-app.js` rather than rebuilding the interface.

## v3.2 r1 readability update

This update changes the small-screen card browsing model:

- theory cards now move vertically with the r1 wheel rather than behaving like a horizontal carousel
- interventions and professional Jokers use the same vertical stack
- the active card is brought forward while cards above/below remain visible
- card previews use smaller, tighter text while retaining long-press full detail
- dossier/detail text is slightly smaller so more content fits without crowding
- wheel prompts now consistently show ↑↓ to reinforce vertical navigation

Controls are unchanged: wheel moves, side button selects, long press opens the fuller card detail.
