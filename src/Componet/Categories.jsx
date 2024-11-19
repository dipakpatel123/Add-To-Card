import React, { useEffect, useState } from 'react'
import Feacture from './Feacture'

const Categories = () => {
    const [categories ,setCategories] = useState([])
    

    useEffect(()=>{
         const fetchcategories = async ()=>{
            const res = await fetch('https://fakestoreapi.com/products/categories')
            const data = await res.json()
            console.log(data);
            setCategories(data)
         }
         fetchcategories()
    },[])

    if(categories.length === 0) return <div>Loading...</div>
  return (
    <div>
      <Feacture  cards={categories}/>
    </div>
  )
}

export default Categories
