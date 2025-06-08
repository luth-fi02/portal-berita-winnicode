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
                        fields: ['description'],
                        thumbnail: {
                            fields: ['url']
                        },
                        'article': {
                            fields: ['title', 'publishedAt', 'slug'],
                            populate:{
                                'author': {
                                     fields: ['name']
                                },
                                'category': {
                                     fields: ['href']
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
    return (
        <section>
            <h2 className='border-l-4 border-l-blue-950 pl-2 font-medium text-2xl m-2'>Berita Pilihan</h2>
            <ArticleCard strapiData = {strapiData}/>
        </section>    
    )
}
