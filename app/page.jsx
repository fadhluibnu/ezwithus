import Image from 'next/image';
import Button from './components/button';
import PriceCard from './components/price-card';
import ProjectCard from './components/project-card';
import Link from 'next/link';
import FlowCard from './components/flow-card'

const SectionOne = ({ idSection }) => {
  return (
    <>
      <section
        id={idSection}
        className='w-100 px-4 py-5 lg:py-8 lg:px-[75px] lg:mt-1 xl:mt-6 grid md:grid-cols-2 items-center'
      >
        <div className='flex flex-col gap-9 xl:max-w-[524px]'>
          <div>
            <p className='bg-white rounded-full px-4 py-2 inline-block text-sm font-medium'>
              #EazyWithUs #KeepLearning
            </p>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className="font-['ClashDisplay-Semibold'] text-5xl lg:text-7xl">
              Make Projects{' '}
              <span className='bg-gradient-to-br from-[#9C2CF4] to-[#2C57F4] text-transparent bg-clip-text'>
                Easy With Us
              </span>
              .
            </h1>
            <p className='text-base font-medium text-seccondary'>
              We provide various programming, website and application
              development and creation services for you. Speed up your project
              with us.
            </p>
          </div>
          <div className='flex flex-col xl:flex-row gap-2'>
            <Button
              background='btn-primary'
              color='text-white'
              content={'Konsultasi'}
            />
            <Button
              background='bg-transparent'
              color='text-blue'
              content={
                <div className='flex justify-center gap-2'>
                  <svg
                    width='19'
                    height='18'
                    viewBox='0 0 19 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.87547 12.3143C7.66518 11.7958 7.28117 11.3666 6.78922 11.1002C6.29727 10.8338 5.72799 10.7467 5.17888 10.8538C4.62978 10.961 4.13502 11.2558 3.77934 11.6876C3.42366 12.1195 3.2292 12.6615 3.22927 13.221C3.22927 13.4687 3.1784 13.7137 3.07982 13.9409C2.98124 14.1681 2.83704 14.3727 2.65617 14.5418C2.47529 14.711 2.2616 14.8413 2.02832 14.9245C1.79505 15.0077 1.54717 15.0421 1.30005 15.0256C1.69751 15.7161 2.31179 16.256 3.04754 16.5616C3.78329 16.8672 4.59934 16.9213 5.36901 16.7156C6.13869 16.5099 6.81892 16.0559 7.30411 15.424C7.78931 14.7921 8.05232 14.0177 8.05232 13.221C8.05232 12.9003 7.98962 12.594 7.87547 12.3143ZM7.87547 12.3143C8.83125 11.9886 9.74536 11.5515 10.5989 11.012M6.54512 10.9919C6.87084 10.0341 7.30848 9.11812 7.84895 8.2629M10.5981 11.012C12.1225 10.0489 13.4272 8.77595 14.4276 7.27579L17.5433 2.60225C17.6626 2.42425 17.7165 2.21033 17.6957 1.99703C17.6748 1.78373 17.5806 1.58428 17.4291 1.43274C17.2775 1.28119 17.0781 1.18696 16.8648 1.16613C16.6515 1.14529 16.4375 1.19916 16.2595 1.31851L11.586 4.43501C10.0856 5.4351 8.8124 6.73957 7.84895 8.26371C9.07231 8.8107 10.0511 9.78948 10.5981 11.0128'
                      stroke='#2C57F4'
                      className='group-hover:stroke-white group-focus:stroke-white'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                  <p>Portofolio</p>
                </div>
              }
            />
          </div>
        </div>
        <div className='hidden md:inline-block'>
          <img src='/assets/banersectionone.webp' alt='baner section one' />
        </div>
      </section>
      <div className='absolute top-[0] overflow-hidden -z-50'>
        <img
          className='relative sm:hidden top-0 start-28 -z-50'
          src='/assets/image-one.webp'
          alt='image section 1'
        />
        <img
          className='absolute sm:hidden top-0 -z-10'
          src='/assets/background-section-one.webp'
          alt='background section one'
        />
      </div>
    </>
  );
};

const PLANS = [
  {
    title: 'Basic',
    desc: 'Cocok untuk perorangan dan Website Statis atau Landing Page',
    price: '150.000 - 350.000',
    modifier: null,
    features: [
      {
        status: true,
        text: 'Website Statis',
      },
      {
        status: true,
        text: '3-5 halaman',
      },
      {
        status: true,
        text: 'Website yang responsif',
      },
      {
        status: true,
        text: 'Integrasi dengan media sosial',
      },
      {
        status: true,
        text: 'Formulir kontak dasar',
      },
      {
        status: true,
        text: 'SEO Dasar',
      },
      {
        status: false,
        text: 'Domain dan hosting',
      },
    ],
  },
  {
    title: 'Premium',
    desc: 'Cocok untuk bisnis dengan website dinamis',
    price: '550.000 - 1.000.000',
    modifier: {
      background: 'bg-[#080C2E]',
      titleColor: 'text-white',
      descColor: 'text-stone-200',
      colorListBenefit: 'text-white',
      iconColor: 'stroke-white',
      priceColor: 'text-white',
    },
    features: [
      {
        status: true,
        text: 'Website Dinamis',
      },
      {
        status: true,
        text: 'Lebih dari 5 halaman',
      },
      {
        status: true,
        text: 'Website yang responsif',
      },
      {
        status: true,
        text: 'Desain Website Kustom',
      },
      {
        status: true,
        text: 'Integrasi Sosial Media',
      },
      {
        status: true,
        text: 'Formulir dan Manajemen Data',
      },
      {
        status: true,
        text: 'SEO Dasar',
      },
      {
        status: false,
        text: 'Domain dan hosting',
      },
    ],
  },
  {
    title: 'Standard',
    desc: 'Cocok untuk anda dengan bisnis kecil dan menengah',
    price: '350.000 - 550.000',
    modifier: null,
    features: [
      {
        status: true,
        text: 'Website Dinamis',
      },
      {
        status: true,
        text: '3-5 halaman',
      },
      {
        status: true,
        text: 'Website yang responsif',
      },
      {
        status: true,
        text: 'Integrasi dengan media sosial',
      },
      {
        status: true,
        text: 'Formulir Dan Managemen Data',
      },
      {
        status: true,
        text: 'SEO Dasar',
      },
      {
        status: false,
        text: 'Domain dan hosting',
      },
    ],
  },
];

const SectionTwo = ({ idSection }) => {
  return (
    <section
      id={idSection}
      className='w-100 px-4 py-5 lg:py-8 lg:px-[75px] md:mt-5 lg:mt-12'
    >
      <div className='flex flex-col gap-2.5 items-center'>
        <h1 className='font-["ClashDisplay-Semibold"] text-2xl md:text-4xl lg:text-5xl lg:text-center'>
          Layanan Kami, Jasa Pembuatan Website
        </h1>
        <p className='text-seccondary text-sm md:font-medium md:text-base lg:max-w-xl lg:text-center'>
          Dengan layanan berikut. Kami akan bangun proyek dengan cepat dan
          berkualitas untuk tugas, kepentinggan atau bisnis Anda
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8 lg:items-center'>
        {PLANS.map(val => (
          <PriceCard key={val.title} {...val} {...val.modifier} />
        ))}
      </div>
    </section>
  );
};

const PORTOFOLIO = [
  {
    image: "/assets/portofolio1.webp"
  },
  {
    image: "/assets/portofolio2.webp"
  },
  {
    image: "/assets/portofolio3.webp"
  }
]

const SectionThree = ({ idSection }) => {
  return (
    <section
      id={idSection}
      className='w-100 px-4 py-5 lg:py-8 lg:px-[75px] md:mt-5 lg:mt-12'
    >
      <div className='flex flex-col gap-2.5 sm:items-center'>
        <h1 className='font-["ClashDisplay-Semibold"] text-2xl md:text-4xl lg:text-5xl lg:text-center'>
          Proyek Yang Telah Kami Kerjakan
        </h1>
        <p className='text-seccondary text-sm md:font-medium md:text-base lg:max-w-2xl lg:text-center'>
          Kami membangun dan membuat proyek yang berkualitas untuk mepercepat dan mempermudah
          projek semua orang dengan menggunakan layanan kami
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8 lg:items-center'>
        {
          PORTOFOLIO.map(val => (
            <ProjectCard key={val.image} image={val.image} />
          ))
        }
      </div>
    </section>
  )
}

const FLOW = [
  {
    title: "Hubungi Kami",
    desc: "Tanya dan konsultasikan proyek anda lewat kontak kami."
  },
  {
    title: "Kesepatakan",
    desc: "Membuat kesepakatan terkait detail proyek dan harga."
  },
  {
    title: "Eksekusi",
    desc: "Proyek akan dieksekusi setelah kesepakatan diputuskan."
  },
  {
    title: "Selesai",
    desc: "Pembayaran dan penyerahan proyek."
  }
]

const SectionFour = ({ idSection }) => {
  return (
    <section
      id={idSection}
      className='w-100 px-4 py-5 lg:py-8 lg:px-[75px] md:mt-5 lg:mt-12 grid sm:grid-cols-2'
    >
      <img className='hidden sm:inline-block' src="/assets/banner_section4.webp" alt="Banner Section 4" width='505px' />
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-["ClashDisplay-Semibold"] text-2xl md:text-4xl lg:text-5xl'>
            Cara Menggunakan Layanan Kami?
          </h1>
          <p className='text-seccondary text-sm md:font-medium md:text-base lg:max-w-2xl'>
            Tahapan mudah untuk mulai menggunakan layanan kami, dari konsultasi hingga eksekusi.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='bg-white p-5 flex gap-4 rounded-2xl items-center'>
            <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.1925 42.9227H28.6925C38.2759 42.9227 42.1092 39.0894 42.1092 29.5061V18.0061C42.1092 8.42275 38.2759 4.58942 28.6925 4.58942H17.1925C7.60921 4.58942 3.77588 8.42275 3.77588 18.0061V29.5061C3.77588 39.0894 7.60921 42.9227 17.1925 42.9227Z" stroke="#2C57F4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.77588 25.0978L15.2759 25.0594C16.7134 25.0594 18.3234 26.1519 18.86 27.4936L21.045 33.0136C21.5434 34.2594 22.3292 34.2594 22.8275 33.0136L27.2167 21.8778C27.6384 20.8044 28.4242 20.7661 28.9609 21.7819L30.9542 25.5578C31.5484 26.6886 33.0817 27.6086 34.3467 27.6086H42.1284" stroke="#2C57F4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className='flex flex-col'>
              <h2 className='text-xl font-bold'>Hubungi Kami</h2>
              <p className='text-seccondary'>Tanya dan konsultasikan proyek anda lewat kontak kami</p>
            </div>
          </div>
        </div>
        <Button
          background='btn-primary'
          color='text-white'
          content={'Hubungi Sekarang'}
        />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SectionOne idSection='beranda' />
      <SectionTwo idSection='layanan' />
      <SectionThree idSection='portofolio' />
      <SectionFour idSection='pemesanan' />
    </>
  );
}
