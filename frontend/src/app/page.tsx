import Image from 'next/image';
import banner from '../../public/image/banner-logo-hitam.png'
import thumbnail from '../../public/image/thumbnail.jpg'
import Featured from '@/components/featured/featured';


export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src= {banner}
        width={500}
        height={500}
        alt='logo'
        className=''
      />
      <div className='flex w-1/1'>
        <div className='flex flex-col flex-1/2'>
        <Featured/>

         <div>
            <h3 className='border-l-4 border-l-blue-950 pl-2 font-medium text-2xl m-2'>Populer</h3>
            <div className='flex'>
              <div>
              <Image
                src= {thumbnail}
                width={250}
                height={250}
                alt='logo'
                className='p-3'
              />
              </div>
              <div>
                <h1 className='font-medium text-xl p-2'>Title</h1>
                <p className='font-light text-sm pl-2 pb-1'>Description</p>
                <h1 className='font-medium text-sm p-2 text-blue-800 pl-2 pb-2'>Author</h1>
              </div>
            </div>
          </div>

        </div>
        <div className='flex-1/10 p-2'>
          <h3 className='border-l-4 border-l-blue-950 pl-2 font-medium text-2xl mb-5'>Terbaru</h3>
          <h1 className='font-medium text-xl'>Title</h1>
          <p className='font-light text-sm'>1 minute ago</p>
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
