'use client';

import { Author, Category, FeaturedQueryResponse, Thumbnail } from '@/types/featured';
import Link from 'next/link';
import { StrapiImage } from '@/components/strapi-image'

export default function ArticleCard({ strapiData }: { strapiData: FeaturedQueryResponse }) {
    const data = strapiData.data.blocks[0];
    return (
    <ul className='space-y-10'>
      {data.articles.map((article: {category: Category, slug: string, thumbnail: Thumbnail, title: string, description: string, author: Author}) => (
        <Link className='border-t grid md:grid-cols-3 transition-colors  hover:bg-blue-100' 
          href={article.category.href + '/' + article.slug}
          key={article.slug}
        >
          <div className='md:col-span-1 justify-items-center'>
            <StrapiImage
                    src= {article.thumbnail.url}
                    alt='logo'
                    width={400}
                    height={400}
                    className='p-3'
                  />
          </div>
          <div className='md:col-span-2'>
            <h3 className='hover:underline font-medium text-xl p-2'>{article.title}</h3>
            <p className='hover:underline font-light text-sm pl-2 pb-5'>{article.description}</p>
            <h4 className='font-medium text-xs p-2 text-gray-400 pl-2 pb-2'>{article.author.name}</h4>
          </div>
        </Link>
      ))}
    </ul>
    )
}