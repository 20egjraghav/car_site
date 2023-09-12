"use client";
import Image from 'next/image';
import { CustomButton } from '.';

const Hero = () => {
  const handleScroll = () =>{

  }
  return (
    <div className="hero">
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
        Find, Book, Rent, and More: 
        Your Car Services Hub
        </h1>
        <p className='hero__subtitle'>
        Discover, Book, Rent, and More: Your One-Stop 
        Car Services Hub for Streamlined Rentals.
        </p>
        <CustomButton 
          title="Explore Cars"
          containerStyles="bg-primary-blue
          text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className="hero__image">
          <Image src="/hero.png" alt='Car'
          fill className='object-contain'/>
          </div>
          <div className='hero__image-overlay' />
        </div>

      </div>
  )
}

export default Hero