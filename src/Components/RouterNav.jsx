import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import NavBar from './NavBar'
import Cart from '../Pages/Cart'
import CheckoutSuccess from '../Pages/CheckoutSuccess'

const RouterNav = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carts" element={<Cart />} />
                <Route path="/checkout-success" element={<CheckoutSuccess />} />
            </Routes>
        </div>
    )
}

export default RouterNav
