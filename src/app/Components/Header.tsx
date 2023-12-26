'use client'
import { Caveat, Lilita_One, Permanent_Marker, Rubik_Glitch, Silkscreen } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import BinhMinh from '../../../public/nen/binhminh.jpg';
import Ngay from '../../../public/nen/ngay.jpg';
import Chieu from '../../../public/nen/chieu.jpg';
import HoangHon from '../../../public/nen/hoanghon.jpg';
import Dem from '../../../public/nen/dem.jpg';
import { StaticImageData } from 'next/image';
import { ModalClose, DialogTitle, Drawer } from '@mui/joy';

const rubik = Rubik_Glitch({
    weight: '400',
    subsets: ['latin'],

})
const per = Lilita_One({
    weight: '400',
    subsets: ['latin'],
})
const silk = Caveat({
    weight: '700',
    subsets: ['latin'],
})
const mmenuOptions = [
    {
        name: 'Product',
        icon: (
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.583 5.445h.01M8.86 16.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 10.31 1l5.734.007A1.968 1.968 0 0 1 18 2.983v5.5a.994.994 0 0 1-.316.727l-7.439 7.5a.975.975 0 0 1-1.385.001Z" />
            </svg>
        )
    },
    {
        name: 'Category',
        icon: (
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.855 10.322a2.476 2.476 0 1 1 .133-4.241m6.053 4.241a2.475 2.475 0 1 1 .133-4.241M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
            </svg>
        )
    },
    {
        name: 'Cart',
        icon: (
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
            </svg>
        )
    },
    {
        name: 'Sign out',
        icon: (
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
            </svg>
        )
    },
]
const images = {
    binhMinh: BinhMinh,
    ngay: Ngay,
    chieu: Chieu,
    hoangHon: HoangHon,
    dem: Dem,
};
const Header = () => {
    const [menu, setMenu] = useState(false);
    const [bgImage, setBackgroundImage] = useState<StaticImageData | null>(null);
    const [currentTime, setCurrentTime] = useState<string>('');
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour > 5 && currentHour < 7) {
            setBackgroundImage(images.hoangHon);
        } else if (currentHour > 7 && currentHour < 12) {
            setBackgroundImage(images.ngay);
        } else if (currentHour > 12 && currentHour < 17) {
            setBackgroundImage(images.chieu);
        } else if (currentHour > 17 && currentHour < 19) {
            setBackgroundImage(images.hoangHon);
        } else {
            setBackgroundImage(images.dem);
        }
    }, []);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentHour = new Date().getHours();
            const currentMinutes = new Date().getMinutes();
            const currentSeconds = new Date().getSeconds();

            // Format giờ, phút, giây thành chuỗi
            const formattedTime = `${currentHour}:${currentMinutes}:${currentSeconds}`;
            setCurrentTime(formattedTime);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])
    const handleClick = (_value: any) => {
        if (_value == 'Cart') {
            setOpen(true);
        }
    }
    return (
        <div style={{ backgroundImage: `url(${bgImage?.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='h-svh cursor-pointer'>
            <div className='m-auto'>
                <div className={silk.className}>
                    <p className='text-xl font-bold text-center justify-center pt-20 cursor-pointer'>{'UTC+7 : '}{currentTime}</p>
                </div>
                <div className='m-auto p-10 w-[300px] md:w-[700px] '>
                    <p className='[text-wrap:balance]'>Chọn lựa đẳng cấp, bước đi kiêu hãnh. Tại THICKNESS, chúng tôi mang đến cho bạn không chỉ là những đôi giày xuất sắc về chất lượng, mà còn là biểu tượng phong cách và sự tự tin. Hãy để THICKNESS là đối tác tin cậy, hỗ trợ bạn trên mọi hành trình!</p>
                    <button className='shadow-lg px-5 py-2 mx-auto text-center rounded-lg hover:text-white '>See More</button>
                </div>
            </div>
            <div className=' fixed grid grid-cols-2 gap-2 top-0 p-5 z-10 w-svw shadow-sm h-20'>
                <div className={rubik.className}>
                    <p className='text-2xl underline md:text-5xl sm:mt-3 text-left cursor-pointer'>THICKNESS</p>
                </div>
                <div className={per.className}>
                    <div className=' right-5 relative text-xl items-center'>
                        <div className=' flex flex-wrap gap-4 invisible md:visible absolute right-10'>
                            {
                                mmenuOptions.map((item: any, index: number) => (
                                    <button key={index} className='flex gap-1 p-1 rounded-lg hover:bg-stone-300 hover:transition-colors hover:px-4 hover:animate-pulse' onClick={() => handleClick(item.name)}>
                                        {item.name}
                                    </button>
                                ))
                            }
                        </div>
                        {/* cart */}
                        <Drawer open={open} onClose={() => setOpen(false)} anchor="right"
                            color="success"
                            size="sm"
                            variant="plain"
                            invertedColors>
                            <ModalClose />
                            <DialogTitle><p className='text-2xl font-bold'>Your Cart</p></DialogTitle>
                        </Drawer>
                        <div className='right-0 visible md:invisible p-2 relative text-end '>
                            <button onClick={() => setMenu(!menu)} className='py-2 px-4 rounded-lg'>
                                {menu ? (
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h14M1 6h14M1 11h7" />
                                    </svg>
                                )}
                            </button>
                            {menu && (
                                <div className='flex flex-col gap-2 mt-2 absolute'>
                                    {
                                        mmenuOptions.map((item: any, index: number) => (
                                            <button key={index} className='flex gap-1 p-1 rounded-lg hover:bg-stone-300'>
                                                {item.icon}
                                                {item.name}
                                            </button>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Header