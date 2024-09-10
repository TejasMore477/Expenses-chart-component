import React from 'react'
import Logo from '../assets/images/logo.svg'

function Head() {
  return (
    <div className='bg-softRed rounded-2xl shadow text-white w-full mb-2 flex justify-between p-4'>
        <div>
            <h3 className='text-cream font-semibold'>My balance</h3>
            <h2 className='font-bold text-2xl py-1'>$921.48</h2>
        </div>
        <img src={Logo} alt="logo" />

    </div>
  )
}

export default Head