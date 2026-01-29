import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import type { PostMeta } from '@/types/post';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface PostCardProps {
  post: PostMeta;
  featured?: boolean;
}

export const PostCard = ({ post, featured = false }: PostCardProps) => {
  const formattedDate = new Date(post.pubDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (featured) {
    return (
      <Card className="group overflow-hidden border-border/40 bg-gradient-to-br from-card to-card/80 hover:border-orange-500/50 transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full overflow-hidden">
            {post.image ? (
              <img 
                src={post.image} 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="text-xs bg-orange-500/10 text-orange-500 hover:bg-orange-500/20"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {post.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
            <Link 
              to={`/posts/${post.slug}`}
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
            >
              Leer más
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="group overflow-hidden border-border/40 bg-card hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        {post.image ? (
          <img 
            src={post.image} 
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="text-xs bg-orange-500/10 text-orange-500 hover:bg-orange-500/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-orange-500 transition-colors">
          {post.title}
        </h3>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {post.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formattedDate}
          </span>
        </div>
        <Link 
          to={`/posts/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm text-orange-500 font-medium hover:gap-2 transition-all"
        >
          Leer
          <ArrowRight className="w-3 h-3" />
        </Link>
      </CardFooter>
    </Card>
  );
};
