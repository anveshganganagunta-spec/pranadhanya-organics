Product image guide

Place high-quality product photos in the following paths (create the folders if missing):

- `src/assets/products/{name}.jpg` — used in category cards (e.g. `millets.jpg`)
- `src/assets/best-sellers/{name}.jpg` — used in Best Sellers carousel
- `src/assets/gallery/{name}.jpg` — used in Gallery tiles

Recommendations:
- Format: JPEG or WebP
- Recommended dimensions: 1200x1200 (square) for product tiles; 800-1200px on the long edge is fine
- File size: aim for 100-300KB after compression for web performance
- Naming: use lowercase, hyphen-separated names (e.g. `millets.jpg`)

How it works in the app:
- The UI prefers a photo (JPEG) at the paths above. If a photo isn't present, it falls back to the bundled SVG illustration so the app never shows a broken image.

To test locally:
1. Run the dev server:

```bash
npm run start
```

2. Open `http://localhost:4200` and check the category card for `Millets`.

Notes on sample images used by the app:
- The UI now prefers external sample photos from Unsplash at runtime (so you'll see realistic images immediately without committing binaries).
- To replace with local images, add JPEGs at the paths below and they will be used instead of external images:
	- `src/assets/products/{name}.jpg`
	- `src/assets/best-sellers/{name}.jpg`
	- `src/assets/gallery/{name}.jpg`

If you want me to add a set of curated, compressed JPGs into the repo directly, confirm and I'll add them (this will commit binary files).