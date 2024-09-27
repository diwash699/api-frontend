import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productName: '',
    productDescription: '',
    increaseCount:0
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
    increaseCount:(state)=>{
      console.log('íncrement')
      state.count = state.count + 1
    }
  },
});

export const { setProductName, setProductDescription, resetForm,increaseCount } = productSlice.actions;
export default productSlice.reducer;
