import React from 'react';
import Image from 'next/image';
import logo from '../../../public/image/logo.png'
import { getGlobalData } from '@/lib/strapi/strapi';
import qs from 'qs';
import Topik, { Winnicode } from '.';
import FooterQueryResponse from '@/types/footer';

const footerQuery = qs.stringify({
  populate:{
    "Footer":{
      populate: {
        "winnicode":{
          populate: {
            "Link":{
              fields: [ 'name', 'href']
            },
          },
          fields: [ 'Label' ]
        },
        "TopikLink": {
          populate: {
            "categories": {
              fields: [ 'name', 'href' ]
            }
          },
          fields: [ 'Label' ]
        },
        "Kontak": {
          fields: [ 'email', 'AlamatCabang', 'AlamatPusat', 'CallCenter', 'Label' ]
        },
        "SocialLink": {
          fields: [ 'href', 'Label' ]
        }
      },
    }
  },
});

export default async function Footer() {
  const footerData = await getGlobalData<FooterQueryResponse>(footerQuery);
  const data = footerData.data.Footer;
  const categories = data.TopikLink.categories;
  const winnicode = data.winnicode;
  const kontak = data.Kontak;
  const social = data.SocialLink;
  console.dir(footerData, { depth: null });
  return (
    <nav className='flex flex-col p-5 bg-blue-500'>
        <div className='flex-1/3 mx-2'>
          <Image
            src= {logo}
            height={40}
            width={40}
            alt='logo'
          />
        </div>
        <div>
          <div className='flex py-5 px-2 space-x-24 text-blue-50'>
            <div>
              <p>{winnicode.Label}</p>
              <Winnicode links={winnicode.Link}/>
            </div>
            <div>
              <p>{data.TopikLink.Label}</p>
              <Topik categories={categories}/>
            </div>
            <div className='max-w-1/6'>
              <p>{kontak.Label}</p>
              <ul className='flex flex-col space-y-2 py-2 text-blue-100 text-sm font-light shrink'>
                <li>{kontak.email}</li>
                <li><span className='font-medium'>Alamat (Pusat):</span> {kontak.AlamatPusat} </li>
                <li><span className='font-medium'>Alamat (Cabang):</span> {kontak.AlamatCabang} </li>
                <li>{kontak.CallCenter}</li>
              </ul>
            </div>
            <div>
              <p>{social.Label}</p>
            </div>
          </div>
        </div>
    </nav>
  )
}