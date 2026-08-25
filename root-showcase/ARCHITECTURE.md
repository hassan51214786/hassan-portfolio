# Ecosystem Architecture

## Monorepo vs. Multirepo

This ecosystem is currently structured as a flat workspace of 5 independent projects (folders). 

### Why this approach?
Rather than forcing all of these distinct ideas into a single massive Next.js app or a complex Turborepo monorepo, I opted to keep them completely isolated. 
1. **Tech Stack Freedom:** It allows `a11y-primitives` to be completely vanilla without dealing with React's build pipeline overhead, while `shift` can utilize Zustand and Tailwind.
2. **Deployment Flexibility:** Each folder can be dragged into Vercel or Netlify independently. If one project breaks, the main portfolio showcase remains unaffected.
3. **Focused Repositories:** When a hiring manager clicks the "GitHub" link on the Shift Kanban project, they are taken to a clean repository containing *only* that code, rather than having to navigate through a monorepo tree to find the relevant logic.

## Linking vs. Iframing
On the main showcase site, I chose to link out to the live deployments rather than embedding them via `<iframe>`.
- **Reasoning:** Iframes introduce heavy performance penalties (loading 4 distinct React apps simultaneously on page load) and often struggle with responsive design on mobile (a kanban board forced into a 300x200 iframe is unusable). Linking out to a full-screen, dedicated deployment provides the best possible UX for reviewing the work.
