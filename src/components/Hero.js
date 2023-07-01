import React from 'react';
import WomanImg from '../img/woman_hero.png'; 
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className='bg-sky-300 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-sky-900 mr-3'></div>New Trend
        </div>
        <h1 className=' uppercase text-[70px] leading-[1.1] font-light mb-4 '>
          autumn sale stylish <br />
          <span className='font-semibold'>Women</span>
        </h1>
        <Link to= {'/'} className='self-start uppercase font-semibold border-b-2 border-primary '>Discover More</Link>
      </div>
      <div className='hidden lg:block'>
        <img src={WomanImg}s alt='' />
      </div>
    </div>
  </section>;
};

export default Hero;