import { Link } from 'react-router-dom';
import { Tag, ArrowRight } from 'lucide-react';
import { getAllTags, getPostsByTag } from '@/data/posts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Tags = () => {
  const tags = getAllTags();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Etiquetas</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora nuestro contenido por temas. Encuentra artículos sobre Bitcoin, 
            Lightning, Nostr, Linux y más.
          </p>
        </div>

        {/* Tags Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tags.map((tag) => {
            const postsWithTag = getPostsByTag(tag);
            return (
              <Link key={tag} to={`/tags/${tag}`}>
                <Card className="group hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                          <Tag className="w-5 h-5 text-orange-500" />
                        </div>
                        <CardTitle className="text-lg capitalize">{tag}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="bg-muted">
                        {postsWithTag.length}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {postsWithTag.length} {postsWithTag.length === 1 ? 'artículo' : 'artículos'}
                    </p>
                    <div className="flex items-center text-sm text-orange-500 font-medium group-hover:gap-2 transition-all">
                      Ver artículos
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
