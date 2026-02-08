/**
 * Illustrative UI Portfolio - JavaScript
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
    theme: {
        defaultTheme: "light",
        lightIcon: "fa-sun",
        darkIcon: "fa-moon",
        lightLabel: "Switch to Dark Mode",
        darkLabel: "Switch to Light Mode",
        useSystemPreference: true
    },
    meta: {
        title: "Siddharth Mahajan | Portfolio",
        description: "Solution Architect & Cloud Engineer specializing in Kubernetes, Service Mesh, and Full-Stack Development.",
        keywords: "Solution Architect, Cloud Engineer, Kubernetes, Istio, Service Mesh, Full-Stack Developer, DevOps",
        url: "https://www.siddharthmahajan.com/",
        image: "https://www.siddharthmahajan.com/preview.jpg"
    },
    person: {
        name: "Siddharth Mahajan",
        initial: "S",
        jobTitle: "Solution Architect & Cloud Engineer",
        tagline: "Kubernetes | Service Mesh | Full-Stack Developer",
        description: "Solution Architect and Cloud Engineer specializing in scalable, secure, and highly available cloud-native systems. Expertise in Kubernetes, Istio, CI/CD pipelines, and observability.",
        profileImage: "https://storage.googleapis.com/uxpilot-auth.appspot.com/95e6ca28d6-72c48d74139c2de85685.png",
        aboutImage: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9f4863284a-95e5fdded6e756c61979.png",
        cvUrl: "/resources/Resume.pdf",
        email: "siddharth.mhjn99@gmail.com",
        phone: "+91 XXX XXX XXXX",
        location: "India"
    },
    social: {
        github: "https://github.com/siddharth-mhjn",
        linkedin: "https://www.linkedin.com/in/siddharth-mhjn"
    },
    about: {
        heading: "My Journey So Far...",
        description: "Solution Architect and Cloud Engineer specializing in scalable, secure, and highly available cloud-native systems. I have expertise in Kubernetes, Istio, CI/CD pipelines, and observability using EFK stacks. I've led infrastructure modernization initiatives and designed custom API gateways, focusing on vendor interoperability and mentoring teams.",
        mission: {
            title: "Cloud Architecture",
            icon: "☁️",
            description: "Designing scalable cloud-native solutions with focus on reliability and performance"
        },
        growth: {
            title: "Continuous Learning",
            icon: "🚀",
            description: "Always exploring new technologies and best practices in cloud engineering"
        },
        funFacts: [
            { icon: "☕", text: "Fueled by coffee and YAML files" },
            { icon: "🐳", text: "Docker containers are my happy place" },
            { icon: "🎮", text: "Debugging is my favorite puzzle game" }
        ]
    },
    skills: {
        categories: [
            {
                title: "Cloud & DevOps",
                icon: "fa-server",
                skills: [
                    { name: "Kubernetes", level: 95, emoji: "🚀" },
                    { name: "Docker", level: 95, emoji: "🐳" },
                    { name: "Istio", level: 90, emoji: "🔗" },
                    { name: "Azure/AWS", level: 85, emoji: "☁️" }
                ]
            },
            {
                title: "Programming",
                icon: "fa-code",
                skills: [
                    { name: "Java/Spring Boot", level: 90, emoji: "☕" },
                    { name: "Python", level: 85, emoji: "🐍" },
                    { name: "Shell Scripting", level: 88, emoji: "💻" },
                    { name: "Vue.js", level: 80, emoji: "💚" }
                ]
            },
            {
                title: "Data & Security",
                icon: "fa-database",
                skills: [
                    { name: "PostgreSQL/MySQL", level: 85, emoji: "🗄️" },
                    { name: "Prometheus/Grafana", level: 90, emoji: "📊" },
                    { name: "Kafka", level: 80, emoji: "📨" },
                    { name: "Keycloak/WSO2", level: 85, emoji: "🔐" }
                ]
            }
        ],
        techStack: [
            { name: "Kubernetes", icon: "fas fa-dharmachakra", color: "bg-blue-600" },
            { name: "Docker", icon: "fab fa-docker", color: "bg-blue-500" },
            { name: "Java", icon: "fab fa-java", color: "bg-red-500" },
            { name: "Python", icon: "fab fa-python", color: "bg-yellow-500" },
            { name: "Vue.js", icon: "fab fa-vuejs", color: "bg-green-600" },
            { name: "Linux", icon: "fab fa-linux", color: "bg-gray-800" },
            { name: "Git", icon: "fab fa-git-alt", color: "bg-orange-500" },
            { name: "AWS", icon: "fab fa-aws", color: "bg-yellow-600" }
        ]
    },
    experience: [
        {
            status: "Current",
            statusColor: "bg-bright-green",
            period: "June 2025 - Present",
            title: "Software Engineer I",
            company: "Astreya",
            description: "Design and development of system architecture, ensuring scalability and operational efficiency in cloud-native environments.",
            tags: [
                { text: "Cloud-Native", color: "bg-blue-100 text-blue-800" },
                { text: "Automation", color: "bg-green-100 text-green-800" },
                { text: "Architecture", color: "bg-purple-100 text-purple-800" }
            ],
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7a113fbba2-e27048cefa80a24a311c.png",
            icon: "🎯",
            iconBg: "bg-bright-green"
        },
        {
            status: "Previous",
            statusColor: "bg-deep-blue",
            period: "April 2025 - June 2025",
            title: "Member Technical Staff",
            company: "NEC India",
            description: "Built real-time data pipelines for smart city projects. Deployed EFK stack with Istio on Kubernetes. Improved observability and vendor onboarding.",
            tags: [
                { text: "Kubernetes", color: "bg-blue-100 text-blue-800" },
                { text: "EFK", color: "bg-yellow-100 text-yellow-800" },
                { text: "Istio", color: "bg-purple-100 text-purple-800" }
            ],
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/45d3a3ea0e-a29d0c7768ff6ed4ae10.png",
            icon: "💻",
            iconBg: "bg-deep-blue"
        },
        {
            status: "Growth",
            statusColor: "bg-yellow-500",
            period: "July 2022 - March 2025",
            title: "Software Engineer",
            company: "LTIMindtree",
            description: "Managed Kubernetes clusters with Istio service mesh. Designed and implemented custom API Gateway solutions. Automated infrastructure deployment and built comprehensive telemetry platforms.",
            tags: [
                { text: "Kubernetes", color: "bg-blue-100 text-blue-800" },
                { text: "Service Mesh", color: "bg-green-100 text-green-800" },
                { text: "API Gateway", color: "bg-orange-100 text-orange-800" }
            ],
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/51a1464e0b-99c10cf0c63eef4fd882.png",
            icon: "🌱",
            iconBg: "bg-yellow-500"
        }
    ],
    certifications: [
        { title: "ITOPS Automation Engineer", issuer: "LTIMindtree", year: "Foundation Level" },
        { title: "Cloud & Infrastructure Service", issuer: "LTI", year: "Professional Level" },
        { title: "Web Development Certification", issuer: "Internshala", year: "Certification Program" }
    ],
    achievements: [
        { title: "Technical Subject Matter Expert", issuer: "LTIMindtree", year: "June 2024" },
        { title: "Spotlight Award - Service Mesh", issuer: "LTIMindtree", year: "June 2023" },
        { title: "Spotlight Award - Istio Demos", issuer: "LTIMindtree", year: "March 2023" }
    ],
    projectsSection: {
        heading: "My Cool Projects 🚀",
        description: "Here are some things I've built (and didn't break in the process!)",
        allFilter: "All Projects",
        categories: ["Cloud", "DevOps", "Data"],
        viewMoreButton: "View All Projects on GitHub 📂",
        viewMoreUrl: "https://github.com/siddharth-mhjn"
    },
    projects: [
        {
            title: "Multi-Cluster K8s Platform",
            description: "Built an enterprise-grade Kubernetes platform that handles automated deployments like a boss! Complete with service mesh magic and real-time monitoring dashboards.",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7a113fbba2-e27048cefa80a24a311c.png",
            tags: ["Kubernetes", "Istio", "Prometheus"],
            liveUrl: "",
            codeUrl: "https://github.com/siddharth-mhjn",
            category: "Cloud"
        },
        {
            title: "API Gateway Magic",
            description: "Created a scalable API gateway that handles rate limiting, auth, and analytics - because every request deserves VIP treatment!",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/45d3a3ea0e-a29d0c7768ff6ed4ae10.png",
            tags: ["APISIX", "Keycloak", "Docker"],
            liveUrl: "",
            codeUrl: "https://github.com/siddharth-mhjn",
            category: "DevOps"
        },
        {
            title: "Smart City Data Pipeline",
            description: "Real-time IoT data processing for smart cities - making urban life smarter one data point at a time! Powered by EFK stack.",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/51a1464e0b-99c10cf0c63eef4fd882.png",
            tags: ["Elasticsearch", "Kafka", "Python"],
            liveUrl: "",
            codeUrl: "https://github.com/siddharth-mhjn",
            category: "Data"
        },
        {
            title: "Cloud Observability Suite",
            description: "A comprehensive monitoring and logging platform using Prometheus, Grafana, and EFK stack - because you can't fix what you can't see!",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/838d0844bf-d49bb59caefe0abf7ecc.png",
            tags: ["Prometheus", "Grafana", "EFK"],
            liveUrl: "",
            codeUrl: "https://github.com/siddharth-mhjn",
            category: "Cloud"
        },
        {
            title: "CI/CD Automation Engine",
            description: "Automated deployment pipelines that turn code into running apps faster than you can say 'kubectl apply'!",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9f4863284a-95e5fdded6e756c61979.png",
            tags: ["Jenkins", "GitOps", "Helm"],
            liveUrl: "",
            codeUrl: "https://github.com/siddharth-mhjn",
            category: "DevOps"
        },
        {
            title: "Service Mesh Architecture",
            description: "Implemented Istio service mesh for microservices - traffic management, security, and observability all wrapped in one cool package!",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/95e6ca28d6-72c48d74139c2de85685.png",
            tags: ["Istio", "Envoy", "mTLS"],
            liveUrl: "",
            codeUrl: "https://github.com/siddharth-mhjn",
            category: "Cloud"
        }
    ],
    testimonials: [
        {
            name: "Karthik Battaram",
            role: "Senior Data Engineer, LTIMindtree",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
            text: "Technically sound, dependable, and strong ownership mindset. Siddharth consistently delivers high-quality solutions.",
            rating: 5
        },
        {
            name: "Akshay Reddy Emmadi",
            role: "Software Engineer, LTIMindtree",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
            text: "Key contributor to microservices transformation using Spring Cloud, Istio, and API Gateway. A true team player!",
            rating: 5
        },
        {
            name: "Priyanka A",
            role: "Specialist Data Engineer, LTIMindtree",
            image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
            text: "Reliable, resilient, and instrumental in systems engineering under pressure. Highly recommend working with Siddharth!",
            rating: 5
        }
    ],
    stats: [
        { value: "3+", label: "Years Experience", emoji: "⭐" },
        { value: "10+", label: "Projects Completed", emoji: "🚀" },
        { value: "3", label: "Awards Won", emoji: "🏆" },
        { value: "24/7", label: "Cloud Uptime", emoji: "☁️" }
    ],
    contact: {
        heading: "Let's Chat! 💬",
        description: "Got a project idea? Want to collaborate? Or just want to say hi? Drop me a message and I'll get back to you faster than a CI/CD pipeline!",
        googleScriptURL: "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE",
        formMessages: {
            success: "Thanks for your message! I'll get back to you faster than a CI/CD pipeline! 🚀",
            error: "Oops! Something went wrong. Please try again or email me directly at siddharth.mhjn99@gmail.com",
            sending: "Sending your message..."
        },
        form: {
            title: "Send Me a Message ✉️",
            fields: {
                firstName: { label: "First Name *", placeholder: "Your awesome name" },
                lastName: { label: "Last Name *", placeholder: "Your family name" },
                email: { label: "Email Address *", placeholder: "your.email@awesome.com" },
                projectType: { label: "Project Type" },
                budgetRange: { label: "Budget Range" },
                message: { label: "Tell me about your project *", placeholder: "Describe your amazing project idea... The more details, the better! I love hearing about cool ideas 🚀" }
            },
            submitButton: "Send Message 🚀"
        },
        projectTypes: [
            "☁️ Cloud Architecture",
            "🐳 Kubernetes Solutions",
            "🔧 Platform Engineering",
            "🌐 Website Development",
            "📊 DevOps Consulting",
            "☕ Coffee Chat"
        ],
        budgetRanges: [
            "💰 ₹1,000 - ₹5,000",
            "💎 ₹5,000 - ₹15,000",
            "🏆 ₹15,000 - ₹30,000",
            "🚀 ₹30,000+",
            "🤝 Let's discuss"
        ],
        funFact: "I deploy more containers before breakfast than most people deploy all week! 🐳"
    },
    footer: {
        tagline: "Solution Architect & Cloud Engineer specializing in Kubernetes, Service Mesh, and cloud-native systems. Let's build something awesome together!",
        services: [
            "☁️ Cloud Architecture",
            "🐳 Kubernetes Solutions",
            "🔧 Platform Engineering",
            "🌐 Website Development"
        ],
        quickLinks: [
            { label: "Home", href: "#intro" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" }
        ],
        copyright: "© 2025 Siddharth Mahajan. All rights reserved."
    },
    navigation: [
        { label: "Home", href: "#intro" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Reviews", href: "#testimonials" },
        { label: "Contact", href: "#contact" }
    ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize error page if on 404/405 page
    initializeErrorPage();

    await loadPortfolioData();
    initThemeToggle();
    initMobileMenu();
    initSmoothScrolling();
    initBackToTop();
    initScrollAnimations();
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

    // Update intro section
    updateIntro();

    // Update about section
    updateAbout();

    // Update skills section
    updateSkills();

    // Update experience section
    updateExperience();

    // Update projects section
    updateProjects();

    // Update testimonials section
    updateTestimonials();

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
    if (!meta) return;

    document.title = meta.title;

    // Update favicon
    const person = portfolioData.person;
    if (person && person.favicon) {
        const faviconLink = document.getElementById('favicon-link');
        if (faviconLink) faviconLink.href = person.favicon;
    }

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.content = meta.description;

    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) keywordsMeta.content = meta.keywords;

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = meta.url;

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = meta.title;

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = meta.description;

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.content = meta.image;

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = meta.url;

    // Twitter
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.content = meta.title;

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.content = meta.description;

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.content = meta.image;
}

/**
 * Update header content
 */
