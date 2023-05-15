import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {
  incomeSources: [],
  totalBalance: 0
};

export const incomesReducer = createSlice({
  name: 'incomesReducer',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.incomeSources.push(action.payload);
    },
    deleteIncome: (state,action) => {
      state.incomeSources = state.incomeSources.filter((account) => {
        return account.id !== action.payload;
      });
    },
    changeAccount: (state,action) => {
      state.incomeSources = state.incomeSources.map(account => {
        if (account.id === action.payload.id) {
          return {
            ...account,
            name: action.payload.name,
            icon: action.payload.icon,
            balance: action.payload.balance,
          };
        } else {
          return account;
        }
      });
    },
    updateTotalBalance: (state,action) => {
      state.totalBalance = action.payload
    }
  },
});

export const { addIncome, deleteIncome, updateTotalBalance, changeAccount } = incomesReducer.actions;

export default incomesReducer.reducer;
