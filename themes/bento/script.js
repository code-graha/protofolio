/**
 * Bento Portfolio - JavaScript
 * Handles dynamic content loading, animations, and interactions
 */

// Disable right-click
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable specific key combinations
document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        return false;
    }
});

// Detect DevTools open (works in both standalone and iframe)
let devtoolsOpen = false;
const threshold = 160;
const isInIframe = window.self !== window.top;

setInterval(function () {
    let devtoolsDetected = false;

    if (isInIframe) {
        // For iframe: use console timing detection
        const element = new Image();
        Object.defineProperty(element, 'id', {
            get: function () {
                devtoolsDetected = true;
            }
        });
        console.log('%c', element);
    } else {
        // For standalone: use window size detection
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        devtoolsDetected = widthThreshold || heightThreshold;
    }

    if (devtoolsDetected) {
        if (!devtoolsOpen) {
            devtoolsOpen = true;
            window.location.replace("405");
        }
    } else {
        devtoolsOpen = false;
    }
}, 1000);

// Portfolio Data
let portfolioData = null;

// Default Portfolio Data (used when JSON fails to load)
const defaultPortfolioData = {
    meta: {
        title: "Siddharth Mahajan | Solution Architect & Cloud Engineer",
        description: "Portfolio of Siddharth Mahajan, a Solution Architect and Cloud Engineer with 3+ years of experience building scalable cloud-native systems, Kubernetes platforms, and service mesh solutions.",
        keywords: "Solution Architect, Cloud Engineer, Kubernetes, Service Mesh, DevOps, Full-Stack Developer, Azure, AWS, Platform Engineering",
        canonical: "https://www.siddharthmahajan.dev/",
        ogImage: "https://www.siddharthmahajan.dev/preview.jpg"
    },
    header: {
        logoInitials: "SM",
        logoText: "SiddharthMahajan",
        navigation: [
            { label: "Home", href: "#hero-section" },
            { label: "Expertise", href: "#skills-section" },
            { label: "Portfolio", href: "#portfolio-section" },
            { label: "About", href: "#about-section" }
        ],
        ctaButton: {
            label: "Hire Me",
            href: "#contact-section"
        }
    },
    hero: {
        tagline: "Solution Architect",
        availabilityStatus: "Available for Technical Consulting",
        headline: {
            line1: "Cloud",
            highlight1: "Architect",
            connector: "&",
            highlight2: "Engineer"
        },
        description: "I design and build scalable, secure cloud-native systems that power modern enterprises. Specializing in Kubernetes orchestration, service mesh implementations, and platform engineering that drives operational excellence.",
        profileImage: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
        buttons: [
            { label: "View Portfolio", icon: "fa-solid fa-briefcase", href: "#portfolio-section", style: "primary" },
            { label: "Download CV", icon: "fa-solid fa-download", href: "/resources/Resume.pdf", style: "secondary" },
            { label: "Book Call", icon: "fa-solid fa-calendar", href: "#contact-section", style: "accent" }
        ]
    },
    statusCards: [
        {
            title: "Available for Work",
            description: "Ready for technical consulting and cloud architecture projects",
            footer: "Next availability: Immediate",
            icon: "fas fa-calendar-alt",
            style: "gradient-green"
        },
        {
            title: "Experience",
            value: "3+ Years",
            description: "Professional Cloud Engineering Experience",
            footer: "10+ Projects Delivered",
            icon: "fas fa-trophy",
            style: "white"
        },
        {
            title: "Colleague Rating",
            value: "4.0/5.0",
            description: "Based on peer reviews",
            stars: 4,
            style: "gradient-purple"
        }
    ],
    stats: [
        { icon: "fas fa-project-diagram", value: "10+", label: "Projects Completed", sublabel: "Kubernetes & Cloud solutions", color: "blue" },
        { icon: "fas fa-users", value: "3", label: "Companies", sublabel: "Professional experience", color: "purple" },
        { icon: "fas fa-award", value: "3", label: "Awards Won", sublabel: "Technical excellence", color: "green" },
        { icon: "fas fa-clock", value: "3+", label: "Years Experience", sublabel: "Professional journey", color: "orange" }
    ],
    skills: {
        sectionTitle: "Skills & Expertise",
        sectionSubtitle: "Technologies and tools I use to build scalable cloud infrastructure",
        coreSkills: [
            { name: "Cloud Architecture", icon: "fa-solid fa-cloud", percentage: 95, color: "purple-blue" },
            { name: "Kubernetes & DevOps", icon: "fa-solid fa-dharmachakra", percentage: 92, color: "green-teal" },
            { name: "Full-Stack Development", icon: "fa-solid fa-code", percentage: 88, color: "orange-red" },
            { name: "Service Mesh", icon: "fa-solid fa-network-wired", percentage: 90, color: "blue-cyan" }
        ],
        designTools: [
            { name: "Kubernetes", icon: "fa-solid fa-dharmachakra", level: "Expert", bgColor: "purple" },
            { name: "Docker", icon: "fa-brands fa-docker", level: "Expert", bgColor: "blue" },
            { name: "Azure/AWS", icon: "fa-solid fa-cloud", level: "Advanced", bgColor: "green" },
            { name: "Istio", icon: "fa-solid fa-network-wired", level: "Expert", bgColor: "orange" }
        ],
        developmentTools: ["Spring Boot", "Vue.js", "Python", "Shell Scripting"]
    },
    portfolio: {
        sectionTitle: "Featured Work",
        sectionSubtitle: "A selection of my cloud engineering projects",
        projects: [
            {
                title: "Multi-Cluster Kubernetes",
                description: "Enterprise-grade K8s platform with automated deployment and service mesh",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/369be2de88-58a829a335922b3acdfa.png",
                tags: ["Kubernetes", "Istio"],
                featured: true,
                size: "large"
            },
            {
                title: "API Gateway",
                description: "",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8decf4170a-c4961f9228efdb5db249.png",
                tags: ["APISIX"],
                size: "small"
            },
            {
                title: "Smart City Pipeline",
                description: "",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/30b6927bad-38b35178a1c06b69d245.png",
                tags: ["EFK Stack"],
                size: "small"
            },
            {
                title: "Observability Stack",
                description: "Complete monitoring with Prometheus & Grafana",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/f3e63d4e40-be5d5241175c51486e70.png",
                tags: ["Monitoring"],
                size: "medium"
            },
            {
                title: "CI/CD Pipelines",
                description: "Automated deployment pipelines",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d8d8028cae-26ba727d25d0315ee0bc.png",
                tags: ["Automation"],
                size: "medium"
            }
        ]
    },
    about: {
        sectionTitle: "About Me",
        paragraphs: [
            "I'm a passionate Solution Architect and Cloud Engineer with over 3 years of experience designing and building cloud-native systems. My journey started with a fascination for how distributed systems work and scale to handle enterprise workloads.",
            "I specialize in Kubernetes orchestration, service mesh implementations, and platform engineering. From initial architecture to production deployment, I ensure every component is built for reliability, scalability, and performance."
        ],
        stats: [
            { value: "3+", label: "Years Experience" },
            { value: "10+", label: "Projects Done" },
            { value: "3", label: "Companies" },
            { value: "3", label: "Awards Won" }
        ],
        tags: ["Cloud Architecture", "Kubernetes", "Service Mesh", "Platform Engineering", "Full-Stack Development"]
    },
    contact: {
        sectionTitle: "Get In Touch",
        email: "siddharth.mhjn99@gmail.com",
        phone: "+91 XXX XXX XXXX",
        socialLinks: [
            { platform: "LinkedIn", icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/siddharth-mhjn" },
            { platform: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/siddharth-mhjn" },
            { platform: "Instagram", icon: "fa-brands fa-instagram", url: "https://instagram.com/yourhandle" }
        ]
    },
    footer: {
        logoInitials: "SM",
        logoText: "SiddharthMahajan",
        links: ["Privacy Policy", "Terms of Service"],
        copyright: "© 2025 Siddharth Mahajan. All rights reserved."
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Siddharth Mahajan",
        "jobTitle": "Solution Architect & Cloud Engineer",
        "url": "https://www.siddharthmahajan.dev/",
        "sameAs": [
            "https://www.linkedin.com/in/siddharth-mhjn",
            "https://github.com/siddharth-mhjn"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Astreya"
        }
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize error page if on 404/405 page
    initializeErrorPage();

    // Initialize mobile menu
    initMobileMenu();

    await loadPortfolioData();
    initSmoothScrolling();
    initScrollAnimations();
});

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuBtn || !mobileMenu) return;

    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');

        if (isOpen) {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars text-gray-700 text-xl"></i>';
        } else {
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.innerHTML = '<i class="fa-solid fa-times text-gray-700 text-xl"></i>';
        }
    });

    // Close menu when clicking a nav link
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars text-gray-700 text-xl"></i>';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars text-gray-700 text-xl"></i>';
        }
    });
}

