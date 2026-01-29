import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { sortedBlogPosts, getAllTags } from '../data/posts'

export default function Blog() {
  const [mounted, setMounted] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredPosts, setFilteredPosts] = useState(sortedBlogPosts)

  const allTags = useMemo(() => getAllTags(), [])
  const filters = ['all', ...allTags]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredPosts(sortedBlogPosts)
    } else {
      setFilteredPosts(
        sortedBlogPosts.filter(
          (post) =>
            post.data.tags &&
            post.data.tags.map((tag) => tag.toLowerCase()).includes(activeFilter)
        )
      )
    }
  }, [activeFilter])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="bg-gradient-to-br from-orange-500 via-purple-600 to-yellow-400 bg-clip-text text-4xl font-black text-transparent sm:text-5xl md:text-6xl">
            Blog Satscoinsv
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Artículos sobre Bitcoin, Lightning, Linux, Nostr y Soberanía
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-orange-100 text-orange-800 ring-2 ring-orange-300 dark:bg-orange-900/30 dark:text-orange-300 dark:ring-orange-500/50'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-orange-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-orange-400'
              }`}
            >
              {filter === 'all' ? 'Todos' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Posts Grid */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-16">
          {filteredPosts.length > 0 ? (
            <div>
              <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-orange-500 dark:text-orange-400">
                <span className="h-8 w-1 rounded bg-orange-500 dark:bg-orange-400"></span>
                {activeFilter === 'all' ? 'Todos los artículos' : `Artículos sobre ${activeFilter}`}
              </h2>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-300 dark:border-gray-800 dark:bg-gray-800 dark:hover:border-orange-500 h-full"
                    >
                      <div className="mb-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>
                          📅{' '}
                          {new Date(post.data.pubDate).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span>⏱️ {post.data.readTime} min</span>
                      </div>

                      <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-orange-600 dark:text-gray-100 dark:group-hover:text-orange-400">
                        {post.data.title}
                      </h3>

                      <p className="mb-5 flex-grow text-gray-700 dark:text-gray-300">
                        {post.data.description}
                      </p>

                      <div className="mt-auto border-t border-gray-200 pt-4 dark:border-gray-800">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap gap-2">
                            {post.data.tags?.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 transition-colors hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="flex items-center gap-1 font-medium text-orange-600 transition-all group-hover:gap-2 dark:text-orange-400">
                            Leer más →
                          </span>
                        </div>
                      </div>

                      {/* Animated top bar */}
                      <motion.div
                        className="absolute -top-px left-0 h-1 origin-left rounded-t-lg bg-gradient-to-r from-orange-500 to-purple-600"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-24 text-center">
              <div className="mb-6 text-6xl">📔</div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                No hay artículos con este filtro
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Intenta seleccionar otra categoría o ver todos los artículos
              </p>
            </motion.div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
