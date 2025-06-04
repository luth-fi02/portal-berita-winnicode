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

interface Component {
    _component: string;
    id: number;
    categories: Categories[]
}

interface Categories {
    id: number;
    documentId: string;
    href: string;
}