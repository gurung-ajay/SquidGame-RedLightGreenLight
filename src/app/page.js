'use client'
import React, { useEffect } from 'react'
import GameName from "@/components/game-name";
import GameBody from "@/components/game-body";
import { useDispatch, useSelector } from 'react-redux';
import { gameWon } from '@/lib/features/gameLogic/gameLogicSlice';
import GameStartInterface from '@/components/game-start-interface';

export default function Home() {
  
  const {left} = useSelector(state => state.player)
  const {gameStatus} = useSelector(state => state.gameLogic)
  const dispatch = useDispatch()

  useEffect(() => {
    // 700px is the value of left at which the player reaches the finish line
    if (parseInt(left) == 700){
      dispatch(gameWon())
      prompt('won')
    }
  })

  return (
    <div className='flex justify-center items-center relative'>
      
      <div className={`flex flex-col relative justify-center items-center h-screen w-screen bg-black text-white ${gameStatus=='not_running'?'blur-xl':null}`}>
        <GameBody />
        <GameName />
      </div>
      <GameStartInterface/>

    </div>
  
  );
}
