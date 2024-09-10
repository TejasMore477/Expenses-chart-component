import React from 'react'
import BarGraph from './Components/BarGraph'
import Head from './Components/Head'
import Bottom from './Components/Bottom'
import Links from './Components/Links'

function App(){
    return (
      <div className='max-w-xl mx-auto flex flex-col items-center justify-center h-screen px-4 gap-1'>
        <Head />
        <BarGraph />
        <Bottom />
        <Links />
      </div>
    )
}

export default App