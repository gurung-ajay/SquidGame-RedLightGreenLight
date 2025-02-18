import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    gameStatus: 'not_running',
    win_status: 'none'
};

const gameLogicSlice = createSlice({
    name: 'gameLogic',
    initialState,
    reducers: {
        startGame(state) {
            state.gameStatus = 'running';
        },
        finishGame(state) {
            state.gameStatus = 'finished';
        },
        resetGame(state) {
            state.gameStatus = 'not_running';
            state.win_status = 'none';
        },
        gameWon(state) {
            state.win_status = 'won'
        },
        gameLost(state) {
            state.win_status = 'lost'
        }
    },
});

export const {
    startGame,
    finishGame,
    resetGame,
    gameWon,
    gameLost
} = gameLogicSlice.actions;

export default gameLogicSlice.reducer;