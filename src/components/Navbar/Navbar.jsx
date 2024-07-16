import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
function Navbar({setShowLogin} ) {
    const [menu,setMenu]= useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='flex justify-between items-center sm:px-3 '>
        <Link to='/'><img src={assets.logo} className='w-[120px] mt-3' alt="" /></Link>
      <ul className='sm:flex gap-4 text-yellow-800 text-xl hidden    cursor-pointer'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu=="home" ?"active " :"" } >Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu=="menu" ?"active" :""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("contact-us")} className={menu=="contact-us" ?"active" :""}>Contact Us</a>
            <a href='#footer' onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app" ?"active" :""}>Mobile-App</a>
        </ul>
        <div className='n flex items-center gap-5 mt-2'>
            <img src={assets.search_icon} alt="" />
            <div className='relative'>
                <Link to='/cart'><img src={assets.basket_icon}  alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"absolute min-w-[10px] min-h-[10px] bg-yellow-400 rounded-[5px] top-[-8px] right-[-8px]"} ></div>
            </div>
            <button onClick={() =>setShowLogin(true)} className='bg-transparent  text-yellow-300 border-2 border-yellow-300 px-3 rounded-2xl py-1'>Sign-in</button>
        </div>
    </div>
  )
}

export default Navbar