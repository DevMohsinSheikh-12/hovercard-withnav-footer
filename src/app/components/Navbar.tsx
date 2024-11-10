import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <section>
        <nav className=' bg-gradient-to-br from-[#03045e] to-[#5a189a] bg-cover opacity-90 bg-blur-sm  justify-center items-center pt-5 text-white text-center lg:flex md:flex md:justify-between  pb-4 '>
          <Link href={'/'}>
            <div className="logo  font-bold text-2xl tracking-in-expand mt-1 pb-3 md:p-0 md:ml-24">Blogest
          
            </div>
          </Link>
           
                <ul className='flex  items-center justify-center content-center md:mr-24 '>
                    <Link href="/">
                    <li className=' pr-10 text-focus-in '>Home</li>
                    </Link>
                    <Link href="/about">
                    <li className=' pr-10 text-focus-in '>About</li>
                    </Link>
                    <Link href="/apply">
                    <li className=' pr-10  text-focus-in '>Blogs</li>
                    </Link>
                    <Link href="/" >
                    <li className='sm:bg-buttoncolor sm:border rounded-lg text-white inline py-1 pl-3 pr-3  tracking-in-expand '>Explore</li>
                    </Link>
                </ul>


        </nav>
    </section>
  )
}

export default Navbar
