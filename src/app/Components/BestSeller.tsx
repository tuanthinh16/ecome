'use client'
import axios from 'axios';
import { Abril_Fatface, DM_Serif_Display, Merriweather, Rubik_Spray_Paint, Rubik_Vinyl, Single_Day } from 'next/font/google'
import React from 'react'
import Image from 'next/image';
import { Divider } from '@mui/joy';

const abril = Rubik_Spray_Paint({
    weight: '400',
    subsets: ['latin']
})
const num = Rubik_Vinyl({
    weight: '400',
    subsets: ['latin']
})
const BestSeller = () => {
    const [product, setProduct] = React.useState<any[]>([]);
    React.useEffect(() => {
        fetchData();
    }, []);
    const range = 5;
    const fetchData = () => {
        const url = "/api/product?limit=" + range;
        axios.get(url)
            .then(response => {
                setProduct(response.data['data'])
            })
            .catch(error => {
                console.error("Err: " + error)
            })
    }
    console.log('Product ', product)
    return (
        <div className=' items-center flex flex-col w-full mt-10 shadow-xl'>
            <div className='bg-orange-400 text-center h-full w-full'>
                <div className={`${abril.className} font-bold p-3 text-3xl`}>

                    <p>SESONAL</p>
                    <p>WEEKLY PROMO</p>
                </div>

            </div>
            <div className='grid grid-cols-2 bg-gradient-to-bl from-orange-600 to-orange-800 gap-2 h-full justify-center text-center items-center md:p-5 p-2 text-white w-full'>
                <div className='relative'>
                    <Image src={product[0]?.imageUrl[0]} width={400} height={400} alt='image' className='p-1 rounded-lg relative' />
                    {/* <div className='absolute top-0 -right-12 bg-slate-500 p-3 rounded-l-full'>30%</div> */}
                </div>
                <div>
                    <p className={`${abril.className}  font-bold  text-5xl`}>SALE</p>
                    <p className={`${num.className}  font-bold  text-2xl`}>50%</p>
                    <div className='text-sm'>
                        <p className='text-base py-2 uppercase'>{product[0]?.title}</p>
                        <p>{product[0]?.description}</p>
                    </div>
                </div>

            </div>
            <div className='bg-gradient-to-b from-orange-600 to-orange-300 w-full h-full grid grid-cols-3 p-2'>
                {product.slice(1, 4).map((row: any, index: number) => (
                    <div key={index} className='p-2 flex flex-col items-center text-sm card-wrapper cursor-pointer'>
                        <Image src={row?.imageUrl[0]} width={200} height={200} alt='img' className='rounded-lg' />
                        <p className='text-center font-bold'>{row?.title}</p>
                        <p className='h-[100px] overflow-hidden text-center w-[200px]'>{row.description}
                            <Divider /></p>

                        <p className={`${abril.className} font-bold text-lg rounded-lg border border-orange-300 px-4 py-1 hover:text-white hover:bg-orange-500`}>{'$'}{row.price}{'K'}</p>

                    </div>
                ))}

            </div>
            <div className='bg-gradient-to-bl from-orange-600 to-orange-800 h-[150px] w-full flex p-2 md:p-5 gap-1 md:gap-5 relative items-center'>
                <div className=' flex flex-wrap gap-3'>
                    <svg className="w-10 h-10 p-2 text-white rounded-full bg-slate-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                    </svg>
                    <svg className="w-10 h-10 p-2 text-white rounded-full bg-slate-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                    </svg>
                    <svg className="w-10 h-10 p-2 text-white rounded-full bg-slate-500 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
                    </svg>
                </div>
                <div className='text-sm text-end text-white md:hidden'>
                    <p>Chọn lựa đẳng cấp, bước đi kiêu hãnh</p>
                    <p>72 Miếu Đầm, Mễ Trì, Nam Từ Liêm, Hà Nội</p>
                    <a href='https://thickness.vercel.app' className='text-lg hover:cursor-pointer hover:text-blue-500'>https://thickness.vercel.app</a>
                </div>
                <div className='flex gap-3 invisible  md:visible absolute right-5 -top-3'>
                    <div className='text-sm text-end text-white pt-10'>
                        <p>Chọn lựa đẳng cấp, bước đi kiêu hãnh</p>
                        <p>72 Miếu Đầm, Mễ Trì, Nam Từ Liêm, Hà Nội</p>
                        <a href='https://thickness.vercel.app' className='text-lg hover:cursor-pointer hover:text-blue-500'>https://thickness.vercel.app</a>
                    </div>
                    <Image src={'https://baohothuonghieu.com/wp-content/uploads/2021/10/1536893974-QR-CODE-LA-GI-sblaw.jpeg'} width={100} height={200} alt='qr' />
                </div>
            </div>
        </div>
    )
}

export default BestSeller