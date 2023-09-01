"use client";

import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {
    const handleScroll = () => {

    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find and buy the car of your dreams -- Quickly and Easily!
                </h1>

                <p className='hero__subtitle'>
                    Streamline your car buying experience with our quick and easy checkout process. 
                </p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>

            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src={"/hero.png"} alt='hero' fill className='object-contain'/>
                </div>
                <div className='hero__image-overlay' />
            </div>
        </div>
    )
}

export default Hero