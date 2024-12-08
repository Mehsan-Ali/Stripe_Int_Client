import React, { useEffect } from 'react'
import { useAuthStore } from '../Utils/APIs'
import Cards from '../Components/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Store/Features/cartSlice'

const Home = () => {
    const cartData = useSelector((state) => state.allCart)
    const { products, fetchProducts } = useAuthStore()
    console.log(cartData)

    useEffect(() => {
        fetchProducts()
    }, [window.location])

    // const dispatch = useDispatch()
    // const addToCartHandle = (id) => {
    //     dispatch(addToCart(id))
    // }

    return (
        <>
            <Cards />
        </>
    )
}

export default Home