function updateHeader() {
    const person = portfolioData.person;
    const navigation = portfolioData.navigation;
    if (!person) return;

    // Update logo
    const logoInitials = document.querySelectorAll('.logo-initial');
    logoInitials.forEach(el => el.textContent = person.initial);

    const logoTexts = document.querySelectorAll('.logo-text');
    logoTexts.forEach(el => el.textContent = person.name);

    // Update navigation links
    if (navigation) {
        const desktopNav = document.querySelector('.hidden.md\\:flex.items-center.space-x-8');
        const mobileNav = document.querySelector('#mobile-menu');

        if (desktopNav) {
            desktopNav.innerHTML = navigation.map(item => `
                <a href="${item.href}" class="text-deep-blue dark:text-white hover:text-bright-green font-sketch text-lg cursor-pointer">${item.label}</a>
            `).join('');
        }

        if (mobileNav) {
            mobileNav.innerHTML = navigation.map(item => `
                <a href="${item.href}" class="text-deep-blue dark:text-white hover:text-bright-green font-sketch text-lg cursor-pointer">${item.label}</a>
            `).join('');

            // Re-initialize mobile menu after updating content
            initMobileMenu();
        }
    }
}

/**
 * Update intro section
 */
function updateIntro() {
    const person = portfolioData.person;
    const social = portfolioData.social;
    if (!person) return;

    const profileImg = document.querySelector('#intro img');
    if (profileImg) profileImg.src = person.profileImage;

    const introName = document.querySelector('.intro-name');
    if (introName) introName.textContent = person.name + '!';

    const introTagline = document.querySelector('.intro-tagline');
    if (introTagline) introTagline.textContent = person.tagline;

    const introDescription = document.querySelector('.intro-description');
    if (introDescription) introDescription.textContent = person.description;

    // Update social links
    if (social) {
        const introSocial = document.querySelector('#intro .flex.justify-center.space-x-8');
        if (introSocial) {
            introSocial.innerHTML = `
                <a href="${social.github}" target="_blank" class="text-center transform rotate-2">
                    <div class="w-16 h-16 bg-bright-green rounded-full flex items-center justify-center sketch-border mb-2 hover:scale-110 transition-transform">
                        <i class="fab fa-github text-white text-2xl"></i>
                    </div>
                    <span class="text-sm text-gray-600 dark:text-gray-400 font-sketch">GitHub</span>
                </a>
                <a href="${social.linkedin}" target="_blank" class="text-center transform -rotate-2">
                    <div class="w-16 h-16 bg-bright-green rounded-full flex items-center justify-center sketch-border mb-2 hover:scale-110 transition-transform">
                        <i class="fab fa-linkedin text-white text-2xl"></i>
                    </div>
                    <span class="text-sm text-gray-600 dark:text-gray-400 font-sketch">LinkedIn</span>
                </a>
            `;
        }
    }
}

/**
 * Update about section
 */
function updateAbout() {
    const about = portfolioData.about;
    const person = portfolioData.person;
    if (!about) return;

    const aboutImg = document.querySelector('#about img');
    if (aboutImg && person) aboutImg.src = person.aboutImage;

    const heading = document.querySelector('.about-heading');
    if (heading) heading.textContent = about.heading;

    const description = document.querySelector('.about-description');
    if (description) description.textContent = about.description;

    // Update about cards
    const aboutCards = document.querySelector('.about-cards');
    if (aboutCards && about.mission && about.growth) {
        aboutCards.innerHTML = `
            <div class="bg-soft-gray dark:bg-gray-700 p-6 rounded-2xl sketch-border transform rotate-1">
                <div class="text-3xl mb-2">${about.mission.icon}</div>
                <h4 class="font-bold text-deep-blue dark:text-white mb-2 font-sketch">${about.mission.title}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 font-comic">${about.mission.description}</p>
            </div>
            <div class="bg-soft-gray dark:bg-gray-700 p-6 rounded-2xl sketch-border transform -rotate-1">
                <div class="text-3xl mb-2">${about.growth.icon}</div>
                <h4 class="font-bold text-deep-blue dark:text-white mb-2 font-sketch">${about.growth.title}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 font-comic">${about.growth.description}</p>
            </div>
        `;
    }

    // Update fun facts
    const funFactsList = document.querySelector('.about-fun-facts ul');
    if (funFactsList && about.funFacts) {
        funFactsList.innerHTML = about.funFacts.map(fact => `
            <li class="flex items-center space-x-3">
                <span class="text-bright-green text-xl">${fact.icon}</span>
                <span>${fact.text}</span>
            </li>
        `).join('');
    }
}

