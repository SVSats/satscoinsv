import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { posts } from '@/data/posts';
import { PostCard } from '@/components/blog/PostCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Posts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => {
    const searchLower = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.description.toLowerCase().includes(searchLower) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Todos los Artículos</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra colección de guías sobre Bitcoin, Lightning Network, 
            Nostr, Linux y soberanía digital.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10 py-6 text-lg"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setSearchTerm('')}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo encontrado' : 'artículos encontrados'}
          </p>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No se encontraron artículos</h3>
            <p className="text-muted-foreground">
              Intenta con otra búsqueda o explora las etiquetas.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
