// Portfolio Script

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

// Load portfolio data from JSON
let portfolioData = null;

// Default portfolio data - Siddharth Mahajan's portfolio
const defaultPortfolioData = {
    personal: {
        name: 'Siddharth Mahajan',
        initials: 'SM',
        title: 'Solution Architect & Cloud Engineer',
        subtitle: 'Kubernetes | Service Mesh | Full-Stack Developer',
        location: 'India',
        email: 'siddharth.mhjn99@gmail.com',
        phone: '+91 XXX XXX XXXX',
        availability: 'Available for Technical Consulting',
        yearsExperience: '3+',
        projectsCompleted: '10+',
        resume: '/resources/Resume.pdf',
        footerDescription: 'Solution Architect & Cloud Engineer specializing in Kubernetes and cloud-native systems.',
        googleScriptURL: '',
        socialLinks: [
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/siddharth-mhjn', icon: 'fa-brands fa-linkedin' },
            { name: 'GitHub', url: 'https://github.com/siddharth-mhjn', icon: 'fa-brands fa-github' },
            { name: 'Instagram', url: 'https://instagram.com/yourhandle', icon: 'fa-brands fa-instagram' }
        ]
    },
    sectionHeaders: {
        skills: { title: 'Technical Skills', description: 'Comprehensive expertise across cloud platforms, DevOps tools, and modern development frameworks' },
        projects: { title: 'Featured Projects', description: 'Showcasing innovative solutions in cloud architecture, automation, and platform engineering' },
        experience: { title: 'Professional Journey', description: 'Career progression through transformative roles in cloud engineering and solution architecture' },
        certifications: { title: 'Certifications & Awards', description: 'Recognized achievements and professional credentials' },
        testimonials: { title: 'What Colleagues Say', description: 'Trusted by professionals across the industry' },
        blog: { title: 'Blog', description: 'Insights, tutorials, and thoughts on technology and development' },
        architecture: { title: 'Architecture & Code', description: 'Deep dive into technical implementations and architectural patterns' },
        contact: { title: 'Get In Touch', description: "Let's discuss your next cloud architecture project or technical consulting needs" }
    },
    about: {
        description: [
            'Solution Architect and Cloud Engineer specializing in scalable, secure, and highly available cloud-native systems.',
            'Expertise in Kubernetes, Istio, CI/CD pipelines, and observability using EFK stacks.',
            'Led infrastructure modernization initiatives and designed custom API gateways.',
            'Focused on vendor interoperability, mentoring teams, and aligning technology with business needs.'
        ],
        expertise: [
            {
                icon: 'fa-solid fa-cloud',
                title: 'Cloud Architecture',
                description: 'Designing and implementing scalable cloud-native solutions with focus on reliability and performance.',
                gradient: 'from-cyber-blue to-cyber-purple'
            },
            {
                icon: 'fa-brands fa-docker',
                title: 'Kubernetes & Service Mesh',
                description: 'Expert in orchestrating containerized applications with Kubernetes and implementing service mesh patterns.',
                gradient: 'from-cyber-purple to-cyber-violet'
            },
            {
                icon: 'fa-solid fa-code',
                title: 'Full-Stack Development',
                description: 'Building end-to-end solutions with modern frameworks and best practices in software engineering.',
                gradient: 'from-cyber-violet to-cyber-pink'
            }
        ]
    },
    skills: {
        'Cloud & DevOps': {
            icon: 'fa-solid fa-server',
            gradient: 'from-cyber-blue to-cyber-purple',
            borderColor: 'border-cyber-blue/30',
            technologies: [
                { icon: 'fa-brands fa-docker', name: 'Docker' },
                { icon: 'fa-solid fa-dharmachakra', name: 'Kubernetes' },
                { icon: 'fa-solid fa-network-wired', name: 'Istio' },
                { icon: 'fa-brands fa-microsoft', name: 'Azure' },
                { icon: 'fa-solid fa-cloud', name: 'AKS' },
                { icon: 'fa-brands fa-aws', name: 'AWS' }
            ]
        },
        'Programming Languages': {
            icon: 'fa-solid fa-code',
            gradient: 'from-cyber-purple to-cyber-violet',
            borderColor: 'border-cyber-purple/30',
            technologies: [
                { icon: 'fa-brands fa-java', name: 'Java' },
                { icon: 'fa-brands fa-python', name: 'Python' },
                { icon: 'fa-solid fa-terminal', name: 'Shell Scripting' },
                { icon: 'fa-solid fa-terminal', name: 'PowerShell' }
            ]
        }
    },
    projects: [
        {
            icon: 'fa-solid fa-dharmachakra',
            title: 'Multi-Cluster Kubernetes Platform',
            description: 'Enterprise-grade Kubernetes platform with automated deployment, monitoring, and service mesh integration.',
            gradient: 'from-cyber-blue to-cyber-purple',
            borderColor: 'border-cyber-blue/30',
            glowColor: 'bg-cyber-blue/10',
            technologies: ['Kubernetes', 'Istio', 'Prometheus'],
            link: 'https://github.com/siddharth-mhjn'
        },
        {
            icon: 'fa-solid fa-gateway',
            title: 'API Gateway Solution',
            description: 'Scalable API gateway with rate limiting, authentication, and analytics dashboard.',
            gradient: 'from-cyber-purple to-cyber-violet',
            borderColor: 'border-cyber-purple/30',
            glowColor: 'bg-cyber-purple/10',
            technologies: ['APISIX', 'Keycloak', 'Docker'],
            link: 'https://github.com/siddharth-mhjn'
        },
        {
            icon: 'fa-solid fa-city',
            title: 'Smart City Pipeline',
            description: 'Real-time IoT data processing pipeline with EFK stack.',
            gradient: 'from-cyber-violet to-cyber-pink',
            borderColor: 'border-cyber-violet/30',
            glowColor: 'bg-cyber-violet/10',
            technologies: ['Elasticsearch', 'Kafka', 'Python'],
            link: 'https://github.com/siddharth-mhjn'
        }
    ],
    experience: [
        {
            title: 'Software Engineer I',
            company: 'Astreya',
            period: 'June 2025 – Present',
            duration: 'Current Role',
            isCurrent: true,
            color: 'cyber-blue',
            responsibilities: [
                'Design and development of system architecture',
                'Ensuring scalability and operational efficiency'
            ],
            technologies: ['Cloud-Native', 'Automation']
        },
        {
            title: 'Member Technical Staff',
            company: 'NEC India',
            period: 'April 2025 – June 2025',
            duration: '3M',
            isCurrent: false,
            color: 'cyber-purple',
            achievements: [
                'Built real-time data pipelines for smart city projects',
                'Deployed EFK stack with Istio on Kubernetes',
                'Improved observability and vendor onboarding'
            ],
            technologies: ['Kubernetes', 'EFK', 'Istio', 'NiFi']
        },
        {
            title: 'Software Engineer',
            company: 'LTIMindtree',
            period: 'July 2022 – March 2025',
            duration: '2.9Y',
            isCurrent: false,
            color: 'cyber-violet',
            impact: [
                'Managed Kubernetes clusters with Istio service mesh',
                'Designed and implemented custom API Gateway solutions',
                'Automated infrastructure deployment and monitoring',
                'Built comprehensive telemetry and observability platforms'
            ],
            technologies: ['Kubernetes', 'Service Mesh', 'API Gateway', 'Spring Cloud']
        }
    ],
    certifications: [
        {
            icon: 'fa-solid fa-robot',
            title: 'ITOPS Automation Engineer',
            level: 'Foundation Level',
            issuer: 'LTIMindtree',
            gradient: 'from-cyber-blue to-cyber-purple'
        },
        {
            icon: 'fa-solid fa-cloud',
            title: 'Cloud & Infrastructure Service',
            level: 'Professional Level',
            issuer: 'LTI',
            gradient: 'from-cyber-purple to-cyber-violet'
        },
        {
            icon: 'fa-solid fa-code',
            title: 'Web Development',
            level: 'Certification Program',
            issuer: 'Internshala',
            gradient: 'from-cyber-violet to-cyber-pink'
        }
    ],
    awards: [
        {
            icon: 'fa-solid fa-award',
            title: 'Technical Subject Matter Expert',
            date: 'June 2024',
            description: 'Recognized for contributions to Automation Academy training (April 2023 – March 2024).',
            gradient: 'from-yellow-400 to-yellow-600',
            shadowColor: 'shadow-yellow-500/30',
            borderColor: 'border-cyber-blue/30'
        },
        {
            icon: 'fa-solid fa-star',
            title: 'Spotlight Award',
            date: 'June 2023',
            description: 'Improved system scalability by 30% through Service Mesh architecture.',
            gradient: 'from-purple-400 to-purple-600',
            shadowColor: 'shadow-purple-500/30',
            borderColor: 'border-cyber-purple/30'
        },
        {
            icon: 'fa-solid fa-lightbulb',
            title: 'Spotlight Award',
            date: 'March 2023',
            description: 'Delivered Istio and platform demos reducing architectural decision time by 30%.',
            gradient: 'from-blue-400 to-blue-600',
            shadowColor: 'shadow-blue-500/30',
            borderColor: 'border-cyber-violet/30'
        }
    ],
    testimonials: [
        {
            name: 'Karthik Battaram',
            role: 'Senior Data Engineer',
            company: 'LTIMindtree',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
            rating: 5,
            quote: 'Technically sound, dependable, and strong ownership mindset.',
            borderColor: 'border-cyber-blue',
            companyColor: 'text-cyber-blue'
        },
        {
            name: 'Akshay Reddy Emmadi',
            role: 'Software Engineer',
            company: 'LTIMindtree',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
            rating: 5,
            quote: 'Key contributor to microservices transformation using Spring Cloud, Istio, and API Gateway.',
            borderColor: 'border-cyber-purple',
            companyColor: 'text-cyber-purple'
        },
        {
            name: 'Priyanka A',
            role: 'Specialist Data Engineer',
            company: 'LTIMindtree',
            image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
            rating: 5,
            quote: 'Reliable, resilient, and instrumental in systems engineering under pressure.',
            borderColor: 'border-cyber-violet',
            companyColor: 'text-cyber-violet'
        }
    ],
    blog: [
        {
            id: 'cloud-architecture',
            icon: 'fa-solid fa-cloud',
            title: 'Getting Started with Cloud Architecture',
            excerpt: 'Learn the fundamentals of designing scalable and resilient cloud infrastructure for modern applications.',
            category: 'Cloud',
            date: 'Jan 15, 2026',
            gradient: 'from-cyber-blue/20 to-cyber-purple/20',
            borderColor: 'border-cyber-blue/20',
            categoryColor: 'bg-cyber-blue/20 text-cyber-blue',
            hoverColor: 'group-hover:text-cyber-blue',
            linkColor: 'text-cyber-blue hover:text-cyber-purple',
            link: '#'
        },
        {
            id: 'cicd-best-practices',
            icon: 'fa-solid fa-code-branch',
            title: 'CI/CD Best Practices for 2026',
            excerpt: 'Explore the latest trends and best practices in continuous integration and deployment pipelines.',
            category: 'DevOps',
            date: 'Jan 10, 2026',
            gradient: 'from-cyber-purple/20 to-cyber-violet/20',
            borderColor: 'border-cyber-purple/20',
            categoryColor: 'bg-cyber-purple/20 text-cyber-purple',
            hoverColor: 'group-hover:text-cyber-purple',
            linkColor: 'text-cyber-purple hover:text-cyber-violet',
            link: '#'
        },
        {
            id: 'kubernetes-security',
            icon: 'fa-solid fa-shield-halved',
            title: 'Securing Your Kubernetes Clusters',
            excerpt: 'A comprehensive guide to implementing security best practices in your Kubernetes deployments.',
            category: 'Security',
            date: 'Jan 5, 2026',
            gradient: 'from-cyber-violet/20 to-cyber-pink/20',
            borderColor: 'border-cyber-violet/20',
            categoryColor: 'bg-cyber-violet/20 text-cyber-violet',
            hoverColor: 'group-hover:text-cyber-violet',
            linkColor: 'text-cyber-violet hover:text-cyber-pink',
            link: '#'
        }
    ],
    footerServices: ['Cloud Architecture', 'Kubernetes Solutions', 'Platform Engineering', 'Website Development'],
    codeDemos: [
        {
            id: 'sample',
            title: 'Sample Code',
            shortTitle: 'Sample',
            icon: 'fa-solid fa-code',
            file: null
        }
    ],
    policies: {
        privacyPolicy: {
            title: 'Privacy Policy',
            lastUpdated: 'January 2026',
            sections: [
                { heading: 'Information We Collect', content: 'When you use the contact form on this website, we collect the information you provide, including your name, email address, and message content. We do not collect any additional personal data without your consent.' },
                { heading: 'How We Use Your Information', content: 'The information collected through the contact form is used solely to respond to your inquiries and communicate with you about potential projects or collaborations. We do not sell, trade, or share your personal information with third parties.' },
                { heading: 'Data Security', content: 'We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.' },
                { heading: 'Cookies', content: 'This website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.' },
                { heading: 'Contact', content: 'If you have any questions about this Privacy Policy, please contact me through the contact form on this website.' }
            ]
        },
        termsOfService: {
            title: 'Terms of Service',
            lastUpdated: 'January 2026',
            sections: [
                { heading: 'Acceptance of Terms', content: 'By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.' },
                { heading: 'Use of Content', content: 'All content on this website, including text, images, code snippets, and design elements, is the property of the website owner unless otherwise stated. You may not reproduce, distribute, or use any content without prior written permission.' },
                { heading: 'Contact Form', content: 'When using the contact form, you agree to provide accurate and truthful information. You agree not to send spam, malicious content, or any material that violates applicable laws.' },
                { heading: 'Limitation of Liability', content: 'This website is provided "as is" without any warranties. The website owner shall not be liable for any damages arising from the use or inability to use this website.' },
                { heading: 'Changes to Terms', content: 'These terms may be updated from time to time. Continued use of the website after changes constitutes acceptance of the new terms.' }
            ]
        }
    }
};

async function loadPortfolioData() {
    try {
        const response = await fetch('portfolio-data.json');
        const jsonData = await response.json();
        // Deep merge with defaults - JSON data takes precedence
        portfolioData = deepMerge(defaultPortfolioData, jsonData);
        populatePortfolio();
    } catch (error) {
        console.error('Error loading portfolio data:', error);
        // Use defaults if JSON fails to load
        portfolioData = defaultPortfolioData;
        populatePortfolio();
    }
}

// Deep merge utility function
function deepMerge(target, source) {
    const result = { ...target };
    for (const key in source) {
        if (source[key] !== null && source[key] !== undefined) {
            if (Array.isArray(source[key])) {
                // For arrays, use source if it has items, otherwise use target
                result[key] = source[key].length > 0 ? source[key] : target[key];
            } else if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
                result[key] = deepMerge(target[key] || {}, source[key]);
            } else {
                result[key] = source[key];
            }
        }
    }
    return result;
}

function populatePortfolio() {
    if (!portfolioData) return;

    // Update page title from meta
    if (portfolioData.meta && portfolioData.meta.title) {
        document.title = portfolioData.meta.title;
    }

    // Update favicon
    if (portfolioData.personal && portfolioData.personal.favicon) {
        const faviconLink = document.getElementById('favicon-link');
        if (faviconLink) faviconLink.href = portfolioData.personal.favicon;
    }

    // Update section headers
    updateSectionHeaders();
    // Update header section
    updateHeaderSection();
    // Update personal info in hero section
    updateHeroSection();
    // Update about section
    updateAboutSection();
    // Update skills section
    updateSkillsSection();
    // Update projects section
    updateProjectsSection();
    // Update experience section
    updateExperienceSection();
    // Update certifications and awards (both handled in one function)
    updateCertificationsSection();
    // Update testimonials
    updateTestimonialsSection();
    // Update contact section
    updateContactSection();
    // Update blog section
    updateBlogSection();
    // Update footer section
    updateFooterSection();
    // Update code demos section
    updateCodeDemosSection();
    // Initialize contact form
    initializeContactForm();
}

function updateSectionHeaders() {
    const headers = portfolioData.sectionHeaders;

    // Update each section
    Object.keys(headers).forEach(section => {
        const sectionData = headers[section];

        const titleElement = document.querySelector(`[data-section="${section}-title"]`);
        const descElement = document.querySelector(`[data-section="${section}-description"]`);

        if (titleElement) {
            titleElement.textContent = sectionData.title;
        }
        if (descElement) {
            descElement.textContent = sectionData.description;
        }
    });
}

function updateHeroSection() {
    const data = portfolioData.personal;

    const nameElement = document.querySelector('#hero h1 .gradient-text');
    if (nameElement) nameElement.textContent = data.name;

    const titleElement = document.querySelector('#hero .text-xl.sm\\:text-2xl');
    if (titleElement) titleElement.textContent = data.title;

    const subtitleElement = document.querySelector('#hero .text-base.sm\\:text-lg');
    if (subtitleElement) subtitleElement.textContent = data.subtitle;

    const stats = document.querySelectorAll('#hero .text-3xl.sm\\:text-4xl');
    if (stats[0]) stats[0].textContent = data.yearsExperience;
    if (stats[1]) stats[1].textContent = data.projectsCompleted;

    // Update availability badge in hero section
    const availabilityBadgeContainer = document.querySelector('#availability-badge');
    const availabilityBadge = document.querySelector('#availability-badge span');

    if (data.availability) {
        // Show badge and update text
        if (availabilityBadgeContainer) {
            availabilityBadgeContainer.style.display = 'block';
        }
        if (availabilityBadge) {
            availabilityBadge.innerHTML = `<i class="fa-solid fa-circle text-xs mr-2 animate-pulse"></i>${data.availability}`;
        }
    } else {
        // Hide badge when availability is empty/null
        if (availabilityBadgeContainer) {
            availabilityBadgeContainer.style.display = 'none';
        }
    }

    // Update resume download link in hero section
    const heroResumeLink = document.querySelector('#hero a[download]');
    if (heroResumeLink) {
        heroResumeLink.href = data.resume;
    }
}

function updateAboutSection() {
    const data = portfolioData.about;
    const personalData = portfolioData.personal;

    // Update description paragraphs
    const descriptions = document.querySelectorAll('#about .text-lg.text-gray-300');
    data.description.forEach((desc, index) => {
        if (descriptions[index]) {
            descriptions[index].textContent = desc;
        }
    });

    // Update location and email in about section
    const aboutLocation = document.getElementById('about-location');
    const aboutEmail = document.getElementById('about-email');

    if (aboutLocation) {
        aboutLocation.textContent = personalData.location;
    }
    if (aboutEmail) {
        aboutEmail.textContent = personalData.email;
    }

    // Update expertise cards
    const expertiseContainer = document.querySelector('#about .grid.grid-cols-1.lg\\:grid-cols-2 > div:nth-child(2)');
    if (expertiseContainer) {
        expertiseContainer.innerHTML = '';
        data.expertise.forEach(item => {
            const expertiseCard = `
                <div class="bg-cyber-darker/50 p-6 rounded-xl border border-${item.gradient.split(' ')[1].replace('to-', '')}/20 card-hover">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <div class="w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center">
                                <i class="${item.icon} text-white text-xl"></i>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white mb-2">${item.title}</h3>
                            <p class="text-gray-400">${item.description}</p>
                        </div>
                    </div>
                </div>
            `;
            expertiseContainer.innerHTML += expertiseCard;
        });
    }
}

function updateSkillsSection() {
    const skills = portfolioData.skills;
    const skillsContainer = document.querySelector('#skills .grid.grid-cols-1.lg\\:grid-cols-2');

    if (!skillsContainer) return;

    skillsContainer.innerHTML = '';

    Object.entries(skills).forEach(([category, data]) => {
        const skillCard = `
            <div class="bg-gradient-to-br from-cyber-dark to-cyber-darker p-8 rounded-2xl border ${data.borderColor} card-hover">
                <div class="flex items-center mb-6">
                    <div class="w-14 h-14 bg-gradient-to-br ${data.gradient} rounded-xl flex items-center justify-center mr-4">
                        <i class="${data.icon} text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white">${category}</h3>
                </div>
                <div class="flex flex-wrap gap-3">
                    ${data.technologies.map(tech => {
                        const colorClass = data.borderColor.replace('border-', '').replace('/30', '');
                        return `<span class="px-4 py-2 bg-${colorClass}/20 border border-${colorClass}/40 rounded-lg text-${colorClass} text-sm font-medium tech-badge">
                            <i class="${tech.icon} mr-2"></i>${tech.name}
                        </span>`;
                    }).join('')}
                </div>
            </div>
        `;
        skillsContainer.innerHTML += skillCard;
    });
}

function updateProjectsSection() {
    const projects = portfolioData.projects;
    const projectsGrid = document.querySelector('#projects .grid');

    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const colorClass = project.borderColor.replace('border-', '').replace('/30', '');
        const projectCard = `
            <div class="bg-gradient-to-br from-cyber-darker to-cyber-dark p-8 rounded-2xl border ${project.borderColor} card-hover relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-32 h-32 ${project.glowColor} rounded-full blur-2xl group-hover:${project.glowColor.replace('/10', '/20')} transition-all duration-300"></div>
                <div class="relative z-10">
                    <div class="w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-6">
                        <i class="${project.icon} text-white text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-4">${project.title}</h3>
                    <p class="text-gray-400 mb-6 leading-relaxed">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${project.technologies.map(tech =>
                            `<span class="px-3 py-1 bg-${colorClass}/20 text-${colorClass} text-xs rounded-full font-medium">${tech}</span>`
                        ).join('')}
                    </div>
                    <a href="${project.link}" target="_blank" class="inline-flex items-center text-${colorClass} hover:text-cyber-purple transition-colors duration-300">
                        <i class="fa-brands fa-github mr-2"></i>
                        <span class="font-semibold">View on GitHub</span>
                        <i class="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        `;
        projectsGrid.innerHTML += projectCard;
    });
}

function updateExperienceSection() {
    const experiences = portfolioData.experience;
    const experienceContainer = document.querySelector('#experience .space-y-12');

    if (!experienceContainer) return;

    experienceContainer.innerHTML = '';

    experiences.forEach((exp) => {
        const responsibilitiesKey = exp.responsibilities ? 'responsibilities' :
                                   exp.achievements ? 'achievements' : 'impact';
        const items = exp[responsibilitiesKey] || [];
        const titleLabel = responsibilitiesKey === 'responsibilities' ? 'Key Responsibilities' :
                          responsibilitiesKey === 'achievements' ? 'Key Achievements' : 'Core Impact';

        const experienceCard = `
            <div class="relative sm:pl-20">
                <div class="hidden sm:block absolute left-6 top-8 w-4 h-4 bg-${exp.color} rounded-full border-4 border-cyber-darker shadow-lg shadow-${exp.color}/50 z-10"></div>
                <div class="bg-gradient-to-br from-cyber-dark/80 to-cyber-darker/80 p-4 sm:p-6 md:p-8 rounded-2xl border border-${exp.color}/30 backdrop-blur-sm hover:bg-cyber-dark/90 transition-all duration-300">
                    <div class="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
                        <div>
                            <h3 class="text-2xl font-bold text-white mb-2">${exp.title}</h3>
                            <div class="flex items-center text-${exp.color} font-semibold text-lg mb-3">
                                <i class="fa-solid fa-building mr-2"></i>${exp.company}
                            </div>
                            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-${exp.color}/20 to-cyber-purple/20 border border-${exp.color}/40 rounded-full">
                                <i class="fa-solid fa-calendar-alt mr-2 text-${exp.color} text-sm"></i>
                                <span class="text-white text-sm font-medium">${exp.period}</span>
                            </div>
                        </div>
                        ${exp.isCurrent ? `
                            <div class="flex items-center space-x-2">
                                <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span class="text-green-400 text-sm font-medium">Current Role</span>
                            </div>
                        ` : `
                            <div class="flex items-center space-x-2">
                                <div class="w-8 h-8 bg-${exp.color}/20 border border-${exp.color}/40 rounded-full flex items-center justify-center">
                                    <span class="text-${exp.color} text-xs font-bold">${exp.duration}</span>
                                </div>
                            </div>
                        `}
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                        <div>
                            <h4 class="text-white font-semibold mb-4 flex items-center">
                                <i class="fa-solid fa-tasks text-${exp.color} mr-2"></i>${titleLabel}
                            </h4>
                            <ul class="space-y-3">
                                ${items.map(item => `
                                    <li class="flex items-start text-gray-300">
                                        <i class="fa-solid fa-arrow-right text-${exp.color} mr-3 mt-1 text-sm"></i>
                                        <span>${item}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-white font-semibold mb-4 flex items-center">
                                <i class="fa-solid fa-cogs text-${exp.color} mr-2"></i>Technologies
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                ${exp.technologies.map(tech => `
                                    <span class="px-3 py-1.5 bg-${exp.color}/20 border border-${exp.color}/40 text-${exp.color} text-xs rounded-lg font-medium">${tech}</span>
                                `).join('')}
                            </div>
                            ${exp.training ? `
                                <div class="bg-${exp.color}/10 border border-${exp.color}/30 rounded-lg p-4 mt-4">
                                    <div class="flex items-center justify-between text-sm">
                                        <span class="text-gray-300">${exp.training.role}</span>
                                        <span class="text-${exp.color} font-semibold">${exp.training.period}</span>
                                    </div>
                                    <div class="text-xs text-gray-400 mt-1">${exp.training.description}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
        experienceContainer.innerHTML += experienceCard;
    });
}

function updateCertificationsSection() {
    const certifications = portfolioData.certifications;
    const awards = portfolioData.awards;

    // Update certifications
    const certsGrid = document.querySelector('#certifications .grid.grid-cols-1.md\\:grid-cols-3');

    if (certsGrid) {
        certsGrid.innerHTML = '';
        certifications.forEach(cert => {
            const certCard = `
                <div class="bg-gradient-to-br from-cyber-darker to-cyber-dark p-6 rounded-xl border border-cyber-blue/30 card-hover">
                    <div class="flex items-start justify-between mb-4">
                        <div class="w-14 h-14 bg-gradient-to-br ${cert.gradient} rounded-lg flex items-center justify-center">
                            <i class="${cert.icon} text-white text-2xl"></i>
                        </div>
                        <div class="w-8 h-8 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center">
                            <i class="fa-solid fa-check text-green-400 text-sm"></i>
                        </div>
                    </div>
                    <h4 class="text-xl font-bold text-white mb-2">${cert.title}</h4>
                    <p class="text-gray-400 text-sm mb-4">${cert.level}</p>
                    <div class="flex items-center text-cyber-blue text-sm">
                        <i class="fa-solid fa-building mr-2"></i>
                        <span class="font-semibold">${cert.issuer}</span>
                    </div>
                </div>
            `;
            certsGrid.innerHTML += certCard;
        });
    }

    // Update awards
    const awardsContainer = document.querySelector('#certifications .space-y-6');

    if (awardsContainer) {
        awardsContainer.innerHTML = '';
        awards.forEach(award => {
            const awardCard = `
                <div class="bg-gradient-to-r from-cyber-darker to-cyber-dark p-8 rounded-2xl border ${award.borderColor} card-hover">
                    <div class="flex items-start space-x-6">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 bg-gradient-to-br ${award.gradient} rounded-full flex items-center justify-center shadow-lg ${award.shadowColor}">
                                <i class="${award.icon} text-white text-2xl"></i>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                                <h4 class="text-2xl font-bold text-white">${award.title}</h4>
                                <span class="text-cyber-blue font-semibold">${award.date}</span>
                            </div>
                            <p class="text-gray-300 leading-relaxed">${award.description}</p>
                        </div>
                    </div>
                </div>
            `;
            awardsContainer.innerHTML += awardCard;
        });
    }
}

function updateTestimonialsSection() {
    const testimonials = portfolioData.testimonials;
    const testimonialsGrid = document.querySelector('#testimonials .grid');

    if (!testimonialsGrid) return;

    testimonialsGrid.innerHTML = '';

    testimonials.forEach(testimonial => {
        const stars = Array(testimonial.rating).fill('<i class="fa-solid fa-star text-yellow-400"></i>').join('');

        const testimonialCard = `
            <div class="bg-gradient-to-br from-cyber-dark to-cyber-darker p-8 rounded-2xl border ${testimonial.borderColor}/30 card-hover">
                <div class="flex items-center mb-6">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full border-2 ${testimonial.borderColor} mr-4" loading="lazy" decoding="async">
                    <div>
                        <h4 class="text-xl font-bold text-white">${testimonial.name}</h4>
                        <p class="text-sm text-gray-400">${testimonial.role}</p>
                        <p class="text-xs ${testimonial.companyColor} font-semibold">${testimonial.company}</p>
                    </div>
                </div>
                <div class="flex mb-4">
                    ${stars}
                </div>
                <p class="text-gray-300 leading-relaxed italic">"${testimonial.quote}"</p>
            </div>
        `;
        testimonialsGrid.innerHTML += testimonialCard;
    });
}

function updateBlogSection() {
    const blogPosts = portfolioData.blog;
    const blogContainer = document.getElementById('blog-posts');

    if (!blogContainer) return;

    blogContainer.innerHTML = '';

    blogPosts.forEach(post => {
        const blogCard = `
            <article class="bg-cyber-darker/50 rounded-2xl border ${post.borderColor} overflow-hidden card-hover group">
                <div class="h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center">
                    <i class="${post.icon} text-6xl text-cyber-blue/50 ${post.hoverColor} transition-colors duration-300"></i>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-4 mb-4">
                        <span class="px-3 py-1 ${post.categoryColor} text-xs font-medium rounded-full">${post.category}</span>
                        <span class="text-gray-500 text-sm"><i class="fa-regular fa-calendar mr-1"></i>${post.date}</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 ${post.hoverColor} transition-colors duration-300">${post.title}</h3>
                    <p class="text-gray-400 text-sm mb-4 line-clamp-3">${post.excerpt}</p>
                    <a href="${post.link}" class="inline-flex items-center ${post.linkColor} transition-colors duration-300 text-sm font-medium">
                        Read More <i class="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </article>
        `;
        blogContainer.innerHTML += blogCard;
    });
}

function updateHeaderSection() {
    const data = portfolioData.personal;

    // Update header initials
    const headerInitials = document.querySelector('header .text-2xl.font-bold .gradient-text');
    if (headerInitials) {
        headerInitials.textContent = data.initials;
    }

    // Update availability badge
    const availabilityBadge = document.querySelector('header .text-xs.sm\\:text-sm.text-gray-300');
    if (availabilityBadge) {
        availabilityBadge.textContent = data.availability;
    }

    // Update social links in all sections
    updateAllSocialLinks();
}

function updateAllSocialLinks() {
    const data = portfolioData.personal;
    const socialLinks = data.socialLinks;
    const email = data.email;

    // Gradient colors for contact section icons
    const gradients = [
        'from-cyber-blue to-cyber-purple',
        'from-cyber-purple to-cyber-violet',
        'from-cyber-violet to-cyber-pink',
        'from-cyber-pink to-cyber-blue',
        'from-cyber-blue to-cyber-violet'
    ];

    // Update desktop header social links
    const headerContainer = document.getElementById('header-social-links');
    if (headerContainer) {
        headerContainer.innerHTML = '';
        socialLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.className = 'text-gray-400 hover:text-cyber-blue transition-colors duration-300';
            a.title = link.name;
            a.innerHTML = `<i class="${link.icon} text-xl"></i>`;
            headerContainer.appendChild(a);
        });
    }

    // Update mobile menu social links
    const mobileContainer = document.getElementById('mobile-social-links');
    if (mobileContainer) {
        mobileContainer.innerHTML = '';
        socialLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.className = 'w-12 h-12 bg-cyber-darker border border-gray-700 rounded-lg flex items-center justify-center hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300';
            a.title = link.name;
            a.innerHTML = `<i class="${link.icon} text-xl"></i>`;
            mobileContainer.appendChild(a);
        });
    }

    // Update contact section social links
    const contactContainer = document.getElementById('contact-social-links');
    if (contactContainer) {
        contactContainer.innerHTML = '';
        socialLinks.forEach((link, index) => {
            const gradient = gradients[index % gradients.length];
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.className = `w-14 h-14 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300`;
            a.title = link.name;
            a.innerHTML = `<i class="${link.icon} text-white text-2xl"></i>`;
            contactContainer.appendChild(a);
        });
        // Add email link
        const emailGradient = gradients[socialLinks.length % gradients.length];
        const emailLink = document.createElement('a');
        emailLink.href = `mailto:${email}`;
        emailLink.className = `w-14 h-14 bg-gradient-to-br ${emailGradient} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300`;
        emailLink.title = 'Email';
        emailLink.innerHTML = `<i class="fa-solid fa-envelope text-white text-2xl"></i>`;
        contactContainer.appendChild(emailLink);
    }

    // Update footer social links
    const footerContainer = document.getElementById('footer-social-links');
    if (footerContainer) {
        footerContainer.innerHTML = '';
        socialLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.className = 'w-10 h-10 bg-cyber-darker border border-gray-700 rounded-lg flex items-center justify-center hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300';
            a.title = link.name;
            a.innerHTML = `<i class="${link.icon}"></i>`;
            footerContainer.appendChild(a);
        });
        // Add email link
        const emailLink = document.createElement('a');
        emailLink.href = `mailto:${email}`;
        emailLink.className = 'w-10 h-10 bg-cyber-darker border border-gray-700 rounded-lg flex items-center justify-center hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300';
        emailLink.title = 'Email';
        emailLink.innerHTML = `<i class="fa-solid fa-envelope"></i>`;
        footerContainer.appendChild(emailLink);
    }
}

function updateContactSection() {
    const data = portfolioData.personal;

    // Update email in contact information
    const emailLink = document.querySelector('#contact a[href^="mailto"]');
    if (emailLink) {
        emailLink.href = `mailto:${data.email}`;
        emailLink.textContent = data.email;
    }

    // Update phone
    const phoneLink = document.querySelector('#contact a[href^="tel"]');
    if (phoneLink) {
        phoneLink.href = `tel:${data.phone.replace(/\s/g, '')}`;
        phoneLink.textContent = data.phone;
    }

    // Update location - target the third text-white div (after email and phone)
    const locationDivs = document.querySelectorAll('#contact .text-lg.text-white');
    if (locationDivs.length >= 3) {
        locationDivs[2].textContent = data.location;
    }

    // Update availability
    const contactAvailabilityContainer = document.querySelector('#contact-availability');
    const availabilityDivs = document.querySelectorAll('#contact .text-lg.text-white');
    const availabilityDiv = availabilityDivs[3]; // Fourth div is availability

    if (data.availability) {
        // Show availability section and update text
        if (contactAvailabilityContainer) {
            contactAvailabilityContainer.style.display = 'flex';
        }
        if (availabilityDiv) {
            availabilityDiv.textContent = data.availability;
        }
    } else {
        // Hide availability section when empty/null
        if (contactAvailabilityContainer) {
            contactAvailabilityContainer.style.display = 'none';
        }
    }
}

function updateFooterSection() {
    const data = portfolioData.personal;

    // Update footer initials
    const footerInitials = document.querySelector('#footer .text-3xl.font-bold .gradient-text');
    if (footerInitials) {
        footerInitials.textContent = data.initials;
    }

    // Update footer description
    const footerDescription = document.querySelector('#footer .text-gray-400.text-sm');
    if (footerDescription) {
        footerDescription.textContent = data.footerDescription;
    }

    // Update copyright text with clickable link
    const copyrightText = document.querySelector('#footer-copyright');
    if (copyrightText && portfolioData.footer?.copyright) {
        const link = portfolioData.footer.copyrightLink;
        copyrightText.innerHTML = link
            ? `${portfolioData.footer.copyright} <a href="${link.url}" target="_blank" class="text-cyber-blue hover:text-cyber-purple transition-colors">${link.text}</a>`
            : portfolioData.footer.copyright;
    }

    // Update resume download link
    const resumeLink = document.querySelector('#footer a[download]');
    if (resumeLink) {
        resumeLink.href = data.resume;
    }

    // Update footer services
    const footerServices = portfolioData.footerServices;
    const servicesContainer = document.querySelector('#footer-services');
    if (servicesContainer) {
        servicesContainer.innerHTML = '';
        footerServices.forEach(service => {
            const li = document.createElement('li');
            li.className = 'text-gray-400 text-sm';
            li.textContent = service;
            servicesContainer.appendChild(li);
        });
    }
}

async function updateCodeDemosSection() {
    const codeDemos = portfolioData.codeDemos;
    const tabsContainer = document.querySelector('#code-tabs');
    const contentContainer = document.querySelector('#code-content');

    if (!tabsContainer || !contentContainer) return;

    // Update section headers if provided in codeDemos configuration
    if (codeDemos.sectionTitle || codeDemos.sectionDescription) {
        const titleElement = document.querySelector('[data-section="architecture-title"]');
        const descElement = document.querySelector('[data-section="architecture-description"]');

        if (codeDemos.sectionTitle && titleElement) {
            titleElement.textContent = codeDemos.sectionTitle;
        }
        if (codeDemos.sectionDescription && descElement) {
            descElement.textContent = codeDemos.sectionDescription;
        }
    }

    const demosToDisplay = codeDemos.demos?.length > 0 ? codeDemos.demos : (Array.isArray(codeDemos) && codeDemos.length > 0 ? codeDemos : codeDemos);

    // Clear existing content
    tabsContainer.innerHTML = '';
    contentContainer.innerHTML = '';

    // Create tabs
    demosToDisplay.forEach((demo, index) => {
        const isFirst = index === 0;
        const tabButton = document.createElement('button');
        tabButton.className = `tab-btn px-4 sm:px-6 md:px-8 py-3 sm:py-4 ${isFirst ? 'bg-cyber-blue/20 text-cyber-blue font-semibold border-b-2 border-cyber-blue' : 'text-gray-400 hover:text-white hover:bg-cyber-darker/50'} transition-all duration-300 text-xs sm:text-sm whitespace-nowrap`;
        tabButton.setAttribute('data-tab', demo.id);
        tabButton.innerHTML = `<i class="${demo.icon} mr-1 sm:mr-2"></i><span class="hidden sm:inline">${demo.title}</span><span class="sm:hidden">${demo.shortTitle}</span>`;
        tabsContainer.appendChild(tabButton);
    });

    // Load content for each demo
    for (let i = 0; i < demosToDisplay.length; i++) {
        const demo = demosToDisplay[i];
        const isFirst = i === 0;

        const contentDiv = document.createElement('div');
        contentDiv.id = demo.id;
        contentDiv.className = `tab-content ${isFirst ? '' : 'hidden'}`;

        if (demo.file) {
            try {
                const response = await fetch(demo.file);
                const code = await response.text();

                // Use header and description from JSON if provided, otherwise from file comments
                let title = demo.header || demo.title;
                let description = demo.description || '';
                let codeContent = code;

                // If no header/description in JSON, try to extract from file
                if (!demo.header || !demo.description) {
                    const lines = code.split('\n');
                    if (lines[0].startsWith('#')) {
                        if (!demo.header) title = lines[0].replace(/^#\s*/, '');
                        if (lines[1].startsWith('#')) {
                            if (!demo.description) description = lines[1].replace(/^#\s*/, '');
                            codeContent = lines.slice(2).join('\n').trim();
                        } else {
                            codeContent = lines.slice(1).join('\n').trim();
                        }
                    }
                }

                contentDiv.innerHTML = `
                    <h3 class="text-2xl font-bold text-white mb-4">${title}</h3>
                    ${description ? `<p class="text-gray-400 mb-6">${description}</p>` : ''}
                    <div class="bg-cyber-darker rounded-lg p-6 font-mono text-sm overflow-x-auto">
                        <pre class="text-green-400"><code>${escapeHtml(codeContent)}</code></pre>
                    </div>
                `;
            } catch (error) {
                console.error(`Error loading ${demo.file}:`, error);
                contentDiv.innerHTML = `
                    <h3 class="text-2xl font-bold text-white mb-4">${demo.header || demo.title}</h3>
                    <p class="text-gray-400 mb-6">${demo.description || 'Error loading code demo.'}</p>
                    <div class="bg-cyber-darker rounded-lg p-6 font-mono text-sm overflow-x-auto">
                        <pre class="text-red-400"><code># Error: Could not load ${demo.file}</code></pre>
                    </div>
                `;
            }
        } else {
            // Default placeholder content
            contentDiv.innerHTML = `
                <h3 class="text-2xl font-bold text-white mb-4">Sample Code</h3>
                <p class="text-gray-400 mb-6">Add your code demos by creating files in the demo folder and updating the JSON configuration.</p>
                <div class="bg-cyber-darker rounded-lg p-6 font-mono text-sm overflow-x-auto">
                    <pre class="text-gray-400"><code># Add your code examples here
# Create files in the demo/ folder
# Update portfolio-data.json with file references</code></pre>
                </div>
            `;
        }

        contentContainer.appendChild(contentDiv);
    }

    // Re-initialize tab functionality
    initializeTabFunctionality();
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function initializeTabFunctionality() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => {
                btn.classList.remove('bg-cyber-blue/20', 'text-cyber-blue', 'border-b-2', 'border-cyber-blue', 'font-semibold');
                btn.classList.add('text-gray-400');
            });

            button.classList.remove('text-gray-400');
            button.classList.add('bg-cyber-blue/20', 'text-cyber-blue', 'border-b-2', 'border-cyber-blue', 'font-semibold');

            tabContents.forEach(content => {
                content.classList.add('hidden');
            });

            document.getElementById(targetTab).classList.remove('hidden');
        });
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// Contact form submission handler
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    const responseMsg = document.getElementById('responseMsg');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;

            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Sending...';

            try {
                // Get Google Apps Script URL from portfolio data
                const data = portfolioData?.personal || {};
                const scriptURL = data.googleScriptURL || '';

                if (!scriptURL || scriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
                    throw new Error('Google Apps Script URL not configured');
                }

                const response = await fetch(scriptURL, {
                    method: 'POST',
                    body: formData
                });

                const result = await response.text();

                if (response.ok) {
                    // Success
                    responseMsg.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                    responseMsg.classList.remove('text-red-400');
                    responseMsg.classList.add('text-green-400');
                    contactForm.reset();
                } else {
                    throw new Error(result);
                }
            } catch (error) {
                // Error
                responseMsg.textContent = 'Failed to send message. Please try again or email me directly.';
                responseMsg.classList.remove('text-green-400');
                responseMsg.classList.add('text-red-400');
                console.error('Form submission error:', error);
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }
        });
    }
}

// Policy Modal Functions
function openPolicyModal(type) {
    const modal = document.getElementById('policy-modal');
    const titleEl = document.getElementById('policy-modal-title');
    const updatedEl = document.getElementById('policy-modal-updated');
    const contentEl = document.getElementById('policy-modal-content');

    if (!portfolioData || !portfolioData.policies) {
        console.error('Policy data not loaded');
        return;
    }

    const policy = type === 'privacy'
        ? portfolioData.policies.privacyPolicy
        : portfolioData.policies.termsOfService;

    if (!policy) {
        console.error('Policy not found:', type);
        return;
    }

    // Set title and last updated
    titleEl.textContent = policy.title;
    updatedEl.textContent = `Last updated: ${policy.lastUpdated}`;

    // Build content
    contentEl.innerHTML = '';
    policy.sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.innerHTML = `
            <h3 class="text-lg font-semibold text-white mb-2">${section.heading}</h3>
            <p class="text-gray-300 leading-relaxed">${section.content}</p>
        `;
        contentEl.appendChild(sectionDiv);
    });

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closePolicyModal() {
    const modal = document.getElementById('policy-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Initialize error page (404/405) path display
function initializeErrorPage() {
    const pathElement = document.getElementById('requested-path');
    if (pathElement) {
        const path = window.location.pathname;
        if (path) {
            pathElement.textContent = path;
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize error page if on 404/405 page
    initializeErrorPage();

    // Load portfolio data (only runs on main page where elements exist)
    loadPortfolioData();

    // Initialize mobile menu
    initializeMobileMenu();

    // Initialize tab functionality for backwards compatibility
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => {
                btn.classList.remove('bg-cyber-blue/20', 'text-cyber-blue', 'border-b-2', 'border-cyber-blue');
                btn.classList.add('text-gray-400');
            });

            button.classList.remove('text-gray-400');
            button.classList.add('bg-cyber-blue/20', 'text-cyber-blue', 'border-b-2', 'border-cyber-blue');

            tabContents.forEach(content => {
                content.classList.add('hidden');
            });

            document.getElementById(targetTab)?.classList.remove('hidden');
        });
    });

    // Close policy modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePolicyModal();
        }
    });
});

