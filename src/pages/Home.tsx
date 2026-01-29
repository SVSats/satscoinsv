import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Zap, Shield, Bitcoin } from 'lucide-react';
import { posts } from '@/data/posts';
import { PostCard } from '@/components/blog/PostCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Home = () => {
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-purple-500/5 to-blue-500/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-1.5 text-sm bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
            >
              <Bitcoin className="w-4 h-4 mr-2" />
              Educación Bitcoin & Soberanía Digital
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
             Empieza por tu,{' '}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                libertad tecnológica
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Guías prácticas sobre Bitcoin, Lightning Network, Nostr y Linux. 
              Contenido actualizado 2026 desde El Salvador – Nación Bitcoin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/posts">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Ver Artículos
                </Button>
              </Link>
              <Link to="/tags">
                <Button variant="outline" size="lg">
                  <Zap className="w-4 h-4 mr-2" />
                  Explorar Temas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-card border border-border/40 hover:border-orange-500/30 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange-500/10 flex items-center justify-center">
                <Bitcoin className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Bitcoin & Lightning</h3>
              <p className="text-sm text-muted-foreground">
                Entiende cómo funciona Bitcoin realmente y usa Lightning para pagos instantáneos.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-card border border-border/40 hover:border-purple-500/30 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Soberanía Digital</h3>
              <p className="text-sm text-muted-foreground">
                Nostr, Linux y herramientas para recuperar tu privacidad y libertad online.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-card border border-border/40 hover:border-green-500/30 transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Guías Prácticas</h3>
              <p className="text-sm text-muted-foreground">
                Tutoriales paso a paso para principiantes. Sin tecnicismos innecesarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Artículo Destacado</h2>
            <Link to="/posts" className="text-sm text-orange-500 hover:text-orange-600 flex items-center gap-1">
              Ver todos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <PostCard post={featuredPost} featured />
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Artículos Recientes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/posts">
              <Button variant="outline" size="lg">
                Ver Todos los Artículos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyem0tNiA2aC00djJoNHYtMnptMC02di00aC00djRoNHptLTYgNmgtNHYyaDR2LTJ6bTAtNnYtNGgtNHY0aDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
            
            <div className="relative p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Listo para comenzar tu viaje?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Explora nuestras guías y empieza a tomar control de tu soberanía financiera y digital hoy mismo.
              </p>
              <Link to="/posts">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-orange-600 hover:bg-white/90"
                >
                  Empezar Ahora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
