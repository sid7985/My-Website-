# 🚀 Developer Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-FF0055?style=for-the-badge&logo=framer&logoColor=white)

**A modern, responsive developer portfolio showcasing AI-powered cross-platform applications**

[Live Demo](#) • [Features](#-features) • [Getting Started](#-getting-started) • [Deploy](#-deployment)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Adding New Apps](#-adding-new-apps)
- [Deployment](#-deployment)
- [Live Demo](#-live-demo)

---

## 🎯 Overview

This is a professional developer portfolio website built with **Next.js 14** and **TypeScript**. It showcases a collection of cross-platform applications including Android, iOS, Windows, macOS, and Web apps. The portfolio features a modern dark theme with vibrant accent colors, smooth animations powered by Framer Motion, and a fully responsive design.

### Key Highlights

- 🎨 **Modern Dark Theme** - Sleek design with custom color palette
- ✨ **Smooth Animations** - Powered by Framer Motion for engaging UX
- 📱 **Fully Responsive** - Works flawlessly on all devices
- 🔍 **SEO Optimized** - Built-in meta tags and Open Graph support
- ⚡ **Fast Performance** - Optimized Next.js 14 with App Router

---

## ✨ Features

### 🏠 Homepage
- **Hero Section** - Eye-catching introduction with animated gradients
- **Stats Section** - Display key metrics and achievements
- **Featured Apps** - Showcase your best applications
- **About Preview** - Quick introduction with link to full bio
- **CTA Section** - Call-to-action for engagement

### 📱 Apps Showcase
- **Apps Listing Page** - Browse all applications with filtering
- **Individual App Pages** - Detailed view with:
  - Hero image and icon
  - Full description and features
  - Tech stack display
  - Platform availability badges
  - Download/access links
  - Screenshots gallery
  - Related apps suggestions

### 👤 About Page
- **About Hero** - Professional introduction
- **Bio Section** - Detailed background
- **Skills Section** - Technical expertise showcase
- **Timeline Section** - Career/project history
- **Contact Section** - Get in touch form/links

### 🎨 UI Components
- **Animated Containers** - Smooth entrance animations
- **Platform Badges** - Visual platform indicators
- **Status Badges** - Active/Beta/Archived status
- **Tech Pills** - Technology stack display

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router |
| **React 18** | UI component library |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animation library |
| **Lucide React** | Icon library |
| **clsx** | Conditional className utility |

---

## 📁 Project Structure

```
my-website/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   │   └── page.tsx
│   ├── apps/                     # Apps section
│   │   ├── page.tsx              # Apps listing
│   │   └── [slug]/               # Dynamic app pages
│   │       └── page.tsx
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Homepage
│
├── components/                   # React components
│   ├── about/                    # About page components
│   │   ├── AboutHero.tsx
│   │   ├── BioSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── TimelineSection.tsx
│   ├── apps/                     # Apps components
│   │   └── ...
│   ├── home/                     # Homepage components
│   │   ├── AboutPreviewSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── FeaturedAppsSection.tsx
│   │   ├── HeroSection.tsx
│   │   └── StatsSection.tsx
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/                       # Reusable UI components
│       ├── AnimatedContainer.tsx
│       ├── PlatformBadge.tsx
│       ├── StatusBadge.tsx
│       └── TechPill.tsx
│
├── lib/                          # Utilities and data
│   ├── apps.ts                   # Apps data and helper functions
│   └── utils.ts                  # Utility functions
│
├── public/                       # Static assets
│   └── apps/                     # App icons and screenshots
│
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## ⚙️ Configuration

### Customizing Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    DEFAULT: "#00B8A9",  // Teal
    dark: "#009688",
    light: "#4DD0C4",
  },
  accent: {
    DEFAULT: "#FF6B35",  // Orange
    dark: "#E55A2B",
    light: "#FF8A5C",
  },
  background: {
    DEFAULT: "#0F172A",  // Dark blue
    light: "#1E293B",
    lighter: "#334155",
  },
  // ... more colors
}
```

### Updating Metadata

Edit `app/layout.tsx` to update SEO metadata:

```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Name | Developer Portfolio",
    template: "%s | Your Name",
  },
  description: "Your description here",
  // ... more metadata
};
```

---

## ➕ Adding New Apps

To add a new app to your portfolio, edit `lib/apps.ts`:

```typescript
{
  id: '5',
  slug: 'your-app-slug',
  name: 'Your App Name',
  tagline: 'Short catchy tagline',
  description: 'Detailed description of your app...',
  platforms: ['android', 'ios', 'web'],  // Supported: android, ios, windows, macos, web
  status: 'active',  // Options: active, beta, archived
  category: 'ai',    // Options: ai, productivity, utility, experimental
  featured: true,
  icon: '/apps/yourapp/icon.png',
  heroImage: '/apps/yourapp/hero.png',
  screenshots: [
    '/apps/yourapp/screen1.png',
    '/apps/yourapp/screen2.png',
  ],
  features: [
    {
      title: 'Feature Title',
      description: 'Feature description',
      icon: 'IconName',  // Lucide icon name
    },
  ],
  techStack: ['React', 'TypeScript', 'Node.js'],
  links: {
    playStore: 'https://play.google.com/...',
    appStore: 'https://apps.apple.com/...',
    web: 'https://yourapp.com',
    github: 'https://github.com/...',
  },
  releaseDate: '2025-01-22',
  version: '1.0.0',
  downloads: 1000,
  stars: 50,
  roadmap: ['Planned feature 1', 'Planned feature 2'],
}
```

---

## 🌐 Deployment

### Option 1: GitHub Pages (Static Export)

GitHub Pages hosts static sites. To deploy your Next.js site:

#### Step 1: Configure Next.js for Static Export

Update `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enable static export
    basePath: '/your-repo-name',  // Your GitHub repo name
    images: {
        unoptimized: true,  // Required for static export
    },
};

export default nextConfig;
```

#### Step 2: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push your changes to trigger the deployment

Your site will be available at: `https://yourusername.github.io/your-repo-name/`

---

### Option 2: Vercel (Recommended)

The easiest way to deploy Next.js:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

---

### Option 3: Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `.next` (or `out` for static export)

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#00B8A9` | Main brand color (Teal) |
| Accent | `#FF6B35` | CTAs and highlights (Orange) |
| Background | `#0F172A` | Page background (Dark Blue) |
| Surface | `#1E293B` | Cards and containers |
| Active | `#22C55E` | Active status (Green) |
| Beta | `#EAB308` | Beta status (Yellow) |
| Archived | `#EF4444` | Archived status (Red) |

### Typography

- **Sans Font**: Inter (modern, highly readable)
- **Mono Font**: JetBrains Mono (code snippets)

### Animations

- **Fade In**: Smooth opacity transition
- **Fade In Up**: Opacity + upward movement
- **Slide In Right**: Opacity + horizontal slide
- **Gradient**: Animated background gradient

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Your Name** - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/developer-portfolio](https://github.com/yourusername/developer-portfolio)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ using Next.js and TypeScript

</div>
