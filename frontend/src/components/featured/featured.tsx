import { getHomePageData } from '@/lib/strapi/strapi';
import ArticleCard from './article-card';
import { FeaturedQueryResponse } from '@/types/featured';
import qs from 'qs';

export const featuredQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                'layout.featured': {
                    populate: {
                        'articles': {
                            fields: ['title', 'publishedAt', 'slug', 'description'],
                            populate:{
                                'author': {
                                     fields: ['name']
                                },
                                'category': {
                                     fields: ['href']
                                },
                                thumbnail: {
                                    fields: ['url']
                                },
                            }
                        },
                    }
                }
            }
        }
    }
});

export default async function Featured() {
    const strapiData = await getHomePageData<FeaturedQueryResponse>(featuredQuery)
    console.dir(strapiData, {depth: null})
    return (
        <section>
            <h2 className='border-l-4 border-l-blue-950 pl-2 font-medium text-2xl m-2'>Berita Pilihan</h2>
            {strapiData && (
                <ArticleCard strapiData = {strapiData}/>
            )}
        </section>    
    )
}
