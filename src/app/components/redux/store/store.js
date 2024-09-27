import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../productslice/page';

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
