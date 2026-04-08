const translations = {
    es: {
        nav_about: "Sobre Mí",
        nav_skills: "Habilidades",
        nav_studies: "Formación",
        nav_certifications: "Certificaciones",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        greeting: "¡Hola! Soy",
        role1: "Especialista TI",
        role2: "Desarrollador de Software",
        hero_desc: "Soy Desarrollador Full Stack Junior con experiencia en proyectos académicos, personales, corporativos y freelancer, creando soluciones completas desde UX/UI y frontend hasta backend y bases de datos. Destaco por mi proactividad y mi enfoque en el aprendizaje continuo.",
        contact_btn: "Contáctame <i class='fas fa-paper-plane'></i>",
        projects_btn: "Ver Proyectos <i class='fas fa-arrow-right'></i>",
        skills_title: "Mis Habilidades",
        skill_languages: "Lenguajes",
        skill_frontend: "Frontend / Frameworks",
        skill_front_fw: "Frontend Frameworks",
        skill_backend: "Backend / Frameworks",
        skill_back_fw: "Backend Frameworks",
        skill_apis: "APIs",
        skill_auth: "JWT Auth",
        skill_webhooks: "Webhooks e Integraciones",
        skill_python_gui: "Desarrollo Python (GUI)",
        skill_desktop: "Desktop / GUI",
        skill_crossplatform: "Desarrollo Multiplataforma (Desktop)",
        skill_db: "Bases de Datos",
        skill_tools: "Herramientas",
        skill_os: "Linux, MacOS, Windows",
        skill_automation: "N8N",
        skill_bi: "Power BI",
        languages_title: "Idiomas",
        lang_es: "Español (Nativo)",
        lang_en: "Inglés (Técnico)",
        studies_title: "Formación Académica",
        edu_inst: "Instituto Tecnológico de Las Américas (ITLA) - Rep. Dom",
        edu_degree: "Estudios Superiores",
        edu_desc: "Desarrollo de software, Bases de datos, Certificaciones en Python, JavaScript, Taller de Ciberseguridad, Business Intelligence with Power BI, Ingeniería de Prompts e Inteligencia Artificial.",
        cert_title: "Mis Certificaciones",
        cert_subtitle: "Valido mis conocimientos a través de certificaciones oficiales.",
        cert_view: "Ver Certificado <i class='fas fa-external-link-alt'></i>",
        cert_note: "* Puedes subir las imágenes de tus certificados a la carpeta de tu proyecto (y cambiar los nombres a cert1.jpg) o enlazar a tus PDFs.",
        projects_title: "Proyectos Destacados",
        project1_desc: "Plataforma web completa para la gestión de recursos empresariales, incluyendo ventas, inventario y reportes en tiempo real.",
        project2_desc: "Arquitectura backend robusta y segura para una tienda en línea, integración con pasarelas de pago y gestión de usuarios.",
        contact_title: "Contacto",
        contact_subtitle: "¿Tienes un proyecto en mente o buscas un desarrollador? ¡Hablemos!",
        submit_btn: "Enviar Mensaje <i class='fas fa-paper-plane'></i>",
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        nav_about: "About Me",
        nav_skills: "Skills",
        nav_studies: "Education",
        nav_certifications: "Certifications",
        nav_projects: "Projects",
        nav_contact: "Contact",
        greeting: "Hello! I'm",
        role1: "IT Specialist",
        role2: "Software Developer",
        hero_desc: "I am a Junior Full Stack Developer with experience in academic, personal, corporate, and freelance projects, creating complete solutions from UX/UI and frontend to backend and databases. I stand out for my proactivity and my focus on continuous learning.",
        contact_btn: "Contact Me <i class='fas fa-paper-plane'></i>",
        projects_btn: "View Projects <i class='fas fa-arrow-right'></i>",
        skills_title: "My Skills",
        skill_languages: "Languages",
        skill_frontend: "Frontend / Frameworks",
        skill_front_fw: "Frontend Frameworks",
        skill_backend: "Backend / Frameworks",
        skill_back_fw: "Backend Frameworks",
        skill_apis: "APIs",
        skill_auth: "JWT Auth",
        skill_webhooks: "Webhooks & Integrations",
        skill_python_gui: "Python Development (GUI)",
        skill_desktop: "Desktop / GUI",
        skill_crossplatform: "Cross-platform Desktop Apps",
        skill_db: "Databases",
        skill_tools: "Tools",
        skill_os: "Linux, MacOS, Windows",
        skill_automation: "N8N",
        skill_bi: "Power BI",
        languages_title: "Languages",
        lang_es: "Spanish (Native)",
        lang_en: "English (Technical)",
        studies_title: "Academic Formation",
        edu_inst: "Technological Institute of the Americas (ITLA) - Dom. Rep.",
        edu_degree: "Higher Education",
        edu_desc: "Software Development, Databases, Certifications in Python, JavaScript, Cybersecurity Workshop, Business Intelligence with Power BI, Prompt Engineering, and Artificial Intelligence.",
        cert_title: "My Certifications",
        cert_subtitle: "I validate my knowledge through official certifications.",
        cert_view: "View Certificate <i class='fas fa-external-link-alt'></i>",
        cert_note: "* You can upload your certificate images to your project folder (name them cert1.jpg, etc.) or link them to your PDFs.",
        projects_title: "Featured Projects",
        project1_desc: "Complete web platform for enterprise resource management, including sales, inventory, and real-time reports.",
        project2_desc: "Robust and secure backend architecture for an online store, integration with payment gateways, and user management.",
        contact_title: "Contact",
        contact_subtitle: "Do you have a project in mind or looking for a developer? Let's talk!",
        submit_btn: "Send Message <i class='fas fa-paper-plane'></i>",
        footer_rights: "All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Switcher
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    
    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        if (lang === 'es') {
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
            document.documentElement.lang = 'es';
        } else {
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
            document.documentElement.lang = 'en';
        }
    }

    btnEs.addEventListener('click', () => setLanguage('es'));
    btnEn.addEventListener('click', () => setLanguage('en'));

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. Navbar Scrolled Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 15, 25, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(11, 15, 25, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 4. Initialize Particles.js (if library is loaded)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 50,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": ["#3b82f6", "#8b5cf6"]
            },
            "shape": {
              "type": "circle",
            },
            "opacity": {
              "value": 0.5,
              "random": true,
            },
            "size": {
              "value": 3,
              "random": true,
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#3b82f6",
              "opacity": 0.2,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 0.5
                }
              },
              "push": {
                "particles_nb": 4
              }
            }
          },
          "retina_detect": true
        });
    }

    // 5. Initialize Swiper for Certifications
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.certifications-slider', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 15,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            },
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    }

    // Modal Certificaciones Logic
    window.currentCertIndex = 1;
    window.totalCerts = 11;

    window.openCertModal = function(index) {
        document.getElementById('certModal').style.display = 'flex';
        document.body.style.overflow = 'hidden';
        showCertSlide(index);
    }

    window.closeCertModal = function() {
        document.getElementById('certModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    window.changeCertSlide = function(step) {
        showCertSlide(window.currentCertIndex + step);
    }

    window.showCertSlide = function(index) {
        window.currentCertIndex = index;
        if (window.currentCertIndex > window.totalCerts) window.currentCertIndex = 1;
        if (window.currentCertIndex < 1) window.currentCertIndex = window.totalCerts;
        document.getElementById('modalImg').src = `./assets/cert-${window.currentCertIndex}.jpg`;
    }

    // Cerrar si hace click fuera de la imagen
    window.onclick = function(event) {
        const modal = document.getElementById('certModal');
        if (event.target === modal) {
            closeCertModal();
        }
    }
});
