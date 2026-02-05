// Clean Minimalist Portfolio - JavaScript

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

// Portfolio Data Loader
let portfolioData = null;

// Default Portfolio Data (used when JSON fails to load)
const defaultPortfolioData = {
    personal: {
        name: "Siddharth Mahajan",
        initials: "SM",
        title: "Solution Architect & Cloud Engineer",
        subtitle: "Kubernetes | Service Mesh | Full-Stack Developer",
        location: "India",
        email: "siddharth.mhjn99@gmail.com",
        availability: "Available for Technical Consulting",
        yearsExperience: "3+",
        projectsCompleted: "10+",
        resume: "Resume.pdf",
        profilePhoto: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
        bannerPhoto: "Banner_Photo.png",
        favicon: "favicon.jpg",
        ogImage: "Profile_Photo.png",
        ogUrl: "http://siddharth.work.gd",
        footerDescription: "Solution Architect & Cloud Engineer passionate about building scalable, resilient systems.",
        googleScriptURL: "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE",
        socialLinks: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/siddharth-mhjn", icon: "fab fa-linkedin" },
            { name: "GitHub", url: "https://github.com/siddharth-mhjn", icon: "fab fa-github" }
        ]
    },
    about: {
        paragraphs: [
            "I'm Siddharth Mahajan, a Solution Architect and Cloud Engineer specializing in designing scalable, secure, and highly available cloud-native systems. My expertise lies in Kubernetes, service mesh technologies like Istio, and building efficient pipelines that boost delivery speed and system resilience. I've led infrastructure modernization initiatives, optimized observability using EFK stacks, and crafted CI/CD workflows for critical applications, always grounding architecture decisions in real-world performance and reliability.",
            "Beyond technical implementation, I focus on enabling vendor interoperability, creating custom API gateways, and mentoring teams to bridge the gap between technology and business needs. By combining coding skills, cloud expertise, and collaborative leadership, I deliver solutions that not only function effectively but continuously evolve to meet changing demands."
        ]
    },
    skills: {
        "Cloud & DevOps": {
            icon: "fas fa-cloud",
            technologies: ["Docker", "Podman", "Kubernetes", "Rancher", "Istio", "Azure", "AKS", "AWS", "VMware", "NGINX", "Git", "CI/CD", "Linux", "Windows"]
        },
        "Programming & Scripting": {
            icon: "fas fa-code",
            technologies: ["Java", "Python", "Shell Scripting", "PowerShell", "C", "C++"]
        },
        "Frameworks & Web": {
            icon: "fas fa-globe",
            technologies: ["Spring Boot", "Spring Security", "Spring Cloud", "Vue.js", "Quasar", "HTML", "CSS"]
        },
        "Data & Security": {
            icon: "fas fa-database",
            technologies: ["MySQL", "PostgreSQL", "OpenSearch", "Prometheus", "Grafana", "Kafka", "APISIX", "Keycloak", "WSO2", "Nifi"]
        }
    },
    experience: [
        {
            title: "Software Engineer I",
            company: "Astreya",
            period: "June 2025 - Present",
            icon: "fas fa-building",
            gradient: "from-sky-blue to-blue-500",
            description: "Contributing to the design and development of system architecture to support team operations and ensure project scalability.",
            technologies: ["Cloud-Native", "Automation"]
        },
        {
            title: "Member Technical Staff",
            company: "NEC India",
            period: "April 2025 - June 2025",
            icon: "fas fa-city",
            gradient: "from-blue-500 to-indigo-600",
            description: "Built data pipelines for smart city projects, enabling real-time insights. Deployed EFK with Istio on Kubernetes to enhance observability and reduce service issues. Improved system architecture to support vendor onboarding and platform scalability.",
            technologies: ["Kubernetes", "EFK", "Istio", "Nifi"]
        },
        {
            title: "Software Engineer",
            company: "LTIMindtree",
            period: "July 2022 - March 2025",
            icon: "fas fa-server",
            gradient: "from-indigo-600 to-purple-600",
            description: "Managed Kubernetes clusters with Istio integration for improved observability. Designed a custom API Gateway, automated infrastructure with scripts, and evaluated cloud-native tools for scalable systems. Enhanced monitoring through a high-scale telemetry platform and supported team efficiency and training.",
            technologies: ["Kubernetes", "Service Mesh", "API Gateway", "Spring Cloud"]
        }
    ],
    projects: [
        {
            title: "Multi-Cluster K8s Platform",
            description: "Enterprise-grade Kubernetes platform with automated deployment, monitoring, and service mesh integration.",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c14eb582ba-ed52d874f3db2fd15482.png",
            technologies: ["Kubernetes", "Istio", "Prometheus"],
            link: "https://github.com/siddharth-mhjn"
        },
        {
            title: "API Gateway Solution",
            description: "Scalable API gateway with rate limiting, authentication, and comprehensive analytics dashboard.",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/ec37564346-b444b826b5a927726fc2.png",
            technologies: ["APISIX", "Keycloak", "Docker"],
            link: "https://github.com/siddharth-mhjn"
        },
        {
            title: "Smart City Pipeline",
            description: "Real-time data processing pipeline for smart city IoT sensors with EFK stack implementation.",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/74b0a40896-7c00e6832f16a3d552fa.png",
            technologies: ["Elasticsearch", "Kafka", "Python"],
            link: "https://github.com/siddharth-mhjn"
        }
    ],
    certifications: [
        { title: "ITOPS Automation (Foundation) Engineer", issuer: "LTIMindtree Certified", icon: "fas fa-certificate" },
        { title: "Cloud & Infrastructure Service Professional", issuer: "LTI Certified", icon: "fas fa-cloud" },
        { title: "Web Development", issuer: "INTERNSHALA Certification", icon: "fas fa-cogs" }
    ],
    awards: [
        {
            title: "Technical Subject Matter Expert",
            date: "June 2024",
            description: "Appreciated as a Technical Subject Matter Expert for contributions to the Automation Academy training program from April 2023 to March 2024.",
            icon: "fas fa-medal",
            iconColor: "text-blue-500"
        },
        {
            title: "Spotlight Award",
            date: "June 2023",
            description: "Honored for pioneering advanced technologies and implementing a robust Service Mesh architecture, leading to a 30% improvement in system scalability.",
            icon: "fas fa-trophy",
            iconColor: "text-yellow-500"
        },
        {
            title: "Spotlight Award",
            date: "March 2023",
            description: "Recognized for rapidly mastering Platform (JORITZ) Core and Istio; delivered a live Service Mesh demo that influenced architectural direction, reducing decision-making time by 30%.",
            icon: "fas fa-trophy",
            iconColor: "text-yellow-500"
        }
    ],
    testimonials: [
        {
            name: "Karthik Battaram",
            role: "Senior Data Engineer",
            company: "LTIMindtree",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
            quote: "I've had the pleasure of working closely with Siddharth and can confidently say he is one of the most technically sound and dependable engineers I've worked with. What truly sets him apart is his strong sense of ownership - once he takes on a task, he sees it through with focus, accountability, and a clear understanding of the bigger picture."
        },
        {
            name: "Akshay Reddy Emmadi",
            role: "Software Engineer",
            company: "LTIMindtree",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
            quote: "I had the privilege of working closely with Siddharth Mahajan on our platform team, and I can confidently say that he has been a cornerstone in shaping our microservices architecture. His deep expertise in Spring Cloud and hands-on experience with Istio and API Gateway played a crucial role in transforming our monolithic system into a scalable, secure, and efficient microservices-based architecture."
        },
        {
            name: "Priyanka A",
            role: "Specialist Data Engineer",
            company: "LTIMindtree",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
            quote: "It was an absolute pleasure working with Siddharth. He is a young, energetic professional with a strong eagerness to learn and grow. As a Site Reliability Engineer, Siddharth played a crucial role in holding the systems team together, consistently demonstrating ownership and resilience under pressure."
        }
    ],
    footerServices: [
        "Cloud Architecture",
        "Kubernetes Solutions",
        "Platform Engineering",
        "Website Development"
    ],
    availabilityOptions: [
        "Technical consulting"
    ]
};

async function loadPortfolioData() {
    try {
        const response = await fetch('portfolio-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        portfolioData = await response.json();
        renderAllSections();
    } catch (error) {
        console.error('Error loading portfolio data:', error);
        console.log('Using default portfolio data...');
        portfolioData = defaultPortfolioData;
        renderAllSections();
    }
}

function renderAllSections() {
    if (!portfolioData) return;

    renderPersonalInfo();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderCertifications();
    renderAwards();
    renderTestimonials();
    renderContact();
    renderFooter();
}

function renderPersonalInfo() {
    const p = portfolioData.personal;

    // Update page title from meta
    if (portfolioData.meta?.title) {
        document.title = portfolioData.meta.title;
    }

    // Update meta tags
    const metaDescription = document.getElementById('meta-description');
    if (metaDescription) metaDescription.content = `Portfolio of ${p.name} - ${p.title}`;

    const metaAuthor = document.getElementById('meta-author');
    if (metaAuthor) metaAuthor.content = p.name;

    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.content = `${p.name} | ${p.title}`;

    const ogDescription = document.getElementById('og-description');
    if (ogDescription) ogDescription.content = `Explore the portfolio, projects, and certifications of ${p.name}.`;

    const ogImage = document.getElementById('og-image');
    if (ogImage) ogImage.content = p.ogImage;

    const ogUrl = document.getElementById('og-url');
    if (ogUrl) ogUrl.content = p.ogUrl;

    const faviconLink = document.getElementById('favicon-link');
    if (faviconLink) faviconLink.href = p.favicon;

    // Header name
    const headerName = document.getElementById('header-name');
    if (headerName) headerName.textContent = p.name;

    // Hero section
    const heroName = document.getElementById('hero-name');
    if (heroName) heroName.textContent = p.name;

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.innerHTML = `${p.title} | ${p.subtitle}`;

    // Hero buttons
    const resumeBtn = document.querySelector('#hero a[href="Resume.pdf"]');
    if (resumeBtn) resumeBtn.href = p.resume;

    // Social links in hero - use IDs
    const heroLinkedIn = document.getElementById('hero-linkedin');
    const heroGitHub = document.getElementById('hero-github');
    if (heroLinkedIn) heroLinkedIn.href = p.socialLinks.find(s => s.name === 'LinkedIn')?.url || '#';
    if (heroGitHub) heroGitHub.href = p.socialLinks.find(s => s.name === 'GitHub')?.url || '#';

    // Banner image
    const heroBanner = document.getElementById('hero-banner');
    if (heroBanner) heroBanner.src = p.bannerPhoto;
}

function renderAbout() {
    const about = portfolioData.about;
    const p = portfolioData.personal;

    // Profile image
    const profileImg = document.getElementById('about-profile-img');
    if (profileImg) profileImg.src = p.profilePhoto;

    // About paragraphs
    const paragraph1 = document.getElementById('about-paragraph-1');
    const paragraph2 = document.getElementById('about-paragraph-2');
    if (paragraph1 && about.paragraphs[0]) paragraph1.textContent = about.paragraphs[0];
    if (paragraph2 && about.paragraphs[1]) paragraph2.textContent = about.paragraphs[1];

    // Stats
    const yearsExp = document.getElementById('about-years-experience');
    const projectsCompleted = document.getElementById('about-projects-completed');
    if (yearsExp) yearsExp.textContent = p.yearsExperience;
    if (projectsCompleted) projectsCompleted.textContent = p.projectsCompleted;
}

function renderSkills() {
    const skills = portfolioData.skills;
    const container = document.querySelector('#skills .grid');
    if (!container) return;

    container.innerHTML = '';

    Object.entries(skills).forEach(([category, data]) => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow dark:bg-[#2a2a2a] hover-card-big';

        card.innerHTML = `
            <div class="flex items-center mb-4">
                <i class="${data.icon} text-sky-blue text-2xl mr-3"></i>
                <h3 class="text-xl font-semibold">${category}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
                ${data.technologies.map(tech =>
                    `<span class="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm dark:bg-[#4d4d4d]">${tech}</span>`
                ).join('')}
            </div>
        `;

        container.appendChild(card);
    });
}

function renderExperience() {
    const experience = portfolioData.experience;
    const container = document.querySelector('#experience .relative');
    if (!container) return;

    // Keep the timeline line
    const timelineLine = container.querySelector('.absolute.left-8');
    container.innerHTML = '';
    if (timelineLine) container.appendChild(timelineLine);
    else {
        const line = document.createElement('div');
        line.className = 'absolute left-8 top-0 bottom-0 w-0.5 bg-sky-blue/30';
        container.appendChild(line);
    }

    experience.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'relative flex items-start mb-16 pl-20';
        item.id = `exp-${index + 1}`;

        item.innerHTML = `
            <div class="absolute left-0 flex-shrink-0 w-16 h-16 bg-gradient-to-br ${exp.gradient} rounded-full flex items-center justify-center shadow-lg">
                <i class="${exp.icon} text-white text-xl"></i>
            </div>
            <div class="flex-1 bg-soft-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow dark:bg-[#2a2a2a] hover-card-big">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                        <h3 class="text-2xl font-bold text-deep-navy mb-2 dark:text-white">${exp.title}</h3>
                        <div class="flex items-center text-sky-blue font-semibold mb-2">
                            <i class="fas fa-briefcase mr-2"></i>
                            <span>${exp.company}</span>
                        </div>
                    </div>
                    <div class="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg border mt-3 lg:mt-0 dark:text-gray-300 dark:bg-[#2a2a2a]">
                        <i class="fas fa-calendar-alt mr-2 text-sky-blue"></i>
                        <span class="font-medium">${exp.period}</span>
                    </div>
                </div>
                <p class="text-gray-700 leading-relaxed mb-4 dark:text-gray-200">${exp.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${exp.technologies.map(tech =>
                        `<span class="bg-sky-blue/10 text-sky-blue px-3 py-1 rounded-full text-sm font-medium">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        `;

        container.appendChild(item);
    });
}

function renderProjects() {
    const projects = portfolioData.projects;
    const p = portfolioData.personal;
    const container = document.querySelector('#projects .grid');
    if (!container) return;

    container.innerHTML = '';

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow dark:bg-[#2a2a2a] hover-card-big';
        card.id = `project-${index + 1}`;

        card.innerHTML = `
            <div class="h-48 overflow-hidden">
                <img alt="${project.title}" class="w-full h-full object-cover image-zoom" src="${project.image}" loading="lazy" decoding="async" />
            </div>
            <div class="p-6 hover-card-big">
                <h3 class="text-xl font-semibold mb-3">${project.title}</h3>
                <p class="text-gray-600 mb-4 dark:text-gray-300">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech =>
                        `<span class="bg-sky-blue/20 text-sky-blue px-2 py-1 rounded text-xs">${tech}</span>`
                    ).join('')}
                </div>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="text-sky-blue hover:underline flex items-center cursor-pointer">
                    <i class="fab fa-github mr-2"></i>View on GitHub
                </a>
            </div>
        `;

        container.appendChild(card);
    });

    // Update "View All Projects" link
    const viewAllBtn = document.querySelector('#projects .text-center a');
    if (viewAllBtn) viewAllBtn.href = p.socialLinks.find(s => s.name === 'GitHub')?.url || '#';
}

function renderCertifications() {
    const certs = portfolioData.certifications;
    const container = document.querySelector('#certifications .grid.md\\:grid-cols-2.lg\\:grid-cols-3');
    if (!container) return;

    container.innerHTML = '';

    certs.forEach((cert, index) => {
        const card = document.createElement('div');
        card.className = 'text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow dark:bg-[#2a2a2a] hover-card-big';
        card.id = `cert-${index + 1}`;

        card.innerHTML = `
            <i class="${cert.icon} text-sky-blue text-4xl mb-4"></i>
            <h3 class="text-lg font-semibold mb-2">${cert.title}</h3>
            <p class="text-gray-600 dark:text-gray-300">${cert.issuer}</p>
        `;

        container.appendChild(card);
    });
}

function renderAwards() {
    const awards = portfolioData.awards;
    const container = document.querySelector('#certifications .mt-16 .grid');
    if (!container) return;

    container.innerHTML = '';

    awards.forEach((award, index) => {
        const card = document.createElement('div');
        card.className = 'flex items-start p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow dark:bg-[#2a2a2a] hover-card-big';
        card.id = `award-${index + 1}`;

        card.innerHTML = `
            <div class="mr-4">
                <i class="${award.icon} ${award.iconColor} text-3xl"></i>
            </div>
            <div>
                <h4 class="text-lg font-semibold mb-2">${award.title}</h4>
                <p class="text-gray-600 mb-2 dark:text-gray-300">${award.date}</p>
                <p class="text-gray-700 dark:text-gray-200">${award.description}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

