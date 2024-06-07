import React, { useEffect } from 'react'
import Product from '../Product/Product'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../../features/product/productSlice'

const Products = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts())
    },[])
  return (
    <div><Product/></div>
  )
}

export default Products