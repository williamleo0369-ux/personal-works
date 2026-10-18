# Current behavior — 2026-10-18

The hero uses only the approved static portrait, with no video, entry animation, pointer movement or scroll movement on the person. The works flight and expertise balloon animations and their controls remain unchanged. Earlier video assets and implementation notes below are retained as history.

# Character motion

Reference choreography is adapted into three scenes while preserving the approved face and outfit:

- Hero: five-second silent portrait video with blinking, breathing and a restrained head turn
- Works: scroll-driven flight through cloud-framed project images, with a gentle idle bob
- Expertise: an ivory balloon carries the character through a slow suspended sway

`motion.js` observes scene visibility, document visibility and live reduced-motion changes. The pause control supports keyboard input and saves its setting locally. Portrait video is lazy-loaded. Safari uses a matching HEVC-with-alpha MOV and Chromium keeps the existing VP9-with-alpha WebM. Unsupported video decoders and data-saving connections retain the approved static hero portrait; the other two poses still animate unless motion is reduced or paused.

Validation at 1440 × 1000 and 390 × 844: video playback confirmed; decoded alpha 0 at background and 255 on figure; user pause and offscreen pause pass; scroll changes the flight transform; pose loops pause correctly; reduced motion stops and hides video; no horizontal overflow; bilingual pause label and five-app filter remain correct. JavaScript syntax and Git whitespace checks pass. The design detector reports only existing dialog image slots populated at runtime and the existing Arial font choice.

Safari compatibility verified in native Safari 27.2: automatic playback selected `william-idle-safari.mov`, playback time advanced, decoded background alpha was 0, and the existing pause/resume button stopped and resumed playback. Chromium continues to select and play the unchanged WebM. The public homepage returned HTTP 200 and the prior Pages deployment was successful when checking the reported 503 screenshot.
