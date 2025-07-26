import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-8 md:px-16 xl:px-16 bg-purple-200/30'>
      <div className='flex flex-col md:flex-row justify-between gap-10 text-gray-500 py-10 border-b border-gray-400/30'>
          <div>
            <img src={assets.new_logo} alt="logo" className='w-44 sm:w-44' />
            <p className='max-w-[410px] mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reiciendis ea architecto, ipsa ipsam voluptatibus?</p>
          </div>
          <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
              {footer_data.map((section,index) => (
                <div key={index}> 
                  <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                  <ul>
                    {section.links.map((link,i) => (
                      <li key={i}>
                        <a href="#" className='hover:underline transition '>{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
      </div>
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Compyright 2025 @ Drafted-Akash all right Reserved.</p>
    </div>

  )
}

export default Footer