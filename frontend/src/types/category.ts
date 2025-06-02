export interface Category {
    id: number;
    documentId: string;
    name: string;
    href: string;
  }

export default interface CategoryQueryResponse {
    data: Category[];
}

export interface Thumbnail {
  id: number;
  documentId: string;
  url: string;
}


export interface Author {
  id: number;
  documentId: string;  
  name: string;
}

interface Article {
    publishedAt: string;
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    thumbnail: Thumbnail;
    author: Author;
    category: Category;
}

export interface CategoryRecentQueryResponse {
    data: Article[];
}

