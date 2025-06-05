export interface RecentCategory {
    id: number;
    documentId: string;
    href: string;
}

interface Article {
    id: number;
    documentId: string;
    title: string;
    publishedAt: string;
    description: string;
    slug: string;
    category: RecentCategory;
}

export interface RecentQueryResponse {
    data: Article[];
}
//////////////
export interface Articles {
    id: number;
    documentId: string;
    title: string;
    publishedAt: string;
    description: string;
    slug: string;
    thumbnail: Thumbnail;
    author: Author
    category: RecentCategory;
}

export interface HomepageCategoryArticlesData {
    id: number;
    documentId: string;
    href: string;
    name: string;
    articles: Articles[];
}

export interface HomepageCategoryQueryResponse {
    data: {
        id: number;
        documentId: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        blocks: Component[]
    }
}

interface Thumbnail{
    id: number;
    documentId: string;
    url: string;
}

interface Author{
    id: number;
    documentId: string;
    name: string;
}

interface Component {
    _component: string;
    id: number;
    categories: Categories[]
}

interface Categories {
    id: number;
    documentId: string;
    href: string;
    name: string;
}