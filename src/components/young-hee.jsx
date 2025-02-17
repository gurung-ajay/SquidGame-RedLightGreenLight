import Image from 'next/image'
import React from 'react'

const YoungHee = () => {


  return (
    <div>
      <Image src={'/young-hee2.png'} width={200} height={500} alt='player' className='relative h-[500] w-[200]' style={{top: '80px', left:'860px', transform: 'scaleX(-1)'}}/>
    </div>
  )
}

export default YoungHee