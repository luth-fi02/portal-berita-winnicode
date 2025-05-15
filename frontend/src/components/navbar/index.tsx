'use client';

import { usePathname } from "next/navigation";
import classnames from 'classnames';
import { NavigationBarQueryResponse } from "@/types/navbar";
import Link from "next/link";

export default function Categories({ strapiData }: { strapiData: NavigationBarQueryResponse }) {
    console.dir(strapiData, {depth: null});
    const currentPath = usePathname();
    
    return (
            <ul className='mx-10 space-x-6 flex-1/3'>
              {strapiData.data.blocks[0].link.map((link: { href: string, label: string, id:number }) => 
              <Link 
                key={link.id} 
                className={classnames({
                  'text-white border-b-2 border-solid': link.href === currentPath,
                  'text-blue-100': link.href !== currentPath,
                  'hover:text-blue-300 transition-colors': true,
                })} 
                href={link.href}>
                {link.label}
              </Link>)}
            </ul>
      )
}