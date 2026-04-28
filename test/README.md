# Pruebas de Calidad (Quality Assurance)

Este directorio contiene las guías y scripts para asegurar que cada fase del rediseño se complete sin errores.

## Pruebas Manuales (Checklist)

### Fase 1: Arquitectura y Navegación
- [ ] **Modo Oscuro**: El fondo es `#050a08` y los textos son legibles (`--text-main`).
- [ ] **Navbar Píldora**: Se mantiene fija al hacer scroll y tiene efecto blur.
- [ ] **i18n**: Al hacer clic en "EN", todos los textos de la página cambian a inglés instantáneamente. Al volver a "ES", regresan a español.

### Fase 2: Hero y Animación
- [ ] **Fondo**: Se renderiza una red de sensores (nodos y líneas conectivas) interactiva o animada suavemente a 60fps. No interfiere con clics y se ajusta al hacer resize.
- [ ] **Avatar**: La imagen de perfil tiene un anillo verde brillante.
- [ ] **Network Graph**: Los nodos se conectan dinámicamente y reaccionan al movimiento.

### Fase 3: Línea de Tiempo Profesional
- [ ] **Estructura**: Se muestran al menos 5 hitos (trabajos y educación).
- [ ] **Scroll Reveal**: Los nodos y tarjetas se iluminan y aparecen suavemente al hacer scroll hacia abajo.
- [ ] **Alternancia**: Las tarjetas se alternan izquierda/derecha en escritorio y se apilan en móvil.
- [ ] **i18n**: Los cargos, empresas y descripciones cambian de idioma correctamente.

## Pruebas de Humo (Scripts)

Para verificar que no hay errores de sintaxis o de datos:
```bash
npm run build
```
Si la construcción falla, revisar las referencias a `siteData.ts`.
