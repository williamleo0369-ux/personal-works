# William Lee · 李俊 — Personal Works

A cloud-themed personal portfolio inspired by the supplied video reference, using the supplied William character image. Static HTML, CSS and JavaScript; no build, tracker, remote font or runtime dependency.

## Preview

Run from this directory:

```sh
python3 -m http.server 4173
```

Open http://127.0.0.1:4173. `index.html` also works directly from disk.

## Content and interaction

- Layered cloud hero: oversized name, identity-preserving character cutout, scroll and pointer parallax.
- Eight selected projects, led by the FlowPilot keyboard and MOSS desktop assistant; filters for brand campaigns, AI products and visual art. The full archive retains every original gallery project and all six AI/hardware projects.
- Keyboard-accessible project dialog, close with Escape or the close button.
- Three capability sections, personal introduction, expandable career timeline and email/phone/GitHub contact links.
- Chinese and English text switch, remembered locally.
- Responsive layout, reduced-motion support and visible keyboard focus.

## Editing

- `index.html`: profile, timeline and contact details. Bilingual copy uses `data-zh` / `data-en`.
- `styles.css`: responsive layouts, animation, colors and typography.
- `script.js`: archive data, AI project descriptions, selected ordering and interaction. `projects.json` is the original gallery extraction retained for reference; the runtime data is embedded in `script.js` so the page works from disk.
- `portfolio_images/`: original portfolio slides, retained unchanged. Optimized 1200px WebP thumbnails are stored in `assets/projects/`; dialogs use the full original slides.
- `assets/`: local optimized images, favicon and licensed Bebas Neue display font.

The updated career dates follow the previously confirmed career summary. Brand campaigns are described as team collaborations and AI products as personal explorations. Linked project destinations are retained from the existing site; their access and availability are controlled by those external sites.

## Publish

The repository uses a static root suitable for GitHub Pages. Merging the redesign into the Pages publishing branch replaces the live site. No build action is needed when Pages is configured for `main` / root.

## Image provenance

`william-street.webp` is a web-optimized copy of the supplied image. The transparent person and cloud panorama were produced with the built-in imagegen tool, then converted to WebP. Prompts and asset details are in `ASSETS.md`. The display font is Bebas Neue under the included SIL Open Font License.
