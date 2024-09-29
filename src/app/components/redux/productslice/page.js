import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productName: '',
    productDescription: '',
  },
  reducers: {
    setProductName: (state, action) => {
      state.productName = action.payload;
    },
    setProductDescription: (state, action) => {
      state.productDescription = action.payload;
    },
    resetForm: (state) => {
      state.productName = '';
      state.productDescription = '';
    },
  },
});

export const { setProductName, setProductDescription, resetForm } = productSlice.actions;
export default productSlice.reducer;
