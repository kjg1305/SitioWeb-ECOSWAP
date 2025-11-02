# SitioWeb-ECOSWAP
SitioWeb-ECOSWAP
EcoSwap 🌱

EcoSwap es una plataforma web que promueve el intercambio de objetos entre personas, fomentando la sostenibilidad, el consumo responsable y la economía circular dentro de comunidades locales. Su objetivo es reducir el desperdicio y dar una nueva vida a objetos a través de una experiencia intuitiva, segura y colaborativa.

Accede al demo del sitio
(Ejecuta localmente con servidor, ver sección “Instalación y uso local”)

Tecnologías y construcción
HTML5: estructura de cada página.

CSS3 y Bootstrap 5: diseño responsivo, moderno y visual.

Bootstrap Icons: íconos para navbar, alertas y decoración.

JavaScript Vanilla: funcionalidad dinámica para renderizado, formularios, modales y componentes.

LocalStorage: simulación de gestión de usuarios y sesión.

Componentes reusables: barra de navegación (navbar) y pie de página (footer) mediante JavaScript fetch.

Imágenes libres de derechos: Unsplash, Pixabay y Freepik.

Estructura del proyecto
/COMPONENTS/: Navbar y Footer compartidos y dinámicos, insertados desde JavaScript.

/CSS/: Estilos individuales por página.

/JS/: Scripts individuales por página y scripts de gestión global (auth.js).

Páginas principales
Inicio: landing page, acceso a creación e inicio de sesión.

Registro e inicio de sesión: formularios validados para crear cuenta y acceder.

Marketplace: ver objetos publicados y coincidencias recomendadas.

Publicar objetos: añade, edita y elimina objetos propios simuladamente.

Mis intercambios: gestiona tus propios intercambios.

Contacto: formulario de contacto, dudas y soporte.

Política de uso & Acerca de: información legal y sobre el propósito del proyecto.

Funcionalidad destacada
Simulación de usuarios y sesión con localStorage: registro, inicio y cierre de sesión simulados. El nombre del usuario autenticado se muestra en la navbar.

Gestión de acceso a páginas protegidas: quienes intenten acceder sin haber iniciado sesión reciben una alerta visual amigable que los invita a iniciar sesión.

Navbar y footer dinámicos: se cargan en todas las páginas mediante JavaScript y fetch, facilitando flexibilidad y modularidad.

Alertas visuales personalizadas: uso de Bootstrap y Bootstrap Icons para mejorar los mensajes y la interfaz general.

Diseño responsivo: óptimo en cualquier dispositivo, sin necesidad de app móvil.

¿Por qué EcoSwap?
Incentiva la reutilización y el intercambio responsable.

Refuerza comunidades locales.

Diseño moderno, accesible, fácil de usar y mejorar.

Arquitectura escalable para desarrollo futuro.

Instalación y uso local
Clona este repositorio.

Abre la carpeta raíz en tu editor preferido.

Usa una extensión como “Live Server” en VSCode o cualquier servidor local para visualizar correctamente los componentes dinámicos (navbar/footer).

Accede a index.html para iniciar.

Dependencias adicionales
Bootstrap 5 (CDN)

Bootstrap Icons (CDN)

Unsplash, Freepik, Pixabay

Créditos y recursos
Inspirado en la economía circular y la colaboración local.

Equipo de desarrollo
EcoSwap fue desarrollado por:

Karen González

Yuri Vanegas

Edward Pinzón

Samuel García

Limitaciones y alcance
Sin autenticación ni usuarios reales: todo el sistema es simulado con localStorage. No hay gestión de contraseñas ni base de datos.

No incluye backend ni almacenamiento externo: la funcionalidad es completamente lado cliente (front-end).

No gestiona logística de intercambio ni pagos: solo orientado a demostrar el concepto y la experiencia de uso.
