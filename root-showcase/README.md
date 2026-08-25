# Root Showcase Portfolio

This is the top-level entry point for my developer ecosystem. It is a fast, clean, single-page application designed to present me as a human, capable frontend engineer.

## Tech Stack
- React 18
- Vite
- Tailwind CSS

## Design Philosophy
The portfolio avoids the "AI-generated" look. There are no massive purple gradients, glassmorphism blobs, or generic placeholder skills ("Fast", "Scalable"). It is strictly typographic, relying on negative space and clear information architecture to guide the reader. The focus is exclusively on the work and the engineering decisions behind it.

## How to Run Locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

## Setup Instructions for Live Deployment
When deploying this, you will need to:
1. Deploy each of the 4 sub-projects (SynthOS, Shift, A11y Primitives, Orb) to their own Vercel/Netlify URLs.
2. Update the `links.demo` and `links.github` keys in `src/App.jsx` to point to the live URLs and their respective repo links.
3. Deploy this `root-showcase` project to your main custom domain.
