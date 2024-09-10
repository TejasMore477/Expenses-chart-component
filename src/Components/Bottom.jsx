import React from 'react'

function Bottom() {
  return (
    <div className='w-full rounded-b-2xl bg-pailOrange flex items-center justify-between p-4'>
        <div>
            <p className='text-sm font-semibold'>  Total this month</p>
            <h1 className='text-2xl font-bold'>  $478.33</h1>
        </div>
        <div>
            <h2 className='text-lg font-semibold'>  +2.4%</h2>
            <p className='text-sm font-semibold'>  from last month</p>
        </div>
    </div>
  )
}

export default Bottom