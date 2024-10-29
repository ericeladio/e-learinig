import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
  return (
    <header className='mb-3'>
        <nav className="flex justify-between w-10/12 mx-auto h-[50px]">
          <div className="flex items-center justify-between w-[500px]">
            <Link href='/'>
              <Image src="logo.svg" width={34} height={34} alt="logo" />
            </Link>
            <Link className="" href='/home'>Home</Link>
            <Link href='/courses'>Courses</Link>
            <Link href='/about'>About Us</Link>
            <Link href='/princing'>Princing</Link>
            <Link href='/contact'>Contact</Link>
          </div>
          <ul className="flex items-center justify-between  w-[150px]">
            <li>Sing Up</li>
            <li className=" rounded-sm bg-orangeShade-50 px-3 py-1" >Login</li>
          </ul>
        </nav>
      </header>
  )
}

export default Nav