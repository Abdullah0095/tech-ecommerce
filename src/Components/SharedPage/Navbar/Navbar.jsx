import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faPhone, faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass, faPhone, faUser, faCartShopping);

const Navbar = () => {
    return (
        <div>
            <section className='bg-white border border-gray-400 text-black p-3'>
                <div className='flex justify-center mx-8'>
                    <div><Link className='text-4xl font-bold font-serif mx-4 hidden md:block' to='/'>TECH HUB</Link></div>
                    <div><input className=' ml-8 w-[35rem] h-12 bg-white outline-none border border-gray-400 rounded-l-md text-center text-black text-xl font-semibold font-mono' placeholder='search for products' type="text" name="" id="" />   </div>
                    <div><FontAwesomeIcon className='mr-8 border border-yellow-300 h-8 p-2 bg-yellow-400 rounded-r-md text-white' icon="fa-solid fa-magnifying-glass" /></div>
                    <div className='flex'>
                        <FontAwesomeIcon className='h-8 p-3' icon="fa-solid fa-phone" />
                        <h1 className='py-2 text-2xl'>0123456789</h1>
                    </div>
                    <div><FontAwesomeIcon className='h-8 p-3 mx-2' icon="fa-solid fa-user" /></div>
                    <div><FontAwesomeIcon className='h-8 p-3' icon="fa-solid fa-cart-shopping" /></div>
                </div>
            </section>


            <section className='px-8  bg-white text-black'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-800 text-white  rounded-box w-40 text-xl">
                                <li><Link to='/'>Home</Link></li>
                                <li>
                                    <summary>Products</summary>
                                    <ul className="p-2">
                                        <li><Link to='/mobile'>Mobile</Link></li>
                                        <li><Link to='/smartWatch'>Smart Watch</Link></li>
                                        <li><Link to='/laptop'>Laptop</Link></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        {/* <Link to='/' className="btn btn-ghost text-xl">wall-E</Link> */}
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                            <li><Link to='/'>Home</Link></li>
                            <li>
                                <details>
                                    <summary>Products</summary>
                                    <ul className="p-2 bg-white text-black">
                                        <li><Link to='/mobile'>Mobile</Link></li>
                                        <li><Link to='/smartWatch'>Smart Watches</Link></li>
                                        <li><Link to='/laptop'>Laptop</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link className="btn">CART</Link>
                    </div>
                </div >
            </section>
        </div >
    );
};

export default Navbar;