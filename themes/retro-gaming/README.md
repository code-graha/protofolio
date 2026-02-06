# Retro Gaming Portfolio

> A nostalgic pixel-art themed portfolio with neon colors and CRT effects.

Perfect for **game developers**, **pixel artists**, and **indie creators** who want a unique, eye-catching design.

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

A retro gaming themed portfolio template featuring authentic 8-bit aesthetics, CRT screen effects, floating pixel particles, and vibrant neon colors. Built with HTML, Tailwind CSS, and vanilla JavaScript.

### Preview

| Feature | Description |
|---------|-------------|
| Pixel Borders | Authentic 8-bit style borders |
| CRT Effects | Scanlines and screen borders |
| Neon Colors | Vibrant pink, blue, green, purple |
| Floating Particles | Animated pixel particles |

---

## Features

| Feature | Description |
|---------|-------------|
| **Retro Gaming Theme** | 8-bit inspired pixel-perfect design |
| **CRT Screen Effects** | Borders, scanlines, glow effects |
| **Floating Particles** | Colorful animated particles |
| **Glitch Animations** | Hover glitch effects |
| **JSON-Driven Content** | Easy customization |
| **Mobile Responsive** | Slide-out mobile menu |
| **Contact Form** | Google Apps Script ready |
| **Custom Error Pages** | Themed 404 and 405 pages |

---

## Quick Start

### 1. Configure

Edit `portfolio-data.json`:

```json
{
  "profile": {
    "name": "YOUR NAME",
    "title": "GAME DEVELOPER"
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
retro-gaming/
├── index.html              # Main HTML
├── styles.css              # Custom styles & effects
├── script.js               # JavaScript functionality
├── portfolio-data.json     # Content configuration
├── google-apps-script.js   # Contact form backend
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
    "canonical": "https://yoursite.com/",
    "ogImage": "https://yoursite.com/preview.jpg"
  }
}
```

### Profile Card

```json
{
  "profile": {
    "image": "path/to/profile.jpg",
    "name": "YOUR NAME",
    "title": "YOUR TITLE",
    "socialLinks": [
      {
        "icon": "fa-brands fa-github",
        "url": "https://github.com/you",
        "color": "retro-blue"
      }
    ]
  }
}
```

### Quick Stats (Skill Tree)

```json
{
  "quickStats": [
    { "name": "Unity", "percentage": 95, "color": "retro-purple" },
    { "name": "Godot", "percentage": 90, "color": "retro-blue" },
    { "name": "Pixel Art", "percentage": 92, "color": "retro-pink" }
  ]
}
```

### Games / Projects

```json
{
  "projects": {
    "sectionTitle": "MY GAMES",
    "items": [
      {
        "id": "project-1",
        "title": "GAME TITLE",
        "description": "Game description...",
        "image": "path/to/screenshot.jpg",
        "headerColor": "retro-pink",
        "tags": ["Unity", "Action", "Platformer"],
        "link": "https://itch.io/your-game"
      }
    ]
  }
}
```

### Quest Log (Experience)

```json
{
  "experience": {
    "sectionTitle": "QUEST LOG",
    "items": [
      {
        "title": "LEAD GAME DEVELOPER",
        "company": "Studio Name",
        "period": "2022 - Present",
        "description": "Role description...",
        "icon": "fa-solid fa-crown",
        "iconBg": "retro-purple",
        "tags": ["Unity", "Team Lead", "Steam"]
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
| Retro Purple | `#8A2BE2` | Headers, accents |
| Retro Pink | `#FF6EC7` | Tags, highlights |
| Retro Blue | `#00BFFF` | Links, icons |
| Retro Green | `#00FF7F` | Success, buttons |
| Retro Yellow | `#FFFF00` | Warnings, hover |
| Retro Orange | `#FF8C00` | Secondary accents |
| Retro Black | `#111111` | Borders, text |

### Modify Colors

Edit Tailwind config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'retro-purple': '#YOUR_COLOR',
                'retro-pink': '#YOUR_COLOR'
            }
        }
    }
}
```

### Animations

| Animation | Duration | Effect |
|-----------|----------|--------|
| `animate-glitch` | 2s | Glitch/shake on hover |
| `animate-pulse-retro` | 2s | Pulsing box shadow |
| `animate-float` | 3s | Floating motion |
| `animate-scanline` | 3s | CRT scanline |
| `animate-typewriter` | 3s | Typewriter text |
| `fade-in-up` | 0.6s | Fade in slide up |
| `hover-lift` | 0.3s | Lift with shadow |

### Screen Effects

**CRT Border:**
```css
#screen-border {
    border: 8px solid #111111;
}
```

**Scanlines:**
```css
#screen-scanlines {
    animation: scanline 3s linear infinite;
}
```

**Floating Particles:**
```html
<div class="absolute top-20 left-10 w-2 h-2 bg-retro-pink animate-float"></div>
```

---

## Contact Form Setup

1. Create Google Sheet
2. Add Apps Script
3. Deploy as Web App
4. Add URL to `portfolio-data.json`:

```json
{
  "contact": {
    "scriptURL": "YOUR_GOOGLE_SCRIPT_URL"
  }
}
```

---

## Deployment

### GitHub Pages

```bash
git push origin main
# Enable in repository settings
```

### Netlify / Vercel

Connect and auto-deploy.

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
- [Google Fonts](https://fonts.google.com/) - Press Start 2P, VT323, Inter

---

## Sections Included

1. **Header** - PIXEL.DEV logo, navigation
2. **Sidebar** - Profile card, skill tree, contact
3. **About** - Introduction with tech tags
4. **My Games** - Project grid with hover
5. **Skill Tree** - Categorized skills
6. **Quest Log** - Experience timeline
7. **Player Reviews** - Testimonials
8. **Achievements** - Certifications
9. **Press Start** - Contact form
10. **Footer** - Social links

---

## License

Open source for personal and commercial use.

---

## Author

**siddharthmhjn**

| Platform | Link |
|----------|------|
| Website | [siddharthmhjn.com](https://siddharthmhjn.com) |
| LinkedIn | [siddharth-mhjn](https://www.linkedin.com/in/siddharth-mhjn) |
| GitHub | [siddharth-mhjn](https://github.com/siddharth-mhjn) |

---

<p align="center">
  <strong>Powered by caffeine & siddharthmhjn.com</strong>
</p>
