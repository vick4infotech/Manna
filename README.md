# Danlami Murna Jatau — Portfolio

A premium, interactive 3-page portfolio (Home / About / Projects) built with **Vite + React + TypeScript**, styled with **Tailwind CSS**, and animated with **Framer Motion**.

## Requirements
- Node.js 18+ recommended

## Run Locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Update Content
All text content is stored in TypeScript data files:
- `src/data/profile.ts` — name, titles, location, email/phone, summary, strengths, competencies, tools, CV path
- `src/data/experience.ts` — work experience items + highlights
- `src/data/projects.ts` — projects, categories, and images used in the Projects modal

Edit those files and the UI updates automatically.

## Replace Images
Project images are stored in:
- `src/assets/`

To replace an image:
1. Put your image in `src/assets/` (recommended: JPEG/PNG, reasonably compressed)
2. Update the import(s) in `src/data/projects.ts`
3. Update the `alt` text for accessibility

### Current project evidence images
This project already includes your screenshots (Jira, Confluence, Teams Calendar, Excel Dashboard, Notion Tracker) inside `src/assets/` and referenced in `src/data/projects.ts`.

## Replace CV
The download button points to:
- `public/cv.pdf`

Replace `public/cv.pdf` with your real CV PDF (keep the filename the same), or update `cvPath` in `src/data/profile.ts`.

## Key Features
- 3 pages with React Router: `/`, `/about`, `/projects`
- Smooth route transitions (Framer Motion)
- Sticky navbar with active link highlighting
- Scroll-to-top on route change + floating scroll-to-top button
- Projects search + category filters
- Project modal with image carousel
- Testimonials carousel (Home)
- Contact modal with client-side validation + success toast

---

If you want a profile photo on the navbar/hero area, add it to `src/assets/` and update the navbar/avatar component as needed.
