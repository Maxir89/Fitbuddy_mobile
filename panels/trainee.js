// ======================= FUNCIONALIDADES TRAINEE MOBILE =======================

/**
 * Carga los entrenadores disponibles
 */
function cargarEntrenadores() {
    const trainersList = document.getElementById('trainersList');
    const sampleTrainers = JSON.parse(localStorage.getItem('sampleTrainers')) || [];

    trainersList.innerHTML = '';

    sampleTrainers.forEach(trainer => {
        const trainerItem = document.createElement('div');
        trainerItem.className = 'user-item';
        trainerItem.innerHTML = `
            <div class="user-avatar-xs">${getUserAvatar(trainer.name)}</div>
            <div class="user-item-info">
                <h4>${trainer.name}</h4>
                <p>${trainer.specialty} • ${trainer.experience}</p>
            </div>
            <span class="user-status status-${trainer.status}">${trainer.status === 'online' ? 'Disponible' : trainer.status === 'busy' ? 'Ocupado' : 'Offline'}</span>
        `;
        trainersList.appendChild(trainerItem);
    });
}

/**
 * Carga los compañeros de entrenamiento
 */
function cargarCompaneros() {
    const buddiesList = document.getElementById('buddiesList');
    const sampleUsers = JSON.parse(localStorage.getItem('sampleUsers')) || [];

    if (buddiesList) {
        buddiesList.innerHTML = '';

        sampleUsers.forEach(user => {
            const buddyItem = document.createElement('div');
            buddyItem.className = 'user-item';
            buddyItem.innerHTML = `
                <div class="user-avatar-xs">${getUserAvatar(user.name)}</div>
                <div class="user-item-info">
                    <h4>${user.name}</h4>
                    <p>${user.level} • ${user.goals}</p>
                </div>
                <span class="user-status status-${user.status}">${user.status === 'online' ? 'Conectado' : 'Desconectado'}</span>
            `;
            buddiesList.appendChild(buddyItem);
        });
    }
}

/**
 * Simula búsqueda de entrenadores
 */
function buscarEntrenadores() {
    showNotification("Buscando entrenadores disponibles...", "info");
    setTimeout(() => {
        cargarEntrenadores();
        showNotification("¡Entrenadores actualizados!", "success");
    }, 1000);
}

/**
 * Simula búsqueda de compañeros
 */
function buscarCompaneros() {
    showNotification("Buscando compañeros de entrenamiento...", "info");
    setTimeout(() => {
        cargarCompaneros();
        showNotification("¡Compañeros actualizados!", "success");
    }, 1000);
}

// Inicializar página del trainee
document.addEventListener('DOMContentLoaded', function() {
    // La inicialización básica ya se hace en users.js
    // Aquí agregamos funcionalidades específicas del trainee
    setTimeout(() => {
        cargarEntrenadores();
        cargarCompaneros();
    }, 100);
});