import { getArticlesData, getCategoriesData } from '@/lib/strapi/strapi';
import CategoryQueryResponse, { CategoryRecentQueryResponse } from '@/types/category';
import qs from 'qs';
import Image from 'next/image';
import banner from '../../../public/image/banner-logo-hitam.png'
import { notFound } from 'next/navigation';
import { filterByCategoryQuery, RecentCategoryArticle } from '@/components/recent/recent-article';
import Button from '@/components/button/load-more';
import Featured from '@/components/featured/featured';

const categoryQuery = qs.stringify({
    fields: ['name', 'href']
});

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>
  searchParams: Promise<Record<string, string | undefined>>,
}) {
  //get categories from param and validate if it exist in strapi
  const strapiData = await getCategoriesData<CategoryQueryResponse>(categoryQuery);
  if (!strapiData) {
    throw new Error("Failed to fetch category data from Strapi.");
  }
  const allowedParams = strapiData.data.map((data) => data.name.toLowerCase())
   
  const { category } = await params;
  const validate = allowedParams.find((data) => data === category )
  if (!validate) {
    return notFound();
  }

  //get articles with same category as param
  const { page = '1' } = await searchParams
  const pageNumber = parseInt(page, 10) || 1
  const articles = await getArticlesData<CategoryRecentQueryResponse>(filterByCategoryQuery(category, pageNumber))
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src= {banner}
        width={500}
        height={500}
        alt='logo'
        className='my-10'
      />
        <h1 className='flex text-5xl font-bold py-20 text-shadow-lg'>{category.toUpperCase()}</h1>
        <div className='flex flex-col lg:flex-row w-full'>
          <div className='flex-1/2'>
            {articles && (
              <>
                <RecentCategoryArticle data={articles.data} meta={articles.meta}/>              
                  <div className='my-5'>
                    {articles.meta.pagination.total > articles.meta.pagination.limit && (
                      <Button path={category} />
                    )}
                  </div>
              </>
            )}
          </div>
          <div className='flex-1/3 p-2 m-h'>
            <Featured/>
          </div>
        </div>
    </div>
  )
}