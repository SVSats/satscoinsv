# 🟠 SatsCoinSV - Blog sobre Bitcoin y Soberanía Digital

Un blog moderno, rápido y responsivo sobre Bitcoin, Lightning Network, Linux, Nostr y Soberanía Digital. Construido con React, Tailwind CSS y Vite.

## 🌟 Características

- ⚡ **Super Rápido**: Construido con Vite y React
- 🎨 **Diseño Moderno**: Interfaz limpia y atractiva con Tailwind CSS
- 🌓 **Dark Mode**: Soporte completo para modo oscuro
- 📱 **Responsive**: Se adapta perfectamente a cualquier dispositivo
- ✨ **Animaciones Suave**: Animaciones fluidas con Framer Motion
- 🏷️ **Filtro por Tags**: Filtra artículos por categorías
- 📊 **SEO Friendly**: Optimizado para motores de búsqueda
- 🚀 **Fácil de Deploy**: Listo para GitHub Pages, Vercel, Netlify

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 16+ 
- npm o yarn

### Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/satscoinsv-blog.git
cd satscoinsv-blog
```

2. **Instala dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre en tu navegador**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto
```
satscoinsv-blog/
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Páginas principales
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── posts.js        # Datos de los blog posts
│   ├── content/            # Contenido de artículos (futuro)
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── index.html              # HTML principal
├── vite.config.js          # Configuración de Vite
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js       # Configuración de PostCSS
├── package.json            # Dependencias del proyecto
└── README.md               # Este archivo
```

## 🖊️ Agregar Nuevos Artículos

Para agregar un nuevo artículo al blog:

1. **Edita el archivo `src/data/posts.js`**
```javascript
{
  slug: 'tu-articulo',
  data: {
    pubDate: '2026-01-28',
    title: 'Título de tu Artículo',
    description: 'Descripción breve del artículo',
    tags: ['bitcoin', 'tutorial'],
    content: 'tu-articulo',  // Nombre del archivo de contenido
    readTime: 10,  // Tiempo de lectura en minutos
  }
}
```

2. **Crea el contenido en `src/content/tu-articulo.md` o `.jsx`**

3. **Los artículos se mostrarán automáticamente en el blog**

## 🛠️ Scripts Disponibles
```bash
# Iniciar desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Linter
npm run lint

# Formatear código
npm run format

# Deploy a GitHub Pages
npm run deploy
```

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      orange: { /* tus colores */ }
    }
  }
}
```

### Cambiar Fuentes

Modifica `tailwind.config.js` y `src/index.css`

### Agregar Componentes

Crea nuevos componentes en `src/components/` y úsalos en las páginas

## 📤 Deploy

### GitHub Pages
```bash
npm run deploy
```

### Vercel
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente la configuración de Vite
3. Deploy automático con cada push a main

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura Build command: `npm run build`
3. Configura Publish directory: `dist`

### Otros Hosting
Simplemente sube la carpeta `dist/` generada con `npm run build`

## 🔧 Configuración de GitHub Pages

Si usas GitHub Pages, actualiza `vite.config.js`:
```javascript
export default defineConfig({
  base: '/nombre-repositorio/',  // Si el repo no es tu usuario
  // ...
})
```

## 📝 Licencia

Este proyecto está bajo licencia MIT. Siéntete libre de usarlo como base para tu propio blog.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- 🐦 [Nostr](https://njump.me/nprofile1qqsx9lwepa997ss4pzslc3c3t0jg2rd8ntyzru6wef2phxxe3jzz3cqpz4mhxue69uhhyetvv9ujuerpd46hxtnfduhsz9nhwden5te0wfjkccte9ekk7um5wgh8qatz9uq32amnwvaz7tmwdaehgu3wdau8gu3wv3jhvtcm832tj)
- 📧 Email: [tu-email@ejemplo.com]

## 🙏 Agradecimientos

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)

---

**Hecho con ❤️ en El Salvador**

Construyendo un futuro libre y descentralizado 🟠 🟣 ⚡️
