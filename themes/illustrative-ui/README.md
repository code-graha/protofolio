# Illustrative UI Portfolio

> A playful, hand-drawn style portfolio with sketch borders and whimsical typography.

Perfect for **creative developers**, **designers**, and anyone who wants their portfolio to stand out with personality.

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

A unique portfolio template featuring hand-drawn sketch-style borders, playful rotations, whimsical typography, and fun emoji accents. Built with HTML, Tailwind CSS, and vanilla JavaScript.

### Preview

| Feature | Description |
|---------|-------------|
| Sketch Borders | Hand-drawn style borders |
| Playful Rotations | Tilted elements |
| Whimsical Fonts | Kalam, Comic Neue |
| Emoji Accents | Fun emoji throughout |
| Vibrant Green | Bright accent color |

---

## Features

| Feature | Description |
|---------|-------------|
| **Sketch-Style Design** | Unique hand-drawn borders |
| **JSON-Driven Content** | Easy customization |
| **Dark Mode Support** | Light/dark theme toggle |
| **Doodle Backgrounds** | Subtle dot patterns |
| **Scroll Animations** | Fade-in effects |
| **Timeline Experience** | Visual career layout |
| **Project Filters** | Filter by category |
| **Contact Form** | Ready-to-use form |
| **Mobile Responsive** | Full mobile menu |
| **Custom Error Pages** | Sketch-style 404/405 |

---

## Quick Start

### 1. Configure

Edit `portfolio-data.json`:

```json
{
  "intro": {
    "name": "Your Name!",
    "tagline": "Your Title"
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

Upload to your preferred hosting.

---

## Project Structure

```
illustrative-ui/
├── index.html              # Main HTML
├── styles.css              # Custom styles
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
    "keywords": "keyword1, keyword2",
    "canonical": "https://yourdomain.com/",
    "ogImage": "https://yourdomain.com/preview.jpg"
  }
}
```

### Intro Section

```json
{
  "intro": {
    "profileImage": "path/to/image.jpg",
    "greeting": "Hey, I'm",
    "name": "Your Name!",
    "tagline": "Your Title & Role",
    "description": "Your introduction text...",
    "buttons": [
      { "label": "View My Work", "href": "#projects", "style": "primary" }
    ],
    "socialLinks": [
      { "platform": "GitHub", "icon": "fa-github", "url": "#" }
    ]
  }
}
```

### Skills

```json
{
  "skills": {
    "categories": [
      {
        "title": "Category Name",
        "icon": "fa-code",
        "skills": [
          { "name": "Skill Name", "percentage": 95, "emoji": "rocket" }
        ]
      }
    ],
    "techStack": [
      { "name": "React", "icon": "fa-react", "color": "blue-600" }
    ]
  }
}
```

### Experience Timeline

```json
{
  "experience": {
    "timeline": [
      {
        "status": "Current",
        "period": "2022 - Present",
        "title": "Senior Developer",
        "company": "Company Name",
        "description": "Role description...",
        "tags": ["React", "Leadership"],
        "color": "bright-green"
      }
    ]
  }
}
```

### Projects

```json
{
  "projects": {
    "items": [
      {
        "title": "Project Name",
        "description": "Project description...",
        "image": "path/to/image.jpg",
        "badge": "Featured",
        "badgeColor": "bright-green",
        "tags": ["React", "Node.js"],
        "demoUrl": "#",
        "codeUrl": "#"
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
| Deep Blue | `#001F3F` | Text, headings |
| Soft Gray | `#F0F0F0` | Backgrounds |
| Bright Green | `#2ECC40` | Accents, borders |

### Typography

| Font | Usage |
|------|-------|
| Inter | Body text |
| Kalam | Sketch-style headings |
| Comic Neue | Playful body text |

### The Sketch Border Effect

```css
.sketch-border {
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    border: 3px solid #2ECC40;
}
```

### Animations

| Animation | Effect |
|-----------|--------|
| Scroll reveal | Sections fade in on scroll |
| Hover scale | Elements scale on hover |
| Rotation | Playful element rotations |
| Bounce | Scroll indicator bounces |

### Change Accent Color

1. Edit `portfolio-data.json` and HTML
2. Replace `#2ECC40` with your color
3. Update Tailwind config:

```javascript
colors: {
    'bright-green': '#YOUR_COLOR'
}
```

### Rotation Classes

- `rotate-1`, `rotate-2`, `rotate-3`
- `-rotate-1`, `-rotate-2`
- `rotate-12`, `-rotate-12`

---

## Contact Form Setup

1. Create Google Sheet
2. Add Apps Script
3. Deploy as Web App
4. Add URL to config

---

## Deployment

### GitHub Pages

```bash
git push origin main
# Enable in settings
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
- [Google Fonts](https://fonts.google.com/) - Inter, Kalam, Comic Neue

---

## Sections Included

1. **Header** - Logo, navigation, theme toggle
2. **Intro** - Hero with profile, greeting
3. **About** - Bio, fun facts, mission cards
4. **Skills** - Categories with progress bars
5. **Experience** - Timeline layout
6. **Projects** - Cards with filters
7. **Testimonials** - Reviews with ratings
8. **Contact** - Form with social links
9. **Footer** - Logo, quick links

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
