"use client"

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
  const handleScroll = () =>{

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
        Rent a car effortlessly -- Find, book, and go!        </h1>
        <p className='hero__subtitle'>"Unleash Your Adventure: Rent the Perfect Ride Today!"</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/bmw.png" alt="hero" fill className='object-contain'/>
        </div>
        <div className='hero__image-overlay'/>
        
      </div>
    </div>
  )
}

export default Hero