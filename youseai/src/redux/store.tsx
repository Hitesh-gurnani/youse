// store.ts
import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducers/itemReducer';

const store = configureStore({
  reducer: {
    items: itemReducer,
    // Add other reducers here if needed
  },
  // Add any middleware or devtools configuration here if needed
});

export default store;
