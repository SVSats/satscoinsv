import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Terminal, Cpu, Monitor, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { posts } from '@/data/posts';

const WarningBox = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="my-6 p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl">
    {title && <h3 className="font-bold text-lg mb-3 text-red-600 dark:text-red-400">{title}</h3>}
    <div className="text-red-700 dark:text-red-300">{children}</div>
  </div>
);

const SuccessBox = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="my-6 p-6 bg-green-500/10 border-l-4 border-green-500 rounded-r-xl">
    {title && <h3 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">{title}</h3>}
    <div className="text-green-700 dark:text-green-300">{children}</div>
  </div>
);

const HighlightBox = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="my-6 p-6 bg-gradient-to-r from-violet-500/10 to-orange-500/10 border-l-4 border-violet-500 rounded-r-xl">
    {title && <h3 className="font-bold text-lg mb-3">{title}</h3>}
    {children}
  </div>
);

const CommandBlock = ({ command, description }: { command: string; description?: string }) => (
  <div className="my-4 p-4 bg-slate-900 border-l-4 border-orange-500 rounded-r-lg font-mono text-sm overflow-x-auto">
    <code className="text-green-400">{command}</code>
    {description && <p className="text-slate-400 mt-2 text-xs">{description}</p>}
  </div>
);

const DistroCard = ({ 
  name, 
  recommended, 
  ideal, 
  reason, 
  rating 
}: { 
  name: string; 
  recommended?: boolean; 
  ideal: string; 
  reason: string; 
  rating: string;
}) => (
  <div className="p-5 bg-card border border-border/40 rounded-xl hover:border-orange-500/50 transition-all duration-300">
    <div className="flex items-center gap-2 mb-3">
      <h3 className="font-bold text-lg text-orange-500">{name}</h3>
      {recommended && (
        <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs">
          <Star className="w-3 h-3 mr-1" />
          #1 RECOMENDADO
        </Badge>
      )}
    </div>
    <p className="text-sm mb-2"><strong>Ideal si:</strong> {ideal}</p>
    <p className="text-sm text-muted-foreground mb-2"><strong>Por qué en 2026:</strong> {reason}</p>
    <p className="text-sm">{rating}</p>
  </div>
);

