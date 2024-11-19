import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from './Product'

const CategoriesProduct = () => {
    const [products,setProducts] = useState([])
    const {name} = useParams()

    useEffect(()=>{

        const Fetchproducts = async () =>{
            const res = await fetch(`https://fakestoreapi.com/products/category/${name}`)
            const data = await res.json()
            console.log(data);
            setProducts(data)
        }
        Fetchproducts()
    },[])

    if (products.length === 0) return <div>Loading...</div>
  return (
    <div>
      <Products products={products} />
    </div>
  )
}

export default CategoriesProduct
