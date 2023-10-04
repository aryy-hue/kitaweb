
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import PersonalInfoHide from './PersonalInfoHide'
import PersonalInfoShow from './PersonalInfoShow'

export default function Navbar() {
    const [isClick, setIsClick] = useState(false)
    const toggleNavbar = () => {
        setIsClick(!isClick)
    }
    const [click, setClick] = useState(false)
    const toggleContact = () => {
        setClick(!click)
    }
    return (
        <nav class="bg-white flex items-center justify-between md:px-16 md:py-2 px-8 border-b-2 fixed z-10 w-full">
          <Image
                src="/logo-kitaweb.svg"
                alt="kitaweb logo"
                width={100}
                height={24}
          />
          {
            isClick ? (
                <div class="w-full flex justify-end z-10">
                <div class="flex md:w-7/12 lg:w-5/12 md:flex-row absolute w-8/12 h-screen top-12 md:h-0 bg-amber-400 flex-col md:justify-around gap-y-11 md:static items-center -z-10 -right-1 text-black duration-150">
                    <Link href="#" class="md:mt-0 mt-11 md:text-lg md:font-medium hover:text-white">Home</Link>
                    <Link href="#about" class="md:text-lg md:font-medium hover:text-white">About</Link>
                    <Link href="#service" class="md:text-lg md:font-medium hover:text-white">Service</Link>
                    <button onClick={toggleContact} class="py-2 px-5 border-2 border-black rounded-full text-black text-lg font-medium hover:bg-black hover:text-white">
                        Contact US
                    </button>
                </div>
                <div>
                    <button class="md:hidden" onClick={toggleNavbar}>
                        {isClick ? (<FaTimes/>):(<FaBars/>)}
                    </button>
                </div>
              </div> 
            ):(<div class="w-full flex justify-end z-10">
            <div class="flex md:w-md:7/12 lg:w-5/12 md:flex-row absolute w-8/12 h-screen top-12 md:h-0 bg-amber-400 flex-col md:justify-around gap-y-11 md:static items-center -z-10 -right-full duration-150">
                <Link href="#" class="md:mt-0 mt-11 md:text-lg md:font-medium hover:text-amber-500">Home</Link>
                <Link href="#about" class="md:text-lg md:font-medium hover:text-amber-500">About</Link>
                <Link href="#service" class="md:text-lg md:font-medium hover:text-amber-500">Service</Link>                
                <button onClick={toggleContact} class="py-2 px-5 border-2 border-amber-500 rounded-full text-amber-500 text-lg font-medium hover:bg-amber-500 hover:text-black">
                    Contact US
                </button>
                
            </div>
            <div>
                <button class="md:hidden" onClick={toggleNavbar}>
                    {isClick ? (<FaTimes/>):(<FaBars/>)}
                </button>
            </div>
          </div>)
          }
          {
            click ? (<PersonalInfoShow/>) : (<PersonalInfoHide/>)
          }
         
      </nav>
    )
}