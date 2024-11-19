import React, { useEffect, useState } from 'react'
import Products from './Product'
import Categories from './Categories'

const Navproduct = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{

        const Fetchproducts = async () =>{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            console.log(data);
            setProducts(data)
        }
        Fetchproducts()
    },[])

  return (
    <div>
    <Categories/>
    <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCT</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900"> All PRODUCTS</h1>
    </div>
    {
        products.length >0 ? 
        <Products products={products} />
        : 
        <div>Loading</div>
    }
    
      
    </div>
  )
}

export default Navproduct
