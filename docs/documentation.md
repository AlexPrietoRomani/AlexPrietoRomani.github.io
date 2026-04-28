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
│   ├── components/             # Componentes reutilizables (.astro o .jsx)
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   └── Footer.astro
│   │   └── landing/            # Secciones de la landing page
│   │       ├── Hero.astro      # (Usa siteData.ts)
│   │       ├── About.astro     # (Usa siteData.ts)
│   │       ├── Skills.astro    # (Iconos DevIcon vía siteData)
│   │       ├── Courses.astro   # Enlace a ShinyApps
│   │       ├── Projects.astro  # (Usa siteData.ts)
│   │       └── Contact.astro   # (Usa siteData.ts)
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal (SEO, Meta, Fonts)
│   ├── styles/
│   │   └── global.css          # Estilos base y variables de diseño
│   ├── data/
│   │   └── siteData.ts         # Datos centralizados (Textos, Links, Iconos)
│   └── pages/
│       └── index.astro         # Página principal
├── astro.config.mjs            # Configuración de Astro
├── package.json
└── tsconfig.json
```

---

## 3. Gestión de Contenido

Todo el contenido textual, enlaces e imágenes principales se gestionan desde **`src/data/siteData.ts`**. No es necesario editar los componentes HTML para realizar cambios de texto.

### Estructura de `siteData.ts`:
*   **`hero`**: Títulos, subtítulos, imagen de perfil y enlaces sociales.
*   **`about`**: Biografía bilingüe y focos profesionales.
*   **`skills`**: Tecnologías categorizadas. Soporta clases de Devicon (`icon`) o rutas locales (`image`).
*   **`projects`**: Lista de proyectos con etiquetas y links.
*   **`courses`**: Información de cursos y tarjetas de acceso.
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
