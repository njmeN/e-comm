import React from 'react';
import imageShoe from './../../assets/icons/shoes-transparent.png'
import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <div className='bg-primary w-full h-[500px] lg:h-[500px] xl:h-[500px] max-md:h-[350px] text-white flex justify-around items-center max-md:items-start max-md:pt-10 '>
      <div className="flex lg:flex-row sm:flex-col-reverse md:flex-row max-sm:flex-col-reverse">
      <div id="text_banner" className='flex flex-col gap-4 lg:pt-[50px] xl:pt-[50px]'>
        <h2 className='lg:text-6xl md:text-3xl sm:text-xl md:leading-8 lg:leading-20'>Adidas Men Running <br/> Sneakers</h2>
        <p>Performance and design, Taken right to the edge.</p>
        <Link to={""} className='font-semibold border-b-2 w-fit pb-2'>SHOP NOW</Link>
      </div>
      <div id="image_banner" className='w-[45vw] max-sm:w-[60vw] max-md:w-[60vw] relative'>
        <img src={imageShoe} className='absolute bottom-0 max-md:top-[100px] max-md:left-[70px]'/>
      </div>
      </div>
    </div>
  )
}
