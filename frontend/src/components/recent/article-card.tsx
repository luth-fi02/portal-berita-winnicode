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
            'transition-colors  hover:bg-biru/5': true,
          })} 
          href={'/' + article.category.href + '/' + article.slug}>
          <h3 className='hover:underline font-medium text-gray-800 text-xl'>{article.title}</h3>
          <p className='hover:underline font-light text-gray-400 text-xs'>{new Date(article.publishedAt).toDateString()}</p>
        </Link>)}
    </ul>
    )
}

export function CategoryPageArticleCard ({ strapiData }: { strapiData: CategoryRecentQueryResponse}) {
  const articles = strapiData.data
  return (
  <ul className='space-y-3'>
    {articles.map((article: { title: string, publishedAt: string, slug: string, thumbnail: Thumbnail, description: string, author: Author, category: Category }) => 
      <Link 
        key={article.slug} 
        className={classnames({
          'grid grid-cols-3 transition-colors  hover:bg-biru/5': true,
        })} 
        href={article.category.href + '/' + article.slug}>
        <StrapiImage
          src= {article.thumbnail.url}
          alt='logo'
          width={250}
          height={250}
          className='col-span-1 justify-items-center p-3'
        />
        <div className='col-span-2'>
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
    <ul className='lg:grid lg:grid-cols-3 mt-5'>
      {strapiData.map((data: { href: string; name: string; articles: Articles[] }) => (
        <div key={data.href} className='p-2 space-y-2'>

          <Link
            href={`/${data.href}`}
            className='transition-colors hover:bg-biru/5 hover:underline flex'
          >
            <h1 className='border-l-3 border-l-pink1 pl-2 font-medium text-2xl'>
              {data.name}
            </h1>
          </Link>

          {/* Article List */}
          {data.articles.map((article) => (
            <Link 
              key={article.slug} 
              href={`/${data.href}/${article.slug}`} 
            >
              <div className='grid grid-cols-3 transition-colors  hover:bg-biru/5 border-t space-y-5'>
                <div className='col-span-2'>
                  <h1 className='font-medium text-gray-800 text-lg hover:underline'>{article.title}</h1>
                  <p className='font-thin text-gray-400 text-sm'>{new Date(article.publishedAt).toDateString()}</p>
                </div>
                <div className='col-span-1'>
                    <StrapiImage
                        src= {article.thumbnail.url}
                        width={150}
                        height={150}
                        alt='logo'
                        className='p-1'
                      />                
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </ul>
  )
}