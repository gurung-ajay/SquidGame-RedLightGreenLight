'use client'
import React from 'react'
import GameName from "@/components/game-name";
import GameBody from "@/components/game-body";

export default function Home() {
  return (
  <div className="flex flex-col justify-center items-center h-screen w-screen bg-black text-white">
    <GameBody />
    <GameName />
  </div>
  );
}
