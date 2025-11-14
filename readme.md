# 🏋️‍♂️ FitBuddy - Tu Compañero de Entrenamiento

## 📋 Descripción del Proyecto

**FitBuddy** es una aplicación web **responsive** desarrollada con **HTML5, CSS3 y JavaScript** que conecta deportistas, entrenadores y administradores en una plataforma fitness social.  
Esta **versión MVP móvil (v3.0.0)** presenta un diseño mobile-first optimizado para dispositivos smartphones, manteniendo la esencia de conectar personas a través del deporte.

> **🚀 Versión MVP Móvil 3.0.0**  
> *Evolución del proyecto original ASP.NET*  
> *Diseño completamente responsive*  
> *Optimizado para experiencia móvil*  

**Diferencial clave:** Enfoque mobile-first que prioriza la experiencia de usuario en dispositivos móviles, manteniendo la conexión social como núcleo de la aplicación.

---

## 🚀 Características Principales - MVP Móvil

### 👥 Para Usuarios (Trainees)
- **Registro e inicio de sesión móvil** optimizado
- **Panel personalizado** con estadísticas de entrenamiento
- **Búsqueda de entrenadores** y compañeros
- **Gestión de rutinas activas** desde el móvil
- **Seguimiento de progreso** con métricas visuales

### 👨‍🏫 Para Entrenadores
- **Dashboard móvil** para gestión de clientes
- **Visualización de agenda** diaria
- **Gestión de rutinas creadas**
- **Métricas de rendimiento** profesional

### ⚙️ Para Administradores
- **Panel de control móvil** completo
- **Gestión de usuarios** y entrenadores
- **Moderación de contenido** desde cualquier lugar
- **Métricas de plataforma** en tiempo real

---

## 📱 Funcionalidades por Módulo - MVP

### 🔐 Autenticación Móvil
- Registro responsive con selección de rol
- Login optimizado para pantallas táctiles
- Navegación intuitiva entre paneles
- Persistencia de sesión con localStorage

### 👤 Gestión de Perfiles Móvil
- Interfaz táctil para edición de perfiles
- Visualización adaptada de información de usuario
- Navegación por pestañas optimizada

### 🏃 Módulo de Rutinas Móvil
- Visualización de rutinas activas
- Seguimiento de progreso con indicadores visuales
- Navegación fluida entre sesiones

### 💬 Sistema de Comunicación
- Interfaz de chat optimizada para móvil
- Notificaciones visuales
- Listas de contactos adaptadas

---

## 🎯 Casos de Uso Principales - MVP Móvil

### Flujo de Registro Móvil

Pantalla Inicio → Registro → Selección Rol → Confirmación → Login → Panel Correspondiente


### Experiencia Trainee Móvil
- **Descubrimiento:** Explorar entrenadores disponibles
- **Entrenamiento:** Ver rutinas activas y progreso
- **Social:** Conectar con compañeros de entrenamiento
- **Planificación:** Agenda de sesiones próximas

### Experiencia Entrenador Móvil
- **Gestión:** Panel de clientes y agenda
- **Contenido:** Visualización de rutinas creadas
- **Métricas:** Seguimiento de desempeño profesional

### Experiencia Admin Móvil
- **Supervisión:** Dashboard general de plataforma
- **Gestión:** Moderación de usuarios y contenido
- **Analítica:** Métricas de uso y crecimiento

---

## 🛠️ Tecnologías Utilizadas - MVP Móvil

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Grid, Flexbox, Variables CSS
- **JavaScript ES6+** - Funcionalidades interactivas
- **Boxicons** - Iconografía moderna

### Diseño y UX
- **Mobile-First** - Enfoque responsivo
- **CSS Grid & Flexbox** - Layouts adaptativos
- **Variables CSS** - Sistema de diseño consistente
- **Animaciones CSS** - Experiencia fluida

### Almacenamiento
- **localStorage** - Persistencia de datos del cliente
- **Datos de ejemplo** - Demo funcional

### Herramientas de Desarrollo
- **Visual Studio Code** - Editor principal
- **Live Server** - Desarrollo local
- **Git** - Control de versiones

---

## 🏗️ Arquitectura del Proyecto - MVP Móvil

```
fitbudy-mobile/
├── 📄 index.html # Landing page responsive
├── 📁 css/ # Estilos optimizados para móvil
│ ├── 🎨 style.css # Estilos principales mobile-first
│ ├── 🎨 auth.css # Estilos de autenticación móvil
│ └── 🎨 panels.css # Estilos de paneles responsive
├── 📁 js/ # Lógica de aplicación
│ ├── ⚡ main.js # Funcionalidades principales
│ ├── ⚡ auth.js # Autenticación y validación
│ └── ⚡ users.js # Gestión de usuarios y navegación
├── 📁 auth/ # Módulo de autenticación
│ ├── 🔐 login.html # Login móvil optimizado
│ └── 📝 register.html # Registro responsive
└── 📁 panels/ # Paneles de usuario
├── 👤 admin.html # Panel administrador móvil
├── ⚡ admin.js # Funcionalidades admin
├── 👤 trainee.html # Panel trainee móvil
├── ⚡ trainee.js # Funcionalidades trainee
├── 👨‍🏫 trainer.html # Panel trainer móvil
└── ⚡ trainer.js # Funcionalidades trainer

```

---

## 🎨 Diseño y UX - Mobile First

### Principios de Diseño
- **Touch-friendly** - Botones mínimos de 44px
- **Navegación intuitiva** - Menú hamburguesa optimizado
- **Contenido prioritario** - Información esencial primero
- **Rendimiento** - Carga optimizada para móviles

### Sistema de Diseño
- **Colores:** Negro, verde neón (#45ffca), gradientes modernos
- **Tipografía:** Sistema-font stack para mejor rendimiento
- **Espaciado:** Escala consistente basada en rem
- **Breakpoints:** 768px (tablet), 1024px (desktop)

---

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari)
- Editor de código (VS Code recomendado)
- Servidor local (opcional, para testing avanzado)

### 🎯 Ejecución Rápida

1. **Descarga el proyecto:**
   ```bash
   git clone https://github.com/Maxir89/Fitbuddy_mobile

2. **Abre el proyecto en Visual Studio:**
cd fitbudy-mobile
code .

3. **🚀 Ejecuta localmente:**

**Método 1:**  
Abre `index.html` directamente en el navegador.

**Método 2:**  
Usa **Live Server** en Visual Studio Code.

**Método 3:**  
Servidor Python:

```bash
python -m http.server 8000
```

## 📱 Testing en Dispositivos Reales

**En el mismo WiFi:**

```bash
# Encuentra tu IP local
ipconfig    # Windows
ifconfig    # Mac

# Accede desde el teléfono
http://[TU-IP]:8000
```

**Herramientas de desarrollador:**
- F12 → Modo dispositivo  
- Seleccionar modelo móvil  
- Probar diferentes orientaciones  

---

## 🔧 Configuración y Personalización

### Variables CSS Principales

```css
:root {
  --bg-color: #000;
  --second-bg-color: #111;
  --text-color: #fff;
  --main-color: #45ffca;
  --gradient: linear-gradient(135deg, #45ffca 0%, #6effe0 100%);
}
```

### Datos de Demostración

El MVP incluye datos de ejemplo preconfigurados:

- Usuarios demo: `trainer`, `trainee`, `admin`
- Contraseña: `123456`
- Entrenadores y compañeros pre-cargados

---

## 🎯 Flujo de Prueba Recomendado

### Prueba Completa del MVP
- Landing Page (`index.html`) – Diseño responsive  
- Registro – Formulario móvil optimizado  
- Login – Autenticación con roles  
- Panel Trainee – Experiencia deportista  
- Panel Trainer – Experiencia entrenador  
- Panel Admin – Gestión de plataforma  
- Navegación – Menús móviles y transiciones  

### Usuarios de Prueba

```text
Usuario: admin   / Contraseña: 123456 / Rol: Admin
Usuario: trainer / Contraseña: 123456 / Rol: Trainer
Usuario: trainee / Contraseña: 123456 / Rol: Trainee
```
---

## 👥 Equipo de Desarrollo - MVP Móvil

| Nombre | Rol Principal | Tecnologías & Responsabilidades |
|--------|----------------|-------------|
| **Fernandez, Mauricio** | Arquitectura Mobile & Lógica JS | JavaScript ES6+, localStorage, Navegación Móvil, Integración Paneles |
| **Rojas, Maximiliano** | UI/UX Mobile & Diseño Responsive | CSS3 Grid/Flexbox, Mobile-First Design, Animaciones, Design System |
| **Ledesma, Emmanuel** | Frontend & Integración Móvil | HTML5 Semántico, Componentes Responsive, Testing Cross-Device, Performance |

---

---

## 🔄 Evolución del Proyecto

### v3.0.0 – MVP Móvil Responsive (Actual)
- ✅ Diseño completamente mobile-first  
- ✅ Paneles de usuario optimizados para móvil  
- ✅ Navegación táctil intuitiva  
- ✅ Autenticación responsive  
- ✅ Datos de demostración integrados  

### v2.0.0 – WebApp ASP.NET -> https://github.com/mauriciof94/FitBuddy-App/
- ✅ Aplicación completa con base de datos  
- ✅ Sistema de autenticación por roles  
- ✅ Módulos de rutinas y rutas  
- ✅ Chat integrado  

### v1.0.0 – Prototipo Frontend -> https://github.com/EmmaLedesma/SITIO_APP_FITBUDDY-MASTER
- ✅ Diseño inicial y maquetación  
- ✅ Funcionalidades básicas frontend  
- ✅ Persistencia con localStorage  

---

## 🚀 Próximas Características

### En Desarrollo para v3.1.0
- 🔄 Integración con APIs de backend real  
- 📊 Sistema de notificaciones push  
- 💬 Chat en tiempo real  
- 🗺️ Integración con mapas para rutas  

### Planificado para v4.0.0
- 📱 Aplicación móvil nativa (React Native)  
- ⌚ Integración con wearables  
- 🎯 Sistema de logros y gamificación  
- 🌐 Comunidad global de deportistas  

---

## 🐛 Reportar Issues y Mejoras

Si encuentras algún problema o tienes sugerencias:

1. Revisa los issues existentes  
2. Crea un nuevo issue con:
   - Descripción clara del problema  
   - Pasos para reproducir  
   - Capturas de pantalla (si aplica)  
   - Dispositivo y navegador utilizado  

---

## 🤝 Contribución

### Guía para Contribuir

1. Fork del proyecto  
2. Crear rama:

```bash
git checkout -b feature/nueva-funcionalidad
```

3. Commit de cambios:

```bash
git commit -m "feat: agregar funcionalidad móvil"
```

4. Subir cambios:

```bash
git push origin feature/nueva-funcionalidad
```

5. Abrir Pull Request  

### Convenciones

- Commits: *Conventional commits*  
- Código: JavaScript ES6+, CSS moderno  
- Comentarios: Inglés o español  
- Responsive: Siempre **mobile-first**  

---

## 📞 Soporte y Contacto

- **Repositorio:** https://github.com/Maxir89/Fitbuddy_mobile
- **Documentación:** Incluida en el repositorio  
- **Issues:** Usar el sistema de Issues de GitHub  

---

<div align="center">

### 🎯 MVP Móvil 3.0.0 - FitBuddy  
**Conectando deportistas through mobile-first design**  
Optimizado para la era móvil  

💪 ¡Entrenamientos mejores, juntos! 🚀  

</div>

---

## 📊 Métricas de Calidad – MVP

### Rendimiento Móvil
- ✅ Tiempo de carga \< 3s  
- ✅ Puntuación Lighthouse \> 90  
- ✅ Optimizado para redes 3G/4G  

### UX Móvil
- ✅ Navegación con una mano  
- ✅ Botones touch-friendly  
- ✅ Lectura sin zoom  

### Compatibilidad
- ✅ iOS Safari  
- ✅ Android Chrome  
- ✅ Navegadores modernos  

---

## ¿Listo para probar?

Abre `index.html` en tu navegador y experimentá **FitBuddy** en tu móvil 📱✨

---

## 📄 Licencia

**MIT License**

---

## 🔗 Versión Anterior ASP.NET

**https://github.com/mauriciof94/FitBuddy-App/**

---

<div align="center">

*"La tecnología que conecta pasiones deportivas"*  
**#FitBuddy #MobileFirst #FitnessTech**

</div>


---

<div align="center">

🎓 **IFTS 18 - Prácticas Profesionales III**  
*Técnico Superior de Analista de Sistemas*  
**Trabajo Práctico Integrador Final - 2025**  

💪 ¡Conectando pasión, tecnología y entrenamiento! 🚀  

</div>

---

