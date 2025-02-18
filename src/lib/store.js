import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './features/player/playerSlice'
import youngHeeReducer from './features/youngHee/youngHeeSlice'

export const store = configureStore({
  reducer: {
    player: playerReducer,
    youngHee: youngHeeReducer,
  },
})