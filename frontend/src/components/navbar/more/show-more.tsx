'use client';

import { useState } from 'react';
import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import classnames from 'classnames';
import CategoryQueryResponse from '@/types/category';
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

function ShowMore( {data} : {data:CategoryQueryResponse} ) {
  const [isExpanded, setIsExpanded] = useState(false );
  const ToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <button
        className='text-blue-100 flex items-center gap-x-2 hover:cursor-pointer hover:text-blue-300 transition-colors'
        onClick={ToggleExpand}>
        More
        {isExpanded && (
          <IoIosArrowUp/>
        )}
        {!isExpanded && (
          <IoIosArrowDown/>
        )}
      </button>
      <aside className={classnames({
        'opacity-95 outline-1 bg-biru2 rounded-lg absolute right-0': isExpanded,
        'text-blue-100 flex flex-col':true,
        'hidden w-10': !isExpanded,
      })}>
        <h2 className='border-l-4 border-pink1 m-3 py-0.5 pl-2'>Topik</h2>
        <ul className='grid grid-cols-2 gap-y-5 p-3'>
          {data.data.map((link: { href: string, name: string }) => 
            <Link 
              key={link.href} 
              className={classnames({
                'text-blue-100': true,
                'hover:text-gray-300 transition-colors text-sm font-light': true,
              })} 
              href={'/' + link.href }>
              {link.name}
            </Link>)}
        </ul>
      </aside>
    </div>
  )
}

export function Burger( {data} : {data:CategoryQueryResponse} ) {
  const [isExpanded, setIsExpanded] = useState(false );
  const ToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <button
        className='text-blue-100 text-3xl flex items-center gap-x-2 hover:cursor-pointer hover:text-blue-300 transition-colors'
        onClick={ToggleExpand}>
        <RxHamburgerMenu/>
      </button>
      <aside className={classnames({
        'opacity-95 bg-biru2 fixed left-0 h-screen': isExpanded,
        'text-blue-100 flex flex-col':true,
        'hidden w-10': !isExpanded,
      })}>
        <ul className='flex flex-col gap-y-5 p-5 mt-5'>
          {data.data.map((link: { href: string, name: string }) => 
            <Link 
              key={link.href} 
              className={classnames({
                'text-blue-100': true,
                'hover:text-gray-300 transition-colors text-lg font-light': true,
              })} 
              href={'/' + link.href }>
              {link.name}
            </Link>)}
        </ul>
      </aside>
    </div>
  )
}

export default ShowMore