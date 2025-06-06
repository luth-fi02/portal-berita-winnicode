import React from 'react';
import Image from 'next/image';
import logo from '../../../public/image/logo.png'
import { getCategoriesData } from '@/lib/strapi/strapi';
import CategoryQueryResponse from '@/types/category';
import qs from 'qs';
import Topik, { Winnicode } from '.';

const categoryQuery = qs.stringify({
  fields: ['name', 'href']
});

export default async function Footer() {
  const categories = await getCategoriesData<CategoryQueryResponse>(categoryQuery)
  return (
    <nav className='flex flex-col p-5 bg-blue-500'>
        <div className='flex-1/3 mx-2'>
          <Image
            src= {logo}
            height={40}
            width={40}
            alt='logo'
          />
        </div>
        <div>
          <div className='flex py-5 px-2 space-x-24 text-blue-50'>
            <div>
              <p>Winnicode Garuda Teknologi</p>
              <Winnicode/>
            </div>
            <div>
              <p>Topik</p>
              <Topik categories={categories}/>
            </div>
            <div className='max-w-1/6'>
              <p>Kontak Kami</p>
              <ul className='flex flex-col space-y-2 py-2 text-blue-100 text-sm font-light shrink'>
                <li>winnicodegarudaofficial@gmail.com</li>
                <li><span className='font-medium'>Alamat (Pusat):</span> Bandung - Jl. Asia Afrika No.158, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40261</li>
                <li><span className='font-medium'>Alamat (Cabang):</span> Bantul,Yogyakarta</li>
                <li>Call Center: 6285159932501 (24 Jam)</li>
              </ul>
            </div>
            <div>
              <p>Ikuti Kami</p>
            </div>
          </div>
        </div>
    </nav>
  )
}