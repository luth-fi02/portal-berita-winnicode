import { getArticlesData, getCategoriesData } from '@/lib/strapi/strapi';
import CategoryQueryResponse, { CategoryRecentQueryResponse } from '@/types/category';
import qs from 'qs';
import Image from 'next/image';
import banner from '../../../public/image/banner-logo-hitam.png'
import { notFound } from 'next/navigation';
import { filterByCategoryQuery, RecentCategoryArticle } from '@/components/recent/recent-article';

const categoryQuery = qs.stringify({
    fields: ['name', 'href']
});

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  //get categories from param and validate if it exist in strapi
  const strapiData = await getCategoriesData<CategoryQueryResponse>(categoryQuery);
  console.dir(strapiData, {depth: null})
  const allowedParams = strapiData.data.map((data) => data.name.toLowerCase())
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { category } = await params;
  const validate = allowedParams.find((data) => data === category )
  if (!validate) {
    return notFound();
  }

  //get articles with same category as param
  const articles = await getArticlesData<CategoryRecentQueryResponse>(filterByCategoryQuery(category, 1, 10))
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
      <div className='flex w-full'>
        <div className='flex-1/2'>
          <RecentCategoryArticle data={articles.data}/>
        </div>
        <div className='flex-1/10 p-2 m-h'>
          <h2>Populer</h2>
        </div>
      </div>
    </div>
  )
}