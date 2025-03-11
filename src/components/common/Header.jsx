import React from 'react';
import logo from "../../assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Header = () => {
  return (
    <section className='header container text-text'>
      <div className="header__top flex flex-wrap items-center justify-between mt-4 font-normal text-xl" >
        <div className="header__language">
          <p className=''>EN. USD.</p>
        </div>
        <div className="header__user">
          <ul className='flex flex-wrap items-center gap-4'>
            <li className='flex flex-wrap gap-2 items-center cursor-pointer'><FaRegUser className='w-5 h-5'/><span>My profile</span></li>
            <li><div className='relative'> <AiOutlineShoppingCart className='w-6 h-6 cursor-pointer'/>
              <span className='absolute rounded-full bg-[#FB7181] w-5 h-5 -top-2 -right-2 flex items-center justify-center'> 
                <div className='text-white font-bold text-[10px]'>2</div>
              </span>
            </div></li>
            <li className='cursor-pointer'>items</li>
            <li><span className='opacity-50'>$0.00</span></li>
            <li><FiSearch className='w-5 h-5 cursor-pointer' /></li>
          </ul>
        </div>
      </div>

      <div className='nav flex flex-wrap justify-between'>
        <div className="nav__logo flex flex-wrap gap-2 items-center">
          <div className="nav__logo-img"><img src={logo} alt='logo' className='w-10 h-10'/></div>
          <div className="na__logo-text font-bold text-lg">e-comm</div>
        </div>
        
      <div class="nav__list flex flex-wrap items-center gap-8 text-2xl font-medium h-20">
                    <div class=" hover:text-primary cursor-pointer">Home</div>
                    <div class=" hover:text-primary cursor-pointer">BAGS</div>
                    <div class=" hover:text-primary cursor-pointer">SNEAKERS</div>
                    <div class=" hover:text-primary cursor-pointer">BELT</div>
                    <div class=" hover:text-primary cursor-pointer">CONTACT</div>
        </div>
      </div>
      
    </section>
  )
}
