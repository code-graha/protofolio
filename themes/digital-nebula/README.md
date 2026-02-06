# Digital Nebula Portfolio

> A futuristic cyber-themed portfolio with glowing effects and animated backgrounds.

Perfect for **cloud engineers**, **DevOps professionals**, **solution architects**, and tech enthusiasts who want a cutting-edge presentation.

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

A stunning portfolio template featuring a cyber-themed design with glowing gradients, floating blob animations, and a dark futuristic aesthetic. Built with HTML, Tailwind CSS, and vanilla JavaScript.

### Preview

| Feature | Description |
|---------|-------------|
| Dark Theme | Cyber-dark background |
| Glowing Effects | Neon gradient accents |
| Floating Blobs | Animated background elements |
| Code Demos | Syntax-highlighted code sections |

---

## Features

| Feature | Description |
|---------|-------------|
| **Cyber Theme** | Futuristic dark design |
| **Gradient Effects** | Blue-purple-pink glows |
| **Animated Blobs** | Floating background elements |
| **JSON-Driven** | Easy content management |
| **Code Demos** | Interactive syntax highlighting |
| **Responsive Design** | All device sizes |
| **Contact Form** | Google Apps Script ready |
| **Privacy/Terms Modals** | Built-in legal pages |
| **Custom Error Pages** | Themed 404 and 405 |

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

Upload to your preferred hosting.

---

## Project Structure

```
digital-nebula/
├── index.html           # Main HTML
├── styles.css           # Custom styles & animations
├── script.js            # JavaScript functionality
├── portfolio-data.json  # Content configuration
├── 404.html             # Error page
├── 405.html             # Error page
└── README.md            # This file
```

---

## Configuration Guide

### Personal Information

```json
{
  "personal": {
    "name": "Your Name",
    "initials": "YN",
    "title": "Your Job Title",
    "subtitle": "Your Specialties",
    "location": "Your Location",
    "email": "your.email@example.com",
    "phone": "+00 000 000 0000",
    "availability": "Available for Work",
    "yearsExperience": "5+",
    "projectsCompleted": "20+",
    "resume": "/resources/Resume.pdf",
    "socialLinks": [
      {
        "name": "LinkedIn",
        "url": "https://linkedin.com/in/you",
        "icon": "fa-brands fa-linkedin"
      }
    ]
  }
}
```

### Skills

```json
{
  "skills": {
    "Category Name": {
      "icon": "fa-solid fa-code",
      "gradient": "from-cyber-blue to-cyber-purple",
      "borderColor": "border-cyber-blue/30",
      "technologies": [
        { "icon": "fa-brands fa-python", "name": "Python" }
      ]
    }
  }
}
```

### Projects

```json
{
  "projects": [
    {
      "icon": "fa-solid fa-project-diagram",
      "title": "Project Name",
      "description": "Project description.",
      "gradient": "from-cyber-blue to-cyber-purple",
      "borderColor": "border-cyber-blue/30",
      "glowColor": "bg-cyber-blue/10",
      "technologies": ["Tech1", "Tech2"],
      "link": "https://github.com/yourproject"
    }
  ]
}
```

### Experience

```json
{
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "period": "Start - End",
      "duration": "2Y",
      "isCurrent": false,
      "color": "cyber-blue",
      "responsibilities": ["Task 1", "Task 2"],
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

### Certifications

```json
{
  "certifications": [
    {
      "name": "Certification Name",
      "issuer": "Issuing Organization",
      "date": "Date",
      "icon": "fa-solid fa-certificate",
      "color": "cyber-blue"
    }
  ]
}
```

### Testimonials

```json
{
  "testimonials": [
    {
      "name": "Person Name",
      "role": "Their Role",
      "company": "Company",
      "image": "person.jpg",
      "quote": "Testimonial text...",
      "rating": 5
    }
  ]
}
```

---

## Customization

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| cyber-dark | `#0a0a0f` | Background |
| cyber-darker | `#050508` | Card backgrounds |
| cyber-blue | `#667eea` | Primary accent |
| cyber-purple | `#764ba2` | Secondary accent |
| cyber-violet | `#8b5cf6` | Tertiary accent |
| cyber-pink | `#f093fb` | Highlight accent |

### Animations

| Animation | Description |
|-----------|-------------|
| `float` | Smooth floating for blobs |
| `glow` | Pulsing glow effect |
| `glitch` | Glitch effect for error pages |
| `flicker` | Flickering effect |
| `scan` | Scanning line effect |
| `pulse-border` | Pulsing border animation |
| `shake` | Shake effect |

### Modify Colors

Edit Tailwind config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'cyber-blue': '#YOUR_COLOR',
                'cyber-purple': '#YOUR_COLOR'
            }
        }
    }
}
```

---

## Contact Form Setup

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create spreadsheet with headers:
   - `Timestamp`, `Name`, `Email`, `Subject`, `Message`

### Step 2: Add Apps Script

1. **Extensions > Apps Script**
2. Paste the provided script
3. Update email address
4. Save

### Step 3: Deploy

1. **Deploy > New deployment**
2. Select **Web app**
3. Execute as: **Me**
4. Access: **Anyone**
5. Copy URL

### Step 4: Configure

```json
{
  "personal": {
    "googleScriptURL": "https://script.google.com/macros/s/YOUR_ID/exec"
  }
}
```

---

## Deployment

### GitHub Pages

1. Push to GitHub
2. **Settings > Pages**
3. Select branch
4. Live at `username.github.io/repo`

### Netlify / Vercel

Connect repository and auto-deploy.

### Custom Domain

1. Add `CNAME` file
2. Configure DNS
3. Enable HTTPS

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |

---

## Dependencies

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Inter, JetBrains Mono

---

## Sections Included

1. **Hero** - Introduction with animated elements
2. **About** - Professional summary with expertise cards
3. **Skills** - Categorized with icons
4. **Projects** - Showcases with tech tags
5. **Experience** - Work timeline
6. **Certifications** - Professional credentials
7. **Testimonials** - Colleague recommendations
8. **Architecture & Code** - Interactive demos
9. **Contact** - Form with social links

---

## License

Open source for personal use.

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
