import React,{useEffect, useState} from 'react'
import {assets} from '../assets/assets'

function Navbar() {

const [showMobileMenu, setShowMobileMenu] = useState(false);

useEffect(() => {
  
if(showMobileMenu){
document.body.style.overflow = "hidden"

}else{

  document.body.style.overflow = "auto"
}
  return () => {
    document.body.style.overflow = "auto"
  }
}, [showMobileMenu]);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
       <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo_3} alt="" className="cursor-pointer" id='Header' />
        <ul className='hidden md:flex gap-7 text-white'>

            <a href='#Header' className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href='#About' className='cursor-pointer hover:text-gray-400'>About</a>
            <a href='#Projects' className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a href='#Testimonails' className='cursor-pointer hover:text-gray-400'>Testimonails</a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer">Sign up</button>
        <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} alt="" className="md:hidden w-7 cursor-pointer" />
       </div>
{/* --------------------------mobile-menu------------------------------------------------ */}
<div className={`md:hidden ${showMobileMenu ? 'fixed w-full':'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
    <div className="flex justify-end p-6 cursor-pointer">
       <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} alt="" className="w-6" />
    </div>
  <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>

    <a onClick={()=> setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-fill inline-block">Home</a>
    <a onClick={()=> setShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-fill inline-block">About</a>
    <a onClick={()=> setShowMobileMenu(false)} href="#Contact" className="px-4 py-2 rounded-fill inline-block">Contact</a>
    <a onClick={()=> setShowMobileMenu(false)} href="#Testimonails" className="px-4 py-2 rounded-fill inline-block">Testimonails</a>
  </ul>
</div>
    </div>
  )
}

export default Navbar