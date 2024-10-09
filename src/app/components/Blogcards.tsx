import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from './Footer'


function Blogcards() {
 
  return (
    <section className='bg-gradient-to-tr from-[#03045e] to-[#5a189a] bg-cover opacity-90 bg-blur-sm' >
        <div className=''>
  <h1 className='text-6xl font-bold text-white text-center flex items-center justify-center mb-20 pt-28'>Blogs</h1>
  <h1 className=' text-xl font-bold text-white text-center flex items-center justify-center mb-36'>Stories that inspire, knowledge that empowers.
  </h1>
        </div>
        <div className='flex flex-col justify-center items-center space-y-4  text-white   lg:grid grid-cols-3 lg:justify-items-center' >

    <div className='bg-cardpurple h-128 w-80  rounded-lg p-5 hover:border  '> 
      <Image src ={"/images/3dimg.webp"}
      height={300}
      width={300}
      alt={"img"} />
      <h1 className='text-2xl font-bold ml-5'>Title:</h1> <p className='pl-6'>Exploring Radix UI</p>
      <h1 className='text-2xl font-bold  ml-5'>description:</h1> <p className='pl-6'>A library providing accessible UI components for React.</p>
            <Link href={"./blogs/blog1"}>
      <button className='bg-buttoncolor p-2 rounded-lg ml-[92px] mt-5 hover:px-4 transition-all hover:text-cardpurple  '>Read More</button>
      </Link>
    </div>
    <div className='bg-cardpurple h-128 w-80  rounded-lg p-5 hover:border'> 
      <Image src ={"/images/3dimg.webp"}
      height={300}
      width={300}
      alt={"img"} />
      <h1 className='text-2xl font-bold ml-5'>Title:</h1><p className='pl-6'>Shadcn UI: The Future of Styling</p>
      <h1 className='text-2xl font-bold  ml-5'>description:</h1> <p className='pl-6'>A modern component library designed for scalable styling.</p>
      <Link href={"./blogs/blog2"}>
      <button className='bg-buttoncolor p-2 rounded-lg ml-[92px] mt-5 hover:px-4 transition-all hover:text-cardpurple'>Read More</button>
      </Link>    </div>
    <div className='bg-cardpurple h-128 w-80   rounded-lg p-5 hover:border'> 
      <Image src ={"/images/3dimg.webp"}
      height={300}
      width={300}
      alt={"img"} />
      <h1 className='text-2xl font-bold ml-5'>Title:</h1><p className='pl-6'>Generative AI and Its Impact</p>
      <h1 className='text-2xl font-bold  ml-5'>description:</h1> <p className='pl-6'>Algorithms that create new content dynamically and creatively.</p>
      <Link href={"./blogs/blog3"}>
      <button className='bg-buttoncolor p-2 rounded-lg ml-[92px] mt-5 hover:px-4 transition-all hover:text-cardpurple'>Read More</button>
      </Link>    </div>
    <div className='bg-cardpurple h-128 w-80  rounded-lg p-5 hover:border'> 
      <Image src ={"/images/3dimg.webp"}
      height={300}
      width={300}
      alt={"img"} />
      <h1 className='text-2xl font-bold ml-5'>Title:</h1><p className='pl-6'>Mastering Cloud Computing</p>
      <h1 className='text-2xl font-bold  ml-5'>description:</h1> <p className='pl-6'>On-demand computing services delivered over the internet</p>
      <Link href={"./blogs/blog4"}>
      <button className='bg-buttoncolor p-2 rounded-lg ml-[92px] mt-5 hover:px-4 transition-all hover:text-cardpurple'>Read More</button>
      </Link>    </div>
    <div className='bg-cardpurple h-128 w-80  rounded-lg p-5 hover:border'> 
      <Image src ={"/images/3dimg.webp"}
      height={300}
      width={300}
      alt={"img"} />
      <h1 className='text-2xl font-bold ml-5'>Title:</h1><p className='pl-6'>Building Chatbots with AI</p>
      <h1 className='text-2xl font-bold  ml-5'>description:</h1> <p className='pl-6'>Software designed to simulate human conversation with users.</p>
      <Link href={"./blogs/blog5"}>
      <button className='bg-buttoncolor p-2 rounded-lg ml-[92px] mt-5 hover:px-4 transition-all hover:text-cardpurple'>Read More</button>
      </Link>    </div>
    <div className='bg-cardpurple h-128 w-80  rounded-lg p-5 hover:border'> 
      <Image src ={"/images/3dimg.webp"}
      height={300}
      width={300}
      alt={"img"} />
      <h1 className='text-2xl font-bold ml-5'>Title:</h1><p className='pl-6'>Tailwind CSS for Modern Web Design</p>
      <h1 className='text-2xl font-bold  ml-5'>description: </h1><p className='pl-6'>A utility-first CSS framework for rapid UI development.</p>
      <Link href={"./blogs/blog6"}>
      <button className='bg-buttoncolor p-2 rounded-lg ml-[92px] mt-5 hover:px-4 transition-all hover:text-cardpurple'>Read More</button>
      </Link>    </div>
      </div>
      <Footer />
      </section>
  )
}

export default Blogcards