# Bento Portfolio

> A modern portfolio featuring the popular bento grid layout design.

Perfect for **UI/UX designers**, **frontend developers**, and **creatives** who want a visually striking portfolio.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Configuration Guide](#configuration-guide)
- [Customization](#customization)
- [Contact Form Setup](#contact-form-setup)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [License](#license)
- [Author](#author)

---

## Overview

A sleek portfolio template featuring the trending bento-box grid layout. Built with HTML, Tailwind CSS, and vanilla JavaScript for a clean, professional presentation.

### Preview

| Feature | Description |
|---------|-------------|
| Grid Layout | Modern bento-style card arrangement |
| Gradient Accents | Blue-purple color scheme |
| Hover Effects | Smooth lift and shadow animations |
| Progress Bars | Visual skill representation |

---

## Features

| Feature | Description |
|---------|-------------|
| **Bento Grid Layout** | Modern card-based design with varying sizes |
| **JSON-Driven Content** | Easy customization through JSON file |
| **Smooth Animations** | Float, fade-in, slide-in effects |
| **Progress Bars** | Animated skill progress bars |
| **Responsive Design** | Desktop, tablet, mobile optimized |
| **Dark Mode Ready** | Built-in Tailwind dark mode support |
| **Custom Error Pages** | Themed 404 and 405 pages |
| **SEO Optimized** | Meta tags and semantic HTML |

---

## Quick Start

### 1. Configure

Edit `portfolio-data.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title"
  }
}
```

### 2. Run

```bash
# Python
python -m http.server 8000

# Node.js
npx serve
```

### 3. Deploy

Upload to your preferred hosting service.

---

## Project Structure

```
bento/
├── index.html              # Main HTML
├── styles.css              # Custom styles & animations
├── script.js               # JavaScript functionality
├── portfolio-data.json     # Content configuration
├── privacy-policy.html     # Privacy policy page
├── terms-of-service.html   # Terms of service page
├── 404.html                # Error page
├── 405.html                # Error page
└── README.md               # This file
```

---

## Configuration Guide

### Meta Information

```json
{
  "meta": {
    "title": "Your Portfolio Title",
    "description": "SEO description",
    "keywords": "keyword1, keyword2",
    "canonical": "https://yourdomain.com/",
    "ogImage": "https://yourdomain.com/preview.jpg"
  }
}
```

### Header Navigation

```json
{
  "header": {
    "logoInitials": "YN",
    "logoText": "YourName",
    "navigation": [
      { "label": "Home", "href": "#hero-section" },
      { "label": "Skills", "href": "#skills-section" }
    ],
    "ctaButton": {
      "label": "Hire Me",
      "href": "#contact-section"
    }
  }
}
```

### Hero Section

```json
{
  "hero": {
    "tagline": "Your Role",
    "availabilityStatus": "Available for hire",
    "headline": {
      "line1": "Creative",
      "highlight1": "Designer",
      "connector": "&",
      "highlight2": "Developer"
    },
    "description": "Your introduction...",
    "profileImage": "path/to/image.jpg",
    "buttons": [
      {
        "label": "View Portfolio",
        "icon": "fa-solid fa-briefcase",
        "href": "#portfolio",
        "style": "primary"
      }
    ]
  }
}
```

### Skills

```json
{
  "skills": {
    "coreSkills": [
      {
        "name": "UI/UX Design",
        "icon": "fa-solid fa-palette",
        "percentage": 95,
        "color": "purple-blue"
      }
    ],
    "designTools": [
      {
        "name": "Figma",
        "icon": "fa-brands fa-figma",
        "level": "Expert",
        "bgColor": "purple"
      }
    ],
    "developmentTools": ["React", "Next.js", "Tailwind"]
  }
}
```

### Portfolio Projects

```json
{
  "portfolio": {
    "projects": [
      {
        "title": "Project Name",
        "description": "Project description",
        "image": "path/to/image.jpg",
        "tags": ["UI/UX", "Mobile"],
        "size": "large"
      }
    ]
  }
}
```

---

## Customization

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Blue Primary | `#3B82F6` | Buttons, links |
| Purple | `#9333EA` | Gradients, highlights |
| Green | `#22C55E` | Success, availability |
| Orange | `#F97316` | Warnings, accents |
| Gray Dark | `#1F2937` | Text, backgrounds |
| Gray Light | `#F9FAFB` | Light backgrounds |

### Modify Colors

Edit `styles.css`:

```css
.gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Animations

| Animation | Duration | Effect |
|-----------|----------|--------|
| `animate-float` | 6s | Floating motion |
| `animate-fade-in` | 1s | Fade in with slide |
| `animate-slide-in` | 0.8s | Slide from left |
| `floating` | 3s | Profile image float |
| `animate-pulse` | 2s | Status indicators |

### Adding Skills

Add to `portfolio-data.json`:

```json
{
  "name": "New Skill",
  "icon": "fa-solid fa-icon-name",
  "percentage": 85,
  "color": "blue-cyan"
}
```

### Adding Projects

Add to `portfolio-data.json`:

```json
{
  "title": "New Project",
  "description": "Project description",
  "image": "path/to/image.jpg",
  "tags": ["Tag1", "Tag2"],
  "size": "medium"
}
```

---

## Contact Form Setup

1. Create Google Sheet with headers
2. Add Apps Script from template
3. Deploy as Web App
4. Add URL to `portfolio-data.json`

---

## Deployment

### GitHub Pages

```bash
git push origin main
# Enable Pages in repository settings
```

### Netlify / Vercel

1. Connect repository
2. Auto-deploy on push

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Opera | ✅ Latest |

---

## Dependencies

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter) - Typography

---

## License

Open source for personal and commercial use.

---

## Author

**Siddharth Mahajan**

| Platform | Link |
|----------|------|
| Website | [siddharthmhjn.com](https://siddharthmhjn.com) |
| LinkedIn | [siddharth-mhjn](https://www.linkedin.com/in/siddharth-mhjn) |
| GitHub | [siddharth-mhjn](https://github.com/siddharth-mhjn) |

---

<p align="center">
  <strong>Powered by caffeine & siddharthmhjn.com</strong>
</p>
