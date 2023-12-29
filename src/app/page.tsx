import Image from 'next/image'
import Header from './Components/Header'
import ProductShow from './Components/ProductShow'
import Discount from './Item/Discount'
import BestSeller from './Components/BestSeller'

export default function Home() {
  return (
    <div className='m-auto items-center'>
      <BestSeller />
      <ProductShow />
      <p className='text-2xl font-bold'>Voucher For You</p>
      <Discount />
    </div>
  )
}
