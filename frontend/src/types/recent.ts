interface Article {
    id: number,
    documentId: string;
    title: string;
    publishedAt: string;
    slug: string;
}

export interface RecentQueryResponse {
    data: Article[];
}

  