export interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
}

interface Author {
    name: string;
}

interface Thumbnail {
  id: number;
  documentId: string;
  url: string;
}

interface FeaturedArticle {
    id: number;
    title: string;
    status: string;
    author: Author;
  }
  
interface FeaturedBlock {
    __component: string;
    id: number;
    description: string;
    thumbnail: Thumbnail;  
    article: FeaturedArticle;
}

export interface FeaturedQueryResponse {
    data: {
      id: number;
      documentId: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      blocks: FeaturedBlock[];
  };
}

  