import React from 'react'
import Image from 'next/image'
function HeroSection() {
  return (
    <section className='flex items-center  justify-center  h-screen pb-32 bg-gradient-to-tr from-[#03045e] to-[#5a189a] bg-cover  opacity-90 bg-blur-sm
    '>
        <div className='inline-block justify-center lefttext text-white bigtextanimation absolute xl:relative text-center sm:text-center content-center'>

        <h1 className='text-6xl font-outfit font-bold'>
            Discover</h1> <br />
        <h1 className='text-6xl font-outfit font-bold'>
            Informative Blogs</h1> <br />
        <h1 className='text-6xl font-outfit font-bold'>
            of the World</h1> 

            <h1 className='text-xl text-white font-serif pt-8'>Unlock the power of words—explore the world's most insightful blogs,<br />
            where knowledge meets creativity.</h1>
        </div>
        <div className="xl:visible imageanimation invisible text-center">
            <Image src={'/images/3dimg.webp'}
            height={600}
                alt='img'
            width={600} />
        </div>
    </section>
  )
}

export default HeroSection