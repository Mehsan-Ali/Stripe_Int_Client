import { useEffect } from "react"
import { useAuthStore } from "../Utils/APIs"
import { ShoppingCart } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../Store/Features/cartSlice"

export default function Cards(props) {
    const { products, fetchProducts } = useAuthStore()
    
    useEffect(() => {
        fetchProducts()
    }, [window.location])

    const dispatch = useDispatch()
    const addToCartHandle = (itemData) => {
        console.log(itemData)
        dispatch(addToCart(itemData))
    }

    return (
        <div className="bg-white">
            {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8"> */}
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> */}
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="">
                            <img
                                alt={product.imageAlt}
                                src={'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg'}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                            <span aria-hidden="true" className="" />
                                            {product.name} 
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">$ {product.price.toFixed(2)}</p>
                            </div>

                            <div className="mt-2 text-gray-500 flex justify-end">
                                <ShoppingCart onClick={() => addToCartHandle(product)} className="cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        // </div>
    )
}
