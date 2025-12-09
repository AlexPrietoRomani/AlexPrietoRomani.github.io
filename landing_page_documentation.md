# Documentación Técnica: Landing Page (Astro + React)

Este documento describe la arquitectura, diseño y funcionamiento de la nueva Landing Page migrada a Astro. El objetivo es proporcionar una guía clara para el mantenimiento y futuras actualizaciones del sitio.

## 1. Visión General
La landing page ha sido reconstruida utilizando **Astro** como framework principal para garantizar un alto rendimiento (HTML estático por defecto) y una estructura de componentes modular.

*   **Framework**: Astro v5
*   **Interactividad**: React (para componentes interactivos simples) y JavaScript Vanilla.
*   **Estilos**: CSS Global (`global.css`) con variables CSS para tokens de diseño.
*   **Iconos**: Devicon (CDN) para tecnologías y SVGs inline para UI.
*   **Datos**: Centralizados en `src/data/siteData.ts`.

## 2. Gestión de Contenido
Todo el contenido textual, enlaces e imágenes principales se gestionan desde un único archivo de datos. **No es necesario editar los componentes HTML para cambiar textos.**

### Archivo Maestro: `src/data/siteData.ts`
Este archivo exporta un objeto JSON `siteData` con la siguiente estructura:

*   **`hero`**: Títulos, subtítulos, imagen de perfil y enlaces a redes sociales.
*   **`about`**: Tarjetas de presentación (bilingüe) y lista de enfoques.
*   **`skills`**: Arrays de tecnologías categorizadas.
    *   Puede usar `icon` (clase de Devicon) o `image` (ruta a archivo en `public/images/skills`).
*   **`projects`**: Lista de proyectos destacados con etiquetas y enlaces.
*   **`courses`**: Información de la sección de cursos y tarjetas individuales.
*   **`contact`**: Enlaces de contacto y pie de página.
*   **`cv`**: Configuración del archivo de currículum descargable.

**Ejemplo de edición de una habilidad:**
```typescript
{ name: "QGIS", image: "/images/skills/qgis.png" }, // Imagen personalizada
{ name: "Python", icon: "devicon-python-plain colored" } // Icono de librería
```

## 3. Estructura de Carpetas

### `public/`
Archivos estáticos que se sirven tal cual en la raíz del sitio.
*   `docs/`: Documentos descargables (CV).
*   `images/`: 
    *   `skills/`: Logos personalizados de herramientas (QGIS, PowerBI, etc.).
    *   `courses/`: Miniaturas de los cursos.

### `src/components/`
Componentes modulares de Astro.
*   `landing/`: Componentes específicos de cada sección de la página (Hero, Skills, About, etc.).
*   `layout/`: Componentes estructurales globales (Navbar, Footer).

### `src/styles/`
*   `global.css`: Contiene todas las reglas de diseño.
    *   **Variables (`:root`)**: Colores (`--agro-green`, `--data-blue`), sombras y fuentes.
    *   **Animaciones**: Keyframes para `fadeInUp`.
    *   **Tipografía**: Reglas para Poppins y Montserrat.

## 4. Personalización y Diseño

### Colores
Los colores principales están definidos en `src/styles/global.css`:
```css
:root {
  --agro-green: #2F855A;
  --deep-forest: #22543D;
  --data-blue: #2B6CB0;
}
```
Cambiar estos valores actualizará automáticamente botones, bordes y textos destacados en toda la web.

### Iconos de Tecnologías
Se utiliza la librería **Devicon**. Para agregar un nuevo icono estándar:
1.  Buscar la clase en [Devicon](https://devicon.dev/).
2.  Agregarla al objeto `skills` en `siteData.ts` (ej: `devicon-nodejs-plain`).

Para iconos personalizados (como los logos de QGIS o PowerBI que no están en la fuente):
1.  Guardar la imagen PNG/SVG en `public/images/skills/`.
2.  Referenciarla en `siteData.ts` usando la propiedad `image` en lugar de `icon`.

## 5. Despliegue
El proyecto está configurado para generar un sitio estático (`output: 'static'`).

**Build para Producción:**
```bash
npm run build
```
Esto generará una carpeta `dist/` optimizada que puede subirse a cualquier hosting estático (GitHub Pages, Netlify, Vercel).

**Comando de Desarrollo:**
```bash
npm run dev
```
Inicia un servidor local en `http://localhost:4321` con recarga automática.
