import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
      <Navigation />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-24 text-center"
        >
          <h1 className="bg-gradient-to-br from-orange-400 via-purple-500 to-yellow-400 bg-clip-text text-4xl font-black text-transparent sm:text-5xl md:text-6xl">
            ¡Bienvenido a SatsCoinSV!
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Aquí encontrarás mis publicaciones sobre Bitcoin, Nostr y tecnología.
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-24"
        >
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-800/50">
            <p className="mb-6 text-lg">
              Soy un entusiasta de Linux, bitcoin y Nostr. Creo en la soberanía individual, el
              dinero duro y las herramientas libres para construir un futuro más justo y resistente
              a la censura.
            </p>

            <blockquote className="border-l-4 border-orange-400 py-2 pl-6 my-8 italic text-xl font-medium">
              Vuélvete soberano, vuélvete libre. Ejecutando Bitcoin🟠 Nostr🟣 Lightning⚡️
            </blockquote>

            <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
              
                href="https://njump.me/nprofile1qqsx9lwepa997ss4pzslc3c3t0jg2rd8ntyzru6wef2phxxe3jzz3cqpz4mhxue69uhhyetvv9ujuerpd46hxtnfduhsz9nhwden5te0wfjkccte9ekk7um5wgh8qatz9uq32amnwvaz7tmwdaehgu3wdau8gu3wv3jhvtcm832tj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-orange-500 transition-colors hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
              >
                👤 Puedes encontrarme en Nostr
              </a>
            </div>
          </div>
        </motion.div>

        {/* History Section */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
        >
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <span className="h-8 w-1 rounded bg-orange-500 dark:bg-orange-400"></span>
            Un poco de mi historia con Bitcoin
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p>
              Mi incursión en Bitcoin comenzó en el año 2019. Un amigo –quien además era el
              contador del lugar donde trabajé durante 15 años– me preguntó si ya había invertido
              en Bitcoin. Yo ya había escuchado algo al respecto, pero en ese momento no le di
              mucha importancia.
            </p>

            <p>
              Me mostró cómo había comprado algunos satoshis a través de un exchange y cómo, en un
              par de años, su inversión había crecido. Aunque en ese momento no entendía mucho,
              esa conversación dejó en mí una semilla de curiosidad.
            </p>

            <p>
              Lamentablemente, en 2020 llegó la pandemia. Aun así, esa pequeña chispa se mantuvo
              encendida. Empecé a preguntarme más sobre Bitcoin, especialmente al ver que mi amigo
              había ganado algunos dólares extra con él. Así comenzó mi aventura, con un deseo
              cada vez más fuerte de entender qué era realmente Bitcoin.
            </p>

            <p>
              Él y yo teníamos un proyecto en mente relacionado con Bitcoin, incluso antes de que
              fuera ley en El Salvador. Pero tristemente, cayó enfermo por culpa del COVID-19 y no
              logró recuperarse en 2021. Su pérdida fue muy dura, pero su influencia fue
              determinante en mi camino.
            </p>

            <p>
              En mi búsqueda por aprender más, encontré una especie de "madriguera del conejo" en
              un canal de Telegram. Allí descubrí una wallet aún en fase beta llamada Blixt
              Wallet, y con ella a una figura clave en mi historia: un usuario conocido como
              DarthCoin. Él brindaba soporte técnico sin pedir nada a cambio. Una gran persona,
              sin duda.
            </p>

            <p>
              DarthCoin me ayudó a configurar mi primera wallet Lightning y me explicó, paso a
              paso, cómo usarla siendo principiante. Fue un proceso de prueba y error, me
              equivoqué varias veces, pero eso solo despertó en mí más curiosidad.
            </p>

            <p>
              Quise ir más allá. Compré por Amazon una Raspberry Pi 4 y monté mi primer nodo
              corriendo Bitcoin Core. Darth me ayudó también en esa etapa, pero como él mismo
              decía: el resto depende de uno mismo, si realmente quiere ser libre y soberano.
            </p>

            <p>
              Desde entonces, sigo instruyéndome y ayudando a otros sobre el dinero duro y el uso
              de herramientas libres. Mi objetivo es claro: construir un futuro más justo, más
              resistente a la censura y verdaderamente descentralizado.
            </p>

            <blockquote className="border-l-4 border-purple-500 rounded-r-lg bg-gray-100 py-4 pl-6 dark:bg-gray-800/50 italic text-lg">
              <p className="font-medium">
                La privacidad es necesaria para una sociedad abierta en la era electrónica.
                Privacidad no es secreto. Un asunto privado es algo que uno no quiere que sepa
                todo el mundo, pero un asunto secreto es algo que uno no quiere que sepa nadie. La
                privacidad es el poder de revelarse selectivamente al mundo.
              </p>
              <p className="mt-2 text-right font-semibold text-purple-600 dark:text-purple-400">
                – Eric Hughes
              </p>
            </blockquote>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
