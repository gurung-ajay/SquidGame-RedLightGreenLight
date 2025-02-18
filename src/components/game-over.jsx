import React from 'react'

const GameOver = () => {
  return (
    <div className='w-400 h-200 flex flex-col items-center justify-center bg-white absolute hidden'>
        <div className='text-4xl'>GAME OVER</div>
        <button>RESTART</button>
    </div>
  )
}

export default GameOver