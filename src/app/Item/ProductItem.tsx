'use client'
import * as React from 'react'
import styled from 'styled-components';

import Image from 'next/image';
import { Product } from './interface';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import useLocalStorageState from 'use-local-storage-state';

const ProductItem = ({ product }: any) => {
    const [quantity, setQuantity] = React.useState(1);
    const [cart, setCart] = useLocalStorageState('cart', {});
    const [size, setSize] = React.useState(0);
    const { enqueueSnackbar } = useSnackbar();
    const handleQuantityChange = (newQuantity: any) => {
        setQuantity(newQuantity);
    };
    const route = useRouter();
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    const [selectedColor, setSelectedColor] = React.useState('');

    const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    const handleAddCart = (data: Product) => {
        data.options.size = selectedValue;
        data.options.color = selectedColor;
        enqueueSnackbar('Add to cart successful', { variant: 'success' })
    }
    return (
        <div className='flex flex-wrap items-center md:p-2 ml-0 pl-0 items-wrapper min-w-full animate-scroll gap-5'>
            {product?.map((item: any, index: number) => (
                <div key={index} className='w-[300px] bg-slate-300 rounded-lg relative md:m-3 shadow-xl card-wrapper'>
                    <div className='h-[200px] text-center p-3 font-semibold text-2xl'>{item.title}</div>
                    <div>
                        <Image src={item.imageUrl[0]} alt="image" width={250} height={250} className='max-h-[250px] mx-[25px] absolute top-[60px] rounded-3xl shadow-2xl' />
                    </div>
                    <div className='bg-gradient-to-b from-slate-300 to-amber-400 pb-3 rounded-t-lg pt-[120px] text-lg pl-5 font-normal items-center'>
                        <p className='cursor-pointer hover:text-green-700 flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                            </svg>

                            {item.category ? (
                                item.category
                            ) : (
                                'null'
                            )}
                        </p>
                        <p className=' flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 0 1 .919-.53l4.78 1.281a.75.75 0 0 1 .531.919l-1.281 4.78a.75.75 0 0 1-1.449-.387l.81-3.022a19.407 19.407 0 0 0-5.594 5.203.75.75 0 0 1-1.139.093L7 10.06l-4.72 4.72a.75.75 0 0 1-1.06-1.061l5.25-5.25a.75.75 0 0 1 1.06 0l3.074 3.073a20.923 20.923 0 0 1 5.545-4.931l-3.042-.815a.75.75 0 0 1-.53-.919Z" clipRule="evenodd" />
                            </svg>

                            Delivery on 3 days
                        </p>
                        <p className=' flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
                                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z" clipRule="evenodd" />
                            </svg>

                            {parseInt(item.price)}{'K'}
                        </p>
                    </div>

                    <div className='grid grid-cols-2 p-1 items-center text-center font-medium bg-slate-200 rounded-b-lg'>
                        <div >
                            <button className='font-bold hover:text-white hover:bg-gradient-to-br from-orange-300 to-gray-600 px-6 py-2 rounded-lg' onClick={() => handleAddCart(item)}>ADD CART</button>
                        </div>
                        <div className=''>
                            <button className='font-bold hover:text-white hover:bg-gradient-to-br from-orange-300 to-gray-600 px-10 py-2 rounded-lg' onClick={() => route.push('/Products/' + item._id)}>VIEW</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductItem;
