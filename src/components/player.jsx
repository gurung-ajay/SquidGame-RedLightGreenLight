import Image from 'next/image'
import React from 'react'

const Player = () => {
  return (
    <div>
        <Image src={'/player.png'} width={100} height={200} alt='player' className='w-[90px] h-[160px] relative' style={{top:'360px', left:'50px'}}/>
    </div>
  )
}

export default Player