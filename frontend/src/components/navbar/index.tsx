'use client';

import { usePathname } from "next/navigation";
import classnames from 'classnames';
import { NavigationBarQueryResponse } from "@/types/navbar";
import Link from "next/link";

export default function Categories({ strapiData }: { strapiData: NavigationBarQueryResponse }) {
    const currentPath = usePathname();
    return (
            <ul className='space-x-6 text-center  '>
              {strapiData.data.Navbar.Link[0].Categories.map((link: { href: string, name: string }) => 
                <Link 
                  key={link.href} 
                  className={classnames({
                    'text-white border-double border-b-2 py-2': '/' + link.href === currentPath,
                    'text-blue-100': link.href !== currentPath,
                    'hover:text-biru transition-colors': true,
                  })} 
                  href={'/' + link.href }>
                  {link.name}
                </Link>)}
            </ul>
      )
}