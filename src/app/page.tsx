import Image from 'next/image'
import Header from './Components/Header'
import ProductShow from './Components/ProductShow'

export default function Home() {
  return (
    <div className='p-10 items-center'>
      <ProductShow />
    </div>
  )
}
