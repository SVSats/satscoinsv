import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getPostBySlug, sortedBlogPosts } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
        <Navigation />
        <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold">Artículo no encontrado</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Lo sentimos, no pudimos encontrar el artículo que buscas.
            </p>
            <Link
              to="/blog"
              className="mt-8 inline-block rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Volver al Blog
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    )
  }

  // Encontrar posts anteriores y siguientes
  const currentIndex = sortedBlogPosts.findIndex((p) => p.slug === slug)
  const previousPost = currentIndex < sortedBlogPosts.length - 1 ? sortedBlogPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? sortedBlogPosts[currentIndex - 1] : null

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
      <Navigation />

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate('/blog')}
          className="mb-8 flex items-center gap-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
        >
          ← Volver al Blog
        </motion.button>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <header className="mb-12 border-b border-gray-200 pb-8 dark:border-gray-800">
            <h1 className="mb-4 bg-gradient-to-br from-orange-500 via-purple-600 to-yellow-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              {post.data.title}
            </h1>

            <div className="mb-6 flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
              <span>
                📅{' '}
                {new Date(post.data.pubDate).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>⏱️ Lectura: {post.data.readTime} minutos</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.data.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <p>{post.data.description}</p>

            {/* Placeholder para contenido real */}
            <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-8 dark:border-orange-900/50 dark:bg-orange-900/10">
              <p className="text-center font-semibold text-orange-900 dark:text-orange-200">
                📝 El contenido completo del artículo "{post.data.title}" será cargado aquí.
              </p>
              <p className="mt-4 text-center text-sm text-orange-800 dark:text-orange-300">
                Importa el archivo de contenido markdown o HTML para cada artículo en la carpeta{' '}
                <code className="rounded bg-orange-100 px-2 py-1 dark:bg-orange-900/30">
                  src/content/
                </code>
              </p>
            </div>

            <hr className="my-12 border-gray-200 dark:border-gray-800" />

            <h3 className="text-2xl font-bold">Conclusión</h3>
            <p>
              Este artículo es parte de la serie sobre Bitcoin, Nostr y Soberanía Digital. Para
              más información, visita el resto del blog.
            </p>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-12 dark:border-gray-800">
            <h3 className="mb-8 text-2xl font-bold">Artículos Relacionados</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {previousPost && (
                <Link
                  to={`/blog/${previousPost.slug}`}
                  className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-orange-300 hover:shadow-md dark:border-gray-800 dark:hover:border-orange-500"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">← Artículo Anterior</p>
                  <h4 className="mt-2 font-semibold text-gray-900 group-hover:text-orange-600 dark:text-gray-100 dark:group-hover:text-orange-400">
                    {previousPost.data.title}
                  </h4>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-orange-300 hover:shadow-md dark:border-gray-800 dark:hover:border-orange-500"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">Siguiente Artículo →</p>
                  <h4 className="mt-2 font-semibold text-gray-900 group-hover:text-orange-600 dark:text-gray-100 dark:group-hover:text-orange-400">
                    {nextPost.data.title}
                  </h4>
                </Link>
              )}
            </div>
          </div>
        </motion.article>
      </main>

      <Footer />
    </div>
  )
}
