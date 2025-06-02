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

