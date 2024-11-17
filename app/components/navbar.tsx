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
          <img
            src='/assets/Logo1.webp'
            alt='logo'
            className='w-9 sm:w-10 rounded-full'
          />
          <div>
            <h1 className='text-xl font-bold sm:text-2xl leading-none'>
              InSoft.
            </h1>
            <p className='text-sm leading-none text-slate-600'>EazyWithUs</p>
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
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='30' height='30' rx='8' fill='#F9FAFF' />
              <path
                d='M13.8689 15L7.23458 8.36724C7.16021 8.29287 7.10122 8.20457 7.06097 8.1074C7.02072 8.01023 7 7.90609 7 7.80091C7 7.69573 7.02072 7.59159 7.06097 7.49441C7.10122 7.39724 7.16021 7.30895 7.23458 7.23458C7.30895 7.16021 7.39724 7.10122 7.49441 7.06097C7.59159 7.02072 7.69573 7 7.80091 7C7.90609 7 8.01023 7.02072 8.1074 7.06097C8.20457 7.10122 8.29287 7.16021 8.36724 7.23458L15 13.8689L21.6328 7.23458C21.783 7.08438 21.9867 7 22.1991 7C22.4115 7 22.6152 7.08438 22.7654 7.23458C22.9156 7.38478 23 7.5885 23 7.80091C23 8.01332 22.9156 8.21704 22.7654 8.36724L16.1311 15L22.7654 21.6328C22.9156 21.783 23 21.9867 23 22.1991C23 22.4115 22.9156 22.6152 22.7654 22.7654C22.6152 22.9156 22.4115 23 22.1991 23C21.9867 23 21.783 22.9156 21.6328 22.7654L15 16.1311L8.36724 22.7654C8.21704 22.9156 8.01332 23 7.80091 23C7.5885 23 7.38478 22.9156 7.23458 22.7654C7.08438 22.6152 7 22.4115 7 22.1991C7 21.9867 7.08438 21.783 7.23458 21.6328L13.8689 15Z'
                fill='black'
              />
            </svg>
          </button>
        </li>
        <li className='inline-block sm:hidden'>
          <button onClick={() => closeMenu()}>
            <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='30' height='30' rx='8' fill='#F9FAFF' />
              <path
                d='M13.8689 15L7.23458 8.36724C7.16021 8.29287 7.10122 8.20457 7.06097 8.1074C7.02072 8.01023 7 7.90609 7 7.80091C7 7.69573 7.02072 7.59159 7.06097 7.49441C7.10122 7.39724 7.16021 7.30895 7.23458 7.23458C7.30895 7.16021 7.39724 7.10122 7.49441 7.06097C7.59159 7.02072 7.69573 7 7.80091 7C7.90609 7 8.01023 7.02072 8.1074 7.06097C8.20457 7.10122 8.29287 7.16021 8.36724 7.23458L15 13.8689L21.6328 7.23458C21.783 7.08438 21.9867 7 22.1991 7C22.4115 7 22.6152 7.08438 22.7654 7.23458C22.9156 7.38478 23 7.5885 23 7.80091C23 8.01332 22.9156 8.21704 22.7654 8.36724L16.1311 15L22.7654 21.6328C22.9156 21.783 23 21.9867 23 22.1991C23 22.4115 22.9156 22.6152 22.7654 22.7654C22.6152 22.9156 22.4115 23 22.1991 23C21.9867 23 21.783 22.9156 21.6328 22.7654L15 16.1311L8.36724 22.7654C8.21704 22.9156 8.01332 23 7.80091 23C7.5885 23 7.38478 22.9156 7.23458 22.7654C7.08438 22.6152 7 22.4115 7 22.1991C7 21.9867 7.08438 21.783 7.23458 21.6328L13.8689 15Z'
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
          background={'bg-black mt-3 lg:hidden'}
          color={'text-white text-lg'}
          content={'Hubungi Kami'}
        />
      </ul>
      <a
        href=''
        className='btn-primary py-2 px-5 sm:py-2.5 sm:px-7 rounded-full text-white font-base hover:scale-105 hover:shadow-xl duration-300 focus:ring-2 focus:ring-stone-950 focus:ring-offset-2'
      >
        Hubungi <span className='hidden lg:inline'>Kami</span>
      </a>
    </nav>
  );
};

export default Navbar;
