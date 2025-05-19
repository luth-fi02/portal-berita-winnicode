import Link from 'next/link'
import React from 'react'
import { TextField } from '@radix-ui/themes';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { SlMenu } from "react-icons/sl";
import { getHomePageData } from '@/lib/strapi/strapi';
import { NavigationBarQueryResponse } from '@/types/navbar';
import Categories from '@/components/navbar';
import qs from "qs";

export const navigationBarQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                'layout.navigation-bar': {
                    populate: {
                        'link': {
                            populate: '*'
                        }
                    }
                }
            }
        }
    }
});

export default async function Navbar() {
  const strapiData = await getHomePageData<NavigationBarQueryResponse>(navigationBarQuery)

  return (
    <nav className='flex space-x-5 h-14 px-5 items-center justify-center bg-blue-500 sticky top-0'>
        <div className='flex-1/3 mx-2'>
          <Link href="/more">
            <SlMenu className='hover:text-blue-300 transition-colors text-white text-2xl'/>
          </Link>
        </div>
        <Categories strapiData={strapiData}/>
        <TextField.Root placeholder="Search article...." className='flex-1/3 mx-2 max-w-100'>
	        <TextField.Slot>
		        <FaMagnifyingGlass height="16" width="16" />
	        </TextField.Slot>
        </TextField.Root>
    </nav>
  )
}