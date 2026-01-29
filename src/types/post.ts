export interface Post {
  id: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  tags: string[];
  slug: string;
  image?: string;
  content: React.ReactNode;
}

export interface PostMeta {
  id: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  tags: string[];
  slug: string;
  image?: string;
}
