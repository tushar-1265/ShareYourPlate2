import React, { Suspense, useState } from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {

    return (
        <>
            <div
                className="main_container bg-black overflow-hidden h-full lg:h-screen w-full px-5 lg:pl-48 mt-10 lg:mt-0 flex flex-col lg:flex-row items-center justify-center">
                <div
                    className={`content order-2 lg:order-1 text-center lg:text-left mt-12 lg:mt-20 font-jost text-white lg:w-1/2`}>
                  
                    <span className={`text-7xl  md:text-8xl font-bold`}> Welcome to our website</span>
                    <span className={`text-4xl  md:text-4xl font-bold`}> here we help to</span>
                    <span className={`text-7xl  md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}> distribute food to the people in need.</span>
                    <div className="button my-8">
                        
                        <Button content="Start Donating!" destination='/donate' />
                    </div>
                </div>
                <div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="image order-1 lg:pl-24 -mt-4 lg:order-2 lg:w-1/2">
                    <Image className='rounded-2xl' src='/hero.jpg' width={600} height={600} alt='hero_girl' />
                </div>
            </div>
        </>
    )
}

export default Hero
