/**
 * Retro Gaming Portfolio - JavaScript
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
        title: "Siddharth Mahajan | Solution Architect & Cloud Engineer Portfolio",
        description: "Siddharth Mahajan - Solution Architect & Cloud Engineer specializing in Kubernetes, Service Mesh, and cloud-native systems. Building scalable infrastructure with modern DevOps practices.",
        canonical: "https://www.siddharthmahajan.dev/",
        ogImage: "https://www.siddharthmahajan.dev/assets/preview.jpg"
    },
    header: {
        logoIcon: "fa-solid fa-cloud",
        logoText: "CLOUD.DEV",
        navigation: [
            { label: "ABOUT", href: "#about" },
            { label: "PROJECTS", href: "#projects" },
            { label: "SKILLS", href: "#skills" },
            { label: "EXPERIENCE", href: "#experience" },
            { label: "REVIEWS", href: "#testimonials" },
            { label: "CERTS", href: "#certifications" },
            { label: "CONTACT", href: "#contact" }
        ]
    },
    profile: {
        image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
        name: "SIDDHARTH MAHAJAN",
        title: "SOLUTION ARCHITECT & CLOUD ENGINEER",
        socialLinks: [
            { icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/siddharth-mhjn", color: "retro-blue" },
            { icon: "fa-brands fa-github", url: "https://github.com/siddharth-mhjn", color: "retro-green" }
        ]
    },
    quickStats: [
        { name: "Kubernetes", percentage: 95, color: "retro-purple" },
        { name: "Cloud (Azure/AWS)", percentage: 50, color: "retro-blue" },
        { name: "Service Mesh", percentage: 90, color: "retro-pink" },
        { name: "Java/Spring", percentage: 88, color: "retro-green" }
    ],
    contactInfo: {
        email: "siddharth.mhjn99@gmail.com",
        phone: "+91 XXX XXX XXXX",
        location: "India"
    },
    about: {
        sectionTitle: "ABOUT ME",
        paragraphs: [
            {
                text: "SYSTEM ONLINE! Solution Architect and Cloud Engineer specializing in scalable, secure, and highly available cloud-native systems.",
                highlights: [
                    { text: "SYSTEM ONLINE!", color: "retro-pink" }
                ]
            },
            {
                text: "My engineering philosophy combines infrastructure automation with modern DevOps practices. Expertise in Kubernetes, Istio, CI/CD pipelines, and observability using EFK stacks. Led infrastructure modernization initiatives and designed custom API gateways.",
                highlights: [
                    { text: "infrastructure automation", color: "retro-green" }
                ]
            }
        ],
        tags: [
            { name: "Kubernetes", color: "retro-purple" },
            { name: "Azure/AWS", color: "retro-blue" },
            { name: "Istio", color: "retro-pink" },
            { name: "Docker", color: "retro-green" },
            { name: "Spring Boot", color: "retro-yellow" },
            { name: "Python", color: "retro-orange", textColor: "black" }
        ]
    },
    projects: {
        sectionTitle: "MY PROJECTS",
        items: [
            {
                id: "project-1",
                title: "MULTI-CLUSTER K8S PLATFORM",
                description: "Enterprise-grade Kubernetes platform with automated deployment, monitoring, and service mesh integration.",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b5b6dab71c-b8df5ae0fa7033787cf3.png",
                imageAlt: "Kubernetes multi-cluster architecture diagram",
                headerColor: "retro-pink",
                tags: ["Kubernetes", "Istio", "Prometheus"],
                featured: true,
                badge: "FEATURED",
                badgeColor: "retro-yellow",
                link: "https://github.com/siddharth-mhjn"
            },
            {
                id: "project-2",
                title: "API GATEWAY SOLUTION",
                description: "Scalable API gateway solution with rate limiting, authentication, and real-time analytics dashboard.",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3499c064da-3349584f9e42a0ea2397.png",
                imageAlt: "API Gateway architecture with security features",
                headerColor: "retro-green",
                tags: ["APISIX", "Keycloak", "Docker"],
                link: "https://github.com/siddharth-mhjn"
            },
            {
                id: "project-3",
                title: "SMART CITY PIPELINE",
                description: "Real-time IoT data processing pipeline with EFK stack for smart city infrastructure monitoring.",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/87c6e71db5-904aa7c1e02dbc1744c9.png",
                imageAlt: "Data pipeline visualization for IoT processing",
                headerColor: "retro-blue",
                tags: ["Elasticsearch", "Kafka", "Python"],
                link: "https://github.com/siddharth-mhjn"
            },
            {
                id: "project-4",
                title: "OBSERVABILITY STACK",
                description: "Complete monitoring and observability platform with Prometheus, Grafana, and custom alerting.",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d99f67fd1b-7111caf929619517f142.png",
                imageAlt: "Grafana dashboard with metrics visualization",
                headerColor: "retro-yellow",
                tags: ["Prometheus", "Grafana", "EFK"],
                link: "https://github.com/siddharth-mhjn"
            }
        ]
    },
    skills: {
        sectionTitle: "SKILL TREE",
        categories: [
            {
                id: "skill-category-1",
                title: "CLOUD & DEVOPS",
                icon: "fa-solid fa-cloud",
                headerColor: "retro-purple",
                items: ["Kubernetes (AKS/EKS)", "Docker & Podman", "Istio Service Mesh", "Azure & AWS", "Rancher", "CI/CD Pipelines"]
            },
            {
                id: "skill-category-2",
                title: "PROGRAMMING",
                icon: "fa-solid fa-code",
                headerColor: "retro-blue",
                items: ["Java (Spring Boot)", "Python", "Shell Scripting", "PowerShell", "Vue.js", "C/C++"]
            },
            {
                id: "skill-category-3",
                title: "DATA & SECURITY",
                icon: "fa-solid fa-database",
                headerColor: "retro-pink",
                items: ["PostgreSQL/MySQL", "OpenSearch/EFK", "Prometheus & Grafana", "Kafka", "Keycloak/WSO2", "APISIX Gateway"]
            }
        ]
    },
    experience: {
        sectionTitle: "QUEST LOG",
        items: [
            {
                id: "experience-1",
                title: "SOFTWARE ENGINEER I",
                company: "Astreya",
                period: "June 2025 - Present",
                description: "Design and development of system architecture, ensuring scalability and operational efficiency for cloud-native solutions.",
                icon: "fa-solid fa-crown",
                iconBg: "retro-purple",
                tags: ["Cloud-Native", "Automation", "Architecture"]
            },
            {
                id: "experience-2",
                title: "MEMBER TECHNICAL STAFF",
                company: "NEC India",
                period: "April 2025 - June 2025",
                description: "Built real-time data pipelines for smart city projects. Deployed EFK stack with Istio on Kubernetes. Improved observability and vendor onboarding.",
                icon: "fa-solid fa-rocket",
                iconBg: "retro-green",
                tags: ["Kubernetes", "EFK", "Istio", "NiFi"]
            },
            {
                id: "experience-3",
                title: "SOFTWARE ENGINEER",
                company: "LTIMindtree",
                period: "July 2022 - March 2025",
                description: "Managed Kubernetes clusters with Istio service mesh. Designed custom API Gateway solutions. Automated infrastructure deployment and built telemetry platforms.",
                icon: "fa-solid fa-server",
                iconBg: "retro-yellow",
                tags: ["Service Mesh", "API Gateway", "Spring Cloud"]
            }
        ]
    },
    testimonials: {
        sectionTitle: "PEER REVIEWS",
        items: [
            {
                id: "testimonial-1",
                name: "KARTHIK BATTARAM",
                role: "Senior Data Engineer, LTIMindtree",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
                quote: "Technically sound, dependable, and demonstrates strong ownership mindset in every project. A reliable teammate!",
                quoteColor: "retro-pink",
                rating: 5
            },
            {
                id: "testimonial-2",
                name: "AKSHAY REDDY EMMADI",
                role: "Software Engineer, LTIMindtree",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
                quote: "Key contributor to microservices transformation using Spring Cloud, Istio, and API Gateway. Excellent problem solver!",
                quoteColor: "retro-blue",
                rating: 5
            },
            {
                id: "testimonial-3",
                name: "PRIYANKA A",
                role: "Specialist Data Engineer, LTIMindtree",
                image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
                quote: "Reliable, resilient, and instrumental in systems engineering under pressure. Great at handling complex challenges!",
                quoteColor: "retro-green",
                rating: 5
            }
        ]
    },
    certifications: {
        sectionTitle: "ACHIEVEMENTS UNLOCKED",
        certifications: [
            {
                id: "certification-1",
                title: "ITOPS AUTOMATION ENGINEER",
                issuer: "LTIMindtree",
                level: "Foundation Level",
                icon: "fa-solid fa-robot",
                iconBg: "retro-purple"
            },
            {
                id: "certification-2",
                title: "CLOUD & INFRASTRUCTURE",
                issuer: "LTI",
                level: "Professional Level",
                icon: "fa-solid fa-cloud",
                iconBg: "retro-blue"
            },
            {
                id: "certification-3",
                title: "WEB DEVELOPMENT",
                issuer: "Internshala",
                level: "Certification Program",
                icon: "fa-solid fa-code",
                iconBg: "retro-green"
            }
        ],
        awards: [
            {
                id: "award-1",
                title: "TECHNICAL SME AWARD",
                issuer: "LTIMindtree",
                description: "June 2024 - Automation Academy Training",
                icon: "fa-solid fa-trophy",
                iconBg: "retro-yellow"
            },
            {
                id: "award-2",
                title: "SPOTLIGHT AWARD",
                issuer: "LTIMindtree",
                description: "June 2023 - 30% Scalability Improvement",
                icon: "fa-solid fa-medal",
                iconBg: "retro-orange"
            },
            {
                id: "award-3",
                title: "SPOTLIGHT AWARD",
                issuer: "LTIMindtree",
                description: "March 2023 - Istio Platform Demos",
                icon: "fa-solid fa-star",
                iconBg: "retro-pink"
            }
        ]
    },
    contact: {
        sectionTitle: "INITIATE CONNECTION",
        description: "Have a cloud architecture project? Want to discuss Kubernetes or service mesh solutions? Let's build something scalable together!",
        responseTime: "Within 24-48 hours",
        availability: "Available for Technical Consulting",
        scriptURL: ""
    },
    footer: {
        logoText: "CLOUD.DEV",
        tagline: "Solution Architect & Cloud Engineer specializing in Kubernetes and cloud-native systems.",
        socialLinks: [
            { icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/siddharth-mhjn" },
            { icon: "fa-brands fa-github", url: "https://github.com/siddharth-mhjn" }
        ],
        copyright: "© 2025 Siddharth Mahajan. All rights reserved. Built with passion.",
        links: ["Privacy Policy", "Terms of Service"]
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Siddharth Mahajan",
        "url": "https://www.siddharthmahajan.dev/",
        "jobTitle": "Solution Architect & Cloud Engineer",
        "image": "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
        "sameAs": [
            "https://www.linkedin.com/in/siddharth-mhjn",
            "https://github.com/siddharth-mhjn",
            "https://instagram.com/yourhandle"
        ]
    },
    policies: {
        privacyPolicy: {
            title: "Privacy Policy",
            lastUpdated: "January 2025",
            sections: [
                {
                    heading: "Information We Collect",
                    content: "When you use the contact form on this website, we collect the information you provide, including your name, email address, and message content. We do not collect any additional personal data without your consent."
                },
                {
                    heading: "How We Use Your Information",
                    content: "The information collected through the contact form is used solely to respond to your inquiries and communicate with you about potential projects or collaborations. We do not sell, trade, or share your personal information with third parties."
                },
                {
                    heading: "Data Security",
                    content: "We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
                },
                {
                    heading: "Cookies",
                    content: "This website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings."
                },
                {
                    heading: "Contact",
                    content: "If you have any questions about this Privacy Policy, please contact me through the contact form on this website."
                }
            ]
        },
        termsOfService: {
            title: "Terms of Service",
            lastUpdated: "January 2025",
            sections: [
                {
                    heading: "Acceptance of Terms",
                    content: "By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website."
                },
                {
                    heading: "Use of Content",
                    content: "All content on this website, including text, images, code snippets, and design elements, is the property of the website owner unless otherwise stated. You may not reproduce, distribute, or use any content without prior written permission."
                },
                {
                    heading: "Contact Form",
                    content: "When using the contact form, you agree to provide accurate and truthful information. You agree not to send spam, malicious content, or any material that violates applicable laws."
                },
                {
                    heading: "Limitation of Liability",
                    content: "This website is provided \"as is\" without any warranties. The website owner shall not be liable for any damages arising from the use or inability to use this website."
                },
                {
                    heading: "Changes to Terms",
                    content: "These terms may be updated from time to time. Continued use of the website after changes constitutes acceptance of the new terms."
                }
            ]
        }
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize error page if on 404/405 page
    initializeErrorPage();

    await loadPortfolioData();
    initBackToTop();
    initScrollAnimations();
    initGlitchEffects();
    initMobileMenu();
    initModals();
    initContactForm();
});

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
 * Generate random percentage within a range
 */
