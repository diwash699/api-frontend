import { configureStore } from '@reduxjs/toolkit';
// import productSlice from '../productslice/page';
import productApi from '../productslice/productService';

export const store = configureStore({
  reducer: {
    // product: productSlice,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