/**
 * Update skills section
 */
function updateSkills() {
    const skills = portfolioData.skills;
    if (!skills) return;

    // Update skill categories
    const skillsGrid = document.querySelector('#skills .grid.md\\:grid-cols-3');
    if (skillsGrid && skills.categories) {
        const rotations = ['rotate-1', '-rotate-1', 'rotate-1'];
        const iconRotations = ['-rotate-12', 'rotate-12', '-rotate-12'];

        skillsGrid.innerHTML = skills.categories.map((category, index) => `
            <div class="bg-white dark:bg-gray-800 p-8 rounded-3xl sketch-border transform ${rotations[index % 3]} shadow-lg">
                <div class="text-center mb-6">
                    <div class="w-16 h-16 bg-bright-green rounded-full flex items-center justify-center sketch-border mx-auto mb-4 transform ${iconRotations[index % 3]}">
                        <i class="fas ${category.icon} text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-deep-blue dark:text-white font-sketch">${category.title}</h3>
                </div>
                <div class="space-y-4">
                    ${category.skills.map(skill => `
                        <div class="skill-item">
                            <div class="flex justify-between mb-2">
                                <span class="font-bold text-deep-blue dark:text-white font-sketch">${skill.name}</span>
                                <span class="text-bright-green font-bold">${skill.level}% ${skill.emoji}</span>
                            </div>
                            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 sketch-border">
                                <div class="bg-bright-green h-3 rounded-full" style="width: ${skill.level}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // Update tech stack
    const techStackGrid = document.querySelector('#skills .grid.grid-cols-4');
    if (techStackGrid && skills.techStack) {
        techStackGrid.innerHTML = skills.techStack.map(tech => `
            <div class="text-center transform hover:scale-110 transition-transform">
                <div class="w-16 h-16 ${tech.color} rounded-full flex items-center justify-center sketch-border mx-auto mb-2">
                    <i class="${tech.icon} text-white text-2xl"></i>
                </div>
                <span class="text-sm font-sketch text-gray-600 dark:text-gray-400">${tech.name}</span>
            </div>
        `).join('');
    }
}

/**
 * Update experience section
 */
function updateExperience() {
    const experience = portfolioData.experience;
    const certifications = portfolioData.certifications;
    const achievements = portfolioData.achievements;
    if (!experience) return;

    // Update timeline
    const timeline = document.querySelector('#experience .space-y-16');
    if (timeline) {
        timeline.innerHTML = experience.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return `
                <div class="relative">
                    <div class="flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center">
                        <div class="md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}">
                            <div class="bg-soft-gray dark:bg-gray-700 p-8 rounded-3xl sketch-border transform ${isEven ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition-transform shadow-lg">
                                <div class="flex items-center justify-between mb-4">
                                    <span class="${exp.statusColor} text-white px-4 py-1 rounded-full text-sm font-sketch">${exp.status}</span>
                                    <span class="text-gray-600 dark:text-gray-400 font-comic">${exp.period}</span>
                                </div>
                                <h3 class="text-2xl font-bold text-deep-blue dark:text-white mb-2 font-sketch">${exp.title}</h3>
                                <h4 class="text-lg text-bright-green font-bold font-sketch mb-4">${exp.company}</h4>
                                <p class="text-gray-600 dark:text-gray-300 font-comic mb-4">${exp.description}</p>
                                <div class="flex flex-wrap gap-2">
                                    ${exp.tags.map(tag => `<span class="${tag.color} px-3 py-1 rounded-full text-sm">${tag.text}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 ${exp.iconBg} rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center">
                            ${exp.icon}
                        </div>
                        <div class="md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} mt-8 md:mt-0">
                            <img class="w-full rounded-2xl shadow-lg transform ${isEven ? 'rotate-2' : '-rotate-2'}" src="${exp.image}" alt="${exp.title}" loading="lazy" decoding="async">
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Update certifications
    const certList = document.querySelector('#experience .grid.md\\:grid-cols-2 > div:first-child ul');
    if (certList && certifications) {
        certList.innerHTML = certifications.map(cert =>
            `<li><strong>${cert.title}</strong> – ${cert.issuer} • ${cert.year}</li>`
        ).join('');
    }

    // Update achievements
    const achieveList = document.querySelector('#experience .grid.md\\:grid-cols-2 > div:last-child ul');
    if (achieveList && achievements) {
        achieveList.innerHTML = achievements.map(ach =>
            `<li><strong>${ach.title}</strong> – ${ach.issuer} • ${ach.year}</li>`
        ).join('');
    }
}

/**
 * Update projects section
 */
function updateProjects() {
    const projects = portfolioData.projects;
    const section = portfolioData.projectsSection;
    if (!projects) return;

    // Update heading and description
    if (section) {
        const heading = document.querySelector('.projects-heading');
        if (heading) heading.textContent = section.heading;

        const description = document.querySelector('.projects-description');
        if (description) description.textContent = section.description;

        // Update view more button
        const viewMoreBtn = document.querySelector('.projects-view-more');
        if (viewMoreBtn) {
            viewMoreBtn.textContent = section.viewMoreButton;
            viewMoreBtn.href = section.viewMoreUrl;
        }

        // Generate filter buttons
        const filtersContainer = document.querySelector('.projects-filters');
        if (filtersContainer && section.categories) {
            const allCategories = [section.allFilter || 'All Projects', ...section.categories];
            filtersContainer.innerHTML = allCategories.map((cat, index) => `
                <button data-category="${index === 0 ? 'all' : cat}" class="project-filter px-6 py-3 ${index === 0 ? 'bg-bright-green text-white' : 'text-deep-blue dark:text-white hover:bg-bright-green hover:text-white'} rounded-full font-sketch transition-all">
                    ${cat}
                </button>
            `).join('');

            // Add click handlers for filters
            initProjectFilters();
        }
    }

    // Render all projects initially
    renderProjects(projects);
}

/**
 * Render projects to the grid
 */
function renderProjects(projects) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    const rotations = ['rotate-1', '-rotate-1', 'rotate-2'];
    projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card bg-white dark:bg-gray-800 rounded-3xl sketch-border transform ${rotations[index % 3]} shadow-xl overflow-hidden hover:scale-105 transition-transform" data-category="${project.category}">
            <div class="relative">
                <img class="w-full h-48 object-cover" src="${project.image}" alt="${project.title}" loading="lazy" decoding="async">
            </div>
            <div class="p-8">
                <h3 class="text-2xl font-bold text-deep-blue dark:text-white mb-3 font-sketch">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4 font-comic">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${tag}</span>`).join('')}
                </div>
                <div class="flex space-x-4">
                    ${project.liveUrl && project.liveUrl !== '#' ? `
                    <a href="${project.liveUrl}" target="_blank" class="flex-1 bg-bright-green text-white py-2 px-4 rounded-full font-sketch hover:bg-green-600 transition-colors text-center">
                        <i class="fas fa-eye mr-2"></i>Live Demo
                    </a>` : ''}
                    <a href="${project.codeUrl}" target="_blank" class="${project.liveUrl && project.liveUrl !== '#' ? 'flex-1' : 'w-full'} border-2 border-bright-green text-bright-green py-2 px-4 rounded-full font-sketch hover:bg-bright-green hover:text-white transition-colors text-center">
                        <i class="fab fa-github mr-2"></i>View Code
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Initialize project filter buttons
 */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.project-filter');
    const projects = portfolioData.projects;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => {
                b.classList.remove('bg-bright-green', 'text-white');
                b.classList.add('text-deep-blue', 'dark:text-white', 'hover:bg-bright-green', 'hover:text-white');
            });
            btn.classList.add('bg-bright-green', 'text-white');
            btn.classList.remove('text-deep-blue', 'dark:text-white', 'hover:bg-bright-green', 'hover:text-white');

            // Filter projects
            const category = btn.dataset.category;
            if (category === 'all') {
                renderProjects(projects);
            } else {
                const filtered = projects.filter(p => p.category === category);
                renderProjects(filtered);
            }
        });
    });
}

