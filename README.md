# Alex Prieto Romani - Landing Page 🚀

Esta es la versión modernizada y premium de la landing page profesional de **Alex Prieto Romani**, Ingeniero Agrónomo y Data Scientist especializado en Agricultura de Precisión.

El sitio ha sido rediseñado para ofrecer una experiencia visual de alto impacto, utilizando **Astro v5** para un rendimiento ultra rápido y **Vanilla CSS** para un diseño glassmorphism moderno.

## ✨ Características Destacadas

*   **Timeline Interactivo**: Experiencia laboral y educación con iluminación dinámica al hacer scroll.
*   **Tech Stack con Niveles**: Visualización de habilidades agrupadas por dominio con indicadores de maestría técnica.
*   **Plataforma de Estudios 3D**: Acceso premium a aplicaciones Shiny y cursos con diseño glassmorphism y mockups avanzados.
*   **Proyectos Optimizados**: Galería de proyectos con imágenes generadas por IA y efectos hover premium (zoom, glow, sombras dinámicas).
*   **Fondo de Red de Sensores**: Animación fluida de nodos y conexiones en el fondo usando Canvas API, simulando una red IoT agrícola.
*   **Multilenguaje Dinámico**: Soporte completo para **Español** e **Inglés** con persistencia de estado mediante NanoStores.

## 🚀 Tecnologías

*   **[Astro v5](https://astro.build/)**: Framework de islas de componentes para máxima velocidad.
*   **NanoStores**: Gestión de estado ligera para el sistema bilingüe.
*   **Canvas API**: Fondo animado personalizado (Sensor Network).
*   **Google Fonts (Outfit)**: Tipografía moderna y legible.
*   **Devicon**: Iconografía técnica completa.

## 🛠️ Instalación y Uso

1.  **Clonar e Instalar**:
    ```bash
    git clone https://github.com/AlexPrietoRomani/AlexPrietoRomani.github.io.git
    cd AlexPrietoRomani.github.io
    npm install
    ```

2.  **Desarrollo Local**:
    ```bash
    npm run dev
    ```

3.  **Construcción**:
    ```bash
    npm run build
    ```

## 🚢 Despliegue en GitHub Pages

El despliegue está automatizado mediante **GitHub Actions** cada vez que se realiza un push a la rama `master`. 

**Importante**: Asegúrate de que en la configuración de tu repositorio (**Settings -> Pages**), el **Source** esté configurado como **GitHub Actions**.

## 📂 Gestión de Contenido

Toda la información reside en **`src/data/siteData.ts`**. Desde aquí puedes actualizar:
*   Biografías y Títulos (ES/EN).
*   Items de Experiencia y Educación.
*   Proyectos (Rutas de imágenes, links y tags).
*   Tecnologías y sus niveles de dominio.

---
© 2026 Alex Prieto Romani | Agriculture Data Science
