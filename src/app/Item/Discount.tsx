import { Abril_Fatface, Rubik_Burned, Rubik_Glitch, Smooch } from 'next/font/google'
import React from 'react'

const smooch = Smooch({
    weight: '400',
    subsets: ['latin'],
})
const rubik = Rubik_Burned({
    weight: '400',
    subsets: ['latin'],
})
const rubik_logo = Rubik_Glitch({
    weight: '400',
    subsets: ['latin'],

})
const abril = Abril_Fatface({
    weight: '400',
    subsets: ['latin'],
})
const discount_Item = [
    {
        value: 30,
        id: 1,
        exp: '01/02/2024',
        total: 5,
    },
    {
        value: 35,
        id: 2,
        exp: '05/02/2024',
        total: 5,
    },
    {
        value: 20,
        id: 3,
        exp: '10/02/2024',
        total: 5,
    },
    {
        value: 25,
        id: 4,
        exp: '13/02/2024',
        total: 5,
    },
    {
        value: 15,
        id: 5,
        exp: '05/05/2024',
        total: 5,
    },

]
const Discount = () => {
    return (
        <div className='flex flex-wrap gap-5 mt-5 ml-5'>

            {discount_Item?.map((row: any, index: number) => (
                <>
                    <div key={index} className='card-wrapper cursor-pointer mt-5 p-3 shadow-lg bg-gradient-to-r from-orange-200 to-orange-500 rounded-lg w-[320px]'>
                        <div className='flex relative'>
                            <p className={`${rubik_logo.className}`}>THICKNESS</p>
                            <button className=' absolute right-2'>
                                <svg className="w-6 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z" />
                                </svg>
                            </button>
                        </div>
                        <div className='grid grid-cols-2 gap-5 items-center relative'>
                            <div className='text-center text-sm'>
                                <p className={`${smooch.className} text-5xl font-bold`}>Gift</p>
                                <p className={`${abril.className} text-xl`}>Voucher</p>
                                <p>Save and added to your cart</p>

                            </div>
                            <div className='absolute right-2'>
                                <p className={`${rubik.className} text-5xl font-bold text-orange-800`}>{row.value}{'%'}</p>
                                <div className='text-sm'>
                                    <p>Expiration Date</p>
                                    <p>{row.exp}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Discount