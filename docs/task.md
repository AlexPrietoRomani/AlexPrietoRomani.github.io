# Plan de Tareas: Rediseño Landing Page

Este documento desglosa las tareas necesarias para implementar el rediseño inspirado en el *Career Portfolio Template*, manteniendo el stack de Astro + React, los datos actuales y la temática agronómica.

**Leyenda de Estados:**
- `[ ]` Tarea pendiente.
- `[/]` Tarea en proceso.
- `[x]` Tarea completada.

> [!IMPORTANT]
> **Regla de Progreso**: No se puede pasar de una tarea o fase sin realizar las pruebas correspondientes y asegurar que se pasen correctamente. Los resultados de las pruebas deben documentarse o ejecutarse desde el directorio `test/`.

---

## Fase 1: Arquitectura Base y Navegación [COMPLETADA]

### Tarea 1.1: Adaptación de la Paleta de Colores
- [x] Analizar los colores del template base (fondos oscuros, bordes, hover states).
- [x] Actualizar `src/styles/global.css` para reemplazar los azules/morados del template por la escala de verdes.
- [x] Aplicar una tipografía moderna (*Outfit*).
- [x] **Test**: Verificar contraste de colores y legibilidad en modo oscuro.

### Tarea 1.2: Implementación de la Barra de Navegación Central
- [x] Modificar `src/components/layout/Navbar.astro`.
- [x] Cambiar el layout a una barra tipo "píldora" flotante.
- [x] Implementar el efecto "glassmorphism".
- [x] Actualizar los enlaces de navegación.
- [x] **Test**: Validar que los enlaces de scroll spy funcionen y la barra sea responsive.

### Tarea 1.3: Sistema Bilingüe (i18n) Base
- [x] Seleccionar mecanismo de estado (NanoStores).
- [x] Reestructurar `src/data/siteData.ts` para soportar objetos con idioma `en` y `es`.
- [x] Añadir un botón o toggle de idioma en el Navbar.
- [x] **Test**: Comprobar que al cambiar el idioma en el Navbar, todos los componentes (Hero, About, Skills, etc.) actualicen su contenido sin recargar la página.

---

## Fase 2: Hero Section y Animación Agronómica [COMPLETADA]

### Tarea 2.1: Reestructuración del Hero
- [x] Actualizar `src/components/landing/Hero.astro`.
- [x] Centrar todo el contenido: Avatar en la parte superior, saludo, introducción y botón de "View Resume".
- [x] Colocar los iconos de redes sociales.
- [x] **Test**: Validar centrado en móviles y escritorio.

### Tarea 2.2: Efecto de Fondo "Red de Sensores Agrícolas" (Network Graph)
- [x] Desarrollar un componente de fondo (`SensorNetwork.astro`).
- [x] Crear animación con Canvas y Vanilla JS simulando nodos conectados.
  - **Partículas**: Nodos con movimiento lento simulando flotación orgánica.
  - **Líneas**: Conexiones dinámicas basadas en la proximidad de los nodos, con opacidad variable.
  - **Estilo**: Puntos con colores temáticos (`#10b981`, `#34d399`) y opacidad suave.
- [x] Implementar optimización limitando nodos según el ancho de pantalla.
- [x] **Test**: Verificar rendimiento a 60fps, responsividad al hacer resize, y que no interfiera con clics.

---

## Fase 3: Sección de Carrera y Educación

### Tarea 3.1: Extracción y Estructuración de Datos
- [x] Extraer la experiencia laboral y educación del nuevo texto proporcionado.
- [x] Estructurar la data en `siteData.ts` separando en dos arreglos: `experience` y `education`.
- [x] **Test**: Verificar que los datos en JSON reflejen fielmente el texto.

### Tarea 3.2: Componente de Experiencia Laboral
- [x] Refactorizar `src/components/landing/Experience.astro`.
- [x] Implementar diseño de línea de tiempo alineada a la izquierda para mejor legibilidad.
- [x] Asegurar soporte bilingüe (ES/EN) y corregir problemas de alineación visual.
- [x] **Test**: Validar renderizado correcto en escritorio y móvil.

### Tarea 3.3: Componente de Educación
- [x] Crear `src/components/landing/Education.astro` siguiendo el mismo patrón visual de `Experience.astro`.
- [x] Integrar ambos componentes en `index.astro` uno debajo del otro.
- [x] Implementar la iluminación al hacer scroll.
- [x] **Test**: Verificar que ambos timelines se vean coherentes y el scroll spy funcione.

---

## Fase 4: Refactorización de Secciones Existentes

### Tarea 4.1: Optimización de Imágenes de Proyectos
- [ ] Sustituir capturas actuales por imágenes de alta calidad o mocks generados.
- [ ] Implementar `hover effects` avanzados en las tarjetas de proyectos.
- [ ] **Test**: Verificar carga optimizada de imágenes.

### Tarea 4.2: Integración de la Plataforma de Estudios
- [ ] Crear sección específica para el acceso a la plataforma.
- [ ] Usar iconos de "Education" y "Access".
- [ ] **Test**: Validar que el enlace a la plataforma funcione correctamente. (GitHub, Web).

### Tarea 4.3: Sección Tech Stack
- [ ] Actualizar `src/components/landing/Skills.astro` a `TechStack.astro`.
- [ ] Agrupar habilidades por dominio (Frontend, Data Science, GIS, etc.) replicando las secciones horizontales del template.
- [ ] Implementar indicador de nivel de dominio (Beginner, Proficient, Expert) mediante "estrellas" o "barras", como en el diseño de referencia.

---

## Fase 5: Interactividad y Pulido Final

### Tarea 5.1: Auditoría de Accesibilidad y SEO
- [ ] Revisar etiquetas `alt`, contrastes y navegación por teclado.
- [ ] Optimizar metadatos `Open Graph` para compartir en redes.
- [ ] **Test**: Ejecutar Lighthouse o similar y alcanzar >90 en todas las métricas.

### Tarea 5.2: Despliegue y Validación Final
- [ ] Realizar un `npm run build` para asegurar que no hay errores de compilación.
- [ ] Validar el funcionamiento del sistema bilingüe en producción.
- [ ] **Test**: Navegación completa del sitio sin errores en consola. (GitHub Pages).
