export interface Category {
  id: number;
  documentId: string;
  href: string;
}

export interface Author {
  id: number;
  documentId: string;  
  name: string;
}

export interface Thumbnail {
  id: number;
  documentId: string;
  url: string;
}

export interface FeaturedArticle {
    id: number;
    documentId: string;
    title: string;
    publishedAt: string;
    slug: string;
    description: string;
    author: Author;
    category: Category;
    thumbnail: Thumbnail;
  }
  
interface FeaturedBlock {
    __component: string;
    id: number; 
    articles: FeaturedArticle[];
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

  