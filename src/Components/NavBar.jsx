import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const { carts } = useSelector((state) => state.allCart)

    return (
        <div className='bg-slate-200 py-5 flex justify-between px-20'>
            <h1>Navbar</h1>
            <ul className='ml-auto flex gap-x-10 '>
                <NavLink to={'/'}>
                    <li className='cursor-pointer'>Home</li>
                </NavLink>

                <NavLink to={'/carts'}>
                    <li className='flex gap-x-2'>
                        <span ><ShoppingCart /></span>
                        <span>{carts.length}</span>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default NavBar
