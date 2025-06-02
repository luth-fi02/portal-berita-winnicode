'use client';

import { usePathname } from "next/navigation";
import classnames from 'classnames';
import { NavigationBarQueryResponse } from "@/types/navbar";
import Link from "next/link";

export default function Categories({ strapiData }: { strapiData: NavigationBarQueryResponse }) {
    const currentPath = usePathname();
    return (
            <ul className='space-x-6 text-center  '>
              {strapiData.data.blocks[0].link[0].categories.map((link: { href: string, name: string }) => 
                <Link 
                  key={link.href} 
                  className={classnames({
                    'text-white border-b-2 border-solid': '/' + link.href === currentPath,
                    'text-blue-100': link.href !== currentPath,
                    'hover:text-blue-300 transition-colors': true,
                  })} 
                  href={'/' + link.href }>
                  {link.name}
                </Link>)}
            </ul>
      )
}