# Matthew Eleazar — Portfolio
 
Personal portfolio site built with React + Vite. Features pages for Home, Resume, Projects, and Certifications.
 
**Live:** [matteleazar.tech](https://matteleazar.tech)
 
---
 
## Tech Stack
 
- **Framework:** React 18 + Vite
- **Routing:** React Router DOM
- **Styling:** Plain CSS with CSS variables
- **Fonts:** Outfit, JetBrains Mono (Google Fonts)
- **Deployment:** Vercel
 
---
 
## Getting Started
 
```bash
# Install dependencies
npm install
 
# Start dev server (http://localhost:5173)
npm run dev
 
# Production build
npm run build
 
# Preview production build locally
npm run preview
```
 
---
 
## Project Structure
 
```
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Resume.jsx
│   ├── Projects.jsx
│   └── Certifications.jsx
├── styles/
│   ├── global.css
│   ├── Navbar.css
│   ├── Footer.css
│   ├── Home.css
│   ├── Resume.css
│   ├── Projects.css
│   └── Certifications.css
├── App.jsx
└── main.jsx
```
 
---
 
## Customization
 
| What | Where |
|---|---|
| Personal info / bio | `src/pages/Home.jsx` |
| Experience & education | `src/pages/Resume.jsx` |
| Projects | `src/pages/Projects.jsx` |
| Certifications | `src/pages/Certifications.jsx` |
| Profile photo | `public/profile.jpg` |
| Color theme | `--accent` in `src/styles/global.css` |
 
---