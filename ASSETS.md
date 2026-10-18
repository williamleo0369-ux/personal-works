# Visual assets

## Reference

The user supplied a 9 minute 18 second desktop recording of a portfolio design and its implementation process. The visual reference is the portfolio shown at the beginning and end of the recording: cobalt blue sky, white clouds, large condensed name behind a person, paper-white portfolio sections, vertical blue service section, and an open-window contact composition.

The rebuilt site uses William's name, supplied character reference and original project archive. It does not reuse the reference creator's identity, logo or work.

## Built-in imagegen prompts

### assets/william-cutout.webp

Source: the user-supplied `已生成图像 11.png`. Built-in imagegen, transparent background enabled.

> Use case: background-extraction. Create a precise photographic cutout of the single adult man in the supplied reference photo for a personal portfolio website. Preserve his exact face identity, hairstyle, white T shirt, cream pleated trousers, black belt, watch and white shoes, standing pose, body proportions and natural photographic texture. Remove all street, building, tree and ground entirely. Full body head to both shoes entirely visible, centered with modest transparent margin, no text, no additional objects. Actual transparent alpha background. Do not redesign or beautify face. Output portrait.

### assets/sky.webp

Built-in imagegen, opaque background.

> Use case: photorealistic-natural. Asset type: full bleed background for an artistic portfolio website. A completely photorealistic wide aerial photograph of an infinite sea of voluminous white cumulus clouds beneath a rich clear cobalt blue sky. Horizon exactly 59 percent from the top. Upper 59 percent is clean deep blue sky, slightly lighter near horizon, with no clouds overhead, generous clean negative space for white typography and a separately composited person. Lower 41 percent is a dense billowy cotton-white cloud ocean with subtle cool blue shadows, close foreground clouds at bottom. Crisp daylight, ethereal editorial photography, realistic atmospheric perspective, refined premium look. Landscape 16:9. No person, no objects, no text, no logos, no watermark.

### assets/william-street.webp

WebP conversion of the original supplied character image. No semantic editing.

### assets/display.ttf

Bebas Neue, downloaded from the Google Fonts font distribution. License: `assets/FONT-LICENSE.txt`.

### assets/william-window.webp

Built-in imagegen, transparent background. Reference: the supplied character image.

> Use case: identity-preserve, compositing. Asset type: a photorealistic open-window vignette for a personal portfolio contact section. Use the single young adult East Asian man's exact identity from the supplied reference: same face, tousled black hair, white crew neck T shirt and cream trousers, black belt and silver watch. Show the same man seated in side three-quarter view at a white desk with a slim silver laptop, turning his head gently toward viewer. He is viewed THROUGH a real white painted casement window, both glass shutters open outward to left and right, complete rectangular window frame and shutters fully visible. Inside the window is a quiet pale blue architectural studio interior, natural daylight, subtle realistic shadows. The full window floats as one isolated photographic object against actual TRANSPARENT alpha background. Exterior surrounding the window must be entirely transparent, not blue. No text, no logos, no symbols, no decorative badges, no plants, no other people. Window and man fill the square composition with small transparent outer margin. Refined high-end photographic editorial collage, realistic scale and perspective, preserve recognizable exact facial identity.

## Added personal hardware projects

- `assets/hardware/flowpilot.webp`: WebP conversion of the user-supplied original FlowPilot reference image from the existing project asset library (`episode-02/00-reference.png`).
- `assets/hardware/moss.webp`: WebP conversion of the existing MOSS project cover (`我把MOSS做出来了.png`). Displayed as a project cover, not labeled as an unedited photograph.
- `assets/hardware/flowpilot-demo.webp`: frame at 00:04 from the existing FlowPilot hands-on demonstration video.
- `assets/hardware/moss-demo.webp`: frame at 00:05 from the existing MOSS Bilibili and music demonstration video.

These are existing project images and video frames; no new image generation or semantic image editing was used for this addition.

## Latest character replacement

The active character is the latest user-supplied studio portrait: navy plaid shirt, cream henley, ivory knit sweater tied over the shoulders, dark wide-leg jeans and black shoes. Earlier character assets are retained as previous versions.

- `assets/william-studio-v2.webp`: format conversion of the latest user-supplied studio portrait, without semantic editing.
- `assets/william-cutout-v2.webp`: built-in imagegen background extraction, actual transparent alpha. Used in the hero and capabilities.
- `assets/william-window-v2.webp`: built-in imagegen edit of the existing contact window using the latest identity and outfit reference; transparency preserved.

### Cutout prompt

> Use case: background-extraction. Precisely remove only the white studio background from this supplied full-body portrait. Preserve the exact same adult man's face, facial identity, hair, pose, proportions, dark navy plaid shirt, cream henley undershirt, ivory knit sweater tied over shoulders, dark wide-leg jeans and black leather shoes. Do not redraw, restyle, beautify, or change expression. Preserve the entire full body head to both shoes, center the figure with modest margin, genuine transparent alpha background, no ground shadow, no added objects, no text. This is a website hero cutout.

