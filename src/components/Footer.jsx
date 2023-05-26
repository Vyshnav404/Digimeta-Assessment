import React from 'react'
import { TbSquareRoundedLetterR } from "react-icons/tb";


function Footer({theme}) {
  return (
    <div className={`md:px-28 lg:px-44 pb-2 ${theme === 'white' ?"bg-blue-100":""} pt-5`}>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div>
      <h1 class="font-bold text-xl">Company</h1>
      <ul class="text-gray-600 mt-4">
        <li className='py-1'>About</li>
        <li className='py-1'>Leadership</li>
        <li className='py-1'>Advisory bond</li>
        <li className='py-1'>Careers</li>
        <li className='py-1'>Catalog</li>
        <li className='py-1'>Webinar</li>
        <li className='py-1'>News & Awards</li>
        <li className='flex'>CENTA<TbSquareRoundedLetterR size={11}/> standards</li>
        <li className='py-1'>CENTA for Goverments</li>
        <li className='py-1'>CENTA for Schools</li>
        <li className='py-1'>CENTA for Parents</li>
   
      </ul>
    </div>
    <div>
      <h1 class="font-bold text-xl">Community</h1>
      <ul class="text-gray-600 mt-4">
        <li className='py-1'>CENTA Advisory</li>
        <li className='py-1'>Wall of fame</li>
        <li className='py-1'> The future of teaching</li>
        <li className='py-1'>Insight from our work</li>
        <li className='py-1'>Become an instructor</li>
        <li className='py-1'>Blog</li>
        <li className='py-1'>Contact</li>
        <li className='py-1'>Partners</li>
      </ul>
    </div>
    <div>
      <h1 class="font-bold text-xl">Support</h1>
      <ul class="text-gray-600 mt-4">
        <li className='py-1'>Help and support</li>
        <li className='py-1'>get the app</li>
        <li className='py-1'>FAQ's</li>
        <li className='py-1'>FAQ's</li>
        <li className='py-1'>Tutorial</li>
      </ul>
    </div>
    <div >
      <h1 class="font-bold text-xl">Contact</h1>
      <p class="text-gray-600 mt-4 py-1">3rd Floor, SLV Complex, #22, 80 Ft. Road, Indiranagar, HAL 3rd Stage, Bengaluru – 560075</p>
      <span className='py-1'>Email :</span><span class="text-blue-400">team@centa.org</span><br/>
      <span className='py-1'>Phone :</span> <span >+91 6366219712</span>
      <div class="flex mt-5">
        <img src="https://mycenta-dev.netlify.app/images/svg/appstore.svg" alt="" />
        <img src="https://mycenta-dev.netlify.app/images/svg/playstore.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="md:flex justify-between border-t mt-20 p-3">
    <p>Copyright © 2023 CENTA. All Rights Reserved</p>
    <ul class="flex gap-x-5">
      <li>privacy policy</li>
      <li>Cookie notice</li>
      <li className='hidden md:flex '>Do not sell my personal information</li>
      <li>Terms of use</li>
    </ul>
  </div>
</div>
  )
}

export default Footer