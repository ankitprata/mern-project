import { createSlice } from "@reduxjs/toolkit"

const inirialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament: (state) => {
            state.value += 1;

        },
        decreament: (state) => {
            state.value -= 1;

        }


    }
})
export const {increament,decreament}=counterSlice.reducer;