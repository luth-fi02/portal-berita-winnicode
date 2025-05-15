export interface Author {
    name: string;
}

export interface Thumbnail {
  id: number;
  documentId: string;
  url: string;
}

export interface FeaturedArticle {
    id: number;
    title: string;
    status: string;
    author: Author;
  }
  
export interface FeaturedBlock {
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

  