'use client';

import { RecentQueryResponse } from '@/types/recent';
import Link from 'next/link';
import classnames from 'classnames';

export default function ArticleCard({ strapiData }: { strapiData: RecentQueryResponse }) {
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
          <h3 className='hover:underline font-medium text-xl'>{article.title}</h3>
          <p className='hover:underline font-light text-xs'>{new Date(article.publishedAt).toDateString()}</p>
        </Link>)}
    </ul>
    )
}