import { getArticlesData, getHomePageData } from '@/lib/strapi/strapi';
import RecentArticleCard, { CategoryPageArticleCard } from './article-card';
import { HomepageCategoryQueryResponse, RecentQueryResponse } from '@/types/recent';
import qs from 'qs';
import { CategoryRecentQueryResponse } from '@/types/category';
import thumbnail from '../../../public/image/thumbnail.jpg'
import Image from 'next/image';

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

const homepageCategoryQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                'layout.by-category': {
                    populate: {
                        'categories': {
                            fields: ['href'],
                        },
                    }
                }
            }
        }
    }
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

export async function RecentHomepageCategoryArticle() {
    const strapiData = await getHomePageData<HomepageCategoryQueryResponse>(homepageCategoryQuery)
    console.dir(strapiData, {depth: null});
    return (
    <section className='flex flex-col w-1/1'>
        <div className='flex justify-stretch'>
          <div className='flex flex-col m-2 flex-1/3'>
            <h2 className='border-l-3 border-l-blue-950 pl-2 font-medium text-xl'>Indonesia</h2>
            <div className='flex border-y py-2 my-2'>
              <div className='flex flex-col flex-2/3'>
                  <h1 className='font-medium text-base'>Title</h1>
                  <p className='font-light text-sm'>1 minute ago</p>
              </div>
                <Image
                    src= {thumbnail}
                    width={200}
                    height={200}
                    alt='logo'
                    className='flex 1/3'
                  />                
            </div>
          </div>
        </div>
        <div className='flex justify-stretch'>
          <div className='flex flex-col m-2 flex-1/3'>
            <h2 className='border-l-3 border-l-blue-950 pl-2 font-medium text-xl'>Indonesia</h2>
            <div className='flex border-y py-2 my-2'>
              <div className='flex flex-col flex-2/3'>
                  <h1 className='font-medium text-base'>Title</h1>
                  <p className='font-light text-sm'>1 minute ago</p>
              </div>
                <Image
                    src= {thumbnail}
                    width={200}
                    height={200}
                    alt='logo'
                    className='flex 1/3'
                  />                
            </div>
          </div>
        </div>
    </section>
    
    )
}