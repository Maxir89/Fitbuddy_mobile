// ======================= FUNCIONALIDADES ADMIN MOBILE =======================

/**
 * Carga los usuarios para administración
 */
function cargarUsuariosAdmin() {
    const usersList = document.getElementById('usersList');
    const sampleUsers = JSON.parse(localStorage.getItem('sampleUsers')) || [];
    const sampleTrainers = JSON.parse(localStorage.getItem('sampleTrainers')) || [];

    usersList.innerHTML = '';

    // Combinar usuarios y entrenadores para la vista de admin
    const allUsers = [...sampleUsers, ...sampleTrainers];

    allUsers.forEach(user => {
        const userItem = document.createElement('div');
        userItem.className = 'user-item';
        userItem.innerHTML = `
            <div class="user-avatar-xs">${getUserAvatar(user.name)}</div>
            <div class="user-item-info">
                <h4>${user.name}</h4>
                <p>${user.specialty || user.level} • ${user.experience || user.goals}</p>
            </div>
            <span class="user-status status-${user.status}">${user.status === 'online' ? 'Activo' : user.status === 'busy' ? 'Ocupado' : 'Inactivo'}</span>
        `;
        usersList.appendChild(userItem);
    });
}

/**
 * Simula gestión de usuarios
 */
function gestionarUsuarios() {
    showNotification("Abriendo panel de gestión de usuarios...", "info");
    // Aquí iría la lógica para gestionar usuarios
    setTimeout(() => {
        showNotification("Panel de gestión de usuarios listo", "success");
    }, 1500);
}

// Inicializar página del administrador
document.addEventListener('DOMContentLoaded', function() {
    // La inicialización básica ya se hace en users.js
    // Aquí agregamos funcionalidades específicas del admin
    setTimeout(() => {
        cargarUsuariosAdmin();
    }, 100);
});