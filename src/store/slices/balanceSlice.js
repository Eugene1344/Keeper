import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    allTransactions: [],
}

export const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        addNewTransaction: (state, action) => {
            state.allTransactions.push(action.payload)
        },
    }
})

export const  { addNewTransaction } = balanceSlice.actions;
export default balanceSlice.reducer;