import type { Post } from '@/types/post';

export const posts: Post[] = [
  {
    id: '1',
    slug: 'bitcoin-faq-interactivo',
    title: '❓ Preguntas Frecuentes sobre Bitcoin',
    description: 'Respuestas claras y directas a las dudas más frecuentes sobre Bitcoin',
    pubDate: '2025-08-25',
    author: 'Satscoinsv',
    tags: ['bitcoin', 'faq', 'educación'],
    image: '/images/bitcoin-faq.jpg',
    content: null // Se renderizará en el componente
  },
  {
    id: '2',
    slug: 'bitcoin-funciona',
    title: 'Tu Libertad Financiera con Bitcoin y Lightning Network – Guía 2026',
    description: 'Cómo funciona Bitcoin realmente, por qué es soberanía financiera y cómo Lightning lo hace usable todos los días. Actualizado 2026 con el contexto de El Salvador.',
    pubDate: '2026-01-18',
    author: 'Satscoinsv',
    tags: ['bitcoin', 'lightning', 'soberanía', 'el-salvador', '2026'],
    image: '/images/bitcoin-lightning.jpg',
    content: null
  },
  {
    id: '3',
    slug: 'herramientas-descentralizadas',
    title: 'Herramientas Descentralizadas 2026 – Internet Libre con Nostr',
    description: 'De la web centralizada a Nostr: recupera tu soberanía digital. Guía actualizada 2026 con mejores clientes, relays y cómo empezar hoy.',
    pubDate: '2026-01-18',
    author: 'Satscoinsv',
    tags: ['nostr', 'descentralización', 'privacidad', 'libertad-digital', 'bitcoin', '2026'],
    image: '/images/nostr.jpg',
    content: null
  },
  {
    id: '4',
    slug: 'primeros-pasos-linux',
    title: '🐧 Primeros Pasos con Linux – Guía Definitiva para Principiantes 2026',
    description: 'Desde elegir la mejor distro 2026 hasta los comandos esenciales. Transición sin miedo desde Windows. Tutorial completo con recomendaciones actualizadas.',
    pubDate: '2026-01-18',
    author: 'Satscoinsv',
    tags: ['linux', 'privacidad', 'open-source', 'tutorial', 'principiante'],
    image: '/images/linux.jpg',
    content: null
  }
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
};

export const getPostsByTag = (tag: string): Post[] => {
  return posts.filter(post => post.tags.includes(tag));
};
