# PROTOFOLIO

> **portFOLIOs, PROTOtyped for You**

A retro terminal-style landing page showcasing a collection of modern, responsive portfolio templates. Choose your style and customize it with your own content.

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Available Templates](#available-templates)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Customization](#customization)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [License](#license)
- [Author](#author)

---

## Overview

PROTOFOLIO is a curated collection of 6 professionally designed portfolio templates, each with a unique aesthetic. The landing page features a retro terminal design that showcases all templates with live iframe previews.

### Key Features

| Feature | Description |
|---------|-------------|
| **6 Unique Templates** | Clean Minimalist, Bento, Retro Gaming, Illustrative UI, Modern SaaS, Digital Nebula |
| **Live Previews** | Real-time iframe previews of each template |
| **JSON-Driven** | All content configurable via JSON files |
| **Fully Responsive** | Mobile-first design across all templates |
| **Contact Form Ready** | Google Apps Script integration |
| **SEO Optimized** | Meta tags, Open Graph, semantic HTML |
| **DevTools Protection** | Optional security feature |
| **Custom Error Pages** | Themed 404 and 405 pages |

---

## Live Demo

[View PROTOFOLIO](https://your-domain.com)

---

## Available Templates

| # | Template | Style | Best For |
|---|----------|-------|----------|
| 1 | **Clean Minimalist** | Light/Dark, Professional | Corporate, Freelancers |
| 2 | **Bento** | Grid Layout, Modern | UI/UX Designers, Creatives |
| 3 | **Retro Gaming** | Pixel Art, Neon | Game Developers, Pixel Artists |
| 4 | **Illustrative UI** | Hand-drawn, Playful | Creative Developers, Designers |
| 5 | **Modern SaaS** | Corporate, Gradient | Tech Professionals, Engineers |
| 6 | **Digital Nebula** | Cyber, Futuristic | Cloud Engineers, DevOps |

Each template includes:
- Responsive design for all devices
- JSON-based content management
- Contact form with Google Apps Script
- Privacy Policy & Terms modals
- Custom 404/405 error pages

---

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/siddharth-mhjn/my-portfolio.git
cd my-portfolio/portofolio
```

### 2. Choose Your Template

Navigate to the `themes/` folder and pick your preferred template:

```
themes/
├── clean-minimalist/
├── bento/
├── retro-gaming/
├── illustrative-ui/
├── modern-saas/
└── digital-nebula/
```

### 3. Customize Your Content

Edit the `portfolio-data.json` file in your chosen template folder:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com"
  }
}
```

### 4. Run Locally

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

### 5. Deploy

Upload to GitHub Pages, Netlify, Vercel, or any static hosting service.

---

## Project Structure

```
portofolio/
├── index.html                  # Landing page
├── style.css                   # Landing page styles
├── script.js                   # DevTools protection
├── portfolios-data.json        # Landing page configuration
├── 404.html                    # Custom error page
├── 405.html                    # Custom error page
├── README.md                   # This file
│
├── resources/                  # Shared resources
│   └── resume.pdf              # Resume file
│
└── themes/                     # Portfolio templates
    ├── clean-minimalist/
    │   ├── index.html
    │   ├── styles.css
    │   ├── script.js
    │   ├── portfolio-data.json
    │   └── README.md
    │
    ├── bento/
    ├── retro-gaming/
    ├── illustrative-ui/
    ├── modern-saas/
    └── digital-nebula/
```

---

## Configuration

### Landing Page Configuration

Edit `portfolios-data.json`:

```json
{
  "site": {
    "name": "PROTOFOLIO",
    "tagline": "portFOLIOs, PROTOtyped for You",
    "year": "2025",
    "footerText": "Powered by caffeine &",
    "poweredBy": "siddharthmhjn.com",
    "poweredByUrl": "https://siddharthmhjn.com"
  },
  "contact": {
    "whatsapp": "https://wa.me/YOUR_NUMBER",
    "label": "Contact Us"
  },
  "portfolios": [
    {
      "id": 1,
      "name": "TEMPLATE NAME",
      "tag": "Style • Keywords",
      "url": "themes/template-folder/",
      "file": "TEMPLATE_01.EXE",
      "features": ["Feature 1", "Feature 2", "Feature 3"]
    }
  ]
}
```

### Template Configuration

Each template has its own `portfolio-data.json`. Common sections:

| Section | Description |
|---------|-------------|
| `meta` | SEO title, description, keywords |
| `personal` | Name, title, email, social links |
| `skills` | Technical skills by category |
| `experience` | Work history timeline |
| `projects` | Portfolio projects |
| `certifications` | Professional certifications |
| `testimonials` | Client/colleague reviews |
| `footer` | Copyright, services |

---

## Customization

### Change Landing Page Colors

Edit `style.css`:

```css
:root {
  --bg-color: #333333;
  --primary-green: #03FF00;
  --border-green: #00ff66;
}
```

### Change Template Theme

Each template has customizable colors in their respective `styles.css` or Tailwind config in `index.html`.

### Setup Contact Form

1. Create a Google Sheet
2. Go to **Extensions > Apps Script**
3. Paste the code from `google-apps-script.js`
4. Deploy as **Web App** (Anyone can access)
5. Copy the URL to your `portfolio-data.json`:

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

1. Push code to GitHub
2. Go to **Settings > Pages**
3. Select branch and folder
4. Your site will be live at `https://username.github.io/repo-name`

### Netlify / Vercel

1. Connect your GitHub repository
2. Set build settings (none needed for static sites)
3. Deploy automatically on push

### Custom Domain

1. Add `CNAME` file with your domain
2. Configure DNS with your registrar
3. Enable HTTPS in hosting settings

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |
| Opera | Latest |

---

## License

This project is open source and available for personal and commercial use.

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
