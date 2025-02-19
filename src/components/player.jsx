import { moveRight } from '@/lib/features/player/playerSlice'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Player = () => {
  const {left} = useSelector(state => state.player)
  const {gameStatus} = useSelector(state => state.gameLogic)
  const dispatch = useDispatch()

  useEffect(() => {
    if (gameStatus === 'not_running' || gameStatus === 'finished') return; // give player control only when game is running
  
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        dispatch(moveRight());
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStatus]);

  return (
    <div>
        <Image src={'/player.png'} width={100} height={200} alt='player' className='w-[90px] h-[160px] relative' style={{top:'360px', left:left}}/>
    </div>
  )
}

export default Player