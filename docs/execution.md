# Guía de Ejecución Local

Esta guía detalla los pasos necesarios para ejecutar el proyecto en tu entorno local, ya sea para desarrollo o para previsualizar la versión de producción.

## 📋 Prerrequisitos

Asegúrate de tener instalado:
- **Node.js** (versión 18.17.1, 20.3.0 o superior).
- **npm** (viene con Node.js).

## 🚀 Pasos para Iniciar

### 1. Instalar Dependencias
Si acabas de clonar el proyecto o has borrado la carpeta `node_modules`, ejecuta:
```bash
npm install
```

### 2. Ejecutar en Modo Desarrollo
Para trabajar en el proyecto con recarga automática (HMR):
```bash
npm run dev
```
Una vez iniciado, abre tu navegador en:
👉 **[http://localhost:4321](http://localhost:4321)**

### 3. Construir para Producción
Para generar los archivos estáticos finales (se guardarán en la carpeta `dist/`):
```bash
npm run build
```

### 4. Previsualizar la Versión de Producción
Si quieres probar cómo se verá el sitio una vez desplegado:
```bash
npm run preview
```

---

## 🛠️ Comandos Útiles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo en el puerto 4321. |
| `npm run build` | Compila el proyecto para producción. |
| `npm run preview` | Sirve localmente el contenido de la carpeta `dist/`. |
| `npx astro --help` | Muestra la ayuda de los comandos de Astro. |

## 📂 Visualización de la Página
- **Desarrollo**: Verás los cambios en tiempo real mientras editas el código.
- **Producción**: Los archivos generados en `dist/` son HTML, CSS y JS puros, listos para ser subidos a cualquier hosting estático (GitHub Pages, Vercel, Netlify).
