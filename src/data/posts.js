export const blogPosts = [
  {
    slug: 'bitcoin-soberania-financiera',
    data: {
      pubDate: '2026-01-18',
      title: 'Tu Libertad Financiera con Bitcoin y Lightning Network – Guía 2026',
      description:
        'Cómo funciona Bitcoin realmente, por qué es soberanía financiera y cómo Lightning lo hace usable todos los días. Actualizado 2026 con el contexto de El Salvador.',
      tags: ['bitcoin', 'lightning', 'soberanía', 'el-salvador', '2026'],
      content: 'bitcoin-soberania-financiera',
      readTime: 12,
    },
  },
  {
    slug: 'herramientas-descentralizadas',
    data: {
      pubDate: '2026-01-18',
      title: 'Herramientas Descentralizadas 2026 – Internet Libre con Nostr',
      description:
        'De la web centralizada a Nostr: recupera tu soberanía digital. Guía actualizada 2026 con mejores clientes, relays y cómo empezar hoy.',
      tags: ['nostr', 'descentralización', 'privacidad', 'libertad-digital', 'bitcoin', '2026'],
      content: 'herramientas-descentralizadas',
      readTime: 15,
    },
  },
  {
    slug: 'primeros-pasos-linux',
    data: {
      pubDate: '2026-01-18',
      title: '🧠 Primeros Pasos con Linux – Guía Definitiva para Principiantes 2026',
      description:
        'Desde elegir la mejor distro 2026 hasta los comandos esenciales. Transición sin miedo desde Windows. Tutorial completo con recomendaciones actualizadas.',
      tags: ['linux', 'privacidad', 'open-source', 'tutorial', 'principiante'],
      content: 'primeros-pasos-linux',
      readTime: 18,
    },
  },
  {
    slug: 'preguntas-frecuentes-bitcoin',
    data: {
      pubDate: '2025-08-25',
      title: '❓ Preguntas Frecuentes sobre Bitcoin',
      description: 'Respuestas claras y directas a las dudas más frecuentes sobre Bitcoin',
      tags: ['bitcoin', 'faq', 'educación'],
      content: 'preguntas-frecuentes-bitcoin',
      readTime: 10,
    },
  },
  {
    slug: 'nodl-bitcoin-el-salvador',
    data: {
      pubDate: '2025-12-05',
      title: 'Nodl: El Dispositivo Bitcoin Salvadoreño',
      description:
        'Conoce el hardware salvadoreño diseñado para facilitar la adopción de Bitcoin y la soberanía tecnológica en Latinoamérica.',
      tags: ['Hardware', 'El Salvador', 'Bitcoin'],
      content: 'nodl-bitcoin-el-salvador',
      readTime: 8,
    },
  },
  {
    slug: 'bitcoin-y-privacidad',
    data: {
      pubDate: '2025-11-25',
      title: 'Bitcoin y Privacidad: Herramientas Esenciales',
      description:
        'Análisis de las mejores herramientas y prácticas para mantener tu privacidad al usar Bitcoin en el día a día.',
      tags: ['Privacidad', 'Bitcoin', 'Herramientas'],
      content: 'bitcoin-y-privacidad',
      readTime: 11,
    },
  },
]

// Ordenar posts por fecha (más recientes primero)
export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
)

// Obtener todas las etiquetas únicas
export const getAllTags = () => {
  const tags = new Set()
  blogPosts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag) => tags.add(tag.toLowerCase()))
    }
  })
  return Array.from(tags).sort()
}

// Buscar post por slug
export const getPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug)
}

// Filtrar posts por etiqueta
export const getPostsByTag = (tag) => {
  return blogPosts.filter(
    (post) =>
      post.data.tags && post.data.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  )
}
