export interface NavigationBarLink {
    id: number;
    isExternal: boolean;
    href: string;
    label: string;
  }
  
  export interface NavigationBarBlock {
    __component: 'layout.navigation-bar';
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

  