import Image from 'next/image'
import React from 'react'
import Player from './player'
import YoungHee from './young-hee'

const GameBody = () => {
  return (

    <div className='flex w-full h-full bg-white'>
      Game Body
      <Image src={'/stage3.png'} width={1920} height={1080} alt='player' className='w-full h-full absolute' style={{ transform: 'scaleX(-1)' }}/>
      <Player />
      <YoungHee />
    </div>
  )
}

export default GameBody