### Window prompt

> Use case: identity-preserve. Edit image 2, the existing open-window website vignette. Replace ONLY the seated man with the exact adult man and complete outfit from image 1: tousled black hair, same recognizable face, navy charcoal plaid shirt over cream henley, ivory knitted sweater tied over shoulders, dark wide-leg jeans. Keep image 2's white casement window, both outward-open shutters, framing, pale blue studio, laptop, desk, seated working pose and photographic lighting unchanged. Match the face from image 1 accurately. Full window and both shutters completely visible as one isolated object on actual transparent alpha background. No text, no logos, no added people, no additional objects. Preserve transparency.

## App portfolio additions — 2026-10-17

Existing project assets are converted to WebP without semantic editing. No new AI images were generated for this update.

- `assets/apps/workday-alarm.webp`: existing Workday Alarm launch poster (`WorkdayAlarm/Assets/Marketing/workday-alarm-xhs-launch-cover-v1.png`).
- `assets/apps/workday-alarm-detail.webp`: existing calendar feature illustration (`WorkdayAlarm/Assets/Marketing/source-frames/calendar.png`). These are promotional illustrations, not represented as unedited runtime screenshots.
- `assets/apps/lingorole.webp`: existing LingoRole promotional poster (`LingoRole/Assets/Marketing/lingorole-you-but-ready-poster-v5-bright-revised.png`).
- `assets/apps/smart-renovation.webp`: existing Smart Renovation Studio app icon (`smart-renovation-studio/expo/assets/images/icon.png`); identified as an app icon in its project description.
- `assets/apps/spacetime.webp`: existing public project cover (`qimen-spacetime/public/og.png`).
- `assets/apps/spacetime-interface.webp`: fresh Chromium screenshot of the public running site at `https://shikongpan.leowilliam26.chatgpt.site/`, with the welcome dialog dismissed.
- `assets/apps/lirae.webp`: existing iOS Simulator app screenshot (`lirae-app/artifacts/ios-simulator-running.png`).
- `assets/apps/lirae-stage.webp`: existing Stage interface screenshot (`lirae-app/artifacts/five-song-stage.png`).

Project descriptions are based on the respective project README, configuration and existing promotional material. Apps are presented as personal projects/prototypes; no new claim of App Store availability or production subscriptions is made.

## Character motion — 2026-10-18

All new poses use `william-studio-v2.webp` as identity and outfit reference. The supplied reference video guides the choreography: living portrait, cloud flight, balloon suspension. It is not embedded or redistributed.

- `assets/motion/hero-green.webp`: built-in imagegen, full-body portrait on uniform green for video keying
- `assets/motion/william-flying.webp`: built-in imagegen, same man flying horizontally, true transparent alpha
- `assets/motion/william-floating.webp`: built-in imagegen, same man suspended by an ivory balloon, true transparent alpha

Pose prompt constraints: preserve the recognizable face, tousled black hair, navy plaid shirt over cream henley, ivory knit sweater tied over shoulders, dark wide-leg jeans and black leather shoes. Keep the entire silhouette visible. Flight pose reaches forward toward the right with bent legs trailing left; balloon pose raises one hand to the string. No text, logos, extra people, or scenery. Transparent output for the two isolated action poses; uniform vivid green only for the animation input.

The webpage pauses character loops when their scene is outside the viewport or the tab is hidden. Its pause button persists the user's choice. Reduced-motion preferences show static poses. Portrait video loads only when visible, with a static fallback for unsupported browsers and data-saving connections.

- `assets/motion/william-idle.webm`: ChatCut Seedance 2.5 first/last-frame generation, 5 seconds, using the same green portrait at both ends; source project `ccd91d14-54b2-4397-9945-f8cfb6c788cb`, asset `ea22e5bc-ebdb-4022-83c9-b6e804f2e6ce`. Converted locally to 640 × 960 VP9 with alpha, chroma-keyed and despilled, audio removed. The first provider rejected submission because of its plan requirement; no output from that attempt is used.

Video prompt: Use the supplied portrait as exact opening and closing pose. Locked camera full-body portrait, maintaining the same face, hair and complete outfit. Soft breathing, one natural blink, a head turn of only a few degrees, then a gentle return to the original pose. Feet planted and framing unchanged. Perfectly uniform vivid green background throughout. Restrained lifelike motion, no speech, music or text.

## Safari portrait compatibility — 2026-10-18

`assets/motion/william-idle-safari.mov` is an HEVC-with-alpha transcode of the same five-second generated portrait source, using the identical keying and despill settings as the WebM. Apple AVFoundation exports the alpha layer from a ProRes 4444 intermediate. No additional image or video generation; no changes to the identity, motion, composition, other sections or text. Safari selects this file; Chromium retains its existing WebM.

Codec reference: [Apple AVFoundation HEVC with alpha](https://developer.apple.com/documentation/avfoundation/avvideocodectype/hevcwithalpha)
