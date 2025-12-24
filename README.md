# Modern Resume & Portfolio Website

A responsive, SEO-optimized resume website built with React, Vite, and Tailwind CSS.
Designed for Javeed Akram - Cloud, DevOps & QA Architect.

## Project Structure

This project is organized as a standard Vite + React application:

- **src/**: Source code
  - **components/**: Reusable UI components (Navbar, Footer, Cards)
  - **pages/**: Route components for each page
    - **achievements/**: Specific pages for detailed achievements (Cloud, DevOps, AI, etc.)
  - **data/resume.json**: Centralized content file. Update this JSON to change the website text.

## Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)

## Setup & Installation

Since Node.js was not detected in the initial environment, you likely need to install it first.

1. **Install Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
2. **Open Terminal**: Navigate to this folder (`Resume-Website`).
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist/` folder, which you can deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Customization

- **Content**: Edit `src/data/resume.json` to update your profile, experience, and achievements.
- **Styling**: Tailwind CSS is used for styling. Configuration is in `tailwind.config.js`.
