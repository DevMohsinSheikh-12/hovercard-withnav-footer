import React from 'react'
import HoverCardDemo from "./HoverCardDemo";

function Footer() {
    return (
        <><h1 className='text-6xl font-bold text-buttoncolor flex text-center justify-center items-center  mt-32'>Footer</h1>
        <section className='flex text-white justify-center items-center text-center text-xl'>
            <div className=' mt-28 sm:flex-none sm:text-center lg:flex  lg:items-center lg:pb-12'>
                <div className='lg:ml-8 lg:mr-8 '> hey there!
                    this is a simple footer for this blog <br />
                    website demo with a great text <br />
                    stack of nextjs, Tailwindcss and typescript

                    <p className='font-bold font-serif pt-4 pb-4 text-buttoncolor '>Try hovering on contact button</p>
                </div>
                <div className='lg:mr-12'>
                    <ul className=' text-center sm:text-center sm:p-0 mt-10'>
                        <li>Blah Blah</li>
                        <li>Blah Blah</li>
                        <li>Blah Blah</li>
                        <li>Blah Blah</li>

                    </ul>
                </div>
                <div className=' sm:p-0 mt-20 mb-14'>
                    
                    <HoverCardDemo />
                    
                </div>
                </div>
          </section>
      
          </>
  )
}

export default Footer