import Image from 'next/image'
import React from 'react'

const GameBody = () => {
  return (

    <div className='flex w-full h-full bg-white'>
      Game Body
      <Image src={'/stage3.png'} width={1920} height={1080} alt='player' className='w-full h-full absolute' style={{ transform: 'scaleX(-1)' }}/>
      <Image src={'/player.png'} width={100} height={200} alt='player' className='w-[90px] h-[160px] relative' style={{top:'360px', left:'50px'}}/>
      <Image src={'/young-hee.png'} width={400} height={500} alt='player' className='relative h-[500] w-[400]' style={{top: '80px', left:'860px'}}/>
    </div>
  )
}

export default GameBody