function randomPercentage(base, variance = 10) {
    const min = Math.max(0, base - variance);
    const max = Math.min(100, base + variance);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Randomize default data values for variety
 */
function randomizeDefaultData(data) {
    // Deep clone the data to avoid mutating the original
    const randomized = JSON.parse(JSON.stringify(data));

    // Randomize quick stats percentages
    if (randomized.quickStats) {
        randomized.quickStats = randomized.quickStats.map(stat => ({
            ...stat,
            percentage: randomPercentage(stat.percentage, 8)
        }));
    }

    // Randomize testimonial ratings (between 4 and 5, with possible half stars)
    if (randomized.testimonials && randomized.testimonials.items) {
        randomized.testimonials.items = randomized.testimonials.items.map(testimonial => ({
            ...testimonial,
            rating: Math.random() > 0.3 ? 5 : (Math.random() > 0.5 ? 4.5 : 4)
        }));
    }

    // Shuffle project order randomly
    if (randomized.projects && randomized.projects.items) {
        randomized.projects.items = randomized.projects.items.sort(() => Math.random() - 0.5);
    }

    // Shuffle skills within categories
    if (randomized.skills && randomized.skills.categories) {
        randomized.skills.categories = randomized.skills.categories.map(category => ({
            ...category,
            items: category.items.sort(() => Math.random() - 0.5)
        }));
    }

    return randomized;
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
        console.log('Using randomized default portfolio data...');
        portfolioData = randomizeDefaultData(defaultPortfolioData);
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

    // Update profile
    updateProfile();

    // Update quick stats
    updateQuickStats();

    // Update contact info sidebar
    updateContactInfo();

    // Update about section
    updateAbout();

    // Update projects
    updateProjects();

    // Update skills
    updateSkills();

    // Update experience
    updateExperience();

    // Update testimonials
    updateTestimonials();

    // Update certifications
    updateCertifications();

    // Update contact section
    updateContactSection();

    // Update footer
    updateFooter();

    // Update schema markup
    updateSchema();

    // Update policies (privacy & terms)
    updatePolicies();
}

/**
 * Update page meta tags
 */
function updateMeta() {
    const meta = portfolioData.meta;
    document.title = meta.title;

    // Update favicon
    if (meta.favicon) {
        const faviconLink = document.getElementById('favicon-link');
        if (faviconLink) faviconLink.href = meta.favicon;
    }

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.content = meta.description;

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = meta.canonical;

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = meta.title;

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = meta.description;

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.content = meta.ogImage;

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = meta.canonical;

    // Twitter
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

    const logoText = document.querySelector('#header h1');
    if (logoText) logoText.textContent = header.logoText;

    // Update navigation
    const navContainer = document.querySelector('#main-nav');
    if (navContainer && header.navigation) {
        navContainer.innerHTML = header.navigation.map(item => `
            <a href="${item.href}" class="font-terminal text-white text-xl">${item.label}</a>
        `).join('');
    }

    // Update mobile navigation
    const mobileNav = document.querySelector('#mobile-menu .flex.flex-col');
    if (mobileNav && header.navigation) {
        mobileNav.innerHTML = header.navigation.map(item => `
            <a href="${item.href}" class="mobile-link font-terminal text-white text-lg">${item.label}</a>
        `).join('');
    }
}

/**
 * Update profile card
 */
function updateProfile() {
    const profile = portfolioData.profile;

    const profileImg = document.querySelector('#profile-card img');
    if (profileImg) profileImg.src = profile.image;

    const profileName = document.querySelector('#profile-card h2');
    if (profileName) profileName.textContent = profile.name;

    const profileTitle = document.querySelector('#profile-card p.font-terminal');
    if (profileTitle) profileTitle.textContent = profile.title;

    // Update social links
    const socialContainer = document.querySelector('#profile-card .flex.space-x-3');
    if (socialContainer && profile.socialLinks) {
        socialContainer.innerHTML = profile.socialLinks.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-${link.color} border-2 border-black shadow-retro-sm flex items-center justify-center hover:bg-retro-yellow transition-colors duration-200 cursor-pointer">
                <i class="${link.icon} text-retro-black"></i>
            </a>
        `).join('');
    }
}

/**
 * Update quick stats
 */
function updateQuickStats() {
    const stats = portfolioData.quickStats;
    const container = document.querySelector('#quick-stats .space-y-4');
    if (!container || !stats) return;

    container.innerHTML = stats.map(stat => `
        <div>
            <div class="flex justify-between font-terminal text-lg mb-1">
                <span>${stat.name}</span>
                <span>${stat.percentage}%</span>
            </div>
            <div class="w-full h-4 bg-gray-200 border-2 border-black">
                <div class="h-full bg-${stat.color} border-r-2 border-black" style="width: ${stat.percentage}%"></div>
            </div>
        </div>
    `).join('');
}

/**
 * Update contact info sidebar
 */
function updateContactInfo() {
    const contact = portfolioData.contactInfo;
    const container = document.querySelector('#contact-info .space-y-3');
    if (!container || !contact) return;

    container.innerHTML = `
        <div class="flex items-center">
            <div class="w-8 h-8 bg-retro-yellow border-2 border-black shadow-retro-sm flex items-center justify-center mr-3">
                <i class="fa-solid fa-envelope text-retro-black text-sm"></i>
            </div>
            <span class="font-terminal text-lg">${contact.email}</span>
        </div>
        <div class="flex items-center">
            <div class="w-8 h-8 bg-retro-pink border-2 border-black shadow-retro-sm flex items-center justify-center mr-3">
                <i class="fa-solid fa-phone text-retro-black text-sm"></i>
            </div>
            <span class="font-terminal text-lg">${contact.phone}</span>
        </div>
        <div class="flex items-center">
            <div class="w-8 h-8 bg-retro-blue border-2 border-black shadow-retro-sm flex items-center justify-center mr-3">
                <i class="fa-solid fa-location-dot text-retro-black text-sm"></i>
            </div>
            <span class="font-terminal text-lg">${contact.location}</span>
        </div>
    `;
}

/**
 * Update about section
 */
function updateAbout() {
    const about = portfolioData.about;
    if (!about) return;

    // Update section title
    const sectionTitle = document.querySelector('#about h2');
    if (sectionTitle && about.sectionTitle) sectionTitle.textContent = about.sectionTitle;

    // Update paragraphs with highlights
    if (about.paragraphs && about.paragraphs.length > 0) {
        const contentContainer = document.querySelector('#about .pt-4.space-y-4');
        if (contentContainer) {
            // Generate paragraphs HTML
            const paragraphsHtml = about.paragraphs.map((para, index) => {
                let text = para.text;
                // Apply highlights
                if (para.highlights && para.highlights.length > 0) {
                    para.highlights.forEach(highlight => {
                        const highlightSpan = `<span class="text-${highlight.color} font-bold">${highlight.text}</span>`;
                        text = text.replace(highlight.text, highlightSpan);
                    });
                }
                return `<p class="font-terminal text-xl leading-relaxed about-paragraph-${index + 1}">${text}</p>`;
            }).join('');

            // Generate tags HTML
            let tagsHtml = '';
            if (about.tags && about.tags.length > 0) {
                tagsHtml = `
                    <div class="flex flex-wrap gap-3 mt-4 about-tags">
                        ${about.tags.map(tag => {
                            const textColor = tag.textColor ? `text-${tag.textColor}` : '';
                            return `<span class="px-3 py-1 bg-${tag.color} border-2 border-black shadow-retro-sm font-terminal ${textColor}">${tag.name}</span>`;
                        }).join('')}
                    </div>
                `;
            }

            contentContainer.innerHTML = paragraphsHtml + tagsHtml;
        }
    } else {
        // Fallback: just update tags if paragraphs not defined
        const tagsContainer = document.querySelector('#about .flex.flex-wrap.gap-3');
        if (tagsContainer && about.tags) {
            tagsContainer.innerHTML = about.tags.map(tag => {
                const textColor = tag.textColor ? `text-${tag.textColor}` : '';
                return `<span class="px-3 py-1 bg-${tag.color} border-2 border-black shadow-retro-sm font-terminal ${textColor}">${tag.name}</span>`;
            }).join('');
        }
    }
}

/**
 * Update projects section
 */
function updateProjects() {
    const projects = portfolioData.projects;
    const container = document.querySelector('#projects .grid');
    if (!container || !projects) return;

    // Update section title
    const sectionTitle = document.querySelector('#projects h2');
    if (sectionTitle && projects.sectionTitle) sectionTitle.textContent = projects.sectionTitle;

    container.innerHTML = projects.items.map(project => {
        // Generate badge HTML if present
        let badgeHtml = '';
        if (project.badge) {
            badgeHtml = `
                <div class="absolute top-2 right-2 bg-${project.badgeColor || 'retro-yellow'} border-2 border-black px-2 py-1 font-retro text-xs z-10">
                    ${project.badge}
                </div>
            `;
        } else if (project.featured) {
            badgeHtml = `
                <div class="absolute top-2 right-2 bg-retro-yellow border-2 border-black px-2 py-1 font-retro text-xs z-10">
                    FEATURED
                </div>
            `;
        }

        return `
            <div id="${project.id || ''}" class="border-4 border-black shadow-retro-sm overflow-hidden hover-lift retro-glow fade-in-up">
                <div class="bg-${project.headerColor || 'retro-purple'} border-b-4 border-black p-3">
                    <h3 class="font-retro text-retro-black text-sm">${project.title}</h3>
                </div>
                <div class="relative h-48">
                    ${badgeHtml}
                    <img class="w-full h-full object-cover" src="${project.image}" alt="${project.imageAlt || project.title}" loading="lazy" decoding="async">
                    <a href="${project.link || '#'}" target="_blank" rel="noopener noreferrer" class="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span class="bg-retro-yellow border-2 border-black shadow-retro-sm px-4 py-2 font-terminal text-retro-black hover:bg-retro-orange transition-colors duration-200 cursor-pointer">VIEW PROJECT</span>
                    </a>
                </div>
                <div class="p-4 bg-white">
                    <p class="font-terminal text-lg">${project.description || ''}</p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        ${project.tags ? project.tags.map(tag => `<span class="px-2 py-1 bg-retro-green border border-black text-xs font-terminal">${tag}</span>`).join('') : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Update skills section
 */
function updateSkills() {
    const skills = portfolioData.skills;
    const container = document.querySelector('#skills .grid');
    if (!container || !skills) return;

    // Update section title
    const sectionTitle = document.querySelector('#skills h2');
    if (sectionTitle && skills.sectionTitle) sectionTitle.textContent = skills.sectionTitle;

    container.innerHTML = skills.categories.map(category => `
        <div id="${category.id}" class="border-4 border-black shadow-retro-sm overflow-hidden">
            <div class="bg-${category.headerColor} border-b-4 border-black p-3 flex items-center">
                <div class="w-8 h-8 bg-white border-2 border-black flex items-center justify-center mr-3">
                    <i class="${category.icon} text-retro-black"></i>
                </div>
                <h3 class="font-retro text-retro-black text-sm">${category.title}</h3>
            </div>
            <div class="p-4 bg-white">
                <ul class="space-y-3 font-terminal text-lg">
                    ${category.items.map(item => `
                        <li class="flex items-center">
                            <i class="fa-solid fa-square-check text-${category.headerColor} mr-2"></i>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

/**
 * Update experience section
 */
function updateExperience() {
    const experience = portfolioData.experience;
    const container = document.querySelector('#experience .space-y-8');
    if (!container || !experience) return;

    // Update section title
    const sectionTitle = document.querySelector('#experience h2');
    if (sectionTitle && experience.sectionTitle) sectionTitle.textContent = experience.sectionTitle;

    container.innerHTML = experience.items.map(exp => `
        <div id="${exp.id}" class="border-4 border-black shadow-retro-sm p-4 bg-white hover-lift retro-glow">
            <div class="flex items-start">
                <div class="w-16 h-16 bg-${exp.iconBg} border-2 border-black shadow-retro-sm flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="${exp.icon} text-white text-xl"></i>
                </div>
                <div class="flex-1">
                    <h3 class="font-retro text-retro-black text-sm mb-2">${exp.title}</h3>
                    <p class="font-terminal text-lg mb-2 text-retro-purple">${exp.company} • ${exp.period}</p>
                    <p class="font-terminal text-base mb-3">${exp.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${exp.tags.map(tag => `<span class="px-2 py-1 bg-retro-pink border border-black text-xs font-terminal">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Generate star rating HTML (supports fractional ratings like 3.5)
 */
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let starsHtml = '';

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fa-solid fa-star text-retro-yellow"></i>';
    }

    // Half star
    if (hasHalfStar) {
        starsHtml += '<i class="fa-solid fa-star-half-stroke text-retro-yellow"></i>';
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="fa-regular fa-star text-retro-yellow"></i>';
    }

    return starsHtml;
}

/**
 * Update testimonials section
 */
function updateTestimonials() {
    const testimonials = portfolioData.testimonials;
    const container = document.querySelector('#testimonials .grid');
    if (!container || !testimonials) return;

    // Update section title
    const sectionTitle = document.querySelector('#testimonials h2');
    if (sectionTitle && testimonials.sectionTitle) sectionTitle.textContent = testimonials.sectionTitle;

    container.innerHTML = testimonials.items.map(testimonial => `
        <div id="${testimonial.id}" class="border-4 border-black shadow-retro-sm p-4 bg-white hover-lift retro-glow">
            <div class="flex items-start mb-4">
                <div class="w-12 h-12 rounded-full border-2 border-black overflow-hidden mr-4 flex-shrink-0">
                    <img src="${testimonial.image}" alt="Client" class="w-full h-full object-cover" loading="lazy" decoding="async">
                </div>
                <div>
                    <h3 class="font-retro text-retro-black text-xs mb-1">${testimonial.name}</h3>
                    <p class="font-terminal text-sm text-gray-600">${testimonial.role}</p>
                </div>
            </div>
            <div class="relative">
                <div class="absolute -top-2 -left-2 text-${testimonial.quoteColor} text-4xl font-bold">"</div>
                <p class="font-terminal text-base pl-6">${testimonial.quote}</p>
                <div class="flex mt-3">
                    ${generateStarRating(testimonial.rating)}
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Update certifications section
 */
function updateCertifications() {
    const certs = portfolioData.certifications;
    if (!certs) return;

    // Update section title
    const sectionTitle = document.querySelector('#certifications h2');
    if (sectionTitle && certs.sectionTitle) sectionTitle.textContent = certs.sectionTitle;

    // Update certifications using specific ID
    const certsContainer = document.getElementById('certifications-grid');
    if (certsContainer && certs.certifications) {
        certsContainer.innerHTML = certs.certifications.map(cert => `
            <div id="${cert.id}" class="border-4 border-black shadow-retro-sm p-4 bg-white hover-lift">
                <div class="flex items-start">
                    <div class="w-12 h-12 bg-${cert.iconBg} border-2 border-black shadow-retro-sm flex items-center justify-center mr-4 flex-shrink-0">
                        <i class="${cert.icon} text-white"></i>
                    </div>
                    <div>
                        <h4 class="font-retro text-retro-black text-xs mb-2">${cert.title}</h4>
                        <p class="font-terminal text-base">${cert.issuer}</p>
                        <p class="font-terminal text-gray-600 text-sm">${cert.level}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update awards using specific ID
    const awardsContainer = document.getElementById('awards-grid');
    if (awardsContainer && certs.awards) {
        awardsContainer.innerHTML = certs.awards.map(award => `
            <div id="${award.id}" class="border-4 border-black shadow-retro-sm p-4 bg-white hover-lift retro-glow">
                <div class="flex items-start">
                    <div class="w-12 h-12 bg-${award.iconBg} border-2 border-black shadow-retro-sm flex items-center justify-center mr-4 flex-shrink-0">
                        <i class="${award.icon} text-white"></i>
                    </div>
                    <div>
                        <h4 class="font-retro text-retro-black text-xs mb-2">${award.title}</h4>
                        <p class="font-terminal text-base">${award.issuer}</p>
                        <p class="font-terminal text-gray-600 text-sm">${award.description}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

/**
 * Update contact section
 */
function updateContactSection() {
    const contact = portfolioData.contact;
    if (!contact) return;

    // Update section title
    const sectionTitle = document.querySelector('#contact h2');
    if (sectionTitle && contact.sectionTitle) sectionTitle.textContent = contact.sectionTitle;

    // Update description
    const description = document.querySelector('#contact .contact-description');
    if (description && contact.description) description.textContent = contact.description;

    // Update response time
    const responseTime = document.querySelector('#contact .contact-response-time');
    if (responseTime && contact.responseTime) responseTime.textContent = contact.responseTime;

    // Update availability
    const availability = document.querySelector('#contact .contact-availability');
    if (availability && contact.availability) availability.textContent = contact.availability;
}

/**
 * Update footer
 */
function updateFooter() {
    const footer = portfolioData.footer;

    const logoText = document.querySelector('#footer h2');
    if (logoText) logoText.textContent = footer.logoText;

    const tagline = document.querySelector('#footer p.font-terminal.text-gray-400.max-w-md');
    if (tagline) tagline.textContent = footer.tagline;

    // Update copyright with clickable link
    const copyright = document.querySelector('#footer .border-t p.font-terminal');
    if (copyright) {
        const link = footer.copyrightLink;
        copyright.innerHTML = link
            ? `${footer.copyright} <a href="${link.url}" target="_blank" class="text-retro-green hover:text-retro-pink transition-colors">${link.text}</a>`
            : footer.copyright;
    }

    // Update social links
    const socialContainer = document.querySelector('#footer .flex.space-x-4');
    if (socialContainer && footer.socialLinks) {
        socialContainer.innerHTML = footer.socialLinks.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-retro-gray border-2 border-white flex items-center justify-center hover:bg-retro-purple transition-colors duration-200 cursor-pointer">
                <i class="${link.icon} text-white"></i>
            </a>
        `).join('');
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
 * Update privacy and terms modals
 */
function updatePolicies() {
    const policies = portfolioData.policies;
    if (!policies) return;

    // Update Privacy Policy
    if (policies.privacyPolicy) {
        const privacyTitle = document.querySelector('.privacy-title');
        if (privacyTitle) privacyTitle.textContent = policies.privacyPolicy.title;

        const privacyLastUpdated = document.querySelector('.privacy-last-updated');
        if (privacyLastUpdated) privacyLastUpdated.textContent = `Last Updated: ${policies.privacyPolicy.lastUpdated}`;

        const privacyContent = document.querySelector('.privacy-content');
        if (privacyContent && policies.privacyPolicy.sections) {
            privacyContent.innerHTML = policies.privacyPolicy.sections.map(section => `
                <div>
                    <h3 class="font-retro text-sm text-retro-purple mb-2">${section.heading}</h3>
                    <p class="font-terminal text-base">${section.content}</p>
                </div>
            `).join('');
        }
    }

    // Update Terms of Service
    if (policies.termsOfService) {
        const termsTitle = document.querySelector('.terms-title');
        if (termsTitle) termsTitle.textContent = policies.termsOfService.title;

        const termsLastUpdated = document.querySelector('.terms-last-updated');
        if (termsLastUpdated) termsLastUpdated.textContent = `Last Updated: ${policies.termsOfService.lastUpdated}`;

        const termsContent = document.querySelector('.terms-content');
        if (termsContent && policies.termsOfService.sections) {
            termsContent.innerHTML = policies.termsOfService.sections.map(section => `
                <div>
                    <h3 class="font-retro text-sm text-retro-blue mb-2">${section.heading}</h3>
                    <p class="font-terminal text-base">${section.content}</p>
                </div>
            `).join('');
        }
    }
}

/**
 * Initialize back to top button
 */
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
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
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Initialize glitch effects on hover
 */
function initGlitchEffects() {
    document.querySelectorAll('.retro-glow').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('animate-glitch');
        });
        el.addEventListener('mouseleave', () => {
            el.classList.remove('animate-glitch');
        });
    });
}

/**
 * Initialize mobile menu
 */
function initMobileMenu() {
    const mobileBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('#mobile-menu .mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }
}

/**
 * Initialize modals
 */
function initModals() {
    // Privacy link
    const privacyLink = document.getElementById('privacy-link');
    if (privacyLink) {
        privacyLink.addEventListener('click', () => openModal('privacy-modal'));
    }

    // Terms link
    const termsLink = document.getElementById('terms-link');
    if (termsLink) {
        termsLink.addEventListener('click', () => openModal('terms-modal'));
    }
}

/**
 * Open modal
 */
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

/**
 * Close modal
 */
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Make closeModal globally available
window.closeModal = closeModal;

/**
 * Initialize contact form
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const responseMsg = document.getElementById('responseMsg');
    const scriptURL = portfolioData?.contact?.scriptURL || '';

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                message: form.message.value.trim()
            };

            responseMsg.textContent = 'Sending...';

            if (!scriptURL) {
                responseMsg.textContent = 'Contact form not configured.';
                responseMsg.classList.add('text-red-600');
                return;
            }

            try {
                const response = await fetch(scriptURL, {
                    method: 'POST',
                    body: JSON.stringify(formData)
                });
                const result = await response.json();

                if (result.status === 'success') {
                    responseMsg.textContent = 'Message sent!';
                    responseMsg.classList.add('text-green-600');
                    responseMsg.classList.remove('text-red-600');
                    form.reset();
                } else {
                    responseMsg.textContent = 'Something went wrong.';
                    responseMsg.classList.add('text-red-600');
                    responseMsg.classList.remove('text-green-600');
                }
            } catch (error) {
                responseMsg.textContent = 'Failed to send message. Try again.';
                responseMsg.classList.add('text-red-600');
                responseMsg.classList.remove('text-green-600');
            }
        });
    }
}
