# Pruebas de Calidad (Quality Assurance)

Este directorio contiene las guías y scripts para asegurar que cada fase del rediseño se complete sin errores.

## Pruebas Manuales (Checklist)

### Fase 1: Arquitectura y Navegación
- [ ] **Modo Oscuro**: El fondo es `#050a08` y los textos son legibles (`--text-main`).
- [ ] **Navbar Píldora**: Se mantiene fija al hacer scroll y tiene efecto blur.
- [ ] **i18n**: Al hacer clic en "EN", todos los textos de la página cambian a inglés instantáneamente. Al volver a "ES", regresan a español.

### Fase 2: Hero y Animación
- [ ] **Fondo**: Se ven símbolos (🌱, 💧, etc.) cayendo suavemente. No hay lag al hacer scroll.
- [ ] **Avatar**: La imagen de perfil tiene un anillo verde brillante.

## Pruebas de Humo (Scripts)

Para verificar que no hay errores de sintaxis o de datos:
```bash
npm run build
```
Si la construcción falla, revisar las referencias a `siteData.ts`.
