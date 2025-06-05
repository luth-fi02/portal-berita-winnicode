'use client';

import { RecentQueryResponse, RecentCategory, HomepageCategoryArticlesData, Articles } from '@/types/recent';
import Link from 'next/link';
import classnames from 'classnames';
import { StrapiImage } from '@/components/strapi-image';
import { Author, Category, CategoryRecentQueryResponse, Thumbnail } from '@/types/category';

export default function ArticleCard({ strapiData }: { strapiData: RecentQueryResponse }) {
    const articles = strapiData.data
    return (
    <ul className='flex flex-col space-y-3'>
      {articles.map((article: { title: string, publishedAt: string, slug: string, category: RecentCategory }) => 
        <Link 
          key={article.slug} 
          className={classnames({
            'transition-colors  hover:bg-blue-900/5': true,
          })} 
          href={article.category.href + '/' + article.slug}>
          <h3 className='hover:underline font-medium text-xl'>{article.title}</h3>
          <p className='hover:underline font-light text-xs'>{new Date(article.publishedAt).toDateString()}</p>
        </Link>)}
    </ul>
    )
}

export function CategoryPageArticleCard ({ strapiData }: { strapiData: CategoryRecentQueryResponse}) {
  const articles = strapiData.data
  return (
  <ul className='flex flex-col space-y-3'>
    {articles.map((article: { title: string, publishedAt: string, slug: string, thumbnail: Thumbnail, description: string, author: Author, category: Category }) => 
      <Link 
        key={article.slug} 
        className={classnames({
          'transition-colors  hover:bg-blue-900/5 flex': true,
        })} 
        href={article.category.href + '/' + article.slug}>
          <StrapiImage
          src= {article.thumbnail.url}
          alt='logo'
          width={250}
          height={250}
          className='p-3'
        />
        <div className=''>
          <h3 className='hover:underline font-medium text-xl p-2'>{article.title}</h3>
          <p className='hover:underline font-light text-sm pl-2 pb-5'>{article.description}</p>
          <p className='hover:underline text-gray-500 font-light text-xs pl-2 pb-1'>{new Date(article.publishedAt).toDateString()}</p>
        </div>
      </Link>)}
  </ul>
  )
}

export function HomepageCategoryArticleCard ({ strapiData }: { strapiData: HomepageCategoryArticlesData[]}) {
  return (
    <ul className=''>
      {strapiData.map((data: { href: string; name: string; articles: Articles[] }) => (
        <div key={data.href} className='flex flex-col m-2 flex-1/3'>

          <Link
            href={`/${data.href}`}
            className='transition-colors hover:bg-blue-900/5 flex'
          >
            <h2 className='border-l-3 border-l-blue-950 pl-2 font-medium text-xl'>
              {data.name}
            </h2>
          </Link>

          {/* Article List */}
          {data.articles.map((article) => (
            <Link key={article.slug} href={`/${article.slug}`}>
              <div className='flex border-y py-2 my-2 hover:bg-blue-100'>
                <div className='flex flex-col w-2/3'>
                  <h1 className='font-medium text-base'>{article.title}</h1>
                  <p className='font-light text-sm'>{new Date(article.publishedAt).toDateString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </ul>
  )
}