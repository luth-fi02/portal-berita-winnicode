import Button from "@/components/button/load-more";
import { CategoryPageArticleCard } from "@/components/recent/article-card";
import { getArticlesData } from "@/lib/strapi/strapi";
import { CategoryRecentQueryResponse } from "@/types/category";
import qs from "qs";

function searchQuery(query:string, page:number, sort:string){
    return qs.stringify({
        sort: [`publishedAt:${sort}`],
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
            $or: [
                {              
                    title: {
                        $containsi: query, 
                    },
                },
                {              
                    description: {
                        $containsi: query, 
                    },
                },
            ]
        },
        pagination: {
            start: 0,
            limit: 4*page,
        },
    });
}

export default async function Search({
    searchParams,
  }: {
    searchParams: Promise<Record<string, string | undefined>>
  }) {
    const { page = '1', sort = 'asc', query = '' } = await searchParams
    const pageNumber = parseInt(page, 10) || 1
    const strapiData = await getArticlesData<CategoryRecentQueryResponse>(searchQuery(query, pageNumber, sort))
    return (
        <section className="pt-14">
            <h2 className='border-l-4 border-l-pink1 pl-2 font-medium text-2xl mb-5'>Hasil Pencarian</h2>
            {strapiData && (
              <>
                {strapiData.data.length > 0 ? (
                  <CategoryPageArticleCard strapiData={strapiData} />
                ) : (
                  <p>Maaf, tidak ada hasil yang cocok dengan pencarian Anda.</p>
                )}
                {strapiData.meta.pagination.total > strapiData.meta.pagination.limit && (
                  <Button path='search' />
                )}
              </>
            )}
        </section>
    )
  }