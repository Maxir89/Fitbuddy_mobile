// ======================= GESTIÓN DE USUARIOS - MOBILE =======================

/**
 * Obtiene el usuario actual de localStorage
 */
function getCurrentUser() {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
}

/**
 * Cierra la sesión y redirige al login
 */
function logout() {
    localStorage.removeItem("currentUser");
    showNotification("Sesión cerrada correctamente", "success");
    setTimeout(() => {
        window.location.href = "../auth/login.html";
    }, 1500);
}

/**
 * Muestra notificación estilizada
 */
function showNotification(message, type = "info") {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="bx ${type === 'success' ? 'bx-check-circle' : type === 'error' ? 'bx-error-circle' : 'bx-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(69, 255, 202, 0.9)' : type === 'error' ? 'rgba(255, 69, 69, 0.9)' : 'rgba(69, 150, 255, 0.9)'};
        color: #000;
        padding: 1.5rem 2rem;
        border-radius: 1rem;
        font-size: 1.4rem;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

/**
 * Genera datos de ejemplo para la demo
 */
function generateSampleData() {
    // Datos de ejemplo para entrenadores
    const sampleTrainers = [
        { username: "pro_trainer", name: "Carlos Rodríguez", specialty: "CrossFit", experience: "5 años", status: "online" },
        { username: "fit_maria", name: "María González", specialty: "Yoga", experience: "3 años", status: "online" },
        { username: "coach_max", name: "Maximiliano Silva", specialty: "Running", experience: "4 años", status: "busy" },
        { username: "ana_fit", name: "Ana Martínez", specialty: "Pilates", experience: "2 años", status: "offline" }
    ];

    // Datos de ejemplo para usuarios
    const sampleUsers = [
        { username: "runner23", name: "Laura Méndez", level: "Intermedio", goals: "Maratón", status: "online" },
        { username: "fit_guru", name: "Diego Ramírez", level: "Avanzado", goals: "Fuerza", status: "online" },
        { username: "sporty", name: "Sofía Chen", level: "Principiante", goals: "Pérdida de peso", status: "offline" }
    ];

    // Guardar en localStorage si no existen
    if (!localStorage.getItem('sampleTrainers')) {
        localStorage.setItem('sampleTrainers', JSON.stringify(sampleTrainers));
    }
    if (!localStorage.getItem('sampleUsers')) {
        localStorage.setItem('sampleUsers', JSON.stringify(sampleUsers));
    }
}

/**
 * Obtiene el avatar del usuario basado en su nombre
 */
function getUserAvatar(name) {
    if (!name) return 'US';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
}

/**
 * Inicializa la navegación del panel
 */
function initializePanelNavigation() {
    const menuToggle = document.getElementById('panelMenuToggle');
    const closeMenu = document.getElementById('closePanelMenu');
    const panelNav = document.getElementById('panelNav');
    const overlay = document.getElementById('panelOverlay');
    const logoutBtn = document.getElementById('logoutBtn');

    if (menuToggle && panelNav) {
        function toggleMenu() {
            panelNav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = panelNav.classList.contains('active') ? 'hidden' : '';
        }

        menuToggle.addEventListener('click', toggleMenu);
        if (closeMenu) closeMenu.addEventListener('click', toggleMenu);
        if (overlay) overlay.addEventListener('click', toggleMenu);

        // Navegación entre secciones
        const navLinks = document.querySelectorAll('.nav-link[data-section]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.getAttribute('data-section');
                
                // Actualizar enlaces activos
                navLinks.forEach(nl => nl.classList.remove('active'));
                link.classList.add('active');
                
                // Mostrar sección correspondiente
                showSection(targetSection);
                
                // Cerrar menú en móvil
                if (window.innerWidth < 1024) {
                    toggleMenu();
                }
            });
        });
    }

    // Configurar logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }
}

/**
 * Muestra una sección específica del panel
 */
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.panel-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar sección objetivo
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

/**
 * Inicializa la página de usuario
 */
function initializeUserPage() {
    const currentUser = getCurrentUser();
    
    if (!currentUser) {
        showNotification("Debes iniciar sesión para acceder a esta página", "error");
        setTimeout(() => {
            window.location.href = "../auth/login.html";
        }, 2000);
        return;
    }

    // Actualizar información del usuario en la página
    const userNameElement = document.getElementById('currentUserName');
    const userAvatarElements = document.querySelectorAll('.user-avatar-small, .user-avatar-xs');

    if (userNameElement) {
        userNameElement.textContent = currentUser.username;
    }

    // Actualizar avatares
    userAvatarElements.forEach(avatar => {
        avatar.textContent = getUserAvatar(currentUser.username);
    });

    // Generar datos de ejemplo para la demo
    generateSampleData();

    // Inicializar navegación
    initializePanelNavigation();

    // Mostrar sección por defecto
    showSection('inicio');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeUserPage);