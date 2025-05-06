import { Article } from "@prisma/client";

export type ArticleResponse = {
    id: number;
    title: string;
    category: string;
    author_id: number; //TEMPORARY
    published_at: Date;
    image_url: string;
}

export type ArticleGetRequest = {
    page: number;
    size: number;
}

export function transformArticleResponse(article: Article): ArticleResponse{
    return {
        id: article.id,
        title: article.title,
        category: article.category,
        author_id: article.author_id, //TEMPORARY
        published_at: article.published_at,
        image_url: article.image_url,
    }
}