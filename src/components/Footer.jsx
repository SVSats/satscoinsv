import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="border-t border-gray-200 bg-white/95 py-12 dark:border-gray-800 dark:bg-gray-900/95 mt-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="mb-4 text-2xl">🟠 🟣 ⚡️</div>
        <p className="text-gray-700 dark:text-gray-300">
          Construyendo un futuro libre y descentralizado • © {currentYear} Satscoinsv
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Hecho con ❤️ en El Salvador</p>
      </div>
    </motion.footer>
  )
}
