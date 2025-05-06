import { prismaClient } from "../lib/db";
import { ArticleGetRequest } from "../model/article-model";
import { client } from "../lib/strapi"
const articles = client.collection('articles');

export class ArticleRepository {

    static async findArticles(data: ArticleGetRequest){
        const skip = (data.page - 1) * data.size;
        return await articles.find({
            locale: 'en',
            sort: 'title',
          });
    }
    
    static async countArticles(){
        return await prismaClient.article.count()
    }
    
    static async findArticleById(articleId: number){
        return await prismaClient.article.findUnique({
            where: {
                id: articleId
            }
        })
    }
}