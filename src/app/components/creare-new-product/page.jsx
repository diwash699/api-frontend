'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setProductName, setProductDescription, resetForm } from '../redux/productslice/page';

const ProductForm = () => {
  const dispatch = useDispatch();
  const product = useSelector((state)=>state.product)
  console.log(product)
  const validationSchema = Yup.object({
    productName: Yup.string().required(),
    productDescription: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      productName: '',
      productDescription: '',
    },
    // validationSchema,
    onSubmit: (values) => {
      dispatch(setProductName(values.productName));
      dispatch(setProductDescription(values.productDescription));
      console.log(dispatch(setProductDescription(values.productDescription)));
      dispatch(resetForm());
      dispatch(increaseCount())
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '600px',
        margin: 'auto',
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Product Form
      </Typography>

      <TextField
        fullWidth
        id="productName"
        name="productName"
        label="Product Name"
        value={formik.values.productName}
        onChange={formik.handleChange}
      />

      <TextField
        fullWidth
        multiline
        rows={4}
        id="productDescription"
        name="productDescription"
        label="Product Description"
        value={formik.values.productDescription}
        onChange={formik.handleChange}
      />


      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default ProductForm;