/**
 * Update testimonials section
 */
function updateTestimonials() {
    const testimonials = portfolioData.testimonials;
    const stats = portfolioData.stats;
    if (!testimonials) return;

    // Update testimonials grid
    const testimonialsGrid = document.querySelector('#testimonials .grid.md\\:grid-cols-2.lg\\:grid-cols-3');
    if (testimonialsGrid) {
        const rotations = ['rotate-1', '-rotate-1', 'rotate-1'];
        testimonialsGrid.innerHTML = testimonials.map((test, idx) => `
            <div class="bg-soft-gray dark:bg-gray-700 p-8 rounded-3xl sketch-border transform ${rotations[idx % 3]} shadow-lg relative">
                <div class="absolute -top-4 left-8 w-8 h-8 bg-soft-gray dark:bg-gray-700 transform rotate-45"></div>
                <div class="flex items-center mb-6">
                    <img src="${test.image}" alt="${test.name}" class="w-16 h-16 rounded-full sketch-border mr-4" loading="lazy" decoding="async">
                    <div>
                        <h4 class="font-bold text-deep-blue dark:text-white font-sketch">${test.name}</h4>
                        <p class="text-bright-green font-sketch">${test.role}</p>
                        <div class="flex text-yellow-500 mt-1">
                            ${'<i class="fas fa-star"></i>'.repeat(test.rating)}
                        </div>
                    </div>
                </div>
                <p class="text-gray-600 dark:text-gray-300 mb-4 font-comic italic">"${test.text}"</p>
                <div class="text-bright-green text-6xl absolute bottom-4 right-6 opacity-20">"</div>
            </div>
        `).join('');
    }

    // Update stats
    const statsGrid = document.querySelector('#testimonials .grid.md\\:grid-cols-4');
    if (statsGrid && stats) {
        const rotations = ['rotate-1', '-rotate-1', 'rotate-1', '-rotate-1'];
        statsGrid.innerHTML = stats.map((stat, idx) => `
            <div class="text-center bg-bright-green/10 p-8 rounded-3xl sketch-border transform ${rotations[idx]}">
                <div class="text-5xl font-bold text-deep-blue dark:text-white mb-2 font-sketch">${stat.value}</div>
                <p class="text-gray-600 dark:text-gray-400 font-comic">${stat.label}</p>
                <div class="text-2xl mt-2">${stat.emoji}</div>
            </div>
        `).join('');
    }
}

