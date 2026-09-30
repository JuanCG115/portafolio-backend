# Juan Camarillo — Portfolio

Personal portfolio site for **Juan Arturo Camarillo Gutiérrez**, Java Backend Developer (Jr). Built as a single-page React + TypeScript app and deployed on Vercel.

🔗 **Live site:** [juan-camarillo-dev.vercel.app](https://juan-camarillo-dev.vercel.app/)

## What's on the page

- **Hero** — role, location, and a terminal-style card summarizing my profile as a mock API response
- **About** — short professional summary
- **Stack** — backend, AI/ML, databases, testing & security, and DevOps skills
- **Projects** — TechMind Engine, ForoHub, Inventory Management API, and E-Commerce API, each shown as a REST route with its stack and a link to the repository
- **Other projects** — smaller and course-based projects (LiteraLura, SoftEngine, Facial-Recognition Attendance)
- **Experience** — Flex and Centro de Investigaciones en Óptica (CIO)
- **Education & certifications** — Oracle Next Education, OCI Foundations Associate, B.S. in Robotics Engineering
- **Footer** — contact email, LinkedIn, GitHub, and a downloadable résumé (PDF)

All project details, stack, and dates are kept in sync with my [résumé](https://github.com/JuanCG115/JuanCG115).

## Tech stack

- React 19 + TypeScript
- Vite
- Plain CSS (no UI framework) — custom design system in `src/App.css`
- Fonts: [Newsreader](https://fonts.google.com/specimen/Newsreader), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

## Running locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Updating content

- **Projects, stack, experience and education** are plain data arrays at the top of `src/App.tsx` — no JSX editing needed to update dates, numbers, or descriptions.
- **Colors, type scale and spacing** are CSS custom properties at the top of `src/App.css`.
- **Résumé file:** place the PDF in `public/` and update the filename in `src/App.tsx` if it changes.

## Deployment

Deployed automatically from the `main` branch via [Vercel](https://vercel.com).

## Contact

- ✉️ [camarillo.g.juan@gmail.com](mailto:camarillo.g.juan@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/juan-camarillo-gutierrez/)
- 🐙 [GitHub](https://github.com/JuanCG115)
