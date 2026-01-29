import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
      <Navigation />

      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h1 className="mb-4 text-9xl font-bold text-orange-500 dark:text-orange-400">404</h1>

          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
            Página no encontrada
          </h2>

          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Lo sentimos, la página que buscas no existe. Pero don't worry, puedes volver al inicio
            o al blog.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600 dark:hover:bg-orange-600"
            >
              Ir al Inicio
            </Link>
            <Link
              to="/blog"
              className="rounded-lg border-2 border-orange-500 px-8 py-3 font-semibold text-orange-500 transition-colors hover:bg-orange-50 dark:hover:bg-gray-800"
            >
              Ver el Blog
            </Link>
          </div>

          {/* Decorative emoji */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="mt-16 text-6xl"
          >
            🟠
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
