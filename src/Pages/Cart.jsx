import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, decrementQuantity } from '../Store/Features/cartSlice';
import PayButton from '../Components/PayButton';

const Cart = () => {
    const { carts } = useSelector((state) => state.allCart)

    const dispatch = useDispatch();
    const handleIncrement = (itemId) => {
        dispatch(addToCart(itemId));
    }

    const removeItem = (itemId) => {
        dispatch(removeFromCart(itemId))
    }

    const handleDecrement = (itemId) => {
        dispatch(decrementQuantity(itemId));
    }

    const subtotal = carts.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    const shipping = 5.0;
    // const tax = subtotal * 0.084;
    // const total = subtotal + shipping + tax;
    const total = subtotal + shipping;

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div className="bg-white shadow-md rounded p-4">
                {carts.map((item) => (
                    <div key={item._id} className="flex items-center border-b py-4">
                        <img
                            src={'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg'}
                            alt={item.name}
                            className="w-16 h-16 rounded-md mr-4"
                        />
                        <div className="flex-1">
                            <h2 className="font-bold">
                                {item.name}
                            </h2>
                            <p className="text-gray-600">{item.color}</p>
                            <p className="text-gray-600">{item.inStock ? 'In stock' : item.shippingTime}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span onClick={item.quantity <= 1 ? () => removeItem(item._id) : () => handleDecrement(item)} className='cursor-pointer bg-green-200 p-2 rounded-md'>
                                <Minus />
                            </span>

                            <input value={item.quantity} disabled className='border py-2 max-w-14 border-gray-300 rounded-md text-center' />

                            <span onClick={() => handleIncrement(item)} className='cursor-pointer bg-green-200 p-2 rounded-md'>
                                <Plus />
                            </span>

                            <button
                                onClick={() => removeItem(item._id)}
                                className="text-red-500"
                            >
                                Remove
                            </button>
                        </div>
                        <p className="ml-4 font-bold">${item.price.toFixed(2)}</p>
                    </div>
                ))}

                {/* Summary Section */}
                <div className="mt-4 p-4 bg-gray-50 rounded shadow">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    {/* <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                    </div> */}
                    <div className="flex justify-between font-bold text-lg mt-2">
                        <span>Order total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>

                {/* Checkout Button */}
                <div className="mt-4">
                    <button className="w-full bg-purple-600 text-white p-3 rounded">
                        <PayButton cartItems={carts} />
                    </button>
                </div>
            </div>
            <div className="text-center mt-4">
                <a href="#" className="text-blue-500">
                    Continue Shopping
                </a>
            </div>
        </div>
    );
};

export default Cart;
