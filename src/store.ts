import { configureStore } from '@reduxjs/toolkit';
import accountsSlice from '../src/store/slices/accountSlice.js'
import newTransactionSlice from '../src/store/slices/newTransactionSlice.js'
import incomesSlice from '../src/store/slices/incomesSlice.js'
import balanceSlice from '../src/store/slices/balanceSlice.js'

export const store = configureStore({
  reducer: {
    userAccounts: accountsSlice,
    balance: balanceSlice
  },
});
