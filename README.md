To-Do List PWA
Una aplicación de lista de tareas moderna y responsiva, diseñada como una Progressive Web App (PWA) que funciona tanto en navegadores como en dispositivos móviles con capacidades de instalación.

🌟 Características principales
✅ PWA completa: Instalable en dispositivos móviles y desktop

🌙 Tema oscuro/claro: Con persistencia en localStorage

📱 Diseño responsivo: Optimizado para móviles y escritorio

💾 Almacenamiento local: Las tareas persisten entre sesiones

🔄 Offline-first: Funciona sin conexión a internet

📳 Feedback háptico: Vibración en dispositivos móviles (opcional)

🎨 UI moderna: Gradientes, bordes redondeados y animaciones suaves

🍎 Compatibilidad iOS: Soporte para "Add to Home Screen"

🚀 Instalación y uso
Opción 1: Navegador web
Abre index.html en cualquier navegador moderno

¡Listo para usar!

Opción 2: Como PWA (en móvil)
Abre la app en Chrome/Edge/Safari móvil

Toca el botón "Compartir" o "Menú"

Selecciona "Añadir a la pantalla de inicio" o "Instalar app"

La app aparecerá como una aplicación nativa

Opción 3: Desarrollo local
bash
# Clona el proyecto o descarga los archivos
# Usa un servidor local (recomendado)
python -m http.server 8080
# O usa la extensión Live Server de VSCode
📁 Estructura del proyecto
text
to-do-list-pwa/
├── index.html          # Página principal
├── style.css           # Estilos y temas
├── script.js           # Lógica de la aplicación
├── service-worker.js   # Service Worker para offline
├── manifest.json       # Configuración PWA
├── launch.json         # Configuración de depuración VSCode
├── settings.json       # Configuración Live Server
└── icons/              # Íconos para PWA (varios tamaños)
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-180.png
    ├── icon-192.png
    └── icon-512.png
🔧 Funcionalidades
Gestión de tareas
Añadir tareas: Escribe y presiona Enter o el botón "+"

Marcar completadas: Toca la tarea para alternar estado

Eliminar tareas: Toca la "✕" para eliminar

Persistencia: Las tareas se guardan automáticamente

Personalización
Tema claro/oscuro: Toca el botón ☀️/🌙 para cambiar

Preferencia guardada: El tema se recuerda entre sesiones

Características PWA
Instalable: Se puede instalar como app nativa

Offline: Funciona sin conexión a internet

Pantalla completa: Modo standalone sin barra de navegación

Íconos personalizados: Adaptados a diferentes dispositivos

🎨 Diseño
Gradientes dinámicos que cambian con el tema

Safe areas para dispositivos con muesca

Animaciones suaves en interacciones

Feedback táctil con transformaciones scale

Tipografía optimizada para legibilidad

📱 Compatibilidad
✅ Chrome 50+ (Android, Desktop)

✅ Safari 11.3+ (iOS, macOS)

✅ Edge 79+

✅ Firefox 58+

✅ Samsung Internet

🔍 Tecnologías utilizadas
HTML5 - Estructura semántica

CSS3 - Variables CSS, Flexbox, Gradientes

JavaScript (ES6) - Lógica de aplicación

Service Workers - Funcionalidad offline

Web App Manifest - Metadatos PWA

LocalStorage - Persistencia de datos

Vibration API - Feedback háptico (opcional)

🛠️ Configuración de desarrollo
VSCode (recomendado)
Instala la extensión "Live Server"

Abre index.html

Haz clic en "Go Live" en la barra inferior

La app se abrirá en http://localhost:8080

Chrome DevTools
Application tab: Debug Service Worker y Manifest

Lighthouse: Auditar PWA y performance

Device toolbar: Test responsividad

🚀 Despliegue
GitHub Pages
Sube los archivos a un repositorio

Ve a Settings > Pages

Selecciona la rama main y guarda

Netlify/Vercel
Arrastra la carpeta o conecta el repositorio

La configuración es automática

📝 Notas para desarrolladores
Personalización
Modifica colores en :root de style.css

Ajusta íconos en manifest.json

Cambia vibraciones en script.js

Mejoras potenciales
Sincronización con backend

Categorías/etiquetas

Recordatorios con notificaciones

Exportar/importar tareas

Modo enfoque (Pomodoro)

Testing PWA
javascript
// Verificar Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(() => {
    console.log('PWA lista para usar offline');
  });
}

// Verificar instalación
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('PWA se puede instalar');
});
📄 Licencia
Proyecto educativo - Uso libre para fines de aprendizaje.

🤝 Contribuir
Haz fork del proyecto

Crea una rama (git checkout -b feature/mejora)

Commit cambios (git commit -m 'Añadir mejora')

Push a la rama (git push origin feature/mejora)

Abre un Pull Request
