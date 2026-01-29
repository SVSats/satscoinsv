import { Bitcoin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 group-hover:scale-110 transition-transform">
                <Bitcoin className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Satscoinsv
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Educación sobre Bitcoin, soberanía financiera y herramientas descentralizadas. 
              Hecho en El Salvador – Nación Bitcoin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/posts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Todos los Artículos
                </Link>
              </li>
              <li>
                <Link to="/tags" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Etiquetas
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://bitcoin.org/es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bitcoin.org
                </a>
              </li>
              <li>
                <a 
                  href="https://btcmap.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  BTC Map
                </a>
              </li>
              <li>
                <a 
                  href="https://darth-coin.github.io/index-es.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Guías de DarthCoin
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Satscoinsv. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Zap className="w-4 h-4 text-amber-500" />
              Apoya el desarrollo con algunos satoshis:
              ⚡ satscoinsv@blink.sv
              ⚡ marvincha01@sats.mobi
              Hecho con ❤️ en El Salvador 🇸🇻
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
