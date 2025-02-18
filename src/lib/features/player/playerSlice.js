import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  left: '50px'
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    moveRight: (state) => {
      let num_value = parseInt(state.left)
      num_value += 10
      state.left = num_value + 'px'
    }
  }
});

export const { moveRight } = playerSlice.actions;

export default playerSlice.reducer;