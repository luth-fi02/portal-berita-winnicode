import { getArticlesData } from '@/lib/strapi/strapi';
import RecentArticleCard from './article-card';
import { RecentQueryResponse } from '@/types/recent';
import qs from 'qs';

export const recentQuery = qs.stringify({
    sort: ['publishedAt:desc'],
    fields: ['title', 'publishedAt', 'slug'],
    pagination: {
        start: 0,
        limit: 6,
    },
});


export default async function RecentArticle() {
    const strapiData = await getArticlesData<RecentQueryResponse>(recentQuery)

    return (
        <section>
            <h1 className='border-l-4 border-l-blue-950 pl-2 font-medium text-2xl mb-5'>Terbaru</h1>
            <RecentArticleCard strapiData = {strapiData}/>
        </section>   
    )
}
