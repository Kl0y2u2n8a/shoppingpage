import React from 'react'
import Image from "next/image"
import accessories from "../public/images/accessories.jpg"
import beverage from "../public/images/beverage.jpg"
import others from "../public/images/others.jpg"
import Link from "next/link"

const HomeGrid = () => {
    return (
        <div>
            <div className='grid grid-cols-3 mx-10 gap-2 md:gap-4 text-center'>
                <div className='shadow-md shadow-gray-400 rounded-lg mx-auto w-20 h-24 sm:w-56 sm:h-32 p-auto'>
                    <Image src={accessories} className='z-[-1] object-cover h-24 w-20 sm:w-56 sm:h-32 rounded-lg opacity-70 absolute' alt='Accessory'/>
                    <div className='absolute'>
                        <p className='text-white font-semibold text-sm pt-8 sm:pt-12 pl-2 sm:pl-16 sm:text-lg'>Accessory</p>
                    </div>
                </div>

                <div className='shadow-md rounded-lg mx-auto w-20 h-24 sm:w-56 sm:h-32 p-auto'>
                    <Image src={beverage} className='z-[-1] object-cover h-24 w-20 sm:w-56 sm:h-32 rounded-lg opacity-60 absolute' alt='Accessory' />
                    <div className='absolute'>
                        <p className='text-gray-600 font-semibold text-sm pt-8 sm:pt-12 pl-2 sm:pl-16 sm:text-lg'>Beverages</p>
                    </div>
                </div>

                <div className='shadow-md rounded-lg mx-auto w-20 h-24 sm:w-56 sm:h-32 p-auto '>
                    <Image src={others} className='z-[-1] object-cover h-24 w-20 sm:w-56 sm:h-32 rounded-lg opacity-60 absolute' alt='Accessory' />
                    <div className='absolute'>
                        <p className='text-white font-semibold text-sm pt-8 sm:pt-12 pl-4 sm:pl-20 sm:text-lg'>Others</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeGrid
