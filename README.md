# Allegra — entrance interaction prototype

Run `python3 -m http.server 8080 --bind 0.0.0.0` in this directory.

Starts with only the existing Allegra A logo on black. Clicking or keyboard-activating the logo splits the screen into equal left/right panels, shifts the logo to the left half and reveals Models, Designer, Magazines and Contact on the right. Click again or press Escape to return. Reduced-motion and keyboard navigation are supported. Both halves remain side by side on mobile.

Logo and Mona Sans ExtraBold Wide font are downloaded from the existing Allegra site. Links currently lead to existing live pages; those destinations are not rebuilt. This prototype does not modify the live WordPress site.

`/workspace/Allegra-preview.html` is a standalone offline preview containing embedded logo, font, CSS and JavaScript.

## 3D viewer
Models opens an interactive Three.js viewer with a demonstration box. Drag to orbit, scroll/pinch to zoom, or focus the canvas and use arrow and +/- keys. Auto rotation is opt-in. Local GLB, OBJ and 3DS files up to 50 MB can be loaded; files remain in browser memory. OBJ/3DS use neutral materials without external textures. Native .max files require export. Actual Allegra models are not supplied. Three.js r180 and its MIT license are included in vendor/.
