import { ResponseError } from "../error/response-error";
import { ArticleGetRequest, ArticleResponse, transformArticleResponse } from "../model/article-model";
import { Pageable } from "../model/page";
import { ArticleRepository } from "../repository/article-repository";
import { ArticleValidation } from "../validation/article-validation";
import { Validation } from "../validation/validation";

export class ArticleService {

    static async getAll(request: ArticleGetRequest){
        const validated = Validation.validate(ArticleValidation.GET, request);     
         
        const articles = await ArticleRepository.findArticles(validated);

        const total = await ArticleRepository.countArticles();
        return {
            articles
        }
    }
    
    static async get(articleId: number): Promise<ArticleResponse>{
        const article = await ArticleRepository.findArticleById(articleId)

        if(!article){
            throw new ResponseError(404, "Article not found")
        }
        
        return transformArticleResponse(article)
    }
}