/**
 * Initialize error page (404/405) path display
 */
function initializeErrorPage() {
    const pathElement = document.getElementById('requested-path');
    if (pathElement) {
        const path = window.location.pathname;
        if (path) {
            pathElement.textContent = path;
        }
    }
}

/**
 * Load portfolio data from JSON file
 */
async function loadPortfolioData() {
    try {
        const response = await fetch('portfolio-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        portfolioData = await response.json();
        populateContent();
    } catch (error) {
        console.error('Error loading portfolio data:', error);
        console.log('Using default portfolio data...');
        portfolioData = defaultPortfolioData;
        populateContent();
    }
}

/**
 * Populate HTML content from JSON data
 */
function populateContent() {
    if (!portfolioData) return;

    // Update page meta
    updateMeta();

    // Update header
    updateHeader();

    // Update hero section
    updateHero();

    // Update status cards
    updateStatusCards();

    // Update stats
    updateStats();

    // Update skills
    updateSkills();

    // Update portfolio
    updatePortfolio();

    // Update about section
    updateAbout();

    // Update contact section
    updateContact();

    // Update footer
    updateFooter();

    // Update schema markup
    updateSchema();
}

/**
 * Update page meta tags
 */
function updateMeta() {
    const meta = portfolioData.meta;
    document.title = meta.title;

    // Update meta description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.content = meta.description;

    // Update meta keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) keywordsMeta.content = meta.keywords;

    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = meta.canonical;

    // Update Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = meta.title;

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = meta.description;

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.content = meta.ogImage;

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = meta.canonical;

    // Update Twitter
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.content = meta.title;

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.content = meta.description;

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.content = meta.ogImage;
}

/**
 * Update header content
 */
function updateHeader() {
    const header = portfolioData.header;

    // Update logo
    const logoInitials = document.querySelector('#header .logo-initials');
    if (logoInitials) logoInitials.textContent = header.logoInitials;

    const logoText = document.querySelector('#header .logo-text');
    if (logoText) logoText.textContent = header.logoText;

    // Update navigation
    const navContainer = document.querySelector('#header nav');
    if (navContainer && header.navigation) {
        navContainer.innerHTML = header.navigation.map(item => `
            <a href="${item.href}" class="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                ${item.label}
            </a>
        `).join('');
    }

    // Update CTA button
    const ctaButton = document.querySelector('#header .cta-button');
    if (ctaButton && header.ctaButton) {
        ctaButton.textContent = header.ctaButton.label;
        ctaButton.closest('a').href = header.ctaButton.href;
    }
}

/**
 * Update hero section
 */
function updateHero() {
    const hero = portfolioData.hero;

    // Update tagline
    const tagline = document.querySelector('#hero-section .tagline');
    if (tagline) tagline.textContent = hero.tagline;

    // Update availability status
    const availability = document.querySelector('#hero-section .availability-status');
    if (availability) availability.textContent = hero.availabilityStatus;

    // Update headline
    const headline = document.querySelector('#hero-section .headline');
    if (headline) {
        headline.innerHTML = `
            ${hero.headline.line1} <span class="gradient-text">${hero.headline.highlight1}</span> ${hero.headline.connector} <span class="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">${hero.headline.highlight2}</span>
        `;
    }

    // Update description
    const description = document.querySelector('#hero-section .hero-description');
    if (description) description.textContent = hero.description;

    // Update profile images (both mobile and desktop)
    const profileImages = document.querySelectorAll('#hero-section .profile-image');
    profileImages.forEach(img => {
        if (hero.profileImage) {
            img.src = hero.profileImage;
        }
    });
}

/**
 * Update status cards
 */
function updateStatusCards() {
    const cards = portfolioData.statusCards;
    const container = document.querySelector('#status-cards');
    if (!container || !cards) return;

    // Status cards are typically static in the HTML, but we can update their content
    const cardElements = container.querySelectorAll('.status-card');
    cards.forEach((card, index) => {
        if (cardElements[index]) {
            const titleEl = cardElements[index].querySelector('.card-title');
            const descEl = cardElements[index].querySelector('.card-description');
            const valueEl = cardElements[index].querySelector('.card-value');
            const footerEl = cardElements[index].querySelector('.card-footer span');
            const starsEl = cardElements[index].querySelector('.card-stars');

            if (titleEl) titleEl.textContent = card.title;
            if (descEl) descEl.textContent = card.description;
            if (valueEl) valueEl.textContent = card.value;
            if (footerEl && card.footer) footerEl.textContent = card.footer;

            // Update stars if present
            if (starsEl && card.stars !== undefined) {
                starsEl.innerHTML = generateStarsHTML(card.stars);
            }
        }
    });
}

/**
 * Generate stars HTML based on rating value
 * @param {number} rating - Rating value (e.g., 3.5, 4, 5)
 * @returns {string} HTML string for stars
 */
function generateStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let html = '';

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        html += '<i class="fas fa-star"></i>';
    }

    // Half star
    if (hasHalfStar) {
        html += '<i class="fas fa-star-half-alt"></i>';
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        html += '<i class="far fa-star"></i>';
    }

    return html;
}

