// ======================= FUNCIONALIDADES TRAINER MOBILE =======================

/**
 * Carga los clientes del entrenador
 */
function cargarClientes() {
    const clientsList = document.getElementById('clientsList');
    const sampleUsers = JSON.parse(localStorage.getItem('sampleUsers')) || [];

    clientsList.innerHTML = '';

    sampleUsers.forEach(user => {
        const clientItem = document.createElement('div');
        clientItem.className = 'user-item';
        clientItem.innerHTML = `
            <div class="user-avatar-xs">${getUserAvatar(user.name)}</div>
            <div class="user-item-info">
                <h4>${user.name}</h4>
                <p>${user.level} • ${user.goals}</p>
            </div>
            <span class="user-status status-${user.status}">${user.status === 'online' ? 'Activo' : 'Inactivo'}</span>
        `;
        clientsList.appendChild(clientItem);
    });
}

/**
 * Simula gestión de clientes
 */
function gestionarClientes() {
    showNotification("Abriendo gestión de clientes...", "info");
    // Aquí iría la lógica para gestionar clientes
    setTimeout(() => {
        showNotification("Panel de gestión de clientes listo", "success");
    }, 1500);
}

// Inicializar página del entrenador
document.addEventListener('DOMContentLoaded', function() {
    // La inicialización básica ya se hace en users.js
    // Aquí agregamos funcionalidades específicas del trainer
    setTimeout(() => {
        cargarClientes();
    }, 100);
});