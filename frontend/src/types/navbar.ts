interface Categories {
  id: number;
  documentId: string;
  name: string;
  href: string;
}

interface Link {
    id: number;
    categories: Categories[];
  }

interface NavigationBarBlock {
    __component: string;
    id: number;
    link: Link[];
  }
  
export interface NavigationBarQueryResponse {
    data: {
      id: number;
      documentId: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      blocks: NavigationBarBlock[];
    };
  }

  