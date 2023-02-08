import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Image from 'next/image';
import {close, menu } from '../assets/index';

import { Cart } from './';
import { useStateContext } from '@/context/StateContext';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar-container">
      <p className='logo'> 
        <Link href='/'>JSM Headphones</Link>
      </p>
      <div className="nav-links hidden sm:block">
          <Link className="mr-5" href="/">Home</Link>
          <Link className="mr-5" href="/#products-link">Products</Link>
          <Link className="mr-5" href="/contact">Contact</Link>
      </div>

      <div className="sm:hidden flex justify-end items-center ">
        <Image
          src={toggle ? close : menu }
          alt="search"
          width={24}
          height={24}
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer mr-2 opacity-60"
         /> 
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute bg-white top-[55px] right-0 w-full navbar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1" onClick={() => setToggle((prev) => !prev)}> 
              <Link className="mb-2 opacity-60 hover:opacity-100" href="/">Home</Link>
              <Link className="mb-2 opacity-60 hover:opacity-100" href="/#products-link">Products</Link>
              <Link className="mb-2 opacity-60 hover:opacity-100" href="/contact">Contact</Link>
            </ul> 
          </div>
      </div>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {/* show cart */}
      {showCart && <Cart />} 
 
    </nav>
  )
}

export default Navbar