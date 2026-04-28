# Plan de Implementación: Rediseño de UI basado en Career Portfolio Template

Este plan detalla la estrategia para rediseñar la Landing Page actual utilizando como inspiración el template [Career Portfolio](https://careerportofio.netlify.app/), pero adaptando los colores, animaciones y contenido a la identidad profesional agrícola de Alex Prieto Romani.

## 🎯 Objetivo General
Recrear la interfaz de usuario (UI) moderna y fluida del repositorio de referencia, manteniendo el framework Astro + React actual. Se debe preservar la información existente y adaptar la temática visual (colores y animaciones) hacia un enfoque agrícola ("Agriculture Data Science").

## 🎨 Decisiones de Diseño

### 1. Paleta de Colores
- **Descartar**: Tema oscuro con acentos morados/azules del template original.
- **Implementar**: Paleta original basada en tonos verdes (Agronomía) e identidad corporativa.
  - Primario: `--agro-green`
  - Fondo oscuro: Un tono verde muy oscuro casi negro o gris oscuro con matices verdes (ej. `--deep-forest`).

### 2. Animaciones y Efectos
- **Fondo animado**: El template original tiene una "lluvia de código" o partículas espaciales.
- **Adaptación Agronómica**: Reemplazar las partículas por un efecto más orgánico o agrícola (por ejemplo, iconos sutiles de hojas cayendo, lluvia simulada, partículas verdes o conexiones tipo red neuronal agrícola).

### 3. Internacionalización (i18n)
- **Bilingüe Automático**: Implementar un toggle de idioma (Español/Inglés) o manejo de estado para traducir la UI al instante, asegurando que todas las secciones soporten ambos idiomas.

---

## 🏗️ Reestructuración de Secciones

1.  **Navbar (Barra de Navegación)**:
    - Mover del diseño lateral/expandido actual a una **barra central** flotante tipo píldora, inspirada en el template.
2.  **Hero Section**:
    - Estilo minimalista centrado con avatar, títulos y links de redes.
    - Fondo dinámico agrícola.
3.  **About Me (Sobre mí)**:
    - Integrar la biografía existente en la nueva estructura fluida.
4.  **Career (Carrera / Experiencia)**:
    - **NUEVA SECCIÓN**: Implementar un componente de línea de tiempo (Timeline).
    - Origen de datos: Extraer información del CV actual (`Alex_Prieto_Romani_CV.pdf`).
5.  **Tech Stack (Tecnologías)**:
    - Adaptar las tarjetas Devicon que ya tenemos al diseño de cuadrícula/cards categorizadas del template.
6.  **Featured Projects (Proyectos Destacados)**:
    - Usar un layout de tarjetas de presentación grande (tipo "showcase") como en el template.
7.  **Plataforma de Estudios**:
    - Sección específica para redirigir a los cursos de ShinyApps, manteniendo consistencia visual con el resto de "Cards".

---

## 🛠️ Stack y Herramientas

- **Framework**: Astro (SSG/SSR)
- **Estilos**: Vanilla CSS / Tailwind (si se prefiere agilizar la UI inspirada en el template). Recomendado mantener y expandir `global.css` o adoptar Tailwind para facilitar el clonado de la UI de referencia.
- **Estado UI (i18n, etc.)**: React Context o NanoStores (recomendado en Astro para estado global simple).

---

## 🚀 Fases de Implementación

1.  **Fase 1: Preparación y Componentes Base** (Estructura global, variables CSS, Navbar central, i18n base).
2.  **Fase 2: Secciones Principales** (Hero con efecto agrónomo, Sobre Mí, Tech Stack, Proyectos).
3.  **Fase 3: Nueva Sección Carrera** (Extracción de CV y componente Timeline).
4.  **Fase 4: Pulido Final** (Animaciones de scroll, transiciones de idioma, responsividad).

El detalle de cada tarea técnica se encuentra en `docs/task.md`.