/**
 * Update contact section
 */
function updateContact() {
    const contact = portfolioData.contact;
    const person = portfolioData.person;
    const social = portfolioData.social;
    if (!person) return;

    // Update contact heading and description
    if (contact) {
        const contactHeading = document.querySelector('#contact .contact-heading');
        if (contactHeading && contact.heading) {
            contactHeading.textContent = contact.heading;
        }

        const contactDescription = document.querySelector('#contact .contact-description');
        if (contactDescription && contact.description) {
            contactDescription.textContent = contact.description;
        }
    }

    // Update contact info - select the flex container items directly
    const contactItems = document.querySelectorAll('#contact .space-y-6 > div.flex');
    if (contactItems.length >= 3) {
        // Email (first item)
        const emailEl = contactItems[0].querySelector('p');
        if (emailEl) emailEl.textContent = person.email;

        // Phone (second item)
        const phoneEl = contactItems[1].querySelector('p');
        if (phoneEl) phoneEl.textContent = person.phone;

        // Location (third item)
        const locationEl = contactItems[2].querySelector('p');
        if (locationEl) locationEl.textContent = person.location;
    }

    // Update contact form
    if (contact) {
        const form = document.querySelector('#contact form');
        if (form && contact.form) {
            // Update form title
            const formTitle = document.querySelector('#contact .form-title');
            if (formTitle) formTitle.textContent = contact.form.title;

            // Update form labels and placeholders
            const labels = form.querySelectorAll('label');
            const inputs = form.querySelectorAll('input');
            const textarea = form.querySelector('textarea');
            const selects = form.querySelectorAll('select');
            const submitBtn = form.querySelector('button[type="submit"]');

            // First Name
            if (labels[0] && contact.form.fields.firstName) {
                labels[0].textContent = contact.form.fields.firstName.label;
            }
            if (inputs[0] && contact.form.fields.firstName) {
                inputs[0].placeholder = contact.form.fields.firstName.placeholder;
            }

            // Last Name
            if (labels[1] && contact.form.fields.lastName) {
                labels[1].textContent = contact.form.fields.lastName.label;
            }
            if (inputs[1] && contact.form.fields.lastName) {
                inputs[1].placeholder = contact.form.fields.lastName.placeholder;
            }

            // Email
            if (labels[2] && contact.form.fields.email) {
                labels[2].textContent = contact.form.fields.email.label;
            }
            if (inputs[2] && contact.form.fields.email) {
                inputs[2].placeholder = contact.form.fields.email.placeholder;
            }

            // Project Type label
            if (labels[3] && contact.form.fields.projectType) {
                labels[3].textContent = contact.form.fields.projectType.label;
            }

            // Budget Range label
            if (labels[4] && contact.form.fields.budgetRange) {
                labels[4].textContent = contact.form.fields.budgetRange.label;
            }

            // Message
            if (labels[5] && contact.form.fields.message) {
                labels[5].textContent = contact.form.fields.message.label;
            }
            if (textarea && contact.form.fields.message) {
                textarea.placeholder = contact.form.fields.message.placeholder;
            }

            // Submit button
            if (submitBtn && contact.form.submitButton) {
                submitBtn.textContent = contact.form.submitButton;
            }

            // Update dropdowns
            if (selects[0] && contact.projectTypes) {
                selects[0].innerHTML = contact.projectTypes.map(type =>
                    `<option>${type}</option>`
                ).join('');
            }

            if (selects[1] && contact.budgetRanges) {
                selects[1].innerHTML = contact.budgetRanges.map(range =>
                    `<option>${range}</option>`
                ).join('');
            }
        }

        // Update fun fact
        const funFact = document.querySelector('#contact .bg-bright-green\\/10 p');
        if (funFact && contact.funFact) {
            funFact.textContent = contact.funFact;
        }
    }

    // Update social links
    if (social) {
        const contactSocial = document.querySelector('#contact .grid.grid-cols-2.gap-4');
        if (contactSocial) {
            contactSocial.innerHTML = `
                <a href="${social.linkedin}" target="_blank" class="flex items-center space-x-3 p-4 bg-blue-500 text-white rounded-2xl sketch-border hover:scale-105 transition-transform cursor-pointer">
                    <i class="fab fa-linkedin text-2xl"></i>
                    <span class="font-sketch">LinkedIn</span>
                </a>
                <a href="${social.github}" target="_blank" class="flex items-center space-x-3 p-4 bg-gray-800 text-white rounded-2xl sketch-border hover:scale-105 transition-transform cursor-pointer">
                    <i class="fab fa-github text-2xl"></i>
                    <span class="font-sketch">GitHub</span>
                </a>
                <a href="mailto:${person.email}" class="flex items-center space-x-3 p-4 bg-bright-green text-white rounded-2xl sketch-border hover:scale-105 transition-transform cursor-pointer">
                    <i class="fas fa-envelope text-2xl"></i>
                    <span class="font-sketch">Email</span>
                </a>
            `;
        }
    }
}

