import Image from 'next/image';
import banner from '../../../public/image/banner-logo-hitam.png'
import logo from '../../../public/image/logo.png'

function About() {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src= {banner}
        width={500}
        height={500}
        alt='logo'
        className='my-10'
      />
      <h1 className='underline underline-offset-50 decoration-1 font-medium text-5xl p-2 mb-25'>About Us</h1>
      <p className='text-sky-600 font-medium text-2xl mx-50 text-center italic'>Kami adalah pada publikasi berita, artikel, dan jurnalistik, serta menyediakan layanan digital yang mendukung transformasi dan pertumbuhan bisnis di era modern.</p>
      <h2 className='font-medium text-2xl p-2 mt-25 mb-15'>Profil</h2>
      <div className='text-justify mx-50 text-xl space-y-10 font-light'>
        <p>PT. Winnicode Garuda Teknologi adalah perusahaan yang bergerak di bidang Media Publikasi dan Layanan Digital, didirikan pada tahun 2020 di Bandung.</p>
        <p>Kami hadir untuk menyediakan solusi publikasi dan digital yang inovatif bagi berbagai sektor industri.</p>
        <p>Fokus utama kami adalah pada publikasi berita, artikel, dan jurnalistik, serta menyediakan layanan digital yang mendukung transformasi dan pertumbuhan bisnis di era modern.</p>
        <p>Dalam bidang Media Publikasi, PT. Winnicode Garuda Teknologi mengkhususkan diri dalam pembuatan dan distribusi konten-konten berkualitas seperti berita terkini, artikel mendalam, dan tulisan jurnalistik yang dirancang untuk memberikan informasi yang akurat, terpercaya, dan relevan kepada masyarakat.</p>
        <p>Kami berkomitmen untuk menyajikan konten yang tidak hanya informatif, tetapi juga berperan dalam membentuk opini publik dan mendukung perkembangan pengetahuan.</p>
      </div>
      <Image
        src= {logo}
        width={200}
        height={200}
        alt='logo'
        className='my-20'
      />
      <h2 className='font-medium text-2xl p-2 mb-15'>Pendiri</h2>
      <div className='text-justify mx-50 text-xl space-y-10 font-light mb-15'>
        <p>PT. Winnicode Garuda Teknologi didirikan pada tahun 2020 di Kota Bandung sebagai respons terhadap meningkatnya kebutuhan akan layanan digital yang inovatif dan terpercaya di era transformasi digital.</p>
        <p>Perusahaan ini lahir dari visi untuk menjadi pelopor dalam bidang publikasi media dan layanan digital yang mampu memberdayakan individu, institusi, dan pelaku usaha dalam menghadapi tantangan teknologi yang terus berkembang.</p>
        <p>Didirikan oleh sekelompok profesional muda yang memiliki latar belakang kuat di bidang teknologi informasi dan komunikasi, PT. Winnicode Garuda Teknologi berkomitmen untuk menyediakan solusi kreatif dan berkelanjutan.</p>
        <p>Fokus utama perusahaan meliputi pengembangan perangkat lunak, pembuatan website dan aplikasi, layanan publikasi media digital, serta penyediaan layanan teknologi untuk mendukung kegiatan promosi dan branding secara online.</p>
        <p>Sejak awal pendiriannya, Winnicode terus berinovasi dan menjalin kemitraan strategis dengan berbagai pihak guna memperluas jangkauan serta meningkatkan kualitas layanan.</p>
        <p>Dengan semangat profesionalisme dan integritas, Winnicode hadir untuk menjadi mitra teknologi yang handal bagi klien di berbagai sektor industri.</p>
      </div>
    </div>
  )
}

export default About