import Image from 'next/image';
import Button from './components/button';
import PriceCard from './components/price-card';
import ProjectCard from './components/project-card';
import Link from 'next/link';
import FlowCard from './components/flow-card';
import TestiCard from './components/testimoni-card';

const SectionOne = ({ idSection }) => {
  // lg:px-[75px]
  return (
    <>
      <section
        id={idSection}
        className='max-w-screen-xl m-auto px-4 py-5 lg:py-8 lg:mt-1 xl:mt-6 grid md:grid-cols-2 items-center'
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
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
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
  // lg:px-[75px]
  return (
    <section
      id={idSection}
      className='max-w-screen-xl m-auto px-4 py-5 lg:py-8 md:mt-5 lg:mt-12'
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
    image: '/assets/portofolio1.webp',
  },
  {
    image: '/assets/portofolio2.webp',
  },
  {
    image: '/assets/portofolio3.webp',
  },
];
const SectionThree = ({ idSection }) => {
  return (
    // lg:px-[75px]
    <section
      id={idSection}
      className='max-w-screen-xl m-auto px-4 py-5 lg:py-8 md:mt-5 lg:mt-12'
    >
      <div className='flex flex-col gap-2.5 sm:items-center'>
        <h1 className='font-["ClashDisplay-Semibold"] text-2xl md:text-4xl lg:text-5xl lg:text-center'>
          Proyek Yang Telah Kami Kerjakan
        </h1>
        <p className='text-seccondary text-sm md:font-medium md:text-base lg:max-w-2xl lg:text-center'>
          Kami membangun dan membuat proyek yang berkualitas untuk mepercepat
          dan mempermudah projek semua orang dengan menggunakan layanan kami
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8 lg:items-center'>
        {PORTOFOLIO.map(val => (
          <ProjectCard key={val.image} image={val.image} />
        ))}
      </div>
    </section>
  );
};

const FLOW = [
  {
    icon: (
      <svg
        width='46'
        height='47'
        viewBox='0 0 46 47'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17.1925 42.9227H28.6925C38.2759 42.9227 42.1092 39.0894 42.1092 29.5061V18.0061C42.1092 8.42275 38.2759 4.58942 28.6925 4.58942H17.1925C7.60921 4.58942 3.77588 8.42275 3.77588 18.0061V29.5061C3.77588 39.0894 7.60921 42.9227 17.1925 42.9227Z'
          stroke='#2C57F4'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3.77588 25.0978L15.2759 25.0594C16.7134 25.0594 18.3234 26.1519 18.86 27.4936L21.045 33.0136C21.5434 34.2594 22.3292 34.2594 22.8275 33.0136L27.2167 21.8778C27.6384 20.8044 28.4242 20.7661 28.9609 21.7819L30.9542 25.5578C31.5484 26.6886 33.0817 27.6086 34.3467 27.6086H42.1284'
          stroke='#2C57F4'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
    title: 'Hubungi Kami',
    desc: 'Tanya dan konsultasikan proyek anda lewat kontak kami.',
  },
  {
    icon: (
      <svg
        width='39'
        height='40'
        viewBox='0 0 39 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13.5 21.2357L17.8125 25.5482L25 15.4857M19.25 2C14.9102 6.12128 9.13051 8.38169 3.14617 8.29817C2.38494 10.6173 1.99804 13.0429 2.00001 15.4837C2.00001 26.2017 9.32934 35.2062 19.25 37.7612C29.1707 35.2082 36.5 26.2037 36.5 15.4857C36.5 12.9748 36.0975 10.5579 35.3538 8.29625H35.0625C28.9368 8.29625 23.3708 5.90425 19.25 2Z'
          stroke='#2C57F4'
          stroke-width='3.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    ),
    title: 'Kesepakatan',
    desc: 'Membuat kesepakatan terkait detail proyek dan harga.',
  },
  {
    icon: (
      <svg
        width='46'
        height='46'
        viewBox='0 0 46 46'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18.4 38.3333H27.6C35.2667 38.3333 38.3334 35.2667 38.3334 27.6V18.4C38.3334 10.7333 35.2667 7.66666 27.6 7.66666H18.4C10.7334 7.66666 7.66669 10.7333 7.66669 18.4V27.6C7.66669 35.2667 10.7334 38.3333 18.4 38.3333Z'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M20.125 32.5833H25.875C30.6667 32.5833 32.5834 30.6667 32.5834 25.875V20.125C32.5834 15.3333 30.6667 13.4167 25.875 13.4167H20.125C15.3334 13.4167 13.4167 15.3333 13.4167 20.125V25.875C13.4167 30.6667 15.3334 32.5833 20.125 32.5833Z'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M15.3525 7.66668V3.83334'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M23 7.66668V3.83334'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M30.6667 7.66668V3.83334'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M38.3333 15.3333H42.1666'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M38.3333 23H42.1666'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M38.3333 30.6667H42.1666'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M30.6667 38.3333V42.1667'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M23.0192 38.3333V42.1667'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M15.3525 38.3333V42.1667'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M3.83331 15.3333H7.66665'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M3.83331 23H7.66665'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M3.83331 30.6667H7.66665'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M23 18.5917L21.1983 21.735C20.7958 22.425 21.1216 23 21.9266 23H24.0733C24.8783 23 25.2041 23.575 24.8016 24.265L23 27.4083'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    ),
    title: 'Eksekusi',
    desc: 'Proyek akan dieksekusi setelah kesepakatan diputuskan.',
  },
  {
    icon: (
      <svg
        width='46'
        height='46'
        viewBox='0 0 46 46'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.6182 21.3133C1.64825 21.9458 1.64825 34.9983 10.6182 35.6308H14.2983'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M10.7142 21.3133C4.5617 4.19747 30.5133 -2.64502 33.4841 15.3333C41.7833 16.3875 45.1375 27.4467 38.8509 32.9475C36.9342 34.6917 34.4617 35.65 31.8742 35.6308H31.7016'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M32.5834 31.6825C32.5834 33.1008 32.2766 34.4425 31.7016 35.6308C31.5483 35.9758 31.3759 36.3017 31.1842 36.6083C29.5359 39.3875 26.4884 41.2658 23 41.2658C19.5117 41.2658 16.4641 39.3875 14.8158 36.6083C14.6241 36.3017 14.4517 35.9758 14.2984 35.6308C13.7234 34.4425 13.4167 33.1008 13.4167 31.6825C13.4167 26.3925 17.71 22.0992 23 22.0992C28.29 22.0992 32.5834 26.3925 32.5834 31.6825Z'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-miterlimit='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M20.01 31.6825L21.9075 33.58L25.99 29.8042'
          stroke='#2C57F4'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    ),
    title: 'Selesai',
    desc: 'Pembayaran dan penyerahan proyek.',
  },
];

const SectionFour = ({ idSection }) => {
  return (
    // lg:px-[75px]
    <section
      id={idSection}
      className='max-w-screen-xl m-auto px-4 py-5 lg:py-8 md:mt-5 lg:mt-12 grid md:grid-cols-2 gap-5'
    >
      <img
        className='hidden md:block'
        src='/assets/banner_section4.webp'
        alt='Banner Section 4'
        width='505px'
      />
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-["ClashDisplay-Semibold"] text-3xl lg:text-5xl'>
            Cara Menggunakan Layanan Kami?
          </h1>
          <p className='text-seccondary text-sm md:font-medium lg:max-w-2xl'>
            Tahapan mudah untuk mulai menggunakan layanan kami, dari konsultasi
            hingga eksekusi.
          </p>
        </div>
        <div className='flex flex-col gap-4 my-5'>
          {FLOW.map(val => (
            <FlowCard
              key={val.title}
              icon={val.icon}
              title={val.title}
              desc={val.desc}
            />
          ))}
        </div>
        <Button
          background='btn-primary'
          color='text-white'
          content={'Hubungi Sekarang'}
        />
      </div>
    </section>
  );
};

const TESTIMONI = [
  {
    img: '/assets/testi1.png',
  },
  {
    img: '/assets/testi2.png',
  },
  {
    img: '/assets/testi3.png',
  },
];

const SectionFive = ({ idSection }) => {
  return (
    <section
      id={idSection}
      className='max-w-screen-xl m-auto px-4 py-5 mb-[330px] lg:py-8 md:mt-5 lg:mt-12'
    >
      <div className='flex flex-col gap-2.5 items-center'>
        <h1 className='font-["ClashDisplay-semibold"] text-2xl md:text-4xl lg:text-5xl lg:text-center'>
          Dipercaya Untuk Menangani Proyek
        </h1>
        <p className='text-seccondary text-sm md:font-medium md:text-base lg:max-w-2xl lg:text-center'>
          Klien mempercayakan kami untuk menangani proyek website dan aplikasi
          mereka. Kami selalu memberikan hasil terbaik sesuai harapan
        </p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8 lg:items-center'>
          {TESTIMONI.map(val => (
            <TestiCard key={val.img} image={val.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionSeven = ({ idSection }) => {
  return (
    <section
      id={idSection}
      className='px-4 pb-5 pt-[330px] lg:pb-8 bg-[#070C29]'
    >
      <div className='max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-30 rounded-[40px] p-12 bg-[#640EF1] relative -top-96 left-0 right-0'>
        <div className='flex flex-col gap-10'>
          <div>
            <p className='bg-white rounded-full px-4 py-2 inline-block text-sm font-medium'>
              #EazyWithUs #KeepLearning
            </p>
          </div>
          <div className='flex flex-col gap-2.5'>
            <h1 className="font-['ClashDisplay-Semibold'] text-4xl lg:text-7xl text-white">
              Konsultasi Proyek Anda Sekarang
            </h1>
            <p className='text-base font-medium text-slate-100'>
              Kami akan membantu menyelesaikan membuat proyek anda dengan cepat
              dan berkualitas
            </p>
          </div>
          <div>
            <Button
              background={'bg-[#FFD15A] inline-block'}
              color={'text-[#080C2E]'}
              content={'Hubungi Kami'}
            />
          </div>
        </div>
        <div className='flex flex-col flex-wrap gap-2 lg:gap-5 max-h-[365px] justify-center'>
          <div className='py-7 flex flex-col gap-5 bg-white items-center rounded-3xl px-2'>
            <svg
              width='47'
              height='46'
              viewBox='0 0 47 46'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.75 42.1667H29.25C38.8334 42.1667 42.6667 38.3334 42.6667 28.75V17.25C42.6667 7.66671 38.8334 3.83337 29.25 3.83337H17.75C8.16671 3.83337 4.33337 7.66671 4.33337 17.25V28.75C4.33337 38.3334 8.16671 42.1667 17.75 42.1667Z'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M18.8999 17.1925L14.1274 21.965C13.5716 22.5208 13.5716 23.46 14.1274 24.0158L18.8999 28.7883'
                stroke='#640EF1'
                stroke-width='3'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M28.1 17.1925L32.8725 21.965C33.4283 22.5208 33.4283 23.46 32.8725 24.0158L28.1 28.7883'
                stroke='#640EF1'
                stroke-width='3'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <p className='text-lg font-primary font-semibold'>
              Website Company Profile
            </p>
          </div>
          <div className='py-7 flex flex-col gap-5 btn-seccondary items-center rounded-3xl px-2'>
            <svg
              width='47'
              height='46'
              viewBox='0 0 47 46'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.6866 34.7876V30.8201'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
              />
              <path
                d='M23.5 34.7875V26.8525'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
              />
              <path
                d='M33.3134 34.7874V22.8657'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
              />
              <path
                d='M33.3133 11.2124L32.4316 12.2474C27.5441 17.9591 20.9891 22.0032 13.6866 23.8241'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
              />
              <path
                d='M27.6975 11.2124H33.3133V16.8091'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M17.75 42.1666H29.25C38.8334 42.1666 42.6667 38.3333 42.6667 28.7499V17.2499C42.6667 7.66659 38.8334 3.83325 29.25 3.83325H17.75C8.16671 3.83325 4.33337 7.66659 4.33337 17.2499V28.7499C4.33337 38.3333 8.16671 42.1666 17.75 42.1666Z'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>

            <p className='text-lg text-white font-semibold'>Web Applications</p>
          </div>
          <div className='py-7 flex flex-col gap-5 bg-white items-center rounded-3xl px-2'>
            <svg
              width='47'
              height='47'
              viewBox='0 0 47 47'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18.9001 38.8333H28.1001C35.7667 38.8333 38.8334 35.7666 38.8334 28.1V18.9C38.8334 11.2333 35.7667 8.16663 28.1001 8.16663H18.9001C11.2334 8.16663 8.16675 11.2333 8.16675 18.9V28.1C8.16675 35.7666 11.2334 38.8333 18.9001 38.8333Z'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M20.6251 33.0833H26.3751C31.1667 33.0833 33.0834 31.1666 33.0834 26.375V20.625C33.0834 15.8333 31.1667 13.9166 26.3751 13.9166H20.6251C15.8334 13.9166 13.9167 15.8333 13.9167 20.625V26.375C13.9167 31.1666 15.8334 33.0833 20.6251 33.0833Z'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M15.8525 8.16671V4.33337'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M23.5 8.16671V4.33337'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M31.1667 8.16671V4.33337'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M38.8333 15.8334H42.6666'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M38.8333 23.5H42.6666'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M38.8333 31.1666H42.6666'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M31.1667 38.8333V42.6666'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M23.5193 38.8333V42.6666'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M15.8525 38.8333V42.6666'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M4.33325 15.8334H8.16659'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M4.33325 23.5H8.16659'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M4.33325 31.1666H8.16659'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M23.5 19.0917L21.6984 22.235C21.2959 22.925 21.6217 23.5 22.4267 23.5H24.5734C25.3784 23.5 25.7042 24.075 25.3017 24.765L23.5 27.9083'
                stroke='#640EF1'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <p className='text-lg font-primary font-semibold'>
              Landing Page Website
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2.5 items-center'></div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <SectionOne idSection='beranda' />
      <SectionTwo idSection='layanan' />
      <SectionThree idSection='portofolio' />
      <SectionFour idSection='alur' />
      <SectionFive idSection='testimoni' />
      <SectionSeven idSection='footer' />
    </>
  );
}
