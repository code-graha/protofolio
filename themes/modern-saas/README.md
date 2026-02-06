# Modern SaaS Portfolio

> A professional, sleek portfolio with a modern SaaS-inspired corporate design.

Perfect for **tech professionals**, **software engineers**, **solution architects**, and anyone wanting a clean, corporate-ready portfolio.

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

A responsive portfolio template with a modern SaaS aesthetic featuring gradient accents, smooth animations, and a timeline-style experience section. Built with HTML, Tailwind CSS, and vanilla JavaScript.

### Preview

| Feature | Description |
|---------|-------------|
| Gradient Theme | Indigo-purple color scheme |
| Card Designs | Modern hover effects |
| Timeline | Experience timeline |
| Progress Bars | Animated skill bars |

---

## Features

| Feature | Description |
|---------|-------------|
| **Modern SaaS Design** | Professional corporate aesthetic |
| **JSON-Driven Content** | Easy customization |
| **Gradient Accents** | Indigo-to-purple theme |
| **Timeline Experience** | Visual work history |
| **Animated Elements** | Float, fade, slide effects |
| **Progress Skill Bars** | Visual skill representation |
| **Mobile Responsive** | Full mobile menu |
| **Contact Form** | Google Apps Script ready |
| **Privacy/Terms Modals** | Built-in legal modals |
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
modern-saas/
├── index.html           # Main HTML
├── styles.css           # Custom styles & animations
├── script.js            # JavaScript functionality
├── portfolio-data.json  # Content configuration
├── google-apps-script.js # Contact form backend
├── 404.html             # Error page
├── 405.html             # Error page
└── README.md            # This file
```

---

## Configuration Guide

### Meta Information

```json
{
  "meta": {
    "title": "Your Portfolio Title",
    "description": "SEO description"
  }
}
```

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
    "isAvailable": true,
    "availability": "Available for Work",
    "availabilitySubtext": "Consulting & Projects",
    "yearsExperience": "10+",
    "projectsCompleted": "50+",
    "awardsCount": "15+",
    "resume": "/resources/resume.pdf",
    "heroImage": "/resources/profile.jpg",
    "googleScriptURL": "YOUR_SCRIPT_URL",
    "socialLinks": [
      { "name": "LinkedIn", "url": "#", "icon": "fa-brands fa-linkedin" }
    ]
  }
}
```

### Hero Section

```json
{
  "hero": {
    "title1": "First Line of Title",
    "title2": "Second Line of Title",
    "description": "Your hero description...",
    "experienceBadge": "10+ Years Experience"
  }
}
```

### About Section

```json
{
  "about": {
    "title": "About Section Title",
    "subtitle": "About section subtitle",
    "cards": [
      {
        "icon": "fa-solid fa-code",
        "title": "Card Title",
        "description": "Card description...",
        "gradient": "from-blue-50 to-indigo-50",
        "borderColor": "indigo",
        "iconBg": "indigo-600"
      }
    ],
    "journey": [
      "Journey highlight 1...",
      "Journey highlight 2..."
    ],
    "skillBars": [
      {
        "name": "Skill Name",
        "percentage": 90,
        "gradient": "from-blue-600 to-indigo-600"
      }
    ]
  }
}
```

### Experience Timeline

```json
{
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "period": "2020 - Present",
      "duration": "4+ Years",
      "isCurrent": true,
      "color": "indigo",
      "responsibilities": ["Task 1", "Task 2"],
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

### Skills

```json
{
  "skills": {
    "Category Name": {
      "icon": "fa-solid fa-code",
      "gradient": "from-blue-50 to-indigo-50",
      "borderColor": "indigo",
      "iconBg": "indigo-600",
      "technologies": [
        { "name": "Tech Name", "icon": "fa-brands fa-python", "color": "blue-600" }
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
      "id": "project1",
      "title": "Project Name",
      "description": "Project description...",
      "image": "path/to/image.jpg",
      "gradient": "from-blue-500 to-indigo-600",
      "icon": "fa-solid fa-project-diagram",
      "technologies": ["Tech1", "Tech2"],
      "link": "https://github.com/project"
    }
  ]
}
```

### Certifications & Awards

```json
{
  "certifications": [
    {
      "title": "Certification Name",
      "issuer": "Issuing Organization",
      "level": "Level/Type",
      "description": "Description...",
      "icon": "fa-solid fa-certificate",
      "color": "indigo"
    }
  ],
  "awards": [
    {
      "title": "Award Name",
      "date": "2023",
      "issuer": "Organization",
      "description": "Description...",
      "icon": "fa-solid fa-trophy",
      "color": "yellow"
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
      "role": "Job Title",
      "company": "Company Name",
      "image": "/resources/person.jpg",
      "quote": "Testimonial quote...",
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
| Primary (Indigo) | `#6366f1` | Buttons, links |
| Secondary (Purple) | `#8b5cf6` | Gradients |
| Pink | `#ec4899` | Gradient endpoints |
| Gray Dark | `#111827` | Footer |
| Gray Light | `#f9fafb` | Backgrounds |

### Animations

| Animation | Duration | Effect |
|-----------|----------|--------|
| `animate-float` | 6s | Floating motion |
| `animate-fadeIn` | 0.6s | Fade in slide |
| `animate-slideIn` | 0.6s | Slide from left |
| `pulse` | 2s | Timeline dots |
| `card-hover` | 0.3s | Lift with shadow |

### Modify Colors

Edit Tailwind config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#YOUR_COLOR',
                secondary: '#YOUR_COLOR'
            }
        }
    }
}
```

---

## Contact Form Setup

1. Create Google Sheet with headers
2. Add Apps Script from `google-apps-script.js`
3. Deploy as **Web App** (Anyone can access)
4. Add URL to `portfolio-data.json`:

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
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter) - Typography

---

## Sections Included

1. **Header** - Logo, navigation, social links, resume
2. **Hero** - Stats, availability badge, profile image
3. **About** - Cards, journey, skill progress bars
4. **Experience** - Timeline of work history
5. **Skills** - Categorized technology cards
6. **Projects** - Showcase with GitHub banner
7. **Certifications & Awards** - Credentials
8. **Testimonials** - Reviews with ratings
9. **Contact** - Form with info card
10. **Footer** - Links, privacy/terms modals

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
