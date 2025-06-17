'use client';

import { useState } from 'react';
import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import classnames from 'classnames';
import CategoryQueryResponse from '@/types/category';
import Link from "next/link";

function ShowMore( {data} : {data:CategoryQueryResponse} ) {
  const [isExpanded, setIsExpanded] = useState(false );
  const ToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <button
        className='text-blue-100 flex space-x-5 items-center hover:cursor-pointer hover:text-blue-300 transition-colors'
        onClick={ToggleExpand}>
        More
        <IoIosArrowDown/>
      </button>
      <aside className={classnames({
        'w-52 bg-sky-50 rounded-lg absolute': isExpanded,
        'w-10': !isExpanded,
        'text-black':true,
      })}>
        <div className={classnames({
          'flex flex-col': true,
          'hidden': !isExpanded,
        })}>
            <ul className='flex flex-col space-y-2 py-2'>
              {data.data.map((link: { href: string, name: string }) => 
                <Link 
                  key={link.href} 
                  className={classnames({
                    'text-black': true,
                    'hover:text-gray-300 transition-colors text-sm font-light': true,
                  })} 
                  href={'/' + link.href }>
                  {link.name}
                </Link>)}
            </ul>
          <h1>Tentang Kami</h1>
        </div>
      </aside>
    </div>
  )
}

export default ShowMore