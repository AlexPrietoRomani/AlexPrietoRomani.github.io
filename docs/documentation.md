# Documentación Técnica: Landing Page (Astro + React)

Este documento describe la arquitectura, el diseño y el funcionamiento de la Landing Page de Alex Prieto Romani. Proporciona una guía clara para el mantenimiento, la gestión de contenidos y futuras actualizaciones del sitio.

---

## 1. Visión General
La landing page está construida con **Astro v5**, garantizando un rendimiento óptimo mediante la generación de HTML estático por defecto.

*   **Interactividad**: React (para componentes específicos) y JavaScript Vanilla.
*   **Estilos**: CSS Global (`global.css`) con variables CSS para tokens de diseño.
*   **Iconos**: Devicon (vía CDN) y SVGs integrados.
*   **Datos**: Todo el contenido está centralizado en `src/data/siteData.ts`.

---

## 2. Estructura del Proyecto

Esta estructura organiza el código de manera modular y escalable:

```text
alex-prieto-landingpage/
├── docs/                       # Documentación interna
│   ├── documentation.md        # Esta documentación técnica
│   └── execution.md            # Guía de ejecución local
├── public/                     # Archivos estáticos
│   ├── docs/
│   │   └── Alex_Prieto_Romani_CV.pdf # CV descargable
│   ├── images/
│   │   ├── courses/            # Imágenes de cursos
│   │   ├── skills/             # Logos de tecnologías (QGIS, etc.)
│   │   └── profile/            # Imagen de perfil
│   └── favicon.svg
├── src/
│   ├── components/             # Componentes reutilizables (.astro)
│   │   ├── layout/
│   │   │   ├── Navbar.astro    # Navegación con cambio de idioma
│   │   │   └── Footer.astro
│   │   ├── common/
│   │   │   └── SensorNetwork.astro # Fondo animado (Canvas API)
│   │   └── landing/            # Secciones de la landing page
│   │       ├── Hero.astro      # Presentación y redes sociales
│   │       ├── About.astro     # Biografía bilingüe
│   │       ├── Experience.astro # Timeline de experiencia laboral
│   │       ├── Education.astro  # Timeline de educación
│   │       ├── TechStack.astro # Habilidades con niveles de dominio
│   │       ├── Platform.astro  # Acceso premium a ShinyApps
│   │       ├── Projects.astro  # Galería de proyectos con hover effects
│   │       └── Contact.astro   # Formulario/datos de contacto
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal (SEO, Meta, Fonts)
│   ├── styles/
│   │   └── global.css          # Estilos base y variables de diseño
│   ├── stores/
│   │   └── langStore.ts        # Gestión de estado del idioma (NanoStores)
│   ├── data/
│   │   └── siteData.ts         # Datos centralizados (Textos, Links, Iconos)
│   └── pages/
│       └── index.astro         # Página principal
├── astro.config.mjs            # Configuración de Astro
├── package.json
└── tsconfig.json
```

---

## 3. Gestión de Contenido y Multilenguaje

Todo el contenido textual, enlaces e imágenes principales se gestionan desde **`src/data/siteData.ts`**. El sitio soporta **Español (ES)** e **Inglés (EN)** de forma dinámica mediante NanoStores.

### Estructura de `siteData.ts`:
*   **`hero`**: Títulos, subtítulos, imagen de perfil y enlaces sociales.
*   **`about`**: Biografía bilingüe y focos profesionales.
*   **`experience`**: Timeline laboral detallado.
*   **`education`**: Timeline académico detallado.
*   **`skills`**: Tecnologías categorizadas con niveles de dominio (1-3).
*   **`projects`**: Lista de proyectos con imágenes, etiquetas y links.
*   **`courses`**: Información de cursos integrados en la sección de Plataforma.
*   **`cv`**: Ruta y textos para la descarga del currículum.

---

## 4. Diseño y Estilos

### Sistema de Diseño (CSS Variables)
Los colores y la identidad visual se definen en `src/styles/global.css`:
```css
:root {
  --agro-green: #2F855A;
  --deep-forest: #22543D;
  --data-blue: #2B6CB0;
}
```

### Iconos de Tecnologías
1.  **Estándar**: Usar clases de [Devicon](https://devicon.dev/) en `siteData.ts`.
2.  **Personalizado**: Guardar imagen en `public/images/skills/` y usar la propiedad `image` en `siteData.ts`.

---

## 5. Desarrollo y Despliegue

### Comandos de Ejecución
*   **Desarrollo**: `npm run dev` (Inicia servidor en `http://localhost:4321`).
*   **Producción**: `npm run build` (Genera la carpeta `dist/`).
*   **Preview**: `npm run preview` (Previsualiza la carpeta `dist/` localmente).

Para una guía más detallada de instalación, consulta [execution.md](./execution.md).
