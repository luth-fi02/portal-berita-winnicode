import React from 'react'
import Form from 'next/form'
import Image from 'next/image';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { getCategoriesData, getGlobalData } from '@/lib/strapi/strapi';
import { NavigationBarQueryResponse } from '@/types/navbar';
import Categories from '@/components/navbar';
import More from './more/show-more'
import logo from '../../../public/image/logo.png'
import qs from "qs";
import CategoryQueryResponse from '@/types/category';

const navigationBarQuery = qs.stringify({
    populate:{
      "Navbar":{
        populate: {
          "Link":{
            populate: {
              "Categories":{
                fields: [ 'name', 'href']
              },
            }
          }
        },
      }
    },
});

const categoryQuery = qs.stringify({
  fields: ['name', 'href']
});

export default async function Navbar() {
  const strapiData = await getGlobalData<NavigationBarQueryResponse>(navigationBarQuery)
  const buttonData = await getCategoriesData<CategoryQueryResponse>(categoryQuery);
  return (
    <nav className='flex px-5 justify-center items-center'>
        <div className='absolute left-5'>
        <Image
          src= {logo}
          width={40}
          height={40}
          alt='logo'
          className=''
        />
        </div>
        {strapiData && (
          <div className='hidden xl:block absolute'>
            <div className='flex space-x-6'>
              <Categories strapiData={strapiData}/>
              {buttonData && (
                <More data={buttonData}/>
              )}
            </div>
          </div>
        )}
        <div className='absolute right-5'>
        <Form action="/search" className='space-x-2'>
          <input 
            placeholder="Search article...." 
            className='bg-white rounded-sm text-gray-500 p-0.5 px-3' 
            name="query" />
          <button type="submit">
            <FaMagnifyingGlass 
            className='text-white hover:text-sky-200 rounded-sm cursor-pointer'
            height="20" width="20" />
          </button>
        </Form>
        </div>
    </nav>
  )
}