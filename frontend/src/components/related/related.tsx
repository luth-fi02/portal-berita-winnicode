import { RelatedArticle } from '@/types/article'
import React from 'react'
import { StrapiImage } from '../strapi-image'
import Link from 'next/link'



function Related({data}: {data: RelatedArticle[]}) {
  return (
    <div className='w-full py-5'>
        <h1 className='border-l-4 border-l-pink1 pl-2 font-medium text-2xl mb-5'>Artikel Lainnya</h1>
        <ul className='md:grid md:grid-cols-3 space-x-15'>
            {data.map((data) => (
                <Link
                    key={data.slug}
                    href={'/' + data.category.href + '/' + data.slug}
                >            
                    <div className='hover:transition-colors  hover:bg-biru space-y-5'>
                        <div className='flex justify-center'>
                            <StrapiImage
                                src= {data.thumbnail.url}
                                width={250}
                                height={250}
                                alt='logo'
                                className=''
                            />
                        </div>
                        <div>
                            <h1 className='text-center font-medium text-lg hover:underline'>{data.title}</h1>
                        </div>
                    </div>
                </Link>
            ))}    
        </ul>
    </div>
  )
}

export default Related