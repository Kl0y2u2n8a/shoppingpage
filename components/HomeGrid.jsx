import React from 'react'
import Image from "next/image"
import accessories from "../public/images/accessories.jpg"

const HomeGrid = () => {
    return (
        <div>
            <div className='grid grid-cols-3 mx-10 gap-2 md:gap-4 text-center'>
                <div className='shadow-md rounded-lg mx-auto w-20 h-24 sm:w-56 sm:h-32 p-auto'>
                    <Image src={accessories} className='z-[-1] object-cover h-full w-full rounded-lg opacity-80' alt='Accessory'/>
                    <div>
                        <p className='text-red-500 font-semibold'>Accessory</p>
                    </div>
                </div>

                <div className='shadow-md rounded-lg border mx-auto pt-8 w-20 h-24 sm:w-56 sm:h-32 sm:pt-12 p-auto'>
                    Beverage
                </div>

                <div className='shadow-md rounded-lg border mx-auto pt-8 w-20 h-24 sm:w-56 sm:h-32 sm:pt-12 p-auto'>
                    Other
                </div>

            </div>
            <div>
                <p>Hello</p>
            </div>
        </div>
    )
}

export default HomeGrid
