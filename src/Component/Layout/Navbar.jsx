import React from 'react'
import {Search} from "lucide-react"
import {Heart} from "lucide-react"
import {ShoppingCart} from "lucide-react"
import {User} from "lucide-react"
import {Sun} from "lucide-react"


const Navbar = () => {
    return (
        <div className='flex justify-around items-center' >
            {/* logo */}
            <div className='w-30  bg-[#0b1120]' >
                <img className='w-30 px-2 ' src="../src/assets/logo.jpg" alt="LOGO" />
            </div>

            {/* Links */}
            <ul className='flex gap-5 justify-center items-center w-100 h-15 rounded-3xl' >
                <li> <a href="#">Home</a> </li>
                <li> <a href="#">Shop</a> </li>
                <li> <a href="#">My Orders</a> </li>
                <li> <a href="#">Whishlist</a> </li>
            </ul>

            {/* Icons */}
            <div className='flex gap-3 icons' >
                {/* search icon */}
                <button className='border-1 rounded-2xl h-9 w-10 flex justify-center items-center hover:bg-#1e293b '>
                    <Search size={18} strokeWidth={1.8} />
                </button>

                {/* light & dark mode */}
                <button className='border-1 rounded-2xl h-9 w-10 flex justify-center items-center'>
                    <Sun size={18} strokeWidth={1.8} />
                </button>

                {/* favourite icon */}
                <button className='border-1 rounded-2xl h-9 w-10 flex justify-center items-center'>
                    <Heart size={18} strokeWidth={1.8} />
                </button>

                {/* cart-shopping icon */}
                <button className='border-1 rounded-2xl h-9 w-10 flex justify-center items-center'>
                    <ShoppingCart size={18} strokeWidth={1.8} />
                </button>

                {/* Admin Button */}
                <div>
                    <button className='flex items-center justify-center gap-1 border-1 rounded-2xl h-9 w-23'  >
                        <User size={18} strokeWidth={1.8} />ADMIN
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar