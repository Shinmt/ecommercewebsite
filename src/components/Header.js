import React, {useContext, useState, useEffect} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag} from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { CiShoppingTag} from 'react-icons/ci';

const Header = () => {
  const [ isActive, setIsActive ] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);

    });

  });

  return (
  <header 
  className= {`${isActive ? ' bg-pink-200 py-4 shadow-md' : ' bg-sky-900 py-6'}
  fixed w-full z-10 transition-all`}>
    <div className='container mx-auto flex items-center justify-between h-full'>
      <Link to = {'/'}>
        <div>
        <CiShoppingTag className='text-2xl text-white' />
        </div>
      </Link>

    <div onClick={() => setIsOpen(!isOpen)} 
    className='cursor-pointer flex relative'>
      <BsBag className='text-2xl text-white' />
      <div className='bg-red-600 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white
      rounded-full flex justify-center items-center'>
        {itemAmount}
      </div>
    </div>
    </div>
  </header>
  );
};

export default Header;
