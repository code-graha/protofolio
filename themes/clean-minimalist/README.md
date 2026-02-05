# Clean Minimalist Portfolio

> A modern, elegant portfolio with a clean design and dark/light theme support.

Perfect for **corporate professionals**, **freelancers**, and anyone who values simplicity and professionalism.

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

A responsive portfolio template built with HTML, Tailwind CSS, and vanilla JavaScript. Features automatic system theme detection, smooth animations, and a JSON-based content management system.

### Preview

| Light Mode | Dark Mode |
|------------|-----------|
| Clean white background | Deep navy background |
| Sky blue accents | Sky blue accents |
| Smooth transitions | Smooth transitions |

---

## Features

| Feature | Description |
|---------|-------------|
| **Responsive Design** | Mobile-first approach, works on all devices |
| **Dark/Light Theme** | Toggle with system preference detection |
| **JSON-Based Content** | Easy content management via single file |
| **Smooth Animations** | Scroll reveal, hover effects, transitions |
| **Contact Form** | Google Apps Script integration |
| **SEO Optimized** | Meta tags, Open Graph, semantic HTML |
| **Custom Error Pages** | Themed 404 and 405 pages |

---

## Quick Start

### 1. Download

```bash
git clone https://github.com/siddharth-mhjn/my-portfolio.git
cd my-portfolio/portofolio/themes/clean-minimalist
```

### 2. Configure

Edit `portfolio-data.json` with your information:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your@email.com"
  }
}
```

### 3. Replace Assets

- `Profile_Photo.png` - Your profile photo
- `Banner_Photo.png` - Hero section banner
- `Resume.pdf` - Your resume
- `favicon.jpg` - Site favicon

### 4. Run

```bash
# Python
python -m http.server 8000

# Node.js
npx serve
```

### 5. Deploy

Upload to GitHub Pages, Netlify, or Vercel.

---

## Project Structure

```
clean-minimalist/
├── index.html              # Main HTML
├── styles.css              # Custom styles & animations
├── script.js               # JavaScript functionality
├── portfolio-data.json     # Content configuration
├── google-apps-script.js   # Contact form backend
├── 404.html                # Error page
├── 405.html                # Error page
├── Resume.pdf              # Your resume
├── Profile_Photo.png       # Profile image
├── Banner_Photo.png        # Hero banner
├── favicon.jpg             # Site icon
└── README.md               # This file
```

---

## Configuration Guide

### Personal Information

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "subtitle": "Your Specialties",
    "location": "Your Location",
    "email": "your.email@example.com",
    "yearsExperience": "X+",
    "projectsCompleted": "X+",
    "resume": "Resume.pdf",
    "profilePhoto": "Profile_Photo.png",
    "bannerPhoto": "Banner_Photo.png",
    "socialLinks": [
      { "name": "LinkedIn", "url": "https://linkedin.com/in/you" },
      { "name": "GitHub", "url": "https://github.com/you" }
    ]
  }
}
```

### Skills

```json
{
  "skills": {
    "Category Name": {
      "icon": "fas fa-icon-name",
      "technologies": ["Tech1", "Tech2", "Tech3"]
    }
  }
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
      "icon": "fas fa-building",
      "gradient": "from-sky-blue to-blue-500",
      "description": "Job description...",
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

### Projects

```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description...",
      "image": "project-image.png",
      "technologies": ["Tech1", "Tech2"],
      "link": "https://github.com/your-repo"
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
      "icon": "fas fa-certificate"
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
| Soft White | `#FAFAFA` | Light mode background |
| Deep Navy | `#040C3B` | Dark mode background |
| Sky Blue | `#6CCFF6` | Accents, buttons |
| Dark Gray | `#121212` | Text |

### Modify Colors

Edit Tailwind config in `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "soft-white": "#FAFAFA",
        "deep-navy": "#040C3B",
        "sky-blue": "#6CCFF6",
        "dark-gray": "#121212"
      }
    }
  }
}
```

### Animations

| Animation | Description |
|-----------|-------------|
| `.fade-up-big` | Scroll reveal effect |
| `.hover-card-big` | Card lift and tilt |
| `.image-zoom` | Image zoom on hover |
| Nav underline | Animated navigation links |

---

## Contact Form Setup

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create new spreadsheet
3. Add headers: `Timestamp`, `Name`, `Email`, `Subject`, `Message`

### Step 2: Add Script

1. **Extensions > Apps Script**
2. Paste code from `google-apps-script.js`
3. Update notification email
4. Save

### Step 3: Deploy

1. **Deploy > New deployment**
2. Select **Web app**
3. Execute as: **Me**
4. Access: **Anyone**
5. Copy URL

### Step 4: Configure

Add URL to `portfolio-data.json`:

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
4. Site live at `username.github.io/repo`

### Netlify

1. Connect repository
2. Deploy automatically

### Vercel

1. Import project
2. Deploy with zero config

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
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter) - Typography

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
