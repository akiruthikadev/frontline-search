import { createSlice } from "@reduxjs/toolkit";

const slicer = createSlice({
        name : "counter", 
        initialState : {
            count : 0
        }, 
        reducers: {
            increment : (state)=> { state.count += 1},
            decrement : (state)=> { state.count += -1},
            incrementByAmount : (state, action) => { state.count += action.payload}
        }
})
export const counterAsync = (amout) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amout))
    }, 1000)
}
export const Counts = (amount) => (dispatch) => { setTimeout(() => { dispatch(incrementByAmount(amount))},2000)};
export const { increment , decrement , incrementByAmount} = slicer.actions;
export default slicer.reducer;