/**
 * Update stats section
 */
function updateStats() {
    const stats = portfolioData.stats;
    const container = document.querySelector('#stats-section .stats-container');
    if (!container || !stats) return;

    container.innerHTML = stats.map(stat => `
        <div class="bento-card bg-white rounded-2xl p-6 text-center shadow-lg border group hover:border-${stat.color}-500 transition-colors">
            <div class="w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-${stat.color}-500 transition-colors">
                <i class="${stat.icon} text-${stat.color}-600 group-hover:text-white"></i>
            </div>
            <div class="text-3xl font-bold text-${stat.color}-600 mb-2">${stat.value}</div>
            <p class="text-gray-600">${stat.label}</p>
            <p class="text-xs text-gray-500 mt-2">${stat.sublabel}</p>
        </div>
    `).join('');
}

/**
 * Update skills section
 */
function updateSkills() {
    const skills = portfolioData.skills;

    // Update section title
    const sectionTitle = document.querySelector('#skills-section .section-title');
    if (sectionTitle) sectionTitle.textContent = skills.sectionTitle;

    const sectionSubtitle = document.querySelector('#skills-section .section-subtitle');
    if (sectionSubtitle) sectionSubtitle.textContent = skills.sectionSubtitle;

    // Update core skills
    const coreSkillsContainer = document.querySelector('#skills-section .core-skills');
    if (coreSkillsContainer && skills.coreSkills) {
        coreSkillsContainer.innerHTML = skills.coreSkills.map(skill => {
            const gradientClass = getSkillGradient(skill.color);
            return `
                <div>
                    <div class="flex justify-between mb-2">
                        <span class="font-medium text-gray-700 flex items-center gap-2">
                            <i class="${skill.icon} text-${skill.color.split('-')[0]}-600"></i>
                            ${skill.name}
                        </span>
                        <span class="text-sm text-gray-500">${skill.percentage}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3">
                        <div class="${gradientClass} h-3 rounded-full relative" style="width: ${skill.percentage}%">
                            <div class="absolute right-0 top-0 w-3 h-3 bg-white rounded-full shadow-md"></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Update design tools
    const toolsContainer = document.querySelector('#skills-section .design-tools');
    if (toolsContainer && skills.designTools) {
        toolsContainer.innerHTML = skills.designTools.map(tool => `
            <div class="bg-${tool.bgColor}-100 rounded-xl p-3 text-center group hover:bg-${tool.bgColor}-200 transition-colors">
                <i class="${tool.icon} text-2xl text-${tool.bgColor}-600 mb-2 group-hover:scale-110 transition-transform"></i>
                <div class="text-xs font-medium">${tool.name}</div>
                <div class="text-xs text-gray-500">${tool.level}</div>
            </div>
        `).join('');
    }

    // Update development tools
    const devToolsContainer = document.querySelector('#skills-section .dev-tools');
    if (devToolsContainer && skills.developmentTools) {
        devToolsContainer.innerHTML = skills.developmentTools.map(tool => `
            <span class="bg-white/20 px-3 py-1 rounded-full text-sm">${tool}</span>
        `).join('');
    }
}

/**
 * Get skill gradient class
 */
function getSkillGradient(color) {
    const gradients = {
        'purple-blue': 'bg-gradient-to-r from-purple-500 to-blue-600',
        'green-teal': 'bg-gradient-to-r from-green-500 to-teal-600',
        'orange-red': 'bg-gradient-to-r from-orange-500 to-red-600',
        'blue-cyan': 'bg-gradient-to-r from-blue-500 to-cyan-600'
    };
    return gradients[color] || 'bg-gradient-to-r from-gray-500 to-gray-600';
}

/**
 * Update portfolio section
 */
function updatePortfolio() {
    const portfolio = portfolioData.portfolio;

    // Update section title
    const sectionTitle = document.querySelector('#portfolio-section .section-title');
    if (sectionTitle) sectionTitle.textContent = portfolio.sectionTitle;

    const sectionSubtitle = document.querySelector('#portfolio-section .section-subtitle');
    if (sectionSubtitle) sectionSubtitle.textContent = portfolio.sectionSubtitle;

    // Dynamically render all projects from JSON
    const projectsGrid = document.querySelector('#portfolio-section .projects-grid');
    if (!projectsGrid || !portfolio.projects) return;

    // Full tag color classes (Tailwind needs complete class names for JIT)
    const tagColorClasses = [
        'bg-blue-600',
        'bg-purple-600',
        'bg-green-600',
        'bg-orange-600',
        'bg-pink-600',
        'bg-indigo-600',
        'bg-teal-600',
        'bg-yellow-600'
    ];

    projectsGrid.innerHTML = portfolio.projects.map((project, index) => {
        // Featured/large cards get special treatment, all others are uniform
        const isFeatured = project.size === 'large' || project.featured;
        const isSecondCard = index === 1;

        let gridClass = '';
        let heightStyle = 'height: 15rem;'; // Standard height for all regular cards
        let titleClass = 'text-xl';
        let paddingClass = 'p-4';

        if (isFeatured) {
            gridClass = 'md:col-span-2 lg:col-span-2';
            heightStyle = 'height: 20rem;'; // Taller for featured
            titleClass = 'text-2xl';
            paddingClass = 'p-6';
        } else if (isSecondCard) {
            // Card 2 gets same height as featured card
            heightStyle = 'height: 20rem;';
        }

        // Generate tags HTML with full class names
        const tagsHtml = project.tags ? project.tags.map((tag, tagIndex) =>
            `<span class="${tagColorClasses[tagIndex % tagColorClasses.length]} px-2 py-1 rounded-full text-xs">${tag}</span>`
        ).join('') : '';

        // Generate badge HTML if featured
        const badgeHtml = project.featured ?
            `<div class="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold z-10">Featured</div>` :
            '';

        return `
            <div class="project-card ${gridClass} bento-card bg-white rounded-2xl overflow-hidden shadow-lg group">
                <div class="relative" style="${heightStyle}">
                    ${badgeHtml}
                    <img class="w-full h-full object-cover" src="${project.image}" alt="${project.title}" loading="lazy" decoding="async">
                    <div class="overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="content absolute bottom-0 left-0 ${paddingClass} text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 class="project-title ${titleClass} font-bold mb-2">${project.title}</h3>
                        ${project.description ? `<p class="project-description text-gray-200 text-sm">${project.description}</p>` : ''}
                        <div class="flex flex-wrap gap-2 mt-2">
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Update about section
 */
function updateAbout() {
    const about = portfolioData.about;

    // Update section title
    const sectionTitle = document.querySelector('#about-section .section-title');
    if (sectionTitle) sectionTitle.textContent = about.sectionTitle;

    // Update paragraphs
    const paragraphsContainer = document.querySelector('#about-section .about-paragraphs');
    if (paragraphsContainer && about.paragraphs) {
        paragraphsContainer.innerHTML = about.paragraphs.map(p => `<p>${p}</p>`).join('');
    }

    // Update stats
    const statsContainer = document.querySelector('#about-section .about-stats');
    if (statsContainer && about.stats) {
        statsContainer.innerHTML = about.stats.map(stat => `
            <div class="text-center">
                <div class="text-2xl font-bold text-gray-900">${stat.value}</div>
                <div class="text-sm text-gray-600">${stat.label}</div>
            </div>
        `).join('');
    }

    // Update tags
    const tagsContainer = document.querySelector('#about-section .about-tags');
    if (tagsContainer && about.tags) {
        tagsContainer.innerHTML = about.tags.map(tag => `
            <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">${tag}</span>
        `).join('');
    }
}

/**
 * Update contact section
 */
function updateContact() {
    const contact = portfolioData.contact;

    // Update contact title
    const sectionTitle = document.querySelector('#contact-section .section-title');
    if (sectionTitle) sectionTitle.textContent = contact.sectionTitle;

    // Update email
    const emailEl = document.querySelector('#contact-section .contact-email');
    if (emailEl) emailEl.textContent = contact.email;

    // Update phone
    const phoneEl = document.querySelector('#contact-section .contact-phone');
    if (phoneEl) phoneEl.textContent = contact.phone;

    // Update social links
    const socialContainer = document.querySelector('#contact-section .social-links');
    if (socialContainer && contact.socialLinks) {
        socialContainer.innerHTML = contact.socialLinks.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/30 transition-colors cursor-pointer">
                <i class="${link.icon} text-xl mb-2"></i>
                <div class="text-xs">${link.platform}</div>
            </a>
        `).join('');
    }
}

/**
 * Update footer
 */
function updateFooter() {
    const footer = portfolioData.footer;

    // Update logo
    const logoInitials = document.querySelector('#footer .logo-initials');
    if (logoInitials) logoInitials.textContent = footer.logoInitials;

    const logoText = document.querySelector('#footer .logo-text');
    if (logoText) logoText.textContent = footer.logoText;

    // Update copyright with clickable link
    const copyright = document.querySelector('#footer .copyright');
    if (copyright) {
        const link = footer.copyrightLink;
        copyright.innerHTML = link
            ? `${footer.copyright} <a href="${link.url}" target="_blank" class="text-purple-400 hover:text-purple-300 transition-colors">${link.text}</a>`
            : footer.copyright;
    }
}

/**
 * Update schema markup
 */
function updateSchema() {
    const schema = portfolioData.schema;
    const schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schemaScript && schema) {
        schemaScript.textContent = JSON.stringify(schema, null, 2);
    }
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only handle internal anchor links (not external links with target="_blank")
            if (href && href.startsWith('#') && href.length > 1 && !this.hasAttribute('target')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.bento-card').forEach(card => {
        observer.observe(card);
    });
}

