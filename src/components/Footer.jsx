import React from 'react'
import { TbSquareRoundedLetterR } from "react-icons/tb";


function Footer({theme}) {
  return (
    <div className={`md:px-28 pb-2 ${theme === 'white' ?"bg-blue-100":""} pt-5`}>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div>
      <h1 class="font-bold text-xl">Company</h1>
      <ul class="text-gray-600 mt-4">
        <li>About</li>
        <li>Leadership</li>
        <li>Advisory bond</li>
        <li>Careers</li>
        <li>Catalog</li>
        <li>Webinar</li>
        <li>News & Awards</li>
        <li className='flex'>CENTA<TbSquareRoundedLetterR size={11}/> standards</li>
        <li>CENTA for Goverments</li>
        <li>CENTA for Schools</li>
        <li>CENTA for Parents</li>
   
      </ul>
    </div>
    <div>
      <h1 class="font-bold text-xl">Community</h1>
      <ul class="text-gray-600 mt-4">
        <li>CENTA Advisory</li>
        <li>Wall of fame</li>
        <li>The future of teaching</li>
        <li>Insight from our work</li>
        <li>Become an instructor</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Partners</li>
      </ul>
    </div>
    <div>
      <h1 class="font-bold text-xl">Support</h1>
      <ul class="text-gray-600 mt-4">
        <li>Help and support</li>
        <li>get the app</li>
        <li>FAQ's</li>
        <li>FAQ's</li>
        <li>Tutorial</li>
      </ul>
    </div>
    <div >
      <h1 class="font-bold text-xl">Contact</h1>
      <p class="text-gray-600 mt-4">3rd Floor, SLV Complex, #22, 80 Ft. Road, Indiranagar, HAL 3rd Stage, Bengaluru – 560075</p>
      <span>Email :</span><span class="text-blue-400">team@centa.org</span><br/>
      <span>Phone :</span> <span>+91 6366219712</span>
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