/**
 * Update footer
 */
function updateFooter() {
    const footer = portfolioData.footer;
    const person = portfolioData.person;
    const social = portfolioData.social;
    if (!footer || !person) return;

    // Update logo
    const logoInitial = document.querySelector('#footer .logo-initial');
    if (logoInitial) logoInitial.textContent = person.initial;

    const logoText = document.querySelector('#footer .logo-text');
    if (logoText) logoText.textContent = person.name;

    // Update tagline
    const tagline = document.querySelector('#footer .tagline');
    if (tagline) tagline.textContent = footer.tagline;

    // Update copyright with clickable link
    const copyright = document.querySelector('#footer .copyright');
    if (copyright) {
        const link = footer.copyrightLink;
        const copyrightText = link
            ? `${footer.copyright} <a href="${link.url}" target="_blank" class="text-bright-green hover:text-deep-blue transition-colors">${link.text}</a>`
            : footer.copyright;
        copyright.innerHTML = `${copyrightText} | <span class="text-bright-green">Available for projects!</span>`;
    }

    // Update quick links (2nd div in the grid)
    const quickLinksUl = document.querySelector('#footer .grid.md\\:grid-cols-4 > div:nth-child(2) ul');
    if (quickLinksUl && footer.quickLinks) {
        quickLinksUl.innerHTML = footer.quickLinks.map(link =>
            `<li><a href="${link.href}" class="text-gray-300 hover:text-bright-green transition-colors cursor-pointer">${link.label}</a></li>`
        ).join('');
    }

    // Update services (3rd div in the grid)
    const servicesUl = document.querySelector('#footer .grid.md\\:grid-cols-4 > div:nth-child(3) ul');
    if (servicesUl && footer.services) {
        servicesUl.innerHTML = footer.services.map(service =>
            `<li><span class="text-gray-300">${service}</span></li>`
        ).join('');
    }

    // Update social links
    if (social) {
        const socialLinks = document.querySelector('#footer .flex.space-x-4');
        if (socialLinks) {
            socialLinks.innerHTML = `
                <a href="${social.github}" target="_blank" class="w-12 h-12 bg-bright-green rounded-full flex items-center justify-center sketch-border hover:scale-110 transition-transform cursor-pointer">
                    <i class="fab fa-github text-white"></i>
                </a>
                <a href="${social.linkedin}" target="_blank" class="w-12 h-12 bg-bright-green rounded-full flex items-center justify-center sketch-border hover:scale-110 transition-transform cursor-pointer">
                    <i class="fab fa-linkedin text-white"></i>
                </a>
            `;
        }
    }
}

/**
 * Update schema markup
 */
function updateSchema() {
    const person = portfolioData.person;
    const meta = portfolioData.meta;
    const social = portfolioData.social;
    const experience = portfolioData.experience;

    const schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schemaScript && person) {
        const schema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": person.name,
            "jobTitle": person.jobTitle,
            "url": meta?.url || "",
            "sameAs": [social?.github, social?.linkedin].filter(Boolean),
            "worksFor": {
                "@type": "Organization",
                "name": experience?.[0]?.company || ""
            }
        };
        schemaScript.textContent = JSON.stringify(schema, null, 2);
    }
}

/**
 * Initialize theme toggle
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Get theme config from JSON or use defaults
    const themeConfig = portfolioData?.theme || {
        defaultTheme: 'light',
        lightIcon: 'fa-sun',
        darkIcon: 'fa-moon',
        lightLabel: 'Switch to Dark Mode',
        darkLabel: 'Switch to Light Mode',
        useSystemPreference: true
    };

    // Function to update theme toggle button icons and label
    function updateThemeToggleUI(isDark) {
        if (!themeToggle) return;

        const lightIcon = themeToggle.querySelector('.theme-light-icon');
        const darkIcon = themeToggle.querySelector('.theme-dark-icon');

        if (lightIcon && darkIcon) {
            // Update icon classes from JSON
            lightIcon.className = `fas ${themeConfig.lightIcon} theme-light-icon ${isDark ? 'hidden' : ''}`;
            darkIcon.className = `fas ${themeConfig.darkIcon} theme-dark-icon ${isDark ? '' : 'hidden'}`;
        }

        // Update aria-label for accessibility
        themeToggle.setAttribute('aria-label', isDark ? themeConfig.darkLabel : themeConfig.lightLabel);
        themeToggle.setAttribute('title', isDark ? themeConfig.darkLabel : themeConfig.lightLabel);
    }

    // Function to set theme
    function setTheme(theme) {
        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        updateThemeToggleUI(theme === 'dark');
    }

    // Determine initial theme
    function getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }

        if (themeConfig.useSystemPreference && window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        return themeConfig.defaultTheme;
    }

    // Set initial theme
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);

    // Theme toggle click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = html.classList.contains('dark');
            const newTheme = isDark ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            setTheme(newTheme);
        });
    }

    // Listen for system theme changes
    if (themeConfig.useSystemPreference && window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only apply if user hasn't set a preference
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}

/**
 * Initialize mobile menu
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        // Remove any existing listeners by cloning and replacing
        const newBtn = mobileMenuBtn.cloneNode(true);
        mobileMenuBtn.parentNode.replaceChild(newBtn, mobileMenuBtn);

        // Add click handler to toggle menu
        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // Add click handlers to close menu when links are clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }
}

/**
 * Initialize smooth scrolling
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('flex')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                }
            }
        });
    });
}

/**
 * Initialize back to top button
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        // Throttled scroll handler for better performance
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.pageYOffset > 300) {
                        backToTopBtn.classList.remove('hidden');
                    } else {
                        backToTopBtn.classList.add('hidden');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
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
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

/**
 * Initialize contact form
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoading = submitBtn?.querySelector('.btn-loading');
    const formStatus = document.getElementById('form-status');

    // Get Google Script URL from JSON config
    const googleScriptURL = portfolioData?.contact?.googleScriptURL || '';

    // Get success/error messages from JSON or use defaults
    const messages = portfolioData?.contact?.formMessages || {
        success: "Thanks for your message! I'll get back to you soon! 🚀",
        error: "Oops! Something went wrong. Please try again or email me directly.",
        sending: "Sending your message..."
    };

    function showStatus(message, isSuccess) {
        if (!formStatus) return;
        formStatus.textContent = message;
        formStatus.className = `text-center p-4 rounded-2xl font-comic ${isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`;
        formStatus.classList.remove('hidden');
    }

    function hideStatus() {
        if (formStatus) {
            formStatus.classList.add('hidden');
        }
    }

    function setLoading(isLoading) {
        if (submitBtn) submitBtn.disabled = isLoading;
        if (btnText) btnText.classList.toggle('hidden', isLoading);
        if (btnLoading) btnLoading.classList.toggle('hidden', !isLoading);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideStatus();

        // Collect form data
        const formData = {
            firstName: form.querySelector('[name="firstName"]')?.value || '',
            lastName: form.querySelector('[name="lastName"]')?.value || '',
            email: form.querySelector('[name="email"]')?.value || '',
            projectType: form.querySelector('[name="projectType"]')?.value || '',
            budgetRange: form.querySelector('[name="budgetRange"]')?.value || '',
            message: form.querySelector('[name="message"]')?.value || '',
            timestamp: new Date().toISOString()
        };

        // If no Google Script URL configured, show success message (for demo)
        if (!googleScriptURL || googleScriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
            console.log('Form data (Google Sheets not configured):', formData);
            showStatus(messages.success, true);
            form.reset();
            return;
        }

        // Submit to Google Sheets
        setLoading(true);

        try {
            await fetch(googleScriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // With no-cors mode, we can't read the response, so assume success
            showStatus(messages.success, true);
            form.reset();
        } catch (error) {
            console.error('Form submission error:', error);
            showStatus(messages.error, false);
        } finally {
            setLoading(false);
        }
    });
}
