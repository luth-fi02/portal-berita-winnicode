'use client';

import { FeaturedQueryResponse } from '@/types/featured';
import Link from 'next/link';
import { StrapiImage } from '@/components/strapi-image'

export default function ArticleCard({ strapiData }: { strapiData: FeaturedQueryResponse }) {
    const block = strapiData.data.blocks[0];
    const article = block.article;
    return (
    <Link className='flex transition-colors  hover:bg-blue-100' href={article.category.href + '/' + article.slug}>
      <div>
        <StrapiImage
                src= {block.thumbnail.url}
                alt='logo'
                width={250}
                height={250}
                className='p-3'
              />
      </div>
      <div>
        <h3 className='hover:underline font-medium text-xl p-2'>{article.title}</h3>
        <p className='hover:underline font-light text-sm pl-2 pb-5'>{block.description}</p>
        <h4 className='font-medium text-xs p-2 text-gray-400 pl-2 pb-2'>{article.author.name}</h4>
      </div>
    </Link>
    )
}