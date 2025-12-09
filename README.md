# Alex Prieto Romani - Landing Page

Esta es la landing page profesional de Alex Prieto Romani, Ingeniero Agrónomo y Data Scientist. El sitio ha sido desarrollado con **Astro** y **React**, diseñado para ser rápido, responsivo y fácil de mantener.

## 🚀 Tecnologías

*   **[Astro](https://astro.build/)**: Framework principal para generación de sitios estáticos.
*   **React**: Utilizado para componentes interactivos.
*   **CSS Puro**: Estilos personalizados con variables CSS y diseño moderno (Grid/Flexbox).
*   **Devicon**: Librería de iconos para la sección de skills.

## 🛠️ Instalación y Uso

Asegúrate de tener instalado [Node.js](https://nodejs.org/).

1.  **Clonar el repositorio**:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd alex-prieto-landingpage
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Visita `http://localhost:4321` en tu navegador.

4.  **Construir para producción**:
    ```bash
    npm run build
    ```
    Los archivos generados estarán en la carpeta `dist/`.

## 🚢 Despliegue automático en GitHub Pages

El repositorio incluye un flujo de GitHub Actions para construir y publicar la landing page en GitHub Pages cada vez que hagas push a `main` o ejecutes el workflow manualmente.

### 1. Activar GitHub Pages

1. En GitHub, ve a **Settings → Pages** del repositorio.
2. En **Source**, selecciona **GitHub Actions** y guarda los cambios. (No necesitas crear ramas `gh-pages`; el workflow se encargará de publicarla.)
3. Opcional: configura tu dominio personalizado en la misma sección.

### 2. Ejecutar el despliegue

1. Haz un commit y push a `main` (o lanza el workflow **Deploy to GitHub Pages** desde la pestaña **Actions**).
2. GitHub Actions instalará dependencias, generará la carpeta `dist/` con `npm run build` y publicará el contenido en Pages.
3. La URL generada aparecerá en la salida del job de deploy y en **Settings → Pages**.

> Si publicas como un _Project Page_ (por ejemplo `https://usuario.github.io/repositorio`), añade `site` y `base` en `astro.config.mjs` para que los assets usen rutas relativas. Para un _User/Organization Page_ (`https://usuario.github.io`), no es necesario.

## 📂 Gestión de Contenido

El sitio está diseñado para separar el código del contenido. 

**Para editar textos, enlaces, imágenes o habilidades:**
Edita el archivo **`src/data/siteData.ts`**.

*   **Hero**: Cambia tu foto de perfil, título y enlaces sociales.
*   **Skills**: Agrega o quita tecnologías (soporta iconos de Devicon o imágenes personalizadas en `public/images/skills`).
*   **Proyectos**: Añade nuevos proyectos con descripción y tags.
*   **CV**: Actualiza la ruta del PDF.

> **Nota:** Las imágenes estáticas (como logos personalizados o fotos de perfil locales) deben colocarse en la carpeta `public/images/`.

## 📄 Estructura de Archivos

Para más detalles sobre la arquitectura técnica, consulta [landing_page_documentation.md](./landing_page_documentation.md) y [structure.md](./structure.md).

---
© 2025 Alex Prieto Romani
