'use client'
import React from 'react'
import ProductItem from '../Item/ProductItem';
import axios from 'axios';

const ProductShow = () => {
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
    return (
        <div className="scrollable-container overflow-x-hidden">
            <p className='font-bold text-3xl my-5'>Some offer we choose for you...</p>
            <ProductItem product={product} />
        </div>
    )
}

export default ProductShow;