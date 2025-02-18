'use client'
import React, { useEffect } from 'react'
import GameName from "@/components/game-name";
import GameBody from "@/components/game-body";
import { useDispatch, useSelector } from 'react-redux';
import { finishGame, gameLost, gameWon } from '@/lib/features/gameLogic/gameLogicSlice';
import GameStartInterface from '@/components/game-start-interface';
import GameOver from '@/components/game-over';

export default function Home() {
  
  const {left} = useSelector(state => state.player)
  const {gameStatus} = useSelector(state => state.gameLogic)
  const {facingPlayer} = useSelector(state => state.youngHee)
  const dispatch = useDispatch()

  useEffect(() => {
    // 700px is the value of left at which the player reaches the finish line
    if (parseInt(left) == 700){
      dispatch(gameWon())
      dispatch(finishGame())
    }
  }, [left])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && facingPlayer) {
        dispatch(gameLost())
        dispatch(finishGame())
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [facingPlayer]);

  return (
    <div className='flex justify-center items-center relative'>
      
      <div className={`flex flex-col relative justify-center items-center h-screen w-screen bg-black text-white ${gameStatus=='not_running' || gameStatus=='finished'?'blur-xl':null}`}>
        <GameBody />
        <GameName />
      </div>
      <GameStartInterface/>
      <GameOver />

    </div>
  
  );
}
