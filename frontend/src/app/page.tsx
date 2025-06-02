import Image from 'next/image';
import banner from '../../public/image/banner-logo-hitam.png'
import thumbnail from '../../public/image/thumbnail.jpg'
import Featured from '@/components/(Homepage)/featured/featured';
import RecentArticle from '@/components/(Homepage)/recent/recent-article';


export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src= {banner}
        width={500}
        height={500}
        alt='logo'
        className='my-10'
      />
      <div className='flex w-full'>
        <div className='flex flex-col flex-1/2'>
          <Featured/>
          <Featured/>
        </div>
        <div className='flex-1/10 p-2 m-h'>
          <RecentArticle/>
        </div>
      </div>

      <div className='flex flex-col w-1/1'>
        <div className='flex justify-stretch'>
          <div className='flex flex-col m-2 flex-1/3'>
            <h2 className='border-l-3 border-l-blue-950 pl-2 font-medium text-xl'>Indonesia</h2>
            <div className='flex border-y py-2 my-2'>
              <div className='flex flex-col flex-2/3'>
                  <h1 className='font-medium text-base'>Title</h1>
                  <p className='font-light text-sm'>1 minute ago</p>
              </div>
                <Image
                    src= {thumbnail}
                    width={200}
                    height={200}
                    alt='logo'
                    className='flex 1/3'
                  />                
            </div>
          </div>
          <div className='flex flex-col m-2 flex-1/3'>
          <h2 className='border-l-3 border-l-blue-950 pl-2 font-medium text-xl'>Internasional</h2>
            <div className='flex border-y py-2 my-2'>
              <div className='flex flex-col flex-2/3'>
                <h1 className='font-medium text-base'>Title</h1>
                <p className='font-light text-sm'>1 minute ago</p>
              </div>
                <Image
                    src= {thumbnail}
                    width={200}
                    height={200}
                    alt='logo'
                    className='flex 1/3'
                  />                
            </div>
          </div>
          <div className='flex flex-col m-2 flex-1/3'>
          <h2 className='border-l-3 border-l-blue-950 pl-2 font-medium text-xl'>Politik</h2>
            <div className='flex border-y py-2 my-2'>
              <div className='flex flex-col flex-2/3'>
                <h1 className='font-medium text-base'>Title</h1>
                <p className='font-light text-sm'>1 minute ago</p>
              </div>
                <Image
                    src= {thumbnail}
                    width={200}
                    height={200}
                    alt='logo'
                    className='flex 1/3'
                  />                
            </div>
          </div>
        </div>
        <div className='flex justify-stretch'>
        <div className='flex flex-col m-2 flex-1/3'>
        <h2 className='border-l-3 border-l-blue-950 pl-2 font-medium text-xl'>Pendidikan</h2>
            <div className='flex border-y py-2 my-2'>
              <div className='flex flex-col flex-2/3'>
                <h1 className='font-medium text-base'>Title</h1>
                <p className='font-light text-sm'>1 minute ago</p>
              </div>
                <Image
                    src= {thumbnail}
                    width={200}
                    height={200}
                    alt='logo'
                    className='flex 1/3'
                  />                
            </div>
          </div>
          <div className='flex flex-col m-2 flex-1/3'>
          <h2 className='border-l-3 border-l-blue-950 pl-2 font-medium text-xl'>Kesehatan</h2>
            <div className='flex border-y py-2 my-2'>
              <div className='flex flex-col flex-2/3'>
                <h1 className='font-medium text-base'>Title</h1>
                <p className='font-light text-sm'>1 minute ago</p>
              </div>
                <Image
                    src= {thumbnail}
                    width={200}
                    height={200}
                    alt='logo'
                    className='flex 1/3'
                  />                
            </div>
          </div>
          <div className='flex flex-col m-2 flex-1/3'>
          <h2 className='border-l-3 border-l-blue-950 pl-2 font-medium text-xl'>Olahraga</h2>
            <div className='flex border-y py-2 my-2'>
              <div className='flex flex-col flex-2/3'>
                <h1 className='font-medium text-base'>Title</h1>
                <p className='font-light text-sm'>1 minute ago</p>
              </div>
                <Image
                    src= {thumbnail}
                    width={200}
                    height={200}
                    alt='logo'
                    className='flex 1/3'
                  />                
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
