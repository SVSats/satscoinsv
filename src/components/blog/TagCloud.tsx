import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getAllTags, getPostsByTag } from '@/data/posts';

export const TagCloud = () => {
  const tags = getAllTags();

  const getTagCount = (tag: string) => {
    return getPostsByTag(tag).length;
  };

  // Sort tags by count (most used first)
  const sortedTags = [...tags].sort((a, b) => getTagCount(b) - getTagCount(a));

  return (
    <div className="flex flex-wrap gap-2">
      {sortedTags.map((tag) => {
        const count = getTagCount(tag);
        return (
          <Link key={tag} to={`/tags/${tag}`}>
            <Badge 
              variant="secondary"
              className="text-sm px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 transition-colors cursor-pointer"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
              <span className="ml-1 text-xs opacity-60">({count})</span>
            </Badge>
          </Link>
        );
      })}
    </div>
  );
};

export const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link key={tag} to={`/tags/${tag}`}>
          <Badge 
            variant="secondary"
            className="text-xs bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 transition-colors cursor-pointer"
          >
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </Badge>
        </Link>
      ))}
    </div>
  );
};
