import getStrapiData, { recentQuery } from '@/lib/strapi';
import RecentArticleCard from './article-card';
import { RecentQueryResponse } from '@/types/recent';

export default async function RecentArticle() {
    const strapiData = await getStrapiData<RecentQueryResponse>('/api/articles', recentQuery)

    return (
        <section>
            <h1 className='border-l-4 border-l-blue-950 pl-2 font-medium text-2xl mb-5'>Terbaru</h1>
            <RecentArticleCard strapiData = {strapiData}/>
        </section>   
    )
}
