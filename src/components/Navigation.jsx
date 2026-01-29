import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ type: 'spring', damping: 25 }} 
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-orange-500 transition-opacity hover:opacity-80 dark:text-orange-400">
            Satscoinsv <span>🟠</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/" className="font-medium transition-colors hover:text-orange-500 dark:hover:text-orange-400">
              Inicio
            </Link>
            <Link to="/blog" className="font-medium transition-colors hover:text-orange-500 dark:hover:text-orange-400">
              Blog
            </Link>
            <a 
              href="https://njump.me/nprofile1qqsx9lwepa997ss4pzslc3c3t0jg2rd8ntyzru6wef2phxxe3jzz3cqpz4mhxue69uhhyetvv9ujuerpd46hxtnfduhsz9nhwden5te0wfjkccte9ekk7um5wgh8qatz9uq32amnwvaz7tmwdaehgu3wdau8gu3wv3jhvtcm832tj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400"
            >
              Nostr <span className="text-lg">⚡️</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
