import { getArticlesData, getHomePageData } from '@/lib/strapi/strapi';
import ArticleCard, { CategoryPageArticleCard, HomepageCategoryArticleCard } from './article-card';
import { HomepageCategoryQueryResponse, RecentQueryResponse } from '@/types/recent';
import qs from 'qs';
import { CategoryRecentQueryResponse } from '@/types/category';

const recentQuery = qs.stringify({
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
                            fields: ['href', 'name'],
                        },
                    }
                }
            }
        }
    }
});

export function filterByCategoryQuery(category: string, page: number, pageSize: number){
    return qs.stringify({
      sort: ['publishedAt:desc'],
      fields: ['title', 'publishedAt', 'description', 'slug'],
      populate: {
          'thumbnail': {
            fields: ['url']
          },
          'author': {
               fields: ['name']
          },
          'category': {
            fields: ['name', 'href']
          }
      },
      filters: {
        category: {
          name: {
            $eqi: category,
          }
        }
      },
      pagination: {
        page: page,
        pageSize: pageSize,
      },
    });
  }

export default async function RecentArticle() {
    const strapiData = await getArticlesData<RecentQueryResponse>(recentQuery)
    return (
        <section>
            <h2 className='border-l-4 border-l-blue-950 pl-2 font-medium text-2xl mb-5'>Terbaru</h2>
            {strapiData && (
              <ArticleCard strapiData = {strapiData}/>
            )}
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
    const strapiData = await getCategoriesWithArticles();
    return (
    <section className='flex flex-col w-1/1'>
        <HomepageCategoryArticleCard strapiData={strapiData}/>
    </section>
    
    )
}

async function getCategoriesWithArticles() {
    const homepageData = await getHomePageData<HomepageCategoryQueryResponse>(homepageCategoryQuery);
    if (homepageData){
      const categories = homepageData.data.blocks[0].categories;
    
      // Fetch articles for each category in parallel
      const categoriesWithArticles = await Promise.all(
        categories.map(async (category) => {
          const articlesData = await getArticlesData<CategoryRecentQueryResponse>(
            filterByCategoryQuery(category.href, 1, 3)
          );
          if (!articlesData) return {
            ...category,
            articles: [],
          } 
          return {
            ...category,
            articles: articlesData.data,
          };
        })
      );
    
      return categoriesWithArticles;
    } else return [];
  }