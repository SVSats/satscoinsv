# 🟠 Satscoinsv Blog

Un blog moderno y profesional sobre Bitcoin, Lightning Network, Nostr y Linux. Construido con React, TypeScript, Tailwind CSS y shadcn/ui.

![Blog Preview](./public/images/bitcoin-faq.jpg)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 🌓 **Tema Oscuro/Claro**: Cambio automático según preferencia del sistema
- 📱 **Responsive**: Se ve perfecto en móviles, tablets y escritorio
- 🔍 **Búsqueda**: Busca artículos por título, descripción o etiquetas
- 🏷️ **Etiquetas**: Filtra contenido por temas de interés
- ⚡ **Rápido**: Construido con Vite para máxima velocidad
- ♿ **Accesible**: Navegación por teclado y etiquetas ARIA

## 🚀 Tecnologías

- [React](https://react.dev/) - Biblioteca UI
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [React Router](https://reactrouter.com/) - Enrutamiento
- [Lucide React](https://lucide.dev/) - Iconos

## 📁 Estructura del Proyecto

```
├── public/
│   └── images/          # Imágenes de los posts
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes shadcn/ui
│   │   └── blog/        # Componentes del blog
│   ├── context/
│   │   └── ThemeContext.tsx  # Contexto de tema
│   ├── data/
│   │   └── posts.ts     # Datos de los posts
│   ├── pages/
│   │   ├── Home.tsx     # Página principal
│   │   ├── Posts.tsx    # Lista de posts
│   │   ├── Tags.tsx     # Etiquetas
│   │   ├── TagPosts.tsx # Posts por etiqueta
│   │   └── posts/       # Páginas individuales de posts
│   ├── types/
│   │   └── post.ts      # Tipos TypeScript
│   ├── App.tsx          # Componente principal
│   └── index.css        # Estilos globales
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/tu-usuario/satscoinsv-blog.git
cd satscoinsv-blog
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Inicia el servidor de desarrollo**

```bash
npm run dev
```

4. **Abre en tu navegador**

Visita `http://localhost:5173`

## 📦 Build para Producción

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/`.

## 🚀 Despliegue en GitHub Pages

### 1. Configura vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/nombre-de-tu-repo/', // ← Añade el nombre de tu repositorio
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 2. Instala gh-pages

```bash
npm install --save-dev gh-pages
```

### 3. Añade scripts en package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 4. Despliega

```bash
npm run deploy
```

## 📝 Añadir Nuevos Posts

1. Crea un nuevo archivo en `src/pages/posts/NuevoPost.tsx`
2. Añade los metadatos en `src/data/posts.ts`
3. Registra la ruta en `src/App.tsx`

### Ejemplo de metadatos:

```typescript
{
  id: '5',
  slug: 'nuevo-post',
  title: 'Título del Post',
  description: 'Descripción breve',
  pubDate: '2026-01-29',
  author: 'Satscoinsv',
  tags: ['bitcoin', 'tutorial'],
  image: '/images/nuevo-post.jpg',
  content: null
}
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

- Naranja Bitcoin: `#F7931A`
- Violeta Nostr: `#8B5CF6`
- Verde Linux: `#22C55E`

### Tema

Para cambiar el tema por defecto, edita `src/context/ThemeContext.tsx`.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo y modificarlo.

## 🙏 Créditos

- Contenido original por [Satscoinsv](https://github.com/tu-usuario)
- Hecho en El Salvador 🇸🇻 – Nación Bitcoin

## 📬 Contacto

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Nostr: `npub...`

---

<p align="center">
  🟠 🟣 ⚡️ Hecho con Bitcoin y café
</p>
