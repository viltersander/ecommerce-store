import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '@/context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  

  return (
    <div className="navbar-container">
      <p className='logo'> 
        <Link href='/'>JSM Headphones</Link>
      </p>
      <div className="nav-links hidden sm:block">
          <Link className="mr-5" href="/">Home</Link>
          <Link className="mr-5" href="/#products-link">Products</Link>
          <Link className="mr-5" href="/contact">Contact</Link>
      </div>
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {/* show cart */}
      {showCart && <Cart />} 
    </div>
  )
}

export default Navbar