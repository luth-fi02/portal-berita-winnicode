interface Category {
  id: number;
  documentId: string;
  href: string;
}

interface Author {
  id: number;
  documentId: string;  
  name: string;
}

interface Thumbnail {
  id: number;
  documentId: string;
  url: string;
}

interface FeaturedArticle {
    id: number;
    documentId: string;
    title: string;
    publishedAt: string;
    slug: string;
    author: Author;
    category: Category;
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

  