'use client';

import { FeaturedQueryResponse } from '@/types/featured';
import Link from 'next/link';
import { StrapiImage } from '@/components/strapi-image'

export default function ArticleCard({ strapiData }: { strapiData: FeaturedQueryResponse }) {
    const block = strapiData.data.blocks[0];
    const article = block.article;
    return (
    <Link className='flex transition-colors  hover:bg-blue-900/5' href="/article">
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
        <p className='hover:underline font-light text-sm pl-2 pb-1'>{block.description}</p>
        <h4 className='font-medium text-sm p-2 text-blue-800 pl-2 pb-2'>{article.author.name}</h4>
      </div>
    </Link>
    )
}