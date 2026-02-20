# Fullstack Experiment 5 – React Router & Lazy Loading

A React single-page application that demonstrates **client-side routing** with React Router and **code-splitting** using `React.lazy()` and `Suspense`. The app presents a simple “Know About Me” portfolio-style interface with a dashboard and separate section pages.

## Features

- **React Router (react-router-dom)** – Multiple routes with `BrowserRouter`, `Routes`, `Route`, and `NavLink`
- **Lazy loading** – Dashboard, About, and Contact are loaded on demand via `React.lazy()` with `Suspense` fallbacks
- **Dashboard** – Home page (`/`) showing all sections (About, Contact) in one view
- **Section pages** – Individual routes for `/about` and `/contact` with a shared layout
- **Navigation** – Persistent nav bar to switch between Home, About, and Contact

## Project Structure

```
fs_exp_5.2/
├── public/
├── src/
│   ├── App.js          # Routes, lazy imports, SectionLayout
│   ├── App.css
│   ├── index.js        # Entry point, BrowserRouter
│   ├── index.css
│   ├── Dashboard.js    # Home: all sections in one page
│   ├── AboutMe.js      # About section content
│   ├── Contact.js      # Contact section content
│   └── ...
├── package.json
└── README.md
```

## Routes

| Path      | Description                          |
|-----------|--------------------------------------|
| `/`       | Home – all sections on one page      |
| `/about`  | About (single section)               |
| `/contact`| Contact (single section)             |

## Tech Stack

- **React** 19
- **react-router-dom** 7.x
- **Create React App** (react-scripts 5.x)

## Prerequisites

- Node.js (v14 or higher recommended)
- npm

## Setup & Run

1. **Install dependencies**

   ```bash
   cd fs_exp_5.2
   npm install
   ```

2. **Start development server**

   ```bash
   npm start
   ```

   The app opens at [http://localhost:3000](http://localhost:3000).

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Run tests**

   ```bash
   npm test
   ```

## What This Experiment Demonstrates

- Setting up **React Router** in a CRA project with `BrowserRouter` and declarative routes
- Using **NavLink** for navigation and active link styling
- **Code-splitting** with `React.lazy()` so each section loads only when its route is visited
- **Suspense** for loading fallbacks while lazy components load
- A **reusable layout** (`SectionLayout`) for section-only pages (About, Contact)
- Structuring a small multi-route SPA with a dashboard and separate section views

## License

Private – for educational/experiment use.
