<h1 align="center">
<b>dell-hack</b><br/>
<p style="font-size:16px;font-weight:normal;">✨ A youth wellbeing early-warning dashboard — surface at-risk signals, escalate, and reach out ✨</p>
</h1>

<div align="center">
<p>Dell Hackathon · React + TypeScript + Vite single-page app</p>

![React](https://img.shields.io/badge/React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=000000&labelColor=222222)
&nbsp;
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFFFFF&labelColor=222222)
&nbsp;
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=FFFFFF&labelColor=222222)

<p align="center">
<a href="#introduction">Introduction</a> &nbsp;&bull;&nbsp;
<a href="#project-structure">Project Structure</a> &nbsp;&bull;&nbsp;
<a href="#system-overview">System Overview</a> &nbsp;&bull;&nbsp;
<a href="#getting-started">Getting Started</a>
</p>
</div>

## Introduction

***dell-hack*** is a **single-page dashboard application** built for a **Dell hackathon**. It is an animated, dark-themed React app that walks a user through a five-screen flow: a **landing/hero screen**, a **dashboard** of monitored profiles, a **detail view** for a selected profile, an **escalation workflow**, and a **conversational chat interface**.

> 🎯 **Purpose:** ***dell-hack*** is a **youth wellbeing early-warning tool**. A responder *(e.g. a social worker)* reviews each young person's **risk signals** — an isolation index, circadian and activity patterns, and keyword clusters — **escalates** a concerning case through a guided workflow, and **reaches out** via an in-app chat. The repository ships with **placeholder / mock data only** *(no backend or persistence)*; what the code verifiably contains is described below.

Verifiably, the app provides: a **dashboard** listing profiles with status badges and risk scores; a **detail view** showing per-profile analysis signals *(activity patterns, keyword clusters, risk indicators)*; an **escalation flow** that transitions a selected case forward; and a **chat interface** with two-party message threads. All data shown is **placeholder/mock data** committed in `src/data/` — there is no backend, API, or persistence in this repository.

> 📝 Note: The initial UI was **scaffolded with [Magic Patterns](https://magicpatterns.com)** and then customised *(custom navigation, an animated `PatternCanvas` background, a reactive auto-hiding header, and the page flow in `App.tsx`)*.

## Project Structure

- `src/`
  **Application source.**
  - `App.tsx` Root component — owns the view state machine *(`hero → dashboard → detail → escalation → chat`)* and page transitions.
  - `index.tsx`, `index.css` Entry point and global styles.
  - `config.ts` Feature flags *(e.g. `reactive_bar` auto-hiding header toggle)*.
  - `pages/`
    **The five screens.**
    - `HeroSection.tsx` Animated landing screen with a call-to-action.
    - `Dashboard.tsx` Profile list with status and risk scores.
    - `DetailView.tsx` Per-profile analysis signals; entry point to escalation.
    - `EscalationFlow.tsx` Step-through escalation workflow.
    - `ChatInterface.tsx` Two-party conversation thread.
  - `components/`
    - `Navigation.tsx` Top navigation bar.
    - `PatternCanvas.tsx` Animated generative background.
  - `context/NavBarContext.tsx` Shared nav-visibility state.
  - `data/`
    **Mock data** *(no backend)*.
    - `analysisData.ts` Per-profile risk / analysis signals.
    - `conversationData.ts` Chat message threads.
- `.github/workflows/deploy.yml` GitHub Actions → GitHub Pages deploy *(builds `dist/` on push to `main`)*.
- `DESIGN_SYSTEM.md` Design tokens and UI conventions.
- `index.html`, `vite.config.ts`, `tailwind.config.js`, `tsconfig*.json` Build + tooling config.

## System Overview

### Architecture

A **client-only single-page app** — no server, no database, no external API calls. State is held in React; the `App.tsx` view enum drives which page renders, with **Framer Motion** handling enter/exit transitions and **lucide-react** for icons. Display data is imported directly from the typed mock files in `src/data/`. The app is built by **Vite** and deployed to **GitHub Pages** via the bundled GitHub Actions workflow.

### Tech Stack

![Frontend](https://img.shields.io/badge/frontend%3A-222222?style=for-the-badge) &nbsp; ![React Badge](https://img.shields.io/badge/react%2018-61DAFB?style=for-the-badge&logo=react&logoColor=000000&labelColor=222222) ![TypeScript Badge](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&labelColor=222222) ![Tailwind Badge](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&labelColor=222222) ![Framer Motion Badge](https://img.shields.io/badge/framer%20motion-0055FF?style=for-the-badge&logo=framer&labelColor=222222)

![Build](https://img.shields.io/badge/build%2F%20deploy%3A-222222?style=for-the-badge) &nbsp; ![Vite Badge](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&labelColor=222222) ![GitHub Pages Badge](https://img.shields.io/badge/github%20pages-222222?style=for-the-badge&logo=githubpages&labelColor=222222)

## Getting Started

### Pre-requisites

> ⚠️ **Pre-requisite!** [Node.js 20+](https://nodejs.org/) *(the GitHub Actions deploy uses Node 20)*.

### 1. Clone the Repository

```bash
git clone https://github.com/visrutsuresh/dell-hack.git
cd dell-hack
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Dev Server

```bash
npm run dev
```

Vite will print a local URL *(default [http://localhost:5173](http://localhost:5173))*. Open it to view the app.

### 4. Lint and Build

```bash
npm run lint      # ESLint over .js/.jsx/.ts/.tsx
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

> 📝 Note: This project has **no test suite** and **no environment variables** — all data is bundled mock data in `src/data/`, so there is nothing to configure to run it.

### 5. Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds `dist/` and publishes it to **GitHub Pages** automatically.

## License

This project was built for a Dell hackathon and is provided for educational and demonstration purposes only.
