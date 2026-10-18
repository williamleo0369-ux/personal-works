# Character motion

Reference choreography is adapted into three scenes while preserving the approved face and outfit:

- Hero: five-second silent portrait video with blinking, breathing and a restrained head turn
- Works: scroll-driven flight through cloud-framed project images, with a gentle idle bob
- Expertise: an ivory balloon carries the character through a slow suspended sway

`motion.js` observes scene visibility, document visibility and live reduced-motion changes. The pause control supports keyboard input and saves its setting locally. Portrait video is lazy-loaded. Safari, unsupported video decoders and data-saving connections retain the approved static hero portrait; the other two poses still animate unless motion is reduced or paused.

Validation at 1440 × 1000 and 390 × 844: video playback confirmed; decoded alpha 0 at background and 255 on figure; user pause and offscreen pause pass; scroll changes the flight transform; pose loops pause correctly; reduced motion stops and hides video; no horizontal overflow; bilingual pause label and five-app filter remain correct. JavaScript syntax and Git whitespace checks pass. The design detector reports only existing dialog image slots populated at runtime and the existing Arial font choice.
