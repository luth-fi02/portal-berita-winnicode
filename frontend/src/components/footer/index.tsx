'use client';

import classnames from 'classnames';
import Link from "next/link";
import { Category, LinkExternal, Links } from "@/types/footer";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook  } from "react-icons/fa";

export default function Topik({ categories }: { categories: Category[] }) {
    return (
            <ul className='flex flex-col space-y-2 py-2'>
              {categories.map((link: { href: string, name: string }) => 
                <Link 
                  key={link.href} 
                  className={classnames({
                    'text-blue-100': true,
                    'hover:text-blue-300 transition-colors text-sm font-light': true,
                  })} 
                  href={'/' + link.href }>
                  {link.name}
                </Link>)}
            </ul>
      )
}

export function Winnicode({ links }: { links: Links[] }) {
    return (
      <ul className='flex flex-col space-y-2 py-2'>
        {links.map(link => 
        <Link 
          key={link.href} 
          className={classnames({
            'text-blue-100': true,
            'hover:text-blue-300 transition-colors text-sm font-light': true,
          })} 
          href={'/' + link.href }>
          {link.label}
        </Link>)}
      </ul>
      )
}

export function Social({ data }: { data: LinkExternal[] }) {
  return (
    <ul className='flex flex-col space-y-2 py-2'>
      {data.map(data => 
      <Link 
        key={data.id} 
        className={classnames({
          'text-blue-100': true,
          'hover:text-blue-300 transition-colors text-sm font-light': true,
        })} 
        href={data.url}>
        <div className='flex gap-2'>
          {selectSocialIcon(data.url)}
          {data.label}
        </div>
      </Link>)}
    </ul>
    )
}

    function selectSocialIcon(url: string) {
      if (url.includes("youtube")) return <FaYoutube className="h-6 w-6" />;
      if (url.includes("twitter")) return <FaTwitter className="h-6 w-6" />;
      if (url.includes("facebook")) return <FaFacebook className="h-6 w-6" />;
      if (url.includes("instagram")) return <FaInstagram className="h-6 w-6" />;
      return null;
    }