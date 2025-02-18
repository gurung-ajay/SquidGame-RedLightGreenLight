import { startGame } from '@/lib/features/gameLogic/gameLogicSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GameStartInterface = () => {
    const {gameStatus} = useSelector(state => state.gameLogic)
    const dispatch = useDispatch()
  return (
    <div className={`w-[400] h-[300] absolute flex flex-col justify-center items-center space-x-8
    ${gameStatus == 'running'? 'hidden': null}`}>
      <Image src={'/logo.png'} width={300} height={426} alt='logo' className='w-[300] h-[426]'/>
        <button className='bg-gray-200 text-[#535249] font-sans font-bold text-4xl p-4 rounded-full shadow-2xl w-[300]' onClick={() => dispatch(startGame())}>START</button>
    </div>
  )
}

export default GameStartInterface