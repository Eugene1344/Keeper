import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {
  transactionCategoryName: '',
  transactionAccountName: '',
  transactionIncomeName: '',
  transactionCount: 0,
};

export const newTransactionSlice = createSlice({
  name: 'newTransactionSlice',
  initialState,
  reducers: {
    updateAccount: (state, action) => {
      state.transactionAccountName = action.payload;
    },
    updateIncome: (state, action) => {
      state.transactionIncomeName = action.payload;
    },
    updateCategory: (state, action) => {
      state.transactionCategoryName = action.payload;
    },
    updateCount: (state, action) => {
      state.transactionCount = action.payload;
    },
  },
});

export const { updateAccount, updateCategory, updateCount , updateIncome } = newTransactionSlice.actions;

export default newTransactionSlice.reducer;
