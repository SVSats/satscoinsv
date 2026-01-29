import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag } from 'lucide-react';
import { getPostsByTag } from '@/data/posts';
import { PostCard } from '@/components/blog/PostCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const TagPosts = () => {
  const { tag } = useParams<{ tag: string }>();
  const posts = tag ? getPostsByTag(tag) : [];

  if (posts.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Tag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Etiqueta no encontrada</h2>
            <p className="text-muted-foreground mb-6">
              No hay artículos con la etiqueta "{tag}".
            </p>
            <Link to="/tags">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ver todas las etiquetas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/tags" 
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a etiquetas
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <Badge 
            variant="secondary" 
            className="mb-4 px-4 py-1.5 text-base bg-orange-500/10 text-orange-600 dark:text-orange-400"
          >
            <Tag className="w-4 h-4 mr-2" />
            {tag}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 capitalize">
            Artículos sobre {tag}
          </h1>
          <p className="text-muted-foreground">
            {posts.length} {posts.length === 1 ? 'artículo encontrado' : 'artículos encontrados'}
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
