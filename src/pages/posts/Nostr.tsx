import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Globe, Shield, Zap, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { posts } from '@/data/posts';

const WarningBox = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="my-6 p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
    {title && <h3 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">{title}</h3>}
    <div className="text-red-700 dark:text-red-300">{children}</div>
  </div>
);

const InfoBox = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="my-6 p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-xl">
    {title && <h3 className="font-bold text-lg mb-3 text-blue-600 dark:text-blue-400">{title}</h3>}
    <div className="text-blue-700 dark:text-blue-300">{children}</div>
  </div>
);

const SuccessBox = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="my-6 p-6 bg-green-500/10 border-l-4 border-green-500 rounded-r-xl">
    {title && <h3 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">{title}</h3>}
    <div className="text-green-700 dark:text-green-300">{children}</div>
  </div>
);

export const Nostr = () => {
  const post = posts.find(p => p.slug === 'herramientas-descentralizadas');

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
              <Badge key={tag} variant="secondary" className="bg-purple-500/10 text-purple-500">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative mb-12 p-8 md:p-16 rounded-2xl overflow-hidden text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-700" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyem0tNiA2aC00djJoNHYtMnptMC02di00aC00djRoNHptLTYgNmgtNHYyaDR2LTJ6bTAtNnYtNGgtNHY0aDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              🌐 Internet para hoy… Nostr para mañana
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              La web centralizada te vigila, censura y monetiza.<br />
              En 2026, la alternativa real ya está aquí: <strong>Nostr</strong>.
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-violet-500" />
            La Realidad 2026: ¿Seguimos aceptando esto?
          </h2>

          <WarningBox title="Problemas que NO han desaparecido:">
            <ul className="space-y-2 list-disc pl-5">
              <li>🔒 Censura selectiva por algoritmos y políticas corporativas</li>
              <li>👤 Tu identidad y datos vendidos o congelados sin aviso</li>
              <li>💸 Contenido tuyo → ganancias para la plataforma</li>
              <li>🧠 Adicción diseñada + feeds manipulados</li>
            </ul>
          </WarningBox>

          <InfoBox title="Resultado:">
            Poder absoluto en pocas manos. Tú solo eres el producto.
          </InfoBox>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-amber-500" />
            Centralizado vs Descentralizado – Comparación 2026
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-card border border-red-500/30 rounded-xl">
              <h3 className="text-lg font-bold text-red-500 mb-4">🏛️ Centralizado (Twitter/X, Facebook, etc.)</h3>
              <ul className="space-y-2 text-sm">
                <li>• Control: Una empresa decide todo</li>
                <li>• Riesgo: Ban permanente = pérdida total</li>
                <li>• Privacidad: Datos recolectados y vendidos</li>
                <li>• Libertad: Condicionada</li>
              </ul>
            </div>

            <div className="p-6 bg-card border border-green-500/30 rounded-xl">
              <h3 className="text-lg font-bold text-green-500 mb-4">🌐 Descentralizado (Nostr)</h3>
              <ul className="space-y-2 text-sm">
                <li>• Control: Distribuido – tú eliges relays y clientes</li>
                <li>• Riesgo: Resistente a censura y fallos</li>
                <li>• Privacidad: Clave privada = soberanía total</li>
                <li>• Libertad: Real y sin permiso</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-500" />
            🔥 Nostr: La revolución que ya ganó en 2026
          </h2>

          <SuccessBox title="¿Por qué Nostr está explotando ahora?">
            <p className="mb-4"><strong>Protocolo simple + abierto + resistente a censura</strong></p>
            <ul className="space-y-2 list-disc pl-5">
              <li>🔓 Sin CEO ni junta directiva</li>
              <li>⚡ Identidad portable (npub tuya forever)</li>
              <li>💜 Zaps (pagos Lightning integrados)</li>
              <li>🌍 Miles de relays → imposible apagar</li>
            </ul>
            <p className="mt-4 font-bold">¡Tu voz no depende de ninguna empresa!</p>
          </SuccessBox>

          <h3 className="text-xl font-semibold mb-4">Mejores Clientes Nostr 2026 (Recomendados)</h3>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 bg-card border border-violet-500/20 rounded-xl hover:border-violet-500/50 transition-colors">
              <h4 className="font-bold text-violet-500 text-lg mb-2">Primal (Web + Android)</h4>
              <p className="text-sm mb-2"><strong>Ideal para:</strong> Experiencia limpia tipo Twitter, muy rápido, zaps fáciles.</p>
              <Badge className="bg-amber-500/20 text-amber-600 dark:text-amber-400">⭐ Recomendado para principiantes</Badge>
            </div>

            <div className="p-5 bg-card border border-violet-500/20 rounded-xl hover:border-violet-500/50 transition-colors">
              <h4 className="font-bold text-violet-500 text-lg mb-2">Amethyst (Android)</h4>
              <p className="text-sm mb-2"><strong>Ideal para:</strong> Todas las funciones (long-form, chats, zaps avanzados).</p>
              <Badge className="bg-violet-500/20 text-violet-600 dark:text-violet-400">Feature-rich y open-source</Badge>
            </div>

            <div className="p-5 bg-card border border-violet-500/20 rounded-xl hover:border-violet-500/50 transition-colors">
              <h4 className="font-bold text-violet-500 text-lg mb-2">Damus (iOS)</h4>
              <p className="text-sm mb-2"><strong>Ideal para:</strong> Usuarios Apple – simple, rápido, comunidad grande.</p>
              <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400">Uno de los más populares en iPhone</Badge>
            </div>

            <div className="p-5 bg-card border border-violet-500/20 rounded-xl hover:border-violet-500/50 transition-colors">
              <h4 className="font-bold text-violet-500 text-lg mb-2">Iris / Nostrudel (Web)</h4>
              <p className="text-sm mb-2"><strong>Ideal para:</strong> Acceso rápido desde cualquier navegador, sin instalar nada.</p>
              <Badge className="bg-green-500/20 text-green-600 dark:text-green-400">Excelente para empezar hoy mismo</Badge>
            </div>

            <div className="p-5 bg-card border border-violet-500/20 rounded-xl hover:border-violet-500/50 transition-colors md:col-span-2">
              <h4 className="font-bold text-violet-500 text-lg mb-2">YakiHonne (Web + Mobile)</h4>
              <p className="text-sm mb-2"><strong>Ideal para:</strong> Artículos largos, blogs, contenido profundo (como este post).</p>
              <Badge className="bg-purple-500/20 text-purple-600 dark:text-purple-400">Perfecto para escritores y lectores serios</Badge>
            </div>
          </div>

          <InfoBox>
            <strong>Tip:</strong> Usa varios clientes con la misma clave npub → ves lo mismo en todos.
          </InfoBox>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-green-500" />
            Cómo Empezar Hoy Mismo (Guía Rápida 5 Minutos)
          </h2>

          <SuccessBox>
            <ol className="space-y-4 list-decimal pl-5">
              <li>
                Genera tu clave en{' '}
                <a 
                  href="https://nstart.me/es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 underline"
                >
                  nostr.how/keys
                </a>
                {' '}o en un cliente (¡guarda la nsec privada offline!)
              </li>
              <li>Elige un cliente: Primal o Iris para empezar fácil</li>
              <li>
                Agrega relays recomendados (copia-pega estos en ajustes):
                <div className="mt-2 p-3 bg-black/20 rounded-lg font-mono text-sm">
                  <code>wss://relay.damus.io</code><br />
                  <code>wss://nostr.wine</code><br />
                  <code>wss://filter.nostr.wine</code><br />
                  <code>wss://nos.lol</code>
                </div>
              </li>
              <li>Sigue gente: busca npub de Bitcoiners, salvadoreños, devs Nostr</li>
              <li>Publica tu primer "¡Hola Nostr desde El Salvador! 🟠⚡"</li>
            </ol>
            <p className="mt-6 font-bold">
              ¡Ya eres parte de la red libre! Comparte tu npub en comentarios o en Nostr.
            </p>
          </SuccessBox>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-amber-500" />
            Conclusión: La soberanía no espera
          </h2>

          <p className="text-lg mb-4">
            En 2026, Nostr no es "el futuro"… es <strong>el presente para quienes lo usan</strong>.
          </p>

          <p className="mb-4">
            No más pedir permiso. No más miedo a bans. No más identidad robada.
          </p>

          <p className="mb-4">
            Solo tú, tu clave y una red que nadie puede apagar.
          </p>

          <p className="text-lg">
            ¿Listo para migrar tu voz digital?<br />
            Empieza hoy → tu libertad te está esperando.
          </p>

          <p className="text-center mt-8 text-muted-foreground">
            🟠 🟣 ⚡️ #Nostr #LibertadDigital #BitcoinElSalvador
          </p>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link to="/posts/bitcoin-funciona">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>
          </Link>
          <Link to="/posts/primeros-pasos-linux">
            <Button className="bg-gradient-to-r from-violet-500 to-purple-500">
              Siguiente artículo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
