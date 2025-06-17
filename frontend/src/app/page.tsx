import Image from 'next/image';
import banner from '../../public/image/banner-logo-hitam.png'
import Featured from '@/components/featured/featured';
import RecentArticle, { RecentHomepageCategoryArticle } from '@/components/recent/recent-article';


export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src= {banner}
        width={500}
        height={500}
        alt='logo'
        className=''
      />
      <div className='flex w-full'>
        <div className='flex flex-col flex-1/2'>
          <Featured/>
          <Featured/>
        </div>
        <div className='flex-1/10 p-2'>
          <RecentArticle/>
        </div>
      </div>
      <RecentHomepageCategoryArticle/>
    </div>
  );
}
