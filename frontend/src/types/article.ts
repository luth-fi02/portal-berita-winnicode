import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface ArticleQueryResponse {
    data: Article[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        }
    }
}

interface Article {
    id: number;
    documentId: string;
    title: string;
    publishedAt: string;
    content: BlocksContent;
    thumbnail: Thumbnail;
    author: Author;
}

interface Thumbnail {
    id: number;
    documentId: string;
    url: string;
}

interface Author {
    id: number;
    documentId: string;
    name: string;
}