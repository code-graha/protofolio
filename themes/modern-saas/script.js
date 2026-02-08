// Modern SaaS Portfolio - JavaScript

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

// Default portfolio data (fallback if JSON fails to load)
const defaultPortfolioData = {
    personal: {
        name: "Siddharth Mahajan",
        initials: "SM",
        title: "Solution Architect & Cloud Engineer",
        subtitle: "Kubernetes | Service Mesh | Full-Stack Developer",
        location: "India",
        email: "siddharth.mhjn99@gmail.com",
        isAvailable: true,
        availability: "Available for Technical Consulting",
        availabilitySubtext: "Technical Architecture & Cloud Solutions",
        yearsExperience: "3+",
        projectsCompleted: "10+",
        awardsCount: "3",
        resume: "Resume.pdf",
        heroImage: "https://storage.googleapis.com/uxpilot-auth.appspot.com/65dcd73dec-ced10cc5df4de98a0c88.png",
        googleScriptURL: "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE",
        socialLinks: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/siddharth-mhjn", icon: "fa-brands fa-linkedin" },
            { name: "GitHub", url: "https://github.com/siddharth-mhjn", icon: "fa-brands fa-github" },
            { name: "Email", url: "mailto:siddharth.mhjn99@gmail.com", icon: "fa-solid fa-envelope" }
        ]
    },
    hero: {
        title1: "Solution Architect &",
        title2: "Cloud Engineer",
        description: "Specializing in Kubernetes, Service Mesh, and Full-Stack Development. Building scalable, secure, and highly available cloud-native systems.",
        experienceBadge: "3+ Years of Experience"
    },
    about: {
        title: "Building the Future of Cloud Infrastructure",
        subtitle: "Passionate about creating scalable, secure, and efficient cloud-native solutions that drive business value",
        cards: [
            {
                icon: "fa-solid fa-cloud",
                title: "Cloud Architecture",
                description: "Designing and implementing enterprise-grade cloud infrastructure with focus on scalability, security, and cost optimization.",
                gradient: "from-blue-50 to-indigo-50",
                borderColor: "indigo",
                iconBg: "indigo-600"
            },
            {
                icon: "fa-solid fa-dharmachakra",
                title: "Kubernetes Expert",
                description: "Deep expertise in container orchestration, service mesh implementation with Istio, and building resilient microservices architectures.",
                gradient: "from-purple-50 to-pink-50",
                borderColor: "purple",
                iconBg: "purple-600"
            },
            {
                icon: "fa-solid fa-code",
                title: "Full-Stack Development",
                description: "Building end-to-end solutions with modern frameworks. Proficient in Spring Boot, Vue.js, and creating RESTful APIs.",
                gradient: "from-green-50 to-emerald-50",
                borderColor: "green",
                iconBg: "green-600"
            }
        ],
        journey: [
            "Solution Architect and Cloud Engineer specializing in scalable, secure, and highly available cloud-native systems.",
            "Expertise in Kubernetes orchestration, Istio service mesh, CI/CD pipeline automation, and comprehensive observability using EFK stacks.",
            "Led infrastructure modernization initiatives and designed custom API gateways for enterprise clients.",
            "Focused on vendor interoperability, mentoring development teams, and aligning technology solutions with business needs."
        ],
        skillBars: [
            { name: "Cloud & DevOps", percentage: 95, gradient: "from-indigo-600 to-purple-600" },
            { name: "Kubernetes & Service Mesh", percentage: 90, gradient: "from-purple-600 to-pink-600" },
            { name: "Backend Development", percentage: 85, gradient: "from-blue-600 to-indigo-600" },
            { name: "System Architecture", percentage: 88, gradient: "from-green-600 to-emerald-600" },
            { name: "Frontend Development", percentage: 75, gradient: "from-pink-600 to-rose-600" }
        ]
    },
    experience: [
        {
            title: "Software Engineer I",
            company: "Astreya",
            period: "June 2025 – Present",
            duration: "Current",
            isCurrent: true,
            color: "indigo",
            responsibilities: [
                "Design and development of system architecture ensuring scalability and operational efficiency",
                "Leading cloud-native transformation initiatives for enterprise clients"
            ],
            technologies: ["Cloud-Native", "Automation"]
        },
        {
            title: "Member Technical Staff",
            company: "NEC India",
            period: "April 2025 – June 2025",
            duration: "2 Months",
            isCurrent: false,
            color: "purple",
            responsibilities: [
                "Built real-time data pipelines for smart city projects with IoT integration",
                "Deployed EFK stack with Istio on Kubernetes for enhanced observability",
                "Improved vendor onboarding process and system monitoring capabilities"
            ],
            technologies: ["Kubernetes", "EFK", "Istio", "NiFi"]
        },
        {
            title: "Software Engineer",
            company: "LTIMindtree",
            period: "July 2022 – March 2025",
            duration: "2.8 Years",
            isCurrent: false,
            color: "pink",
            responsibilities: [
                "Managed enterprise Kubernetes clusters with Istio service mesh implementation",
                "Designed and implemented custom API Gateway solution with rate limiting and authentication",
                "Automated infrastructure provisioning reducing deployment time by 60%",
                "Built comprehensive telemetry and monitoring platforms using Prometheus and Grafana",
                "Led training programs for Automation Academy improving team efficiency by 30%"
            ],
            technologies: ["Kubernetes", "Service Mesh", "API Gateway", "Spring Cloud"]
        }
    ],
    skills: {
        "Cloud & DevOps": {
            icon: "fa-solid fa-cloud",
            gradient: "from-blue-50 to-indigo-50",
            borderColor: "indigo",
            iconBg: "indigo-600",
            technologies: [
                { name: "Docker", icon: "fa-brands fa-docker", color: "blue-600" },
                { name: "Kubernetes", icon: "fa-solid fa-dharmachakra", color: "indigo-600" },
                { name: "Istio", icon: "fa-solid fa-network-wired", color: "purple-600" },
                { name: "Azure", icon: "fa-brands fa-microsoft", color: "blue-500" },
                { name: "AWS", icon: "fa-brands fa-aws", color: "orange-500" },
                { name: "CI/CD", icon: "fa-solid fa-code-branch", color: "green-600" },
                { name: "Rancher", icon: "fa-solid fa-layer-group", color: "purple-600" },
                { name: "Linux", icon: "fa-brands fa-linux", color: "gray-900" }
            ]
        },
        "Programming": {
            icon: "fa-solid fa-code",
            gradient: "from-purple-50 to-pink-50",
            borderColor: "purple",
            iconBg: "purple-600",
            technologies: [
                { name: "Java", icon: "fa-brands fa-java", color: "red-600" },
                { name: "Python", icon: "fa-brands fa-python", color: "blue-600" },
                { name: "Shell Script", icon: "fa-solid fa-terminal", color: "gray-700" },
                { name: "PowerShell", icon: "fa-solid fa-code", color: "blue-500" },
                { name: "C", icon: "fa-solid fa-c", color: "indigo-600" },
                { name: "C++", icon: "fa-solid fa-plus", color: "purple-600" }
            ]
        },
        "Frameworks & Web": {
            icon: "fa-solid fa-window-restore",
            gradient: "from-green-50 to-emerald-50",
            borderColor: "green",
            iconBg: "green-600",
            technologies: [
                { name: "Spring Boot", icon: "fa-solid fa-leaf", color: "green-600" },
                { name: "Spring Security", icon: "fa-solid fa-shield-halved", color: "red-600" },
                { name: "Spring Cloud", icon: "fa-solid fa-cloud", color: "blue-600" },
                { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "green-500" },
                { name: "Quasar", icon: "fa-solid fa-q", color: "indigo-600" },
                { name: "HTML", icon: "fa-brands fa-html5", color: "orange-600" },
                { name: "CSS", icon: "fa-brands fa-css3-alt", color: "blue-600" }
            ]
        },
        "Data & Security": {
            icon: "fa-solid fa-database",
            gradient: "from-orange-50 to-red-50",
            borderColor: "orange",
            iconBg: "orange-600",
            technologies: [
                { name: "MySQL", icon: "fa-solid fa-database", color: "blue-600" },
                { name: "PostgreSQL", icon: "fa-solid fa-elephant", color: "indigo-600" },
                { name: "Prometheus", icon: "fa-solid fa-fire", color: "red-600" },
                { name: "Grafana", icon: "fa-solid fa-chart-line", color: "orange-600" },
                { name: "Kafka", icon: "fa-solid fa-stream", color: "gray-700" },
                { name: "APISIX", icon: "fa-solid fa-server", color: "purple-600" },
                { name: "Keycloak", icon: "fa-solid fa-key", color: "green-600" }
            ]
        }
    },
    projects: [
        {
            id: "project1",
            title: "Multi-Cluster Kubernetes Platform",
            description: "Enterprise-grade Kubernetes platform with automated deployment, comprehensive monitoring, and service mesh integration.",
            image: "",
            gradient: "from-blue-500 to-indigo-600",
            icon: "fa-solid fa-dharmachakra",
            technologies: ["Kubernetes", "Istio", "Prometheus"],
            link: "https://github.com/siddharth-mhjn"
        },
        {
            id: "project2",
            title: "API Gateway Solution",
            description: "Scalable API gateway with advanced rate limiting, authentication, and real-time analytics dashboard.",
            image: "",
            gradient: "from-purple-500 to-pink-600",
            icon: "fa-solid fa-server",
            technologies: ["APISIX", "Keycloak", "Docker"],
            link: "https://github.com/siddharth-mhjn"
        },
        {
            id: "project3",
            title: "Smart City Pipeline",
            description: "Real-time IoT data processing pipeline with EFK stack for smart city applications.",
            image: "",
            gradient: "from-green-500 to-emerald-600",
            icon: "fa-solid fa-city",
            technologies: ["Elasticsearch", "Kafka", "Python"],
            link: "https://github.com/siddharth-mhjn"
        }
    ],
    certifications: [
        {
            title: "ITOPS Automation Engineer",
            issuer: "LTIMindtree",
            level: "Foundation",
            description: "Certified in IT operations automation, infrastructure as code, and DevOps best practices.",
            icon: "fa-solid fa-robot",
            color: "indigo"
        },
        {
            title: "Cloud & Infrastructure Service",
            issuer: "LTI",
            level: "Professional",
            description: "Advanced certification covering cloud architecture, infrastructure management, and service delivery.",
            icon: "fa-solid fa-cloud",
            color: "purple"
        },
        {
            title: "Web Development",
            issuer: "Internshala",
            level: "Full-Stack",
            description: "Comprehensive training in modern web development technologies, frameworks, and best practices.",
            icon: "fa-solid fa-code",
            color: "green"
        }
    ],
    awards: [
        {
            title: "Technical Subject Matter Expert",
            date: "June 2024",
            issuer: "LTIMindtree",
            description: "Recognized for contributions to Automation Academy training (April 2023 – March 2024).",
            icon: "fa-solid fa-star",
            color: "yellow"
        },
        {
            title: "Spotlight Award",
            date: "June 2023",
            issuer: "LTIMindtree",
            description: "Improved system scalability by 30% through Service Mesh architecture implementation.",
            icon: "fa-solid fa-award",
            color: "indigo"
        },
        {
            title: "Spotlight Award",
            date: "March 2023",
            issuer: "LTIMindtree",
            description: "Delivered Istio and platform demos reducing architectural decision time by 30%.",
            icon: "fa-solid fa-medal",
            color: "purple"
        }
    ],
    testimonials: [
        {
            name: "Karthik Battaram",
            role: "Senior Data Engineer",
            company: "LTIMindtree",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
            quote: "Technically sound, dependable, and strong ownership mindset. Siddharth consistently delivers high-quality solutions.",
            rating: 5
        },
        {
            name: "Akshay Reddy Emmadi",
            role: "Software Engineer",
            company: "LTIMindtree",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
            quote: "Key contributor to microservices transformation using Spring Cloud, Istio, and API Gateway. Excellent technical skills.",
            rating: 5
        },
        {
            name: "Priyanka A",
            role: "Specialist Data Engineer",
            company: "LTIMindtree",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
            quote: "Reliable, resilient, and instrumental in systems engineering under pressure. A true professional.",
            rating: 5
        }
    ],
    footerServices: [
        "Cloud Architecture",
        "Kubernetes Solutions",
        "Platform Engineering",
        "Website Development"
    ]
};

// Global portfolio data
let portfolioData = { ...defaultPortfolioData };

// Load portfolio data from JSON file
async function loadPortfolioData() {
    try {
        const response = await fetch('portfolio-data.json');
        if (!response.ok) {
            console.log('JSON file not found, using default values');
            updatePageContent(defaultPortfolioData);
            return;
        }
        const data = await response.json();
        portfolioData = { ...defaultPortfolioData, ...data };
        updatePageContent(portfolioData);
    } catch (error) {
        console.log('Error loading JSON, using default values:', error);
        updatePageContent(defaultPortfolioData);
    }
}

// Get initials from name
function getInitials(name) {
    if (!name) return "YN";
    const words = name.split(' ');
    if (words.length >= 2) {
        return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
}

// Update page content with portfolio data
function updatePageContent(data) {
    // Update page title from meta
    if (data.meta && data.meta.title) {
        document.title = data.meta.title;
    }

    // Update favicon
    if (data.personal && data.personal.favicon) {
        const faviconLink = document.getElementById('favicon-link');
        if (faviconLink) faviconLink.href = data.personal.favicon;
    }

    // Update Header
    if (data.personal) {
        const initials = getInitials(data.personal.name);
        updateElementText('header-initials', initials);
        updateElementText('header-name', data.personal.name);
        updateElementHref('header-resume', data.personal.resume);

        // Update social links in header
        const linkedinLink = data.personal.socialLinks?.find(l => l.name === 'LinkedIn');
        const githubLink = data.personal.socialLinks?.find(l => l.name === 'GitHub');
        if (linkedinLink) updateElementHref('header-linkedin', linkedinLink.url);
        if (githubLink) updateElementHref('header-github', githubLink.url);
    }

    // Update Hero Section
    if (data.hero) {
        updateElementText('hero-title-1', data.hero.title1);
        updateElementText('hero-title-2', data.hero.title2);
        updateElementText('hero-description', data.hero.description);
        updateElementText('hero-experience-badge', data.hero.experienceBadge);
    }
    if (data.personal) {
        updateElementText('hero-years', data.personal.yearsExperience);
        updateElementText('hero-projects', data.personal.projectsCompleted);
        updateElementText('hero-awards', data.personal.awardsCount);
        updateElementText('hero-availability', data.personal.availability);
        updateElementText('hero-availability-sub', data.personal.availabilitySubtext);
        // Update mobile availability banner text
        updateElementText('hero-availability-mobile', data.personal.availability);
        updateElementText('hero-availability-sub-mobile', data.personal.availabilitySubtext);
        const heroImage = document.getElementById('hero-image');
        if (heroImage && data.personal.heroImage) {
            heroImage.src = data.personal.heroImage;
        }
        // Hide/show availability banner based on isAvailable (both desktop and mobile)
        const availabilityBanner = document.getElementById('hero-availability-banner');
        const availabilityBannerMobile = document.getElementById('hero-availability-banner-mobile');
        if (availabilityBanner) {
            if (data.personal.isAvailable === false) {
                availabilityBanner.classList.add('hidden');
            } else {
                availabilityBanner.classList.remove('hidden');
            }
        }
        if (availabilityBannerMobile) {
            if (data.personal.isAvailable === false) {
                availabilityBannerMobile.classList.add('hidden');
            } else {
                availabilityBannerMobile.classList.remove('hidden');
            }
        }
    }

    // Update About Section
    if (data.about) {
        updateElementText('about-title', data.about.title);
        updateElementText('about-subtitle', data.about.subtitle);
        generateAboutCards(data.about.cards);
        generateJourneyParagraphs(data.about.journey);
        generateSkillBars(data.about.skillBars);
    }

    // Update Experience Section
    if (data.experience) {
        generateExperienceTimeline(data.experience);
    }

    // Update Skills Section
    if (data.skills) {
        generateSkillsGrid(data.skills);
    }

    // Update Projects Section
    if (data.projects) {
        generateProjectsGrid(data.projects);
    }
    if (data.personal?.socialLinks) {
        const githubLink = data.personal.socialLinks.find(l => l.name === 'GitHub');
        if (githubLink) updateElementHref('projects-github-link', githubLink.url);
    }

    // Update Certifications Section
    if (data.certifications) {
        generateCertificationsList(data.certifications);
    }

    // Update Awards Section
    if (data.awards) {
        generateAwardsList(data.awards);
    }

    // Update Testimonials Section
    if (data.testimonials) {
        generateTestimonialsGrid(data.testimonials);
    }
    if (data.personal?.socialLinks) {
        const linkedinLink = data.personal.socialLinks.find(l => l.name === 'LinkedIn');
        if (linkedinLink) updateElementHref('testimonials-linkedin-link', linkedinLink.url);
    }

    // Update Contact Section
    if (data.personal) {
        const contactEmail = document.getElementById('contact-email');
        if (contactEmail) {
            contactEmail.href = `mailto:${data.personal.email}`;
            contactEmail.textContent = data.personal.email;
        }
        updateElementText('contact-location', data.personal.location);
        updateElementText('contact-availability', data.personal.availability);
        generateContactSocialLinks(data.personal.socialLinks);
    }

    // Update Footer
    if (data.personal) {
        const initials = getInitials(data.personal.name);
        updateElementText('footer-initials', initials);
        updateElementText('footer-name', data.personal.name);
        updateElementText('footer-description', `${data.personal.title}. ${data.hero?.description || ''}`);
        updateElementHref('footer-resume-link', data.personal.resume);
        // Update copyright with clickable link
        const copyrightEl = document.getElementById('footer-copyright');
        if (copyrightEl && data.footer?.copyright) {
            const link = data.footer.copyrightLink;
            copyrightEl.innerHTML = link
                ? `${data.footer.copyright} <a href="${link.url}" target="_blank" class="text-indigo-400 hover:text-indigo-300 transition-colors">${link.text}</a>`
                : data.footer.copyright;
        }
        generateFooterSocialLinks(data.personal.socialLinks);
    }
    if (data.footerServices) {
        generateFooterServices(data.footerServices);
    }
}

// Helper function to update element text
function updateElementText(id, text) {
    const element = document.getElementById(id);
    if (element && text !== undefined) {
        element.textContent = text;
    }
}

// Helper function to update element href
function updateElementHref(id, href) {
    const element = document.getElementById(id);
    if (element && href) {
        element.href = href;
    }
}

// Generate About Cards
function generateAboutCards(cards) {
    const container = document.getElementById('about-cards');
    if (!container || !cards) return;

    container.innerHTML = cards.map(card => `
        <div class="bg-gradient-to-br ${card.gradient} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 lg:p-8 border border-${card.borderColor}-100">
            <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-${card.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                <i class="${card.icon} text-white text-lg sm:text-xl md:text-2xl"></i>
            </div>
            <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">${card.title}</h3>
            <p class="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">${card.description}</p>
        </div>
    `).join('');
}

// Generate Journey Paragraphs
function generateJourneyParagraphs(journey) {
    const container = document.getElementById('about-journey');
    if (!container || !journey) return;

    const icons = [
        'fa-solid fa-cloud',
        'fa-solid fa-dharmachakra',
        'fa-solid fa-server',
        'fa-solid fa-users'
    ];

    const colors = [
        { bg: 'indigo', gradient: 'from-indigo-500 to-indigo-600' },
        { bg: 'purple', gradient: 'from-purple-500 to-purple-600' },
        { bg: 'pink', gradient: 'from-pink-500 to-pink-600' },
        { bg: 'green', gradient: 'from-green-500 to-green-600' }
    ];

    container.innerHTML = journey.map((text, index) => {
        const icon = icons[index % icons.length];
        const color = colors[index % colors.length];
        return `
            <div class="bg-white rounded-md sm:rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-5 lg:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div class="flex items-start gap-1.5 sm:gap-3 md:gap-4">
                    <div class="w-6 h-6 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${color.gradient} rounded-md sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i class="${icon} text-white text-[10px] sm:text-sm md:text-base lg:text-lg"></i>
                    </div>
                    <p class="text-gray-700 text-[9px] sm:text-xs md:text-sm lg:text-base leading-relaxed">${text}</p>
                </div>
            </div>
        `;
    }).join('');
}

// Generate Skill Bars
function generateSkillBars(skillBars) {
    const container = document.getElementById('about-skills-bars');
    if (!container || !skillBars) return;

    const icons = [
        'fa-solid fa-cloud',
        'fa-solid fa-dharmachakra',
        'fa-solid fa-code',
        'fa-solid fa-sitemap',
        'fa-solid fa-palette'
    ];

    // Mobile: Single card with inline horizontal bars
    // Desktop/Tablet: Grid with circular progress indicators
    const mobileHTML = `
        <div class="sm:hidden bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <div class="space-y-2">
                ${skillBars.map((skill, index) => `
                    <div class="flex items-center gap-2">
                        <span class="text-[9px] font-medium text-gray-700 w-20 flex-shrink-0 truncate">${skill.name}</span>
                        <div class="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000" style="width: ${skill.percentage}%"></div>
                        </div>
                        <span class="text-[9px] font-bold text-gray-600 w-7 text-right">${skill.percentage}%</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const desktopHTML = `
        <div class="hidden sm:grid sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            ${skillBars.map((skill, index) => {
                const icon = icons[index % icons.length];
                const circumference = 2 * Math.PI * 36; // radius = 36
                const offset = circumference - (skill.percentage / 100) * circumference;

                return `
                    <div class="bg-white rounded-2xl p-3 md:p-4 lg:p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group text-center">
                        <!-- Circular Progress -->
                        <div class="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-3 md:mb-4">
                            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                                <!-- Background circle -->
                                <circle cx="40" cy="40" r="36" stroke="currentColor" stroke-width="6" fill="none" class="text-gray-200"></circle>
                                <!-- Progress circle -->
                                <circle cx="40" cy="40" r="36" stroke="url(#gradient-${index})" stroke-width="6" fill="none"
                                    stroke-linecap="round"
                                    stroke-dasharray="${circumference}"
                                    stroke-dashoffset="${offset}"
                                    class="transition-all duration-1000 ease-out"></circle>
                                <!-- Gradient definition -->
                                <defs>
                                    <linearGradient id="gradient-${index}" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" class="skill-gradient-start-${index}"></stop>
                                        <stop offset="100%" class="skill-gradient-end-${index}"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <!-- Center content -->
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="text-center">
                                    <span class="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent">${skill.percentage}%</span>
                                </div>
                            </div>
                        </div>
                        <!-- Skill name -->
                        <h4 class="text-gray-800 font-semibold text-[10px] md:text-xs lg:text-sm leading-tight">${skill.name}</h4>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    container.innerHTML = mobileHTML + desktopHTML;

    // Add inline styles for SVG gradients since Tailwind classes don't work in SVG
    const style = document.createElement('style');
    style.textContent = skillBars.map((skill, index) => {
        const colors = skill.gradient.replace('from-', '').replace('to-', '').split(' ');
        const colorMap = {
            'indigo-600': '#4f46e5', 'purple-600': '#9333ea', 'pink-600': '#db2777',
            'blue-600': '#2563eb', 'green-600': '#16a34a', 'emerald-600': '#059669',
            'rose-600': '#e11d48', 'violet-600': '#7c3aed', 'cyan-600': '#0891b2'
        };
        return `
            .skill-gradient-start-${index} { stop-color: ${colorMap[colors[0]] || '#4f46e5'}; }
            .skill-gradient-end-${index} { stop-color: ${colorMap[colors[1]] || '#9333ea'}; }
        `;
    }).join('');
    document.head.appendChild(style);
}

// Generate Experience Timeline
function generateExperienceTimeline(experience) {
    const container = document.getElementById('experience-timeline');
    if (!container || !experience) return;

    const colors = ['indigo', 'purple', 'pink'];

    container.innerHTML = experience.map((exp, index) => {
        const color = exp.color || colors[index % colors.length];
        const isEven = index % 2 === 1;

        return `
            <div class="relative pl-8 sm:pl-0">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    ${isEven ? `<div class="w-full md:w-5/12 order-2 md:order-1"></div>` : ''}
                    <div class="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-${color}-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div class="w-full md:w-5/12 ${isEven ? 'order-1 md:order-2' : ''} bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition">
                        <div class="flex flex-col sm:flex-row items-start justify-between mb-2 sm:mb-3 md:mb-4 gap-1 sm:gap-2">
                            <span class="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-1.5 ${exp.isCurrent ? 'bg-green-100 text-green-700' : `bg-${color}-100 text-${color}-700`} rounded-full text-[10px] sm:text-xs md:text-sm font-semibold">${exp.isCurrent ? 'Current' : exp.duration}</span>
                            <span class="text-gray-500 font-medium text-[10px] sm:text-xs md:text-sm">${exp.period}</span>
                        </div>
                        <h3 class="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">${exp.title}</h3>
                        <div class="flex items-center text-${color}-600 font-semibold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-xs sm:text-sm md:text-base">
                            <i class="fa-solid fa-building mr-1.5 sm:mr-2 text-[10px] sm:text-sm md:text-base"></i>
                            <span>${exp.company}</span>
                        </div>
                        <ul class="space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                            ${exp.responsibilities.map(resp => `
                                <li class="flex items-start">
                                    <i class="fa-solid fa-check-circle text-${color}-600 mr-1.5 sm:mr-2 md:mr-3 mt-0.5 sm:mt-1 text-[10px] sm:text-sm md:text-base"></i>
                                    <span class="text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base">${resp}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <div class="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                            ${exp.technologies.map(tech => `
                                <span class="px-2 py-0.5 sm:px-2.5 sm:py-0.5 md:px-3 md:py-1 bg-${color}-50 text-${color}-700 rounded text-[10px] sm:text-xs md:text-sm font-medium">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                    ${!isEven ? `<div class="w-full md:w-5/12"></div>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// Generate Skills Grid
function generateSkillsGrid(skills) {
    const container = document.getElementById('skills-grid');
    if (!container || !skills) return;

    container.innerHTML = Object.entries(skills).map(([category, data]) => `
        <div class="bg-gradient-to-br ${data.gradient} rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border border-${data.borderColor}-100">
            <div class="flex items-center mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-${data.iconBg} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mr-2 sm:mr-3 md:mr-4">
                    <i class="${data.icon} text-white text-lg sm:text-xl md:text-2xl lg:text-3xl"></i>
                </div>
                <h3 class="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">${category}</h3>
            </div>
            <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                ${data.technologies.map(tech => `
                    <div class="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center shadow-sm hover:shadow-md transition">
                        <i class="${tech.icon} text-${tech.color} text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-1.5 md:mb-2"></i>
                        <div class="text-[9px] sm:text-xs md:text-sm font-semibold text-gray-700">${tech.name}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Generate Projects Grid
function generateProjectsGrid(projects) {
    const container = document.getElementById('projects-grid');
    if (!container || !projects) return;

    container.innerHTML = projects.map(project => `
        <div class="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition group project-card">
            <div class="h-32 sm:h-40 md:h-52 lg:h-64 overflow-hidden bg-gradient-to-br ${project.gradient} relative">
                ${project.image ? `<img class="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition project-image" src="${project.image}" alt="${project.title}" loading="lazy" decoding="async" />` : ''}
                <div class="absolute inset-0 flex items-center justify-center">
                    <i class="${project.icon} text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl"></i>
                </div>
            </div>
            <div class="p-4 sm:p-5 md:p-6 lg:p-8">
                <h3 class="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">${project.title}</h3>
                <p class="text-gray-600 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed text-[10px] sm:text-xs md:text-sm lg:text-base">${project.description}</p>
                <div class="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    ${project.technologies.map(tech => `
                        <span class="px-2 py-0.5 sm:px-2.5 sm:py-0.5 md:px-3 md:py-1 bg-indigo-50 text-indigo-700 rounded text-[10px] sm:text-xs md:text-sm font-medium">${tech}</span>
                    `).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition text-xs sm:text-sm md:text-base">
                    <span>View Project</span>
                    <i class="fa-solid fa-arrow-right ml-1.5 sm:ml-2 text-[10px] sm:text-sm md:text-base"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// Generate Certifications List
function generateCertificationsList(certifications) {
    const container = document.getElementById('certifications-list');
    if (!container || !certifications) return;

    const gradients = {
        indigo: 'from-blue-50 to-indigo-50',
        purple: 'from-purple-50 to-pink-50',
        green: 'from-green-50 to-emerald-50'
    };

    container.innerHTML = certifications.map(cert => `
        <div class="bg-gradient-to-br ${gradients[cert.color] || gradients.indigo} rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 lg:p-8 border-l-4 border-${cert.color}-600 hover:shadow-lg transition">
            <div class="flex items-start justify-between mb-2 sm:mb-3 md:mb-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-${cert.color}-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i class="${cert.icon} text-white text-sm sm:text-lg md:text-xl lg:text-2xl"></i>
                </div>
                <span class="px-2 py-0.5 sm:px-2.5 sm:py-0.5 md:px-3 md:py-1 bg-${cert.color}-600 text-white rounded-full text-[9px] sm:text-[10px] md:text-xs font-semibold">${cert.level}</span>
            </div>
            <h4 class="text-xs sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">${cert.title}</h4>
            <p class="text-gray-600 font-medium mb-2 sm:mb-3 md:mb-4 text-[10px] sm:text-xs md:text-sm lg:text-base">${cert.issuer}</p>
            <p class="text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base">${cert.description}</p>
        </div>
    `).join('');
}

// Generate Awards List
function generateAwardsList(awards) {
    const container = document.getElementById('awards-list');
    if (!container || !awards) return;

    const gradients = {
        yellow: 'from-yellow-50 to-orange-50',
        indigo: 'from-indigo-50 to-blue-50',
        purple: 'from-purple-50 to-pink-50'
    };

    container.innerHTML = awards.map(award => `
        <div class="bg-gradient-to-br ${gradients[award.color] || gradients.yellow} rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 lg:p-8 border-l-4 border-${award.color}-500 hover:shadow-lg transition">
            <div class="flex items-start justify-between mb-2 sm:mb-3 md:mb-4">
                <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-${award.color}-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <i class="${award.icon} text-white text-sm sm:text-lg md:text-xl lg:text-2xl"></i>
                </div>
                <span class="text-gray-500 font-medium text-[10px] sm:text-xs md:text-sm lg:text-base">${award.date}</span>
            </div>
            <h4 class="text-xs sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">${award.title}</h4>
            <p class="text-gray-600 font-medium mb-2 sm:mb-3 md:mb-4 text-[10px] sm:text-xs md:text-sm lg:text-base">${award.issuer}</p>
            <p class="text-gray-700 text-[10px] sm:text-xs md:text-sm lg:text-base">${award.description}</p>
        </div>
    `).join('');
}

// Generate Testimonials Grid
function generateTestimonialsGrid(testimonials) {
    const container = document.getElementById('testimonials-grid');
    if (!container || !testimonials) return;

    container.innerHTML = testimonials.map(testimonial => `
        <div class="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition testimonial-card">
            <div class="flex items-center mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover mr-2 sm:mr-3 md:mr-4" loading="lazy" decoding="async">
                <div>
                    <h4 class="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900">${testimonial.name}</h4>
                    <p class="text-gray-600 text-[10px] sm:text-xs md:text-sm">${testimonial.role}</p>
                    <p class="text-indigo-600 text-[10px] sm:text-xs md:text-sm font-medium">${testimonial.company}</p>
                </div>
            </div>
            <div class="flex items-center mb-2 sm:mb-3 md:mb-4">
                ${Array(testimonial.rating).fill('<i class="fa-solid fa-star text-yellow-400 text-xs sm:text-sm md:text-base"></i>').join('')}
            </div>
            <p class="text-gray-700 leading-relaxed mb-2 sm:mb-3 md:mb-4 text-[10px] sm:text-xs md:text-sm lg:text-base">"${testimonial.quote}"</p>
            <div class="flex items-center text-indigo-600">
                <i class="fa-brands fa-linkedin mr-1.5 sm:mr-2 text-xs sm:text-sm md:text-base"></i>
                <span class="text-[10px] sm:text-xs md:text-sm font-medium">LinkedIn Recommendation</span>
            </div>
        </div>
    `).join('');
}

// Generate Contact Social Links
function generateContactSocialLinks(socialLinks) {
    const container = document.getElementById('contact-social-links');
    if (!container || !socialLinks) return;

    container.innerHTML = socialLinks.map(link => `
        <a href="${link.url}" target="_blank" class="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-white/30 transition">
            <i class="${link.icon} text-base sm:text-lg md:text-xl lg:text-2xl"></i>
        </a>
    `).join('');
}

// Generate Footer Social Links
function generateFooterSocialLinks(socialLinks) {
    const container = document.getElementById('footer-social-links');
    if (!container || !socialLinks) return;

    container.innerHTML = socialLinks.map(link => `
        <a href="${link.url}" target="_blank" class="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
            <i class="${link.icon} text-xs sm:text-sm md:text-base"></i>
        </a>
    `).join('');
}

// Generate Footer Services
function generateFooterServices(services) {
    const container = document.getElementById('footer-services');
    if (!container || !services) return;

    container.innerHTML = services.map(service => `
        <li class="text-gray-400 text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight sm:leading-normal">${service}</li>
    `).join('');
}

// Initialize Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submitBtn');
        const submitText = document.getElementById('submitText');
        const submitLoading = document.getElementById('submitLoading');
        const formSuccess = document.getElementById('formSuccess');
        const formError = document.getElementById('formError');
        const formInfo = document.getElementById('formInfo');

        // Hide all messages
        formSuccess.classList.add('hidden');
        formError.classList.add('hidden');
        formInfo.classList.add('hidden');

        // Get form data
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        // Validate
        if (!name || !email || !message) {
            formError.innerHTML = '<i class="fa-solid fa-exclamation-circle mr-2"></i>Please fill in all required fields.';
            formError.classList.remove('hidden');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formError.innerHTML = '<i class="fa-solid fa-exclamation-circle mr-2"></i>Please enter a valid email address.';
            formError.classList.remove('hidden');
            return;
        }

        // Show loading
        submitBtn.disabled = true;
        submitText.classList.add('hidden');
        submitLoading.classList.remove('hidden');

        const googleScriptURL = portfolioData.personal?.googleScriptURL;

        // Check if Google Script URL is configured
        if (!googleScriptURL || googleScriptURL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
            formInfo.innerHTML = `<i class="fa-solid fa-info-circle mr-2"></i>Thank you for your message! Please email me directly at <a href="mailto:${portfolioData.personal?.email}" class="underline hover:text-blue-800">${portfolioData.personal?.email}</a>`;
            formInfo.classList.remove('hidden');
            form.reset();
            submitBtn.disabled = false;
            submitText.classList.remove('hidden');
            submitLoading.classList.add('hidden');
            return;
        }

        try {
            await fetch(googleScriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message,
                    timestamp: new Date().toISOString()
                })
            });

            formSuccess.classList.remove('hidden');
            form.reset();
        } catch (error) {
            console.error('Form submission error:', error);
            formError.innerHTML = `<i class="fa-solid fa-exclamation-circle mr-2"></i>Failed to send message. Please email directly at <a href="mailto:${portfolioData.personal?.email}" class="underline hover:text-red-800">${portfolioData.personal?.email}</a>`;
            formError.classList.remove('hidden');
        } finally {
            submitBtn.disabled = false;
            submitText.classList.remove('hidden');
            submitLoading.classList.add('hidden');
        }
    });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    loadPortfolioData();
    initContactForm();
});
