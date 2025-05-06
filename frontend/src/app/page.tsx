import Image from 'next/image';
import banner from '../../public/image/banner-logo-hitam.png'
import thumbnail from '../../public/image/thumbnail.jpg'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center bg-blue-200'>
      <Image
        src= {banner}
        width={500}
        height={500}
        alt='logo'
        className=''
      />

      <div className='flex bg-amber-300 w-1/1'>
        <div className='flex flex-col flex-1/2 bg-white'>
          <div>
            <h3>Berita Pilihan</h3>
            <div className='flex'>
              <div>
              <Image
                src= {thumbnail}
                width={250}
                height={250}
                alt='logo'
                className=''
              />
              </div>
              <div>
                <h1>Title</h1>
                <p>Description</p>
                <h1>Author</h1>
              </div>
            </div>
          </div>

          <div>
            <h3>Populer</h3>
            <div className='flex'>
              <div>
              <Image
                src= {thumbnail}
                width={250}
                height={250}
                alt='logo'
                className=''
              />
              </div>
              <div>
                <h1>Title</h1>
                <p>Description</p>
                <h1>Author</h1>
              </div>
            </div>
          </div>

        </div>
        <div className='flex-1/3 bg-amber-200'>
          <h3>Terbaru</h3>
          <h1>Title</h1>
          <p>1 minute ago</p>
          <h1>Title</h1>
          <p>1 minute ago</p>
          <h1>Title</h1>
          <p>1 minute ago</p>
          <h1>Title</h1>
          <p>1 minute ago</p>
        </div>
      </div>

      <div className='flex flex-col bg-amber-300 w-1/1'>
        <div className='flex justify-around'>
          <div className='flex flex-col'>
            <h2>Indonesia</h2>
            <div className='flex'>
              <div className='flex flex-col'>
                  <h1>Title</h1>
                  <p>1 minute ago</p>
              </div>
                <Image
                    src= {thumbnail}
                    width={100}
                    height={100}
                    alt='logo'
                    className=''
                  />                
            </div>
          </div>
          <div className='flex flex-col'>
            <h2>Internasional</h2>
            <div className='flex'>
              <div className='flex flex-col'>
                  <h1>Title</h1>
                  <p>1 minute ago</p>
                </div>
                <Image
                    src= {thumbnail}
                    width={100}
                    height={100}
                    alt='logo'
                    className=''
                  />  
            </div>
          </div>
          <div className='flex flex-col'>
            <h2>Politik</h2>
            <div className='flex'>
              <div className='flex flex-col'>
                  <h1>Title</h1>
                  <p>1 minute ago</p>
                </div>
                <Image
                    src= {thumbnail}
                    width={100}
                    height={100}
                    alt='logo'
                    className=''
                  />  
            </div>
          </div>
        </div>
        <div className='flex justify-around'>
        <div className='flex flex-col'>
            <h2>Pendidikan</h2>
            <div className='flex'>
              <div className='flex flex-col'>
                  <h1>Title</h1>
                  <p>1 minute ago</p>
                </div>
                <Image
                    src= {thumbnail}
                    width={100}
                    height={100}
                    alt='logo'
                    className=''
                  />  
            </div>
          </div>
          <div className='flex flex-col'>
            <h2>Kesehatan</h2>
            <div className='flex'>
              <div className='flex flex-col'>
                  <h1>Title</h1>
                  <p>1 minute ago</p>
                </div>
                <Image
                    src= {thumbnail}
                    width={100}
                    height={100}
                    alt='logo'
                    className=''
                  />  
            </div>
          </div>
          <div className='flex flex-col'>
            <h2>Olahraga</h2>
            <div className='flex'>
              <div className='flex flex-col'>
                  <h1>Title</h1>
                  <p>1 minute ago</p>
                </div>
                <Image
                    src= {thumbnail}
                    width={100}
                    height={100}
                    alt='logo'
                    className=''
                  />  
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
