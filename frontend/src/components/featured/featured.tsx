import getStrapiData, { featuredQuery } from '@/lib/strapi';
import ArticleCard from './article-card';
import { FeaturedQueryResponse } from '@/types/featured';

export default async function Featured() {
    const strapiData = await getStrapiData<FeaturedQueryResponse>('/api/home-page', featuredQuery)

    return (
        <section>
            <h1 className='border-l-4 border-l-blue-950 pl-2 font-medium text-2xl m-2'>Berita Pilihan</h1>
            <ArticleCard strapiData = {strapiData}/>
        </section>    
    )
}
