import { changeFacingDirection } from '@/lib/features/youngHee/youngHeeSlice'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const YoungHee = () => {
  const audioRef = useRef(typeof Audio !== 'undefined' ? new Audio('/squid_games_remix.mp3') : null);


  const { facingPlayer } = useSelector(state => state.youngHee)
  const { gameStatus } = useSelector(state => state.gameLogic)
  
  const dispatch = useDispatch();

  // to pass random interval values to flip young-hee at random intervals
  const random_intervals = [4000,2000,2000,3000]
  const getRandomInterval = () => {
    const randomIndex = Math.floor(Math.random() * random_intervals.length);
    console.log(random_intervals[randomIndex])
    return random_intervals[randomIndex];
  };

  useEffect(() => {
    if (gameStatus === 'not_running' || gameStatus === 'finished') return; // only run code below when gameState is 'running'
    
    const timeouts = [];
  
    // function to flip young-hee at random intervals
    const flip = () => {
      // dispatch action to change direction of young-hee
      dispatch(changeFacingDirection());
      // to continuously flip recursively at random intervals
      const timeoutId = setTimeout(flip, getRandomInterval());
      timeouts.push(timeoutId);
    };
  
    // initial function call for flip
    const initialTimeout = setTimeout(flip, getRandomInterval());
    timeouts.push(initialTimeout);
  
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [dispatch, gameStatus]);

  useEffect(() => {
    const audio = audioRef.current;
    if(facingPlayer == true){
      audio.loop = true;
      audio.play();
    }
    else{
      audio.pause();
    }
  }, [facingPlayer])

  const transform = facingPlayer ? 'scaleX(1)' : 'scaleX(-1)'

  return (
    <div>
      <Image src={'/young-hee2.png'} width={200} height={500} alt='player' className='relative h-[500] w-[200]' style={{top: '80px', left:'860px', transform: transform}}/>
    </div>
  )
}

export default YoungHee