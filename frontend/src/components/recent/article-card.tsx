'use client';

import { RecentQueryResponse } from '@/types/recent';
import Link from 'next/link';
import classnames from 'classnames';

export default function ArticleCard({ strapiData }: { strapiData: RecentQueryResponse }) {
    console.dir(strapiData, {depth: null});
    const articles = strapiData.data
    return (
    <ul className='flex flex-col space-y-3'>
      {articles.map((article: { title: string, publishedAt: string, slug: string }) => 
        <Link 
          key={article.slug} 
          className={classnames({
            'transition-colors  hover:bg-blue-900/5': true,
          })} 
          href='/article'>
          <h2 className='hover:underline font-medium text-xl'>{article.title}</h2>
          <p className='hover:underline font-light text-xs'>{new Date(article.publishedAt).toLocaleDateString()}</p>
        </Link>)}
    </ul>
    )
}