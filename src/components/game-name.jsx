import Image from 'next/image'
import React from 'react'

const GameName = () => {
  return (<div className='absolute rounded-full top-0 left-[150]'>
      <Image src={'/logo.png'} width={190} height={270} alt='logo' className='w-[190] h-[270]'/>
    </div>
  )
}

export default GameName