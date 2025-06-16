import Link from 'next/link'
import React from 'react'
import Form from 'next/form'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { SlMenu } from "react-icons/sl";
import { getGlobalData } from '@/lib/strapi/strapi';
import { NavigationBarQueryResponse } from '@/types/navbar';
import Categories from '@/components/navbar';
import qs from "qs";

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

export default async function Navbar() {
  const strapiData = await getGlobalData<NavigationBarQueryResponse>(navigationBarQuery)
  return (
    <nav className='flex px-5 justify-center'>
        <div className='flex-1'>
          <Link href="/more">
            <SlMenu className='hover:text-blue-300 transition-colors text-white text-2xl'/>
          </Link>
        </div>
        {strapiData && (
          <div className='absolute'>
            <Categories strapiData={strapiData}/>
          </div>
        )}
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
    </nav>
  )
}