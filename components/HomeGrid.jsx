import React from 'react'

const HomeGrid = () => {
    return (
        <div>
            <div className='grid grid-cols-3 mx-10 gap-2 md:gap-4 text-center'>
                <div className='shadow-md rounded-lg border mx-auto pt-8 w-20 h-24 sm:w-56 sm:h-32 sm:pt-12 p-auto'>
                    Accessory
                </div>

                <div className='shadow-md rounded-lg border mx-auto pt-8 w-20 h-24 sm:w-56 sm:h-32 sm:pt-12 p-auto'>
                    Beverage
                </div>

                <div className='shadow-md rounded-lg border mx-auto pt-8 w-20 h-24 sm:w-56 sm:h-32 sm:pt-12 p-auto'>
                    Other
                </div>

            </div>
        </div>
    )
}

export default HomeGrid