export const LinuxGuide = () => {
  const post = posts.find(p => p.slug === 'primeros-pasos-linux');

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
              <Badge key={tag} variant="secondary" className="bg-violet-500/10 text-violet-500">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            Entrar al mundo de Linux puede dar un poco de miedo al principio... 😅
          </p>

          <p className="mb-6">
            Palabras como <strong>terminal</strong>, <strong>paquetes</strong>, <strong>repositorios</strong> suenan intimidantes. Pero en <strong>2026</strong>, Linux es más amigable que nunca: las distros modernas instalan drivers automáticamente, tienen tiendas gráficas excelentes y funcionan perfectamente para el 90% de las tareas diarias.
          </p>

          <HighlightBox title="🎯 La clave en 2026:">
            Experimenta sin miedo. No necesitas ser experto el día 1.<br />
            Solo curiosidad + pequeños pasos = soberanía tecnológica real.
          </HighlightBox>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-violet-500" />
            1. Elige tu Distro – Recomendaciones Actualizadas 2026
          </h2>

          <p className="mb-6">
            Existen cientos, pero estas son las <strong>mejores para principiantes</strong> este año:
          </p>

          <div className="space-y-4 mb-8">
            <DistroCard
              name="🟢 Linux Mint Cinnamon"
              recommended
              ideal="Vienes de Windows y quieres algo familiar y sin complicaciones."
              reason="Estabilidad imbatible, excelente soporte multimedia out-of-the-box, comunidad gigante."
              rating="★★★★★ (la opción más segura para novatos)"
            />

            <DistroCard
              name="🟠 Ubuntu 24.04 LTS / 26.04 (próxima)"
              ideal="Quieres la mayor cantidad de tutoriales y soporte oficial."
              reason="Base de casi todo, Snap/Flatpak maduros, excelente para laptops nuevas."
              rating="★★★★☆"
            />

            <DistroCard
              name="⚡ Pop!_OS 24.04+ (con COSMIC desktop)"
              ideal="Gaming, NVIDIA, o buscas algo moderno y productivo."
              reason="COSMIC (escritorio propio en Rust) es fluido, tiling automático, drivers NVIDIA perfectos."
              rating="★★★★★ (subiendo rápido en popularidad)"
            />

            <DistroCard
              name="🟣 Zorin OS"
              ideal="Quieres que se vea casi idéntico a Windows 11 o macOS."
              reason="Temas premium incluidos, muy pulido para transición visual."
              rating="★★★★☆"
            />
          </div>

          <blockquote className="border-l-4 border-orange-500 pl-4 italic my-8">
            <strong>Recomendación final 2026 para la mayoría:</strong><br />
            <strong>Linux Mint Cinnamon</strong> → si buscas cero estrés<br />
            <strong>Pop!_OS</strong> → si tienes hardware moderno o juegas
          </blockquote>

          <h3 className="text-xl font-semibold mb-4">Prueba sin instalar (¡gratis y sin riesgo!)</h3>

          <ul className="space-y-2 mb-8 list-disc pl-6">
            <li>
              <a 
                href="https://distrosea.com/es/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                distrosea.com
              </a>
              {' '}→ prueba en el navegador
            </li>
            <li><strong>Ventoy</strong> → USB mágico con varias ISOs</li>
            <li><strong>VirtualBox</strong> o <strong>GNOME Boxes</strong> → máquina virtual en tu PC actual</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <Monitor className="w-6 h-6 text-blue-500" />
            2. Instalación Paso a Paso (sin romper nada)
          </h2>

          <WarningBox title="⚠️ Antes de empezar:">
            <ul className="space-y-1 list-disc pl-5">
              <li>Haz copia de seguridad completa</li>
              <li>Descarga ISO <strong>solo del sitio oficial</strong></li>
              <li>Usa <strong>Ventoy</strong> o <strong>Balena Etcher</strong> para USB booteable</li>
            </ul>
          </WarningBox>

          <h3 className="text-xl font-semibold mb-4">Pasos rápidos:</h3>

          <ol className="space-y-3 mb-8 list-decimal pl-6">
            <li>Arranca desde USB (entra a BIOS/UEFI con F2, Del, F12…)</li>
            <li>Elige "Probar" (Live mode) primero</li>
            <li>Cuando estés listo → doble clic en "Instalar"</li>
            <li>Marca "Instalar junto a Windows" para dual-boot</li>
            <li>Activa "codecs de terceros" y "actualizaciones durante instalación"</li>
            <li>¡Listo! 10–30 minutos y reinicia</li>
          </ol>

          <SuccessBox title="💡 Truco 2026:">
            Prueba todo en Live USB o VirtualBox antes de instalar de verdad.
          </SuccessBox>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <Monitor className="w-6 h-6 text-green-500" />
            3. Entornos de Escritorio – ¿Cuál eliges?
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left p-3">Entorno</th>
                  <th className="text-left p-3">Estilo</th>
                  <th className="text-left p-3">Ideal para</th>
                  <th className="text-left p-3">RAM (2026)</th>
                  <th className="text-left p-3">Recomendado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-semibold">Cinnamon</td>
                  <td className="p-3">Clásico tipo Windows</td>
                  <td className="p-3">Transición desde Windows</td>
                  <td className="p-3">~650 MB</td>
                  <td className="p-3 text-green-500">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-semibold">GNOME</td>
                  <td className="p-3">Moderno, minimalista</td>
                  <td className="p-3">Laptops nuevas</td>
                  <td className="p-3">~750–900 MB</td>
                  <td className="p-3">⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-semibold">KDE Plasma</td>
                  <td className="p-3">Muy personalizable</td>
                  <td className="p-3">Quienes aman configurar</td>
                  <td className="p-3">~600–700 MB</td>
                  <td className="p-3">⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="p-3 font-semibold">XFCE</td>
                  <td className="p-3">Simple y ultrarrápido</td>
                  <td className="p-3">PCs antiguas</td>
                  <td className="p-3">~300–400 MB</td>
                  <td className="p-3">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">COSMIC</td>
                  <td className="p-3">Moderno + tiling</td>
                  <td className="p-3">Gaming/productividad</td>
                  <td className="p-3">~600 MB</td>
                  <td className="p-3">⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote className="border-l-4 border-orange-500 pl-4 italic my-8">
            <strong>Tip 2026:</strong> En la pantalla de login puedes cambiar de entorno sin reinstalar. ¡Prueba varios!
          </blockquote>

          <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-amber-500" />
            4. Los 8 Comandos que Realmente Vas a Usar (2026)
          </h2>

          <p className="mb-6">
            No necesitas memorizar 200 comandos. Estos cubren el 95% de lo cotidiano:
          </p>

          <CommandBlock 
            command="sudo apt update && sudo apt upgrade -y"
            description="Actualiza todo el sistema – HAZLO SIEMPRE PRIMERO"
          />

          <CommandBlock 
            command={`pwd                  # ¿Dónde estoy?
ls                   # Lista normal
ls -la               # Lista detallada + ocultos`}
            description="Navegación básica"
          />

          <CommandBlock 
            command={`cd Documentos        # entrar
cd ..                # subir
cd ~                 # ir a home`}
            description="Moverte por carpetas"
          />

          <CommandBlock 
            command={`df -h                # Espacio en disco (muy útil)
free -h              # Memoria RAM usada`}
            description="Información del sistema"
          />

          <CommandBlock 
            command="sudo apt install vlc firefox-esr"
            description="Instalar programas (cambia a flatpak o snap si prefieres)"
          />

          <CommandBlock 
            command={`reboot               # Reiniciar
shutdown now         # Apagar ahora`}
            description="Apagar/reiniciar desde terminal"
          />

          <h3 className="text-xl font-semibold mb-4">Extra útil 2026:</h3>

          <CommandBlock 
            command="flatpak install flathub org.libreoffice.LibreOffice"
            description="Programas modernos sin romper el sistema"
          />

          <SuccessBox title="🎉 ¡Felicidades!">
            Ya tienes los fundamentos para empezar con Linux en 2026. Recuerda: la comunidad es amigable y hay tutoriales para todo. ¡Bienvenido a la soberanía tecnológica!
          </SuccessBox>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link to="/posts/herramientas-descentralizadas">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>
          </Link>
          <Link to="/posts">
            <Button className="bg-gradient-to-r from-violet-500 to-purple-500">
              Ver todos los artículos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
