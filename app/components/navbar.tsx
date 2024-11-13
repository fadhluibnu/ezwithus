'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from './button';

const Navbar = () => {
  const [menu, setMenu] = useState(
    'invisible lg:visible -z-50 translate-y-full'
  );

  const openMenu = () => {
    setMenu('top-0 z-50 translate-y-0');
  };

  const closeMenu = () => {
    setMenu('invisible lg:visible -z-50 translate-y-full');
  };

  return (
    // lg:px-[75px]
    <nav className='flex max-w-screen-xl m-auto px-4 py-5 lg:py-8 items-center justify-between'>
      <button
        onClick={() => openMenu()}
        className='hidden sm:inline-block lg:hidden'
      >
        <img
          src='/assets/hamburger.webp'
          alt='menu'
          width='50px'
          className=''
        />
      </button>
      <div className='flex gap-x-1.5'>
        <button onClick={() => openMenu()}>
          <img
            src='/assets/hamburger.webp'
            alt='menu'
            width='40px'
            className='inline-block sm:hidden'
          />
        </button>
        <div className='flex items-center gap-x-1.5'>
          <img src='/assets/logo.webp' alt='logo' className='w-9 sm:w-10' />
          <div>
            <h1 className='text-xl font-bold sm:text-2xl leading-none'>
              ezwithus.
            </h1>
            <p className='text-xs leading-none'>EAZY WITH US</p>
          </div>
        </div>
      </div>
      <ul
        className={`flex flex-col lg:flex-row gap-x-7 gap-y-5 text-xl lg:text-sm font-medium duration-300 absolute lg:static ${menu} lg:z-10 lg:transform-none left-0 bottom-0 right-0 bg-white lg:bg-transparent p-6 md:pt-7 lg:p-0`}
      >
        <li className='hidden sm:inline-block lg:hidden'>
          <button onClick={() => closeMenu()}>
            <svg
              width='35'
              height='35'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='25' height='25' rx='8' fill='#F9FAFF' />
              <path
                d='M11.2983 12.5L4.24924 5.45269C4.17022 5.37367 4.10754 5.27986 4.06478 5.17662C4.02201 5.07337 4 4.96272 4 4.85097C4 4.73922 4.02201 4.62856 4.06478 4.52532C4.10754 4.42207 4.17022 4.32826 4.24924 4.24924C4.32826 4.17022 4.42207 4.10754 4.52532 4.06478C4.62856 4.02201 4.73922 4 4.85097 4C4.96272 4 5.07337 4.02201 5.17662 4.06478C5.27986 4.10754 5.37367 4.17022 5.45269 4.24924L12.5 11.2983L19.5473 4.24924C19.7069 4.08965 19.9233 4 20.149 4C20.3747 4 20.5912 4.08965 20.7508 4.24924C20.9103 4.40883 21 4.62528 21 4.85097C21 5.07666 20.9103 5.2931 20.7508 5.45269L13.7017 12.5L20.7508 19.5473C20.9103 19.7069 21 19.9233 21 20.149C21 20.3747 20.9103 20.5912 20.7508 20.7508C20.5912 20.9103 20.3747 21 20.149 21C19.9233 21 19.7069 20.9103 19.5473 20.7508L12.5 13.7017L5.45269 20.7508C5.2931 20.9103 5.07666 21 4.85097 21C4.62528 21 4.40883 20.9103 4.24924 20.7508C4.08965 20.5912 4 20.3747 4 20.149C4 19.9233 4.08965 19.7069 4.24924 19.5473L11.2983 12.5Z'
                fill='black'
              />
            </svg>
          </button>
        </li>
        <li className='inline-block sm:hidden'>
          <button onClick={() => closeMenu()}>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='25' height='25' rx='8' fill='#F9FAFF' />
              <path
                d='M11.2983 12.5L4.24924 5.45269C4.17022 5.37367 4.10754 5.27986 4.06478 5.17662C4.02201 5.07337 4 4.96272 4 4.85097C4 4.73922 4.02201 4.62856 4.06478 4.52532C4.10754 4.42207 4.17022 4.32826 4.24924 4.24924C4.32826 4.17022 4.42207 4.10754 4.52532 4.06478C4.62856 4.02201 4.73922 4 4.85097 4C4.96272 4 5.07337 4.02201 5.17662 4.06478C5.27986 4.10754 5.37367 4.17022 5.45269 4.24924L12.5 11.2983L19.5473 4.24924C19.7069 4.08965 19.9233 4 20.149 4C20.3747 4 20.5912 4.08965 20.7508 4.24924C20.9103 4.40883 21 4.62528 21 4.85097C21 5.07666 20.9103 5.2931 20.7508 5.45269L13.7017 12.5L20.7508 19.5473C20.9103 19.7069 21 19.9233 21 20.149C21 20.3747 20.9103 20.5912 20.7508 20.7508C20.5912 20.9103 20.3747 21 20.149 21C19.9233 21 19.7069 20.9103 19.5473 20.7508L12.5 13.7017L5.45269 20.7508C5.2931 20.9103 5.07666 21 4.85097 21C4.62528 21 4.40883 20.9103 4.24924 20.7508C4.08965 20.5912 4 20.3747 4 20.149C4 19.9233 4.08965 19.7069 4.24924 19.5473L11.2983 12.5Z'
                fill='black'
              />
            </svg>
          </button>
        </li>
        <li>
          <Link href='/'>Beranda</Link>
        </li>
        <li>
          <Link href='/portofolio'>Portofolio</Link>
        </li>
        <li>
          <Link href='/#harga'>Harga</Link>
        </li>
        <li>
          <Link href='/#testimoni'>Testimoni</Link>
        </li>
        <li>
          <Link href='/about-us'>Tentang Kami</Link>
        </li>
        <Button
          background={'bg-black mt-3'}
          color={'text-white text-lg'}
          content={'Hubungi Kami'}
        />
      </ul>
      <a
        href=''
        className='btn-seccondary py-2 px-5 sm:py-2.5 sm:px-7 rounded-full text-white font-base hover:scale-105 hover:shadow-xl duration-300 focus:ring-2 focus:ring-stone-950 focus:ring-offset-2'
      >
        Hubungi <span className='hidden lg:inline'>Kami</span>
      </a>
    </nav>
  );
};

export default Navbar;
