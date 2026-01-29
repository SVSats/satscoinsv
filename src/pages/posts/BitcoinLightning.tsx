import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, BookOpen, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { posts } from '@/data/posts';

const HighlightBox = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="my-6 p-6 bg-gradient-to-r from-orange-500/10 to-purple-500/10 border-l-4 border-orange-500 rounded-r-xl">
    {title && <h3 className="font-bold text-lg mb-3">{title}</h3>}
    {children}
  </div>
);

const SuccessBox = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="my-6 p-6 bg-green-500/10 border-l-4 border-green-500 rounded-r-xl">
    {title && <h3 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">{title}</h3>}
    <div className="text-green-700 dark:text-green-300">{children}</div>
  </div>
);

const WarningBox = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="my-6 p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
    {title && <h3 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">{title}</h3>}
    <div className="text-red-700 dark:text-red-300">{children}</div>
  </div>
);

export const BitcoinLightning = () => {
  const post = posts.find(p => p.slug === 'bitcoin-funciona');

  if (!post) return null;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/posts" 
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a artículos
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-muted-foreground text-lg mb-6">{post.description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.pubDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="bg-orange-500/10 text-orange-500">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Quote */}
          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-muted-foreground my-8">
            "Se debe confiar en que los bancos guarden nuestro dinero y lo transfieran electrónicamente, pero lo prestan en oleadas de burbujas crediticias con apenas una fracción en reserva."
            <footer className="text-sm mt-2 not-italic">— Satoshi Nakamoto (2008)</footer>
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            En 2026, Bitcoin ya no es solo "dinero digital". En El Salvador es <strong>reserva nacional</strong>, herramienta diaria y símbolo de soberanía. El gobierno sigue comprando BTC consistentemente, Lightning permite pagar café en segundos con sats casi gratis, y la educación sobre Bitcoin se integra con IA en escuelas.
          </p>

          <p className="text-xl font-semibold mb-8">
            ¿Listo para entender por qué esto cambia todo?
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-orange-500" />
            ¿Cómo Funciona Bitcoin? (Explicación Sencilla para Principiantes 2026)
          </h2>

          <p className="mb-4">
            Bitcoin es <strong>dinero digital peer-to-peer</strong> (de persona a persona) que nadie controla centralmente.
          </p>

          <ul className="space-y-2 mb-6 list-disc pl-6">
            <li>No hay banco, gobierno ni empresa que pueda congelar tu cuenta.</li>
            <li>Solo hay reglas matemáticas (código abierto) que todos siguen.</li>
            <li>Máximo 21 millones de BTC → escasez real (como el oro, pero digital y divisible hasta 8 decimales).</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Pasos básicos de cómo opera:</h3>

          <ol className="space-y-4 mb-8 list-decimal pl-6">
            <li><strong>Tú creas una billetera</strong> → generas claves (pública para recibir, privada para gastar).</li>
            <li><strong>Envías BTC</strong> → firmas la transacción con tu clave privada.</li>
            <li><strong>La red verifica</strong> → miles de nodos confirman que no gastes lo mismo dos veces (sin banco intermediario).</li>
            <li><strong>Se registra en la blockchain</strong> → libro contable público, inmutable y distribuido.</li>
            <li><strong>Miners aseguran todo</strong> → resuelven puzzles matemáticos para añadir bloques cada ~10 min y reciben recompensa (nueva emisión + fees).</li>
          </ol>

          <p className="mb-6">
            <strong>Resultado:</strong> Dinero que puedes enviar a cualquier persona en el mundo en minutos (o segundos con Lightning), sin pedir permiso, sin KYC obligatorio, sin censura.
          </p>

          <HighlightBox title="La diferencia clave 2026:">
            En bancos: confías en terceros que imprimen dinero ilimitado y pueden bloquearte.<br />
            En Bitcoin: confías en matemáticas + código auditado por miles. Tú custodias → tú mandas.
          </HighlightBox>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-500" />
            Lightning Network: Bitcoin Rápido y Barato para el Día a Día
          </h2>

          <p className="mb-4">
            Bitcoin on-chain es seguro pero lento (~10 min por confirmación) y caro para compras pequeñas. Aquí entra <strong>Lightning Network</strong> (capa 2 sobre Bitcoin).
          </p>

          <h3 className="text-xl font-semibold mb-4">Explicación simple:</h3>

          <ul className="space-y-3 mb-6 list-disc pl-6">
            <li>Abres un "canal" con alguien (o con hubs populares) → depositas BTC ahí.</li>
            <li>Haces miles de transacciones instantáneas y casi gratis dentro del canal (como anotar en una libreta compartida).</li>
            <li>Cuando cierras el canal → solo la diferencia final se registra en la blockchain.</li>
            <li>Todo verificado criptográficamente → imposible engañar.</li>
          </ul>

          <p className="mb-6">
            En 2026 en El Salvador: pagas pupusas, remesas, transporte con sats (fracciones de centavo) en segundos. Apps como Wallet of Satoshi, Muun, Phoenix o Breez lo hacen fácil.
          </p>

          <SuccessBox title="Beneficios Lightning 2026:">
            <ul className="space-y-1 list-disc pl-5">
              <li>Instantáneo (menos de 1 segundo)</li>
              <li>Fees ridículos (~0.0001–0.001 USD)</li>
              <li>Privacidad mejorada</li>
              <li>Perfecto para micropagos diarios</li>
            </ul>
          </SuccessBox>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-purple-500" />
            Recursos Recomendados 2026 (Actualizados)
          </h2>

          <h3 className="text-xl font-semibold mb-4">📚 Libros Imprescindibles (en español)</h3>

          <div className="space-y-4 mb-8">
            <div className="p-4 bg-card border border-border/40 rounded-lg">
              <h4 className="font-bold">El Patrón Bitcoin – Saifedean Ammous</h4>
              <a 
                href="https://saifedean.com/book/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline text-sm"
              >
                Descarga PDF gratuita o compra
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Historia del dinero + por qué Bitcoin es dinero sólido. Lectura obligatoria para entender soberanía.
              </p>
            </div>

            <div className="p-4 bg-card border border-border/40 rounded-lg">
              <h4 className="font-bold">Dominando Bitcoin – Andreas M. Antonopoulos</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Versión en español gratuita o actualizada. Explicación técnica pero accesible. Ideal después del primero.
              </p>
            </div>

            <div className="p-4 bg-card border border-border/40 rounded-lg">
              <h4 className="font-bold">Mi Primer Bitcoin – Diplomado 2026</h4>
              <a 
                href="https://myfirstbitcoin.io/wp-content/uploads/2025/01/Espanol-BD-2025.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline text-sm"
              >
                PDF gratuito actualizado 2026
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Hecho en El Salvador, lenguaje ultra-sencillo, lección de autocustodia.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">🌐 Guías Prácticas y Cursos</h3>

          <ul className="space-y-3 mb-8 list-disc pl-6">
            <li>
              <strong>Guías de DarthCoin</strong> —{' '}
              <a 
                href="https://darth-coin.github.io/index-es.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                darth-coin.github.io/index-es.html
              </a>
              <br />
              <span className="text-sm text-muted-foreground">Billeteras, nodos, autocustodia, Lightning, todo paso a paso y en español.</span>
            </li>
            <li>
              <strong>bitcoin.org/es/como-empezar</strong> — Guía oficial: billeteras recomendadas, seguridad, primeros pasos.
            </li>
            <li>
              <strong>Mi Primer Bitcoin – Escuela Online 2026</strong> —{' '}
              <a 
                href="https://es.myfirstbitcoin.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                es.myfirstbitcoin.io
              </a>
              <br />
              <span className="text-sm text-muted-foreground">Cursos gratuitos, a tu ritmo, con certificado. Incluye Lightning y autocustodia.</span>
            </li>
            <li>
              <strong>BTC Map</strong> —{' '}
              <a 
                href="https://btcmap.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                btcmap.org
              </a>
              <br />
              <span className="text-sm text-muted-foreground">Mapa interactivo: dónde gastar Bitcoin en El Salvador y el mundo.</span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">⚡ Para Profundizar en Privacidad y Soberanía</h3>

          <p className="mb-6">
            <a 
              href="https://www.giacomozucco.com/a-treatise-on-bitcoin-and-privacy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              Un tratado sobre Bitcoin y Privacidad – Giacomo Zucco
            </a>
            <br />
            <span className="text-sm text-muted-foreground">Ideología pura + cómo protegerte realmente.</span>
          </p>

          <WarningBox title="Advertencia 2026:">
            <ul className="space-y-1 list-disc pl-5">
              <li>Nunca compartas tu semilla (12–24 palabras).</li>
              <li>No uses exchanges como billetera principal (no tu clave = no tu BTC).</li>
              <li>Empieza con cantidades pequeñas y practica autocustodia.</li>
            </ul>
          </WarningBox>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-500" />
            Tu Próximo Paso Hoy
          </h2>

          <SuccessBox title="Acción inmediata:">
            <ol className="space-y-2 list-decimal pl-5">
              <li>Descarga una billetera soberana: BlueWallet, Muun o Phoenix (soporta Lightning).</li>
              <li>Compra unos pocos dólares en sats (en El Salvador: Chivo, Bitrefill, o P2P).</li>
              <li>Envía una micro-transacción por Lightning a un amigo.</li>
              <li>Lee el primer capítulo de "El Patrón Bitcoin".</li>
              <li>Comparte tu experiencia en Nostr o aquí abajo.</li>
            </ol>
          </SuccessBox>

          <p className="text-lg mt-8">
            Bitcoin no es solo inversión. Es <strong>herramienta de libertad</strong>. En 2026, con El Salvador liderando, el camino está más claro que nunca.
          </p>

          <p className="text-lg font-semibold mt-4">
            La soberanía empieza cuando dejas de pedir permiso para usar tu dinero.
          </p>

          <p className="mt-6">
            ¿Ya tienes tu primera billetera soberana? Cuéntame abajo o en Nostr. ¡Vamos! 🟠 ⚡
          </p>

          <p className="text-center mt-8 text-muted-foreground">
            🟠 🟣 ⚡️ Hecho en El Salvador – Nación Bitcoin
          </p>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link to="/posts/bitcoin-faq-interactivo">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>
          </Link>
          <Link to="/posts/herramientas-descentralizadas">
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500">
              Siguiente artículo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
