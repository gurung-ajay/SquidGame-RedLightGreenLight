import { resetGame } from '@/lib/features/gameLogic/gameLogicSlice'
import { resetPosition } from '@/lib/features/player/playerSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GameOver = () => {
  const {gameStatus, win_status} = useSelector(state => state.gameLogic)
  const dispatch = useDispatch()

  const gameReset = () => {
    dispatch(resetGame());
    dispatch(resetPosition());
  }
  return (
    <div className={`w-[600] h-[300] absolute flex flex-col justify-center items-center space-y-4
    ${gameStatus === 'finished' ? null : 'hidden'}`}>
        <div className='text-8xl'>YOU {win_status.toUpperCase()}!</div>
        <button className='bg-gray-200 text-[#535249] font-sans font-bold text-4xl p-4 rounded-full shadow-2xl w-[300]'
        onClick={gameReset}>RESTART?</button>
    </div>
  )
}

export default GameOver