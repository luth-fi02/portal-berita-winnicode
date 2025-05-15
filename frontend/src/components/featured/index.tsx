'use client';

import Image from 'next/image';
import thumbnail from '../../../public/image/thumbnail.jpg'
import { FeaturedQueryResponse } from '@/types/featured';

export default function Client({ strapiData }: { strapiData: FeaturedQueryResponse }) { 
    return (
          <div>
            <h3 className='border-l-4 border-l-blue-950 pl-2 font-medium text-2xl m-2'>Berita Pilihan</h3>
            <div className='flex'>
              <div>
              <Image
                src= {thumbnail}
                width={250}
                height={250}
                alt='logo'
                className='p-3'
              />
              </div>
              <div>
                <h1 className='font-medium text-xl p-2'>{strapiData.data.blocks[0].article.title}</h1>
                <p className='font-light text-sm pl-2 pb-1'>{strapiData.data.blocks[0].description}</p>
                <h1 className='font-medium text-sm p-2 text-blue-800 pl-2 pb-2'>{strapiData.data.blocks[0].article.author.name}</h1>
              </div>
            </div>
          </div>
    )
}