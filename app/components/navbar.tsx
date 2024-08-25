'use client'

import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState("invisible lg:visible -z-50 translate-y-full")

    const openMenu = () => {
        setMenu("top-0 z-50 translate-y-0")
    }

    const closeMenu = () => {
        setMenu("invisible lg:visible -z-50 translate-y-full")
    }

    return (
        <nav className="flex w-full px-4 py-5 lg:py-8 lg:px-[75px] items-center justify-between">
            <button onClick={() => openMenu()} className='hidden sm:inline-block lg:hidden'>
                <img src="/assets/hamburger.webp" alt="menu" width="50px" className='' />
            </button>
            <div className="flex gap-x-1.5">
                <button onClick={() => openMenu()}>
                    <img src="/assets/hamburger.webp" alt="menu" width="40px" className='inline-block sm:hidden' />
                </button>
                <div className="flex items-center gap-x-1.5">
                    <img src="/assets/logo.webp" alt="logo" className="w-9 sm:w-10" />
                    <div>
                        <h1 className="text-xl font-bold sm:text-2xl leading-none">ezwithus.</h1>
                        <p className='text-xs leading-none'>EAZY WITH US</p>
                    </div>
                </div>
            </div>
            {/* left-0 bottom-0 right-0 bg-white lg:bg-transparent     gap-4  */}
            <ul className={`flex flex-col lg:flex-row justify-center items-center gap-x-7 gap-y-4 text-2xl text-3xl lg:text-sm font-medium duration-300 absolute lg:static ${menu} lg:z-10 lg:transform-none left-0 bottom-0 right-0 bg-white lg:bg-transparent`}>
                <li>
                    <Link href="/">Beranda</Link>
                </li>
                <li>
                    <Link href="/portofolio">Portofolio</Link>
                </li>
                <li>
                    <Link href="/#harga">Harga</Link>
                </li>
                <li>
                    <Link href="/#testimoni">Testimoni</Link>
                </li>
                <li>
                    <Link href="/about-us">Tentang Kami</Link>
                </li>
                <li className='lg:hidden'>
                    <button onClick={() => closeMenu()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </li>
            </ul>
            <a href="" className='btn-seccondary py-2 px-5 sm:py-2.5 sm:px-7 rounded-full text-white font-base hover:scale-105 hover:shadow-xl duration-300 focus:ring-2 focus:ring-stone-950 focus:ring-offset-2'>
                Hubungi <span className='hidden lg:inline'>Kami</span>
            </a>
        </nav>
    )
}

export default Navbar;