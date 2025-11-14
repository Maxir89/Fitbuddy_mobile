// ======================= FUNCIONALIDADES PRINCIPALES =======================

/**
 * Inicializa la aplicación
 */
function initializeApp() {
    initializeMobileMenu();
    initializeSmoothScroll();
    checkUserSession();
}

/**
 * Configura el menú móvil
 */
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');

    if (menuToggle && mobileNav) {
        function toggleMenu() {
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        }

        menuToggle.addEventListener('click', toggleMenu);
        if (closeMenu) closeMenu.addEventListener('click', toggleMenu);
        if (overlay) overlay.addEventListener('click', toggleMenu);
    }
}

/**
 * Configura scroll suave para enlaces internos
 */
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Cerrar menú móvil si está abierto
                const mobileNav = document.getElementById('mobileNav');
                const overlay = document.getElementById('overlay');
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
}

/**
 * Verifica si hay una sesión activa
 */
function checkUserSession() {
    const currentUser = getCurrentUser();
    if (currentUser && window.location.pathname.endsWith('index.html')) {
        // Usuario logueado en página principal - podríamos mostrar opción de ir a su panel
        console.log('Usuario logueado:', currentUser.username);
    }
}

/**
 * Obtiene el usuario actual (compatibilidad con auth.js)
 */
function getCurrentUser() {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
}

/**
 * Muestra notificación (compatibilidad con auth.js)
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

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeApp);