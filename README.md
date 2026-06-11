# InstintiaVet — Sitio Web Profesional

Sitio web de portafolio profesional para InstintiaVet, médica veterinaria especialista en bienestar animal.

## Stack Técnico

- HTML5
- CSS3 (sin preprocesadores)
- JavaScript vanilla (sin frameworks ni bundlers)

## Estructura del Proyecto

```
/
├── index.html          # Página principal (single-page)
├── styles.css          # Hoja de estilos
├── main.js             # JavaScript para interactividad
├── images/             # Imágenes optimizadas (WebP/JPEG)
├── ATTRIBUTIONS.md     # Atribuciones de imágenes
└── README.md           # Este archivo
```

## Despliegue

El sitio es completamente estático y se puede alojar en cualquier plataforma de hosting gratuito.

### Netlify

1. Conectar el repositorio de GitHub a [Netlify](https://www.netlify.com/)
2. Configuración de build:
   - **Build command**: _(dejar vacío, no requiere build)_
   - **Publish directory**: `/` o `.`
3. Clic en "Deploy site"
4. Para dominio personalizado:
   - Ir a Domain settings → Add custom domain
   - Agregar `instintiavet.com` (o el dominio deseado)
   - En Squarespace DNS, crear registro CNAME apuntando al subdominio de Netlify (ej: `tu-sitio.netlify.app`)
   - HTTPS se activa automáticamente

### Cloudflare Pages

1. Ir a [Cloudflare Pages](https://pages.cloudflare.com/) y crear nuevo proyecto
2. Conectar el repositorio de GitHub
3. Configuración de build:
   - **Framework preset**: None
   - **Build command**: _(dejar vacío)_
   - **Build output directory**: `/` o `.`
4. Clic en "Save and Deploy"
5. Para dominio personalizado:
   - En la configuración del proyecto, ir a Custom Domains
   - Agregar el dominio deseado
   - En Squarespace DNS, crear registro CNAME apuntando a `tu-proyecto.pages.dev`
   - HTTPS se activa automáticamente

### GitHub Pages

1. En el repositorio, ir a Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main`, directorio: `/ (root)`
4. Clic en "Save"
5. Para dominio personalizado:
   - En Settings → Pages → Custom domain, agregar el dominio
   - En Squarespace DNS, crear registro CNAME apuntando a `tu-usuario.github.io`
   - Marcar "Enforce HTTPS"

## Configuración DNS en Squarespace

Para conectar un dominio personalizado desde Squarespace:

1. Ir a Squarespace → Domains → DNS Settings
2. Agregar registro CNAME:
   - **Host**: `www` (o `@` según la plataforma)
   - **Value**: URL proporcionada por la plataforma de hosting
3. Esperar propagación DNS (puede tomar hasta 48 horas)
4. Verificar HTTPS activo en la plataforma de hosting

## Desarrollo Local

Abrir `index.html` directamente en el navegador o usar un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve .

# Con VS Code
# Instalar extensión "Live Server" y clic derecho → Open with Live Server
```

## Licencia

Todos los derechos reservados © 2025 InstintiaVet.
Las imágenes utilizadas tienen sus propias licencias documentadas en `ATTRIBUTIONS.md`.
