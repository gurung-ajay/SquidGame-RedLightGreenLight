import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    facingPlayer: false
};

const youngHeeSlice = createSlice({
    name: 'youngHee',
    initialState,
    reducers: {
        changeFacingDirection: (state) => {
            state.facingPlayer = !state.facingPlayer
        },
    },
});

export const { changeFacingDirection } = youngHeeSlice.actions;

export default youngHeeSlice.reducer;