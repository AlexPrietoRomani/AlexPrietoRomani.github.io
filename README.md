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