function renderTestimonials() {
    const testimonials = portfolioData.testimonials;
    const p = portfolioData.personal;
    const container = document.querySelector('#testimonials .grid');
    if (!container) return;

    container.innerHTML = '';

    testimonials.forEach((test, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow dark:bg-[#2a2a2a] hover-card-big';
        card.id = `testimonial-${index + 1}`;

        card.innerHTML = `
            <div class="flex items-center mb-6">
                <img alt="${test.name}" class="w-12 h-12 rounded-full object-cover mr-4 image-zoom" src="${test.image}" loading="lazy" decoding="async" />
                <div>
                    <h4 class="font-semibold text-deep-navy dark:text-white">${test.name}</h4>
                    <p class="text-gray-600 text-sm dark:text-gray-300">${test.role}, ${test.company}</p>
                </div>
            </div>
            <p class="text-gray-700 leading-relaxed dark:text-gray-200">"${test.quote}"</p>
        `;

        container.appendChild(card);
    });

    // Update "View More" link
    const viewMoreBtn = document.querySelector('#testimonials .text-center a');
    if (viewMoreBtn) {
        const linkedIn = p.socialLinks.find(s => s.name === 'LinkedIn');
        if (linkedIn) viewMoreBtn.href = `${linkedIn.url}/details/recommendations/`;
    }
}

function renderContact() {
    const p = portfolioData.personal;
    const availability = portfolioData.availabilityOptions;

    // Email link
    const emailLink = document.getElementById('contact-email-link');
    const emailText = document.getElementById('contact-email-text');
    if (emailLink) emailLink.href = `mailto:${p.email}`;
    if (emailText) emailText.textContent = p.email;

    // LinkedIn and GitHub links in contact - use IDs
    const contactLinkedIn = document.getElementById('contact-linkedin');
    const contactGitHub = document.getElementById('contact-github');
    if (contactLinkedIn) contactLinkedIn.href = p.socialLinks.find(s => s.name === 'LinkedIn')?.url || '#';
    if (contactGitHub) contactGitHub.href = p.socialLinks.find(s => s.name === 'GitHub')?.url || '#';

    // Availability list
    const availabilityList = document.getElementById('contact-availability-list');
    if (availabilityList && availability) {
        availabilityList.innerHTML = availability.map(item =>
            `<li class="flex items-center">
                <i class="fas fa-check text-sky-blue mr-2"></i>
                ${item}
            </li>`
        ).join('');
    }
}

function renderFooter() {
    const p = portfolioData.personal;
    const services = portfolioData.footerServices;

    // Footer name and description
    const footerName = document.getElementById('footer-name');
    if (footerName) footerName.textContent = p.name;

    const footerDesc = document.getElementById('footer-description');
    if (footerDesc) footerDesc.textContent = p.footerDescription;

    // Footer social links - use IDs
    const footerLinkedIn = document.getElementById('footer-linkedin');
    const footerGitHub = document.getElementById('footer-github');
    if (footerLinkedIn) footerLinkedIn.href = p.socialLinks.find(s => s.name === 'LinkedIn')?.url || '#';
    if (footerGitHub) footerGitHub.href = p.socialLinks.find(s => s.name === 'GitHub')?.url || '#';

    // Footer services
    const servicesList = document.getElementById('footer-services');
    if (servicesList && services) {
        servicesList.innerHTML = services.map(service => `<li>${service}</li>`).join('');
    }

    // Footer contact info - use IDs
    const footerEmail = document.getElementById('footer-email');
    if (footerEmail) {
        const emailSpan = footerEmail.querySelector('span');
        if (emailSpan) emailSpan.textContent = p.email;
    }

    const footerLocation = document.getElementById('footer-location');
    if (footerLocation) {
        const locationSpan = footerLocation.querySelector('span');
        if (locationSpan) locationSpan.textContent = p.location;
    }

    // Copyright with clickable link
    const copyright = document.getElementById('footer-copyright');
    if (copyright && portfolioData.footer?.copyright) {
        const link = portfolioData.footer.copyrightLink;
        copyright.innerHTML = link
            ? `${portfolioData.footer.copyright} <a href="${link.url}" target="_blank" class="text-sky-blue hover:text-white transition-colors">${link.text}</a>`
            : portfolioData.footer.copyright;
    }
}

// Initialize data loading
document.addEventListener('DOMContentLoaded', loadPortfolioData);

// Redirect from index.html to root
if (window.location.pathname === '/index.html') {
    window.location.replace('/');
}

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Theme Toggle (Light/Dark)
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

function updateIcon() {
    if (html.classList.contains('dark')) {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

updateIcon();
themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    updateIcon();
});

// Contact Form Submission - uses URL from JSON
const form = document.getElementById('contact-form');
const responseMsg = document.getElementById('responseMsg');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const scriptURL = portfolioData?.personal?.googleScriptURL || '';
    if (!scriptURL || scriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        responseMsg.textContent = 'Contact form not configured.';
        return;
    }

    const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
    };

    responseMsg.textContent = 'Sending...';

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (result.status === 'success') {
            responseMsg.textContent = 'Message sent!';
            form.reset();
        } else {
            responseMsg.textContent = 'Something went wrong.';
        }
    } catch (error) {
        console.error('Error!', error);
        responseMsg.textContent = 'Failed to send message. Try again.';
    }
});

// Close mobile menu when a link is clicked with slide-out effect
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Page load fade-in
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});

// Scroll reveal
const fadeElems = document.querySelectorAll('.fade-up-big');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });
fadeElems.forEach(el => observer.observe(el));

// Synchronized hero animation
const hero = document.getElementById('hero');
if (hero) {
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(70px) scale(0.95)';
    hero.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
    window.addEventListener('load', () => {
        setTimeout(() => {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0) scale(1)';
        }, 300);
    });
}

