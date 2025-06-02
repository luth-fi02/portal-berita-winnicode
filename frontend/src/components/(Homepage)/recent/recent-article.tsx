import { getArticlesData } from '@/lib/strapi/strapi';
import RecentArticleCard, { CategoryPageArticleCard } from './article-card';
import { RecentQueryResponse } from '@/types/recent';
import qs from 'qs';
import { CategoryRecentQueryResponse } from '@/types/category';

export const recentQuery = qs.stringify({
    sort: ['publishedAt:desc'],
    fields: ['title', 'publishedAt', 'description', 'slug'],
    populate: {
        'category': {
            fields: ['href']
          }
    },
    pagination: {
        start: 0,
        limit: 6,
    },
});

export default async function RecentArticle() {
    const strapiData = await getArticlesData<RecentQueryResponse>(recentQuery)
    return (
        <section>
            <h2 className='border-l-4 border-l-blue-950 pl-2 font-medium text-2xl mb-5'>Terbaru</h2>
            <RecentArticleCard strapiData = {strapiData}/>
        </section>   
    )
}

export function RecentCategoryArticle(strapiData: CategoryRecentQueryResponse) {
    return (
        <section>
            <h2 className='border-l-4 border-l-blue-950 pl-2 font-medium text-2xl mb-5'>Terbaru</h2>
            <CategoryPageArticleCard strapiData = {strapiData}/>
        </section>   
    )
}
