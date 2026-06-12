# Requirements Document

## Introduction

Página web profesional tipo portafolio para Dobby's Vet, una médica veterinaria especializada en bienestar animal. El sitio debe ser moderno, amigable, con información de contacto y servicios expandibles. Se implementará como un sitio estático para alojamiento gratuito (GitHub Pages, Netlify, Vercel o Cloudflare Pages).

## Glossary

- **Sitio_Web**: La página web estática de portafolio profesional de Dobby's Vet
- **Visitante**: Persona que accede al sitio web para conocer los servicios profesionales
- **Sección_Servicios**: Área del sitio que muestra los servicios ofrecidos con componentes expandibles
- **Componente_Expandible**: Elemento de interfaz que al hacer clic revela información adicional del servicio (accordion/collapse)
- **Sección_Contacto**: Área del sitio que muestra correo electrónico, teléfono y formulario o datos de contacto
- **Sección_Hero**: Banner principal del sitio con presentación profesional
- **Hosting_Estático**: Servicio de alojamiento gratuito para sitios sin backend (GitHub Pages, Netlify, Vercel, Cloudflare Pages)

## Requirements

### Requirement 1: Estructura General del Sitio

**User Story:** Como visitante, quiero acceder a una página web moderna y amigable, para conocer los servicios profesionales de la veterinaria.

#### Acceptance Criteria

1. THE Sitio_Web SHALL presentar una estructura de página única (single-page) con navegación por secciones: Hero, Sobre Mí, Servicios y Contacto, cada una identificada con un atributo id único
2. THE Sitio_Web SHALL utilizar una paleta de colores primaria compuesta por verde (#4CAF50 o similar), azul suave (#64B5F6 o similar) y blanco (#FFFFFF) como colores principales
3. THE Sitio_Web SHALL implementar un diseño responsivo con breakpoints en 768px (tablet) y 1024px (escritorio) que reorganice el contenido sin pérdida de información
4. THE Sitio_Web SHALL cargar en menos de 3 segundos medidos con Lighthouse en modo móvil con conexión simulada 4G
5. THE Sitio_Web SHALL utilizar una tipografía de Google Fonts legible con un tamaño base mínimo de 16px para el cuerpo del texto

### Requirement 2: Sección Hero y Presentación Profesional

**User Story:** Como visitante, quiero ver una presentación clara de la profesional, para entender su perfil y especialización.

#### Acceptance Criteria

1. THE Sección_Hero SHALL mostrar el nombre profesional y título de Médica Veterinaria con una jerarquía tipográfica donde el nombre tenga mayor tamaño de fuente que el título profesional, y el título sea legible sin necesidad de hacer scroll
2. THE Sección_Hero SHALL indicar la especialidad en Bienestar Animal con un tamaño de fuente igual o superior al del título profesional, o mediante un elemento visual diferenciador (color de fondo, badge o ícono) que la distinga del resto del texto
3. THE Sección_Hero SHALL incluir una imagen libre de derechos de autor relacionada con veterinaria o bienestar animal, con un tamaño máximo de 200KB y que no cubra ni dificulte la lectura del texto superpuesto
4. WHEN el Visitante hace clic en el botón de llamada a la acción, THE Sección_Hero SHALL desplazar la vista hasta la Sección_Contacto mediante scroll suave
5. THE Sección_Hero SHALL ser visible en su totalidad sin necesidad de hacer scroll vertical en pantallas de escritorio con resolución mínima de 1366x768 píxeles

### Requirement 3: Sección de Servicios Expandibles

**User Story:** Como visitante, quiero ver los servicios ofrecidos de forma organizada y expandible, para obtener detalles solo de los que me interesan.

#### Acceptance Criteria

1. THE Sección_Servicios SHALL mostrar una lista de servicios veterinarios relacionados con bienestar animal, con todos los servicios colapsados por defecto al cargar la página
2. WHEN el Visitante hace clic en un servicio colapsado, THE Componente_Expandible SHALL mostrar información detallada del servicio seleccionado con una animación de transición de máximo 300ms
3. WHEN el Visitante hace clic en un servicio ya expandido, THE Componente_Expandible SHALL colapsar la información detallada con una animación de transición de máximo 300ms
4. THE Componente_Expandible SHALL utilizar atributos ARIA (aria-expanded, aria-controls) y ser operable mediante teclado (teclas Enter y Espacio para expandir/colapsar, Tab para navegar entre servicios)
5. THE Sección_Servicios SHALL utilizar un estilo visual coherente para todos los servicios veterinarios con el color primario verde e ícono representativo (🐾)
6. THE Componente_Expandible SHALL permitir que múltiples servicios estén expandidos simultáneamente (patrón accordion independiente)

### Requirement 4: Información de Contacto

**User Story:** Como visitante, quiero encontrar fácilmente la información de contacto, para poder comunicarme con la profesional.

#### Acceptance Criteria

1. THE Sección_Contacto SHALL mostrar una dirección de correo electrónico como enlace con atributo href="mailto:{email}" que al hacer clic abra el cliente de correo predeterminado con la dirección prellenada
2. THE Sección_Contacto SHALL mostrar un número de teléfono como enlace con atributo href="tel:{número}" que al hacer clic desde un dispositivo móvil inicie una llamada
3. THE Sección_Contacto SHALL estar ubicada como la última sección del sitio antes del footer, visible sin necesidad de interacción adicional al desplazarse hasta el final
4. THE Sección_Contacto SHALL mostrar los datos de contacto con íconos representativos (sobre para email, teléfono para número) y texto legible con tamaño mínimo de 16px
5. THE Sección_Contacto SHALL incluir enlaces a redes sociales profesionales si están disponibles, utilizando íconos reconocibles con atributos aria-label descriptivos

### Requirement 5: Imágenes Libres de Copyright

**User Story:** Como propietaria del sitio, quiero que todas las imágenes sean libres de derechos de autor, para evitar problemas legales.

#### Acceptance Criteria

1. THE Sitio_Web SHALL utilizar únicamente imágenes con licencia libre (Creative Commons, Unsplash, Pexels o similares), y cada imagen deberá tener documentada su fuente y tipo de licencia en un archivo de atribuciones o comentario en el código fuente
2. THE Sitio_Web SHALL optimizar las imágenes para carga rápida utilizando formato WebP o JPEG comprimido, con un tamaño máximo de 200KB por imagen y una resolución mínima de 400x300 píxeles
3. IF la licencia de una imagen requiere atribución, THEN THE Sitio_Web SHALL mostrar el crédito correspondiente (autor y fuente) en un pie de imagen visible o en una sección de créditos accesible desde el footer
4. THE Sitio_Web SHALL utilizar un máximo de 10 imágenes en total para mantener el rendimiento de carga dentro del límite de 3 segundos establecido

### Requirement 6: Hosting y Despliegue

**User Story:** Como propietaria del sitio, quiero alojar la página de forma gratuita o con costo mínimo, para mantener el presupuesto bajo control.

#### Acceptance Criteria

1. THE Sitio_Web SHALL ser un sitio estático compuesto exclusivamente por archivos HTML, CSS, JavaScript, imágenes y fuentes, sin requerir procesamiento del lado del servidor
2. THE Sitio_Web SHALL ser desplegable en al menos una de las siguientes plataformas gratuitas: GitHub Pages, Netlify, Vercel o Cloudflare Pages, resultando en el sitio accesible públicamente mediante una URL proporcionada por la plataforma
3. THE Sitio_Web SHALL ser compatible con dominio personalizado (dobbysvet) mediante configuración DNS con registro CNAME desde Squarespace, y soportar HTTPS automático provisto por la plataforma de hosting
4. THE Sitio_Web SHALL mostrar todas las secciones (Hero, Sobre Mí, Servicios, Contacto), navegación funcional y componentes expandibles operativos una vez desplegado, sin requerir un servidor backend ni base de datos
5. THE Sitio_Web SHALL utilizar rutas relativas para todos los recursos internos (imágenes, hojas de estilo, scripts) de modo que el sitio funcione independientemente del dominio o subdirectorio donde se aloje

### Requirement 7: Navegación y Usabilidad

**User Story:** Como visitante, quiero navegar fácilmente por la página, para encontrar la información que necesito sin esfuerzo.

#### Acceptance Criteria

1. THE Sitio_Web SHALL incluir un menú de navegación fijo en la parte superior con enlaces a las secciones Hero, Sobre Mí, Servicios y Contacto
2. WHEN el Visitante hace clic en un enlace del menú, THE Sitio_Web SHALL desplazar la vista suavemente (smooth scroll) hasta la sección correspondiente en un tiempo no mayor a 800 milisegundos
3. WHILE el Visitante se encuentra visualizando una sección, THE Sitio_Web SHALL diferenciar visualmente el enlace correspondiente en el menú de navegación mediante un cambio de estilo distinguible (color, subrayado o peso de fuente) respecto a los enlaces inactivos
4. IF el ancho del viewport es menor o igual a 768px, THEN THE Sitio_Web SHALL mostrar un icono de menú hamburguesa en lugar del menú de navegación completo
5. WHEN el Visitante hace clic en el icono de menú hamburguesa, THE Sitio_Web SHALL expandir el menú de navegación mostrando todos los enlaces de sección
6. WHEN el Visitante selecciona un enlace del menú en su versión móvil, THE Sitio_Web SHALL colapsar el menú hamburguesa automáticamente después de iniciar el desplazamiento hacia la sección seleccionada
7. THE Sitio_Web SHALL permitir la navegación del menú mediante teclado (tecla Tab para recorrer enlaces, Enter para activar)

---

## Notas de Implementación (Recomendaciones)

### Hosting Gratuito Recomendado

| Plataforma | Ventajas | Dominio Personalizado | HTTPS |
|---|---|---|---|
| **GitHub Pages** | Integración con Git, muy estable | ✅ Gratis | ✅ Gratis |
| **Netlify** | Deploy automático, formularios gratis | ✅ Gratis | ✅ Gratis |
| **Vercel** | Muy rápido, buena UX | ✅ Gratis | ✅ Gratis |
| **Cloudflare Pages** | CDN global incluido, muy rápido | ✅ Gratis | ✅ Gratis |

**Recomendación**: Netlify o Cloudflare Pages por su facilidad de configuración con dominios externos (Squarespace DNS).

### Configuración DNS en Squarespace
Para conectar el dominio dobbysvet al hosting gratuito:
1. Agregar un registro CNAME apuntando al servicio de hosting elegido
2. Configurar el dominio personalizado en el panel del hosting
3. Activar HTTPS (automático en todas las opciones)

### Stack Técnico Sugerido
- HTML5 + CSS3 + JavaScript vanilla (sin frameworks para máxima simplicidad)
- Imágenes de Unsplash o Pexels (libres de copyright)
- Google Fonts para tipografía moderna
