import Link from 'next/link'
import React from 'react'
import { TextField } from '@radix-ui/themes';
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
    <nav className='flex h-14 w-full px-5 items-center justify-center bg-blue-500 fixed top-0'>
        <div className='flex-1'>
          <Link href="/more">
            <SlMenu className='hover:text-blue-300 transition-colors text-white text-2xl'/>
          </Link>
        </div>
        <div className='absolute'>
          <Categories strapiData={strapiData}/>
        </div>
        <TextField.Root placeholder="Search article....">
	        <TextField.Slot>
		        <FaMagnifyingGlass height="16" width="16" />
	        </TextField.Slot>
        </TextField.Root>
    </nav>
  )
}