// ======================= UTILIDADES DE SESIÓN =======================

/**
 * Guarda los datos del usuario actual en localStorage para simular el inicio de sesión.
 * @param {object} userData - Datos del usuario (username, role, etc.).
 */
function setCurrentUser(userData) {
    localStorage.setItem("currentUser", JSON.stringify(userData));
}

/**
 * Obtiene el usuario actual de localStorage.
 * @returns {object | null} Los datos del usuario o null si no hay sesión.
 */
function getCurrentUser() {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
}

/**
 * Cierra la sesión eliminando el usuario actual y redirigiendo al login.
 */
function logout() {
    localStorage.removeItem("currentUser");
    showNotification("Sesión cerrada. Serás redirigido al inicio de sesión.", "success");
    setTimeout(() => {
        window.location.href = "auth/login.html";
    }, 2000);
}

/**
 * Muestra una notificación estilizada
 */
function showNotification(message, type = "info") {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="bx ${type === 'success' ? 'bx-check-circle' : type === 'error' ? 'bx-error-circle' : 'bx-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Estilos para la notificación
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
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remover después de 4 segundos
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
 * Valida un email
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Valida la fortaleza de la contraseña
 */
function validatePassword(password) {
    return password.length >= 6;
}

/**
 * Muestra estado de error en un input
 */
function showError(input, message) {
    const inputBox = input.closest('.input-box');
    inputBox.classList.add('error');
    
    let errorElement = inputBox.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        inputBox.appendChild(errorElement);
    }
    errorElement.textContent = message;
}

/**
 * Limpia el estado de error de un input
 */
function clearError(input) {
    const inputBox = input.closest('.input-box');
    inputBox.classList.remove('error');
    const errorElement = inputBox.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

/**
 * Muestra estado de éxito en un input
 */
function showSuccess(input) {
    const inputBox = input.closest('.input-box');
    inputBox.classList.add('success');
    inputBox.classList.remove('error');
    const errorElement = inputBox.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

// ======================= REGISTRO =======================
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("newUsername").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("newPassword").value.trim();
        const role = document.getElementById("newRole").value;

        // Limpiar errores previos
        clearError(document.getElementById("newUsername"));
        clearError(document.getElementById("email"));
        clearError(document.getElementById("newPassword"));
        clearError(document.getElementById("newRole"));

        let hasErrors = false;

        // Validaciones
        if (!username) {
            showError(document.getElementById("newUsername"), "El usuario es requerido");
            hasErrors = true;
        }

        if (!email) {
            showError(document.getElementById("email"), "El email es requerido");
            hasErrors = true;
        } else if (!validateEmail(email)) {
            showError(document.getElementById("email"), "Ingresa un email válido");
            hasErrors = true;
        }

        if (!password) {
            showError(document.getElementById("newPassword"), "La contraseña es requerida");
            hasErrors = true;
        } else if (!validatePassword(password)) {
            showError(document.getElementById("newPassword"), "La contraseña debe tener al menos 6 caracteres");
            hasErrors = true;
        }

        if (!role) {
            showError(document.getElementById("newRole"), "Selecciona un perfil");
            hasErrors = true;
        }

        if (hasErrors) return;

        // Validación: El usuario no debe existir ya
        if (localStorage.getItem(username)) {
            showError(document.getElementById("newUsername"), "El usuario ya existe. Elige otro nombre.");
            return;
        }

        // Mostrar estado de carga
        const submitBtn = registerForm.querySelector('.auth-btn');
        submitBtn.classList.add('btn-loading');

        // Simular proceso de registro (con delay para mejor UX)
        await new Promise(resolve => setTimeout(resolve, 1500));

        const userData = { username, email, password, role, joinDate: new Date().toISOString() };
        localStorage.setItem(username, JSON.stringify(userData));

        submitBtn.classList.remove('btn-loading');
        showNotification("¡Registro exitoso! Ahora puedes iniciar sesión.", "success");

        // Redirigir después de mostrar la notificación
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    });

    // Validación en tiempo real
    const inputs = registerForm.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            clearError(input);
        });
        
        input.addEventListener('blur', () => {
            // Validación específica para cada campo
            if (input.id === 'email' && input.value) {
                if (!validateEmail(input.value)) {
                    showError(input, "Ingresa un email válido");
                } else {
                    showSuccess(input);
                }
            }
            
            if (input.id === 'newPassword' && input.value) {
                if (!validatePassword(input.value)) {
                    showError(input, "Mínimo 6 caracteres");
                } else {
                    showSuccess(input);
                }
            }
        });
    });
}

// ======================= LOGIN =======================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const role = document.getElementById("role").value;

        // Limpiar errores previos
        clearError(document.getElementById("username"));
        clearError(document.getElementById("password"));
        clearError(document.getElementById("role"));

        let hasErrors = false;

        // Validaciones básicas
        if (!username) {
            showError(document.getElementById("username"), "El usuario es requerido");
            hasErrors = true;
        }

        if (!password) {
            showError(document.getElementById("password"), "La contraseña es requerida");
            hasErrors = true;
        }

        if (!role) {
            showError(document.getElementById("role"), "Selecciona un perfil");
            hasErrors = true;
        }

        if (hasErrors) return;

        const storedUser = localStorage.getItem(username);

        if (!storedUser) {
            showError(document.getElementById("username"), "Usuario no registrado");
            return;
        }

        const userData = JSON.parse(storedUser);

        if (userData.password !== password || userData.role !== role) {
            showError(document.getElementById("password"), "Credenciales incorrectas o rol inválido");
            return;
        }

        // Mostrar estado de carga
        const submitBtn = loginForm.querySelector('.auth-btn');
        submitBtn.classList.add('btn-loading');

        // Simular proceso de login
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Guardar sesión simulada
        setCurrentUser(userData);

        submitBtn.classList.remove('btn-loading');
        showNotification(`¡Bienvenido ${username}!`, "success");

        // Redirección según perfil - RUTAS ACTUALIZADAS PARA MÓVIL
        setTimeout(() => {
            if (role === "trainee") {
                window.location.href = "../panels/trainee.html";
            } else if (role === "trainer") {
                window.location.href = "../panels/trainer.html";
            } else if (role === "admin") {
                window.location.href = "../panels/admin.html";
            }
        }, 1500);
    });

    // Validación en tiempo real
    const inputs = loginForm.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            clearError(input);
        });
    });
}

// Verificar si ya hay una sesión activa
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = getCurrentUser();
    if (currentUser && window.location.pathname.includes('login.html')) {
        showNotification(`Ya tienes una sesión activa como ${currentUser.username}`, "info");
        setTimeout(() => {
            // RUTAS ACTUALIZADAS PARA MÓVIL
            if (currentUser.role === "trainee") {
                window.location.href = "../panels/trainee.html";
            } else if (currentUser.role === "trainer") {
                window.location.href = "../panels/trainer.html";
            } else if (currentUser.role === "admin") {
                window.location.href = "../panels/admin.html";
            }
        }, 2000);
    }
});