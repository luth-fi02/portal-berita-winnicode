export interface NavigationBarLink {
    id: number;
    href: string;
    label: string;
  }
  
  export interface NavigationBarBlock {
    __component: string;
    id: number;
    link: NavigationBarLink[];
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

  