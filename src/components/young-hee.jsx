import Image from 'next/image'
import React from 'react'

const YoungHee = () => {
  return (
    <div>
      <Image src={'/young-hee.png'} width={400} height={500} alt='player' className='relative h-[500] w-[420]' style={{top: '80px', left:'860px'}}/>
    </div>
  )
}

export default YoungHee