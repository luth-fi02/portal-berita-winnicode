import React from 'react';
import Image from 'next/image';
import logo from '../../../public/image/logo.png'
import { getGlobalData } from '@/lib/strapi/strapi';
import qs from 'qs';
import Topik, { Social, Winnicode } from '.';
import FooterQueryResponse from '@/types/footer';

const footerQuery = qs.stringify({
  populate:{
    "Footer":{
      populate: {
        "Winnicode":{
          populate: {
            "Link":{
              fields: [ 'label', 'href']
            },
          },
          fields: [ 'label' ]
        },
        "TopikLink": {
          populate: {
            "Categories": {
              fields: [ 'name', 'href' ]
            }
          },
          fields: [ 'label' ]
        },
        "Kontak": {
          fields: [ 'email', 'alamatCabang', 'alamatPusat', 'callCenter', 'label' ]
        },
        "SocialLink": {
          fields: [ 'label' ],
          populate: {
            "LinkExternal": {
              fields: [ 'url', 'label' ]
            }
          }
        }
      },
    }
  },
});

export default async function Footer() {
  const footerData = await getGlobalData<FooterQueryResponse>(footerQuery);
  if (!footerData) return null; 
  const data = footerData.data.Footer;
  const categories = data.TopikLink.Categories;
  const winnicode = data.Winnicode;
  const kontak = data.Kontak;
  const social = data.SocialLink;
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
              <p>{winnicode.label}</p>
              <Winnicode links={winnicode.Link}/>
            </div>
            <div>
              <p>{data.TopikLink.label}</p>
              <Topik categories={categories}/>
            </div>
            <div className='max-w-1/6'>
              <p>{kontak.label}</p>
              <ul className='flex flex-col space-y-2 py-2 text-blue-100 text-sm font-light shrink'>
                <li>{kontak.email}</li>
                <li>{kontak.alamatPusat} </li>
                <li>{kontak.alamatCabang} </li>
                <li>{kontak.callCenter}</li>
              </ul>
            </div>
            <div>
              <p>{social.label}</p>
              <Social data={social.LinkExternal}/>
            </div>
          </div>
        </div>
    </nav>
  )
}