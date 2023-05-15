import { createSlice } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState = {
  accounts: [],
  totalBalance: 0
};

export const accountsReducer = createSlice({
  name: 'accountsReducer',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    deleteAccount: (state,action) => {
      state.accounts = state.accounts.filter((account) => {
        return account.id !== action.payload;
      });
    },
    changeAccount: (state,action) => {
      state.accounts = state.accounts.map(account => {
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
    changeAccountBalance: (state,action) => {
      const { id } = action.payload;
      const updatedAccounts = state.accounts.map(account => {
        if (account.id === id) {
          const balance = account.balance;
          let newBalance;
          if (action.payload.balance >= 0) {
            newBalance = balance + action.payload.balance;
          } else {
            newBalance = balance - Math.abs(action.payload.balance);
          }
          return { ...account, balance: newBalance };
        } else {
          return account;
        }
      });
      state.accounts = updatedAccounts;
    },
    changeIncomeReceivedBalance: (state,action) => {
      const { id } = action.payload;
      const updatedAccounts = state.accounts.map(account => {
        if (account.id === id) {
          const balance = account.received;
          let newBalance;
          if (action.payload.received >= 0) {
            newBalance = balance + action.payload.received;
          } else {
            newBalance = balance - Math.abs(action.payload.received);
          }
          return { ...account, received: newBalance };
        } else {
          return account;
        }
      });
      state.accounts = updatedAccounts;
    },
  },
});

export const { addAccount, deleteAccount, changeIncomeReceivedBalance, changeAccount, changeAccountBalance } = accountsReducer.actions;

export default accountsReducer.reducer;
