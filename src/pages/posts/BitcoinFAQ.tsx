import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, ChevronDown, Search, BookOpen, Bitcoin, Shield, Zap, Globe, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { posts } from '@/data/posts';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, icon, isOpen, onClick }: FAQItemProps) => (
  <div 
    className={`border border-border/40 rounded-xl overflow-hidden transition-all duration-300 ${
      isOpen ? 'border-orange-500/50 bg-orange-500/5' : 'hover:border-orange-500/30'
    }`}
  >
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 p-5 text-left"
    >
      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500">
        {icon}
      </div>
      <span className="flex-1 font-semibold text-lg">{question}</span>
      <ChevronDown 
        className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
      />
    </button>
    {isOpen && (
      <div className="px-5 pb-5 pl-[4.5rem]">
        <div className="text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </div>
    )}
  </div>
);

export const BitcoinFAQ = () => {
  const post = posts.find(p => p.slug === 'bitcoin-faq-interactivo');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  if (!post) return null;

  const toggleItem = (id: string) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };

  const faqCategories = [
    {
      title: 'Lo Básico',
      icon: <Bitcoin className="w-5 h-5" />,
      items: [
        {
          id: 'what-is',
          question: '¿Qué es Bitcoin?',
          icon: '₿',
          answer: (
            <>
              <p className="mb-3">
                Bitcoin es una red <span className="bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded font-medium">peer-to-peer</span> donde cualquiera puede participar. Te permite almacenar valor de forma segura y transferirlo a cualquier persona en cualquier momento <strong>sin intermediarios</strong>.
              </p>
              <p>
                Su inflación es fija (21 millones máximo), programada y transparente. Es <strong>dinero digital efectivo</strong> en internet.
              </p>
            </>
          )
        },
        {
          id: 'why-important',
          question: '¿Por qué es importante Bitcoin?',
          icon: '⚡',
          answer: (
            <>
              <p className="mb-3">
                Permite pagos criptográficamente seguros y <strong>resistentes a la censura</strong> a través de fronteras.
              </p>
              <p>
                Es la primera forma de <span className="bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded font-medium">escasez digital absoluta</span> y no está controlada por nadie. Ningún gobierno o banco central puede interferirlo fácilmente.
              </p>
            </>
          )
        },
        {
          id: 'how-works',
          question: '¿Cómo funciona Bitcoin?',
          icon: '🔄',
          answer: (
            <>
              <p className="mb-3">
                <strong>Alice</strong> envía una transacción → <strong>miles de nodos</strong> la verifican → <strong>un minero</strong> la incluye en un bloque → una vez confirmado, <strong>Bob</strong> recibe los bitcoins.
              </p>
              <p>Todo descentralizado, seguro y verificable por cualquiera.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Historia y Creación',
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        {
          id: 'who-invented',
          question: '¿Quién inventó Bitcoin?',
          icon: '🕵️',
          answer: (
            <>
              <p className="mb-3">
                En 2009, una entidad anónima llamada <strong>Satoshi Nakamoto</strong> publicó el <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">whitepaper</a>.
              </p>
              <p>Satoshi desapareció en 2011. Desde entonces, miles de desarrolladores open-source mantienen y mejoran el protocolo.</p>
            </>
          )
        },
        {
          id: 'what-gives-value',
          question: '¿Qué le da valor a Bitcoin?',
          icon: '💎',
          answer: (
            <>
              <p className="mb-2">Es <span className="bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded font-medium">escaso</span> (solo 21 millones verificables).</p>
              <p className="mb-2">Tiene <span className="bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded font-medium">miles de millones de dólares</span> en poder computacional protegiéndolo.</p>
              <p>Su precio lo determina pura <strong>oferta y demanda</strong> en el mercado.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Control y Seguridad',
      icon: <Shield className="w-5 h-5" />,
      items: [
        {
          id: 'who-controls',
          question: '¿Quién controla la red?',
          icon: '🌐',
          answer: (
            <>
              <p className="mb-3"><strong>Todos y nadie</strong> al mismo tiempo. Nadie puede cambiar las reglas, censurar transacciones, o gastar bitcoins ajenos.</p>
              <p>Es la red <strong>más resistente a la captura</strong> del mundo.</p>
            </>
          )
        },
        {
          id: 'is-anonymous',
          question: '¿Bitcoin es anónimo?',
          icon: '🕶️',
          answer: (
            <>
              <p className="mb-3"><span className="bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded font-medium">Pseudónimo, no totalmente anónimo.</span></p>
              <p>Las direcciones no están ligadas a identidades por defecto, pero exchanges con KYC pueden vincularlas. El blockchain es público.</p>
            </>
          )
        },
        {
          id: 'what-is-blockchain',
          question: '¿Qué es el blockchain?',
          icon: '📖',
          answer: (
            <>
              <p className="mb-3">Un <strong>libro contable público, inmutable y distribuido</strong> que registra todas las transacciones.</p>
              <p>Cada bloque está criptográficamente enlazado al anterior, formando una cadena segura.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Gobierno y Legalidad',
      icon: <Globe className="w-5 h-5" />,
      items: [
        {
          id: 'can-gov-stop',
          question: '¿No puede el gobierno detenerlo?',
          icon: '🚫',
          answer: (
            <>
              <p className="mb-3">Puede prohibirlo territorialmente (China lo intentó), pero la red global sigue funcionando.</p>
              <p>Detenerlo requeriría una <span className="bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded font-medium">coordinación masiva entre gobiernos</span> que es prácticamente imposible.</p>
            </>
          )
        },
        {
          id: 'criminals',
          question: '¿No es usado por delincuentes?',
          icon: '🕵️‍♂️',
          answer: (
            <>
              <p className="mb-3">Cualquier dinero puede ser usado por delincuentes. El volumen del crimen en fiat es <strong>miles de veces mayor</strong> que en Bitcoin.</p>
              <p>La transparencia del blockchain ayuda más a la justicia que a ocultar actividades.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Tecnología y Suministro',
      icon: <Zap className="w-5 h-5" />,
      items: [
        {
          id: 'can-copy',
          question: '¿Alguien no puede copiarlo?',
          icon: '🔄',
          answer: (
            <p>Sí, hay <strong>cientos de copias</strong> ("altcoins"). Ninguna ha superado los <strong>efectos de red, seguridad y adopción</strong> de Bitcoin.</p>
          )
        },
        {
          id: 'energy-waste',
          question: '¿No desperdicia energía?',
          icon: '⚡',
          answer: (
            <>
              <p className="mb-3">Consume mucha energía, pero esa energía <strong>protege una red global de valor.</strong></p>
              <p>Cada vez más minería usa <span className="bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded font-medium">energía renovable o desperdiciada</span>. Comparado con la banca, es <strong>más eficiente por transacción.</strong></p>
            </>
          )
        },
        {
          id: 'how-many',
          question: '¿Cuántos bitcoins hay?',
          icon: '🔢',
          answer: (
            <>
              <p className="mb-2"><strong>Actualmente ≈19.8 millones (2026)</strong></p>
              <p><strong>Nunca más de 21 millones.</strong> 1 BTC = <span className="bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded font-medium">100.000.000 satoshis</span>.</p>
            </>
          )
        },
        {
          id: 'how-created',
          question: '¿Cómo se crean los bitcoins?',
          icon: '🛠️',
          answer: (
            <>
              <p className="mb-3">A través de la <strong>minería</strong>: mineros resuelven problemas matemáticos.</p>
              <p>El ganador recibe la recompensa (actualmente <span className="bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded font-medium">3.125 BTC</span>, halving cada ~4 años).</p>
            </>
          )
        },
        {
          id: 'what-is-mining',
          question: '¿Qué es la minería?',
          icon: '⛏️',
          answer: (
            <>
              <p className="mb-3">Proceso donde computadoras dedican potencia para <strong>validar transacciones y asegurar la red.</strong></p>
              <p>El primer minero en resolver añade el bloque y recibe recompensa + fees.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Comenzar',
      icon: <Lock className="w-5 h-5" />,
      items: [
        {
          id: 'where-buy',
          question: '¿Dónde puedo comprar bitcoins?',
          icon: '🛒',
          answer: (
            <>
              <p className="mb-2">En <strong>exchanges confiables</strong> (DYOR siempre).</p>
              <p className="mb-2">La forma más privada: compra una cantidad pequeña a un amigo/familiar de confianza.</p>
              <p>¡Puedes comprar fracciones! (satoshis) → <a href="https://bot.chiltota.xyz" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">recomendaciones aquí</a></p>
            </>
          )
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  const totalItems = faqCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  const filteredCount = filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);

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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-card border border-border/40 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">18</div>
            <div className="text-sm text-muted-foreground">Preguntas</div>
          </div>
          <div className="bg-card border border-border/40 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">21M</div>
            <div className="text-sm text-muted-foreground">Bitcoin máximo</div>
          </div>
          <div className="bg-card border border-border/40 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">2009</div>
            <div className="text-sm text-muted-foreground">Año inicio</div>
          </div>
          <div className="bg-card border border-border/40 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">🌍</div>
            <div className="text-sm text-muted-foreground">Global</div>
          </div>
        </div>

        {/* Search */}
        <div className="sticky top-20 z-10 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Busca tu pregunta aquí (ej: minería, privacidad, precio)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-card border-border/40"
            />
          </div>
          {searchTerm && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {filteredCount} de {totalItems} preguntas encontradas
            </p>
          )}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-500">
                {category.icon}
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <FAQItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    icon={<span className="text-lg">{item.icon}</span>}
                    isOpen={openItems.has(item.id)}
                    onClick={() => toggleItem(item.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="mt-16 p-6 md:p-8 bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-border/40 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-500" />
            Recursos Recomendados
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-orange-500 mb-2">📖 Libros</h3>
              <a 
                href="https://www.josepmariacarbo.cat/storage/app/media/ammous-saifedean-el-patron-bitcoin-deusto.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-orange-500 transition-colors"
              >
                "El Patrón Bitcoin" — Saifedean Ammous
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Visión clara sobre cómo el dinero sólido empodera al individuo.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-orange-500 mb-2">🌐 Guías Prácticas</h3>
              <a 
                href="https://darth-coin.github.io/index-es.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-orange-500 transition-colors"
              >
                Guías de DarthCoin
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Para principiantes: billeteras, nodos LN, todo explicado simple.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-orange-500 mb-2">📖 Alternativa Básica</h3>
              <a 
                href="https://myfirstbitcoin.io/wp-content/uploads/2025/01/Espanol-BD-2025.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-orange-500 transition-colors"
              >
                "Mi Primer Bitcoin — Diplomado" (PDF Gratuito)
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Hecho en El Salvador. Lenguaje sencillo. Lección sobre autocustodia.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-orange-500 mb-2">🚀 Sitios Web</h3>
              <div className="space-y-1">
                <a 
                  href="https://bitcoin.org/es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-foreground hover:text-orange-500 transition-colors"
                >
                  bitcoin.org/es — Punto de partida oficial
                </a>
                <a 
                  href="https://btcmap.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-foreground hover:text-orange-500 transition-colors"
                >
                  btcmap.org — Dónde gastar Bitcoin
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link to="/posts">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a artículos
            </Button>
          </Link>
          <Link to="/posts/bitcoin-funciona">
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500">
              Siguiente artículo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
