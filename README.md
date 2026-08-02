# Rupanjan Bhattacharyya — Portfolio

Personal research portfolio for **Rupanjan Bhattacharyya**, an Electrical Engineering
researcher at IIEST Shibpur working at the intersection of nano-scale device engineering and
compute-in-memory architecture.

## About

The site presents research experience, featured research works (with framework illustrations),
projects, honors, and skills — spanning memristor/ReRAM compact modeling, memristor-transformer
acceleration, physics-informed machine learning, and real-time embedded systems.

## Tech Stack

| Layer     | Technology                       |
| --------- | -------------------------------- |
| Framework | [Astro](https://astro.build/) v5 |
| Language  | TypeScript                       |
| Styling   | Vanilla CSS (custom properties)  |
| Images    | `astro:assets` + Sharp (WebP)    |
| Hosting   | Static output                    |

## Editing content

All content lives in typed data files under `src/data/` — no component edits needed to update text:

| File                | Controls                                       |
| ------------------- | ---------------------------------------------- |
| `site.ts`           | Name, email, phone, CV link, GitHub/LinkedIn   |
| `experience.ts`     | Research positions                             |
| `research.ts`       | Featured research works + framework figures    |
| `projects.ts`       | Additional projects                            |
| `honors.ts`         | Honors, awards & fellowships                   |
| `certifications.ts` | Professional development                       |
| `skills.ts`         | Technical skill groups                         |

Research figures live in `src/assets/research/`; the CV PDF is `public/cv.pdf`.

### Before deploying

- Set your real profile URLs in `src/data/site.ts` (`github`, `linkedin`) — currently placeholders.
- Set the deployed URL in `astro.config.mjs` (`site`) so canonical/OG tags resolve.

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview the production build
npm run preview
```
