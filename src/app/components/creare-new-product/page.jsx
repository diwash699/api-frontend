'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useAddProductMutation, useUpdateProductMutation  } from '../redux/productslice/productService';

const ProductForm = ({onClose,initialValues = { productname: '', productdetails: '' }}) => {
  const [createProduct] = useAddProductMutation(); 
  const [updateProduct] = useUpdateProductMutation();

  const validationSchema = Yup.object({
    productName: Yup.string().required("Product name is required"),
    productDescription: Yup.string().required("Product description is required"),
  });

  const formik = useFormik({
    initialValues: {
      productName: initialValues.productname || '',
      productDescription: initialValues.productdetails || '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
          if (initialValues.productid) {
              // Call the update mutation if productId exists
              await updateProduct({
                  productid: initialValues.productid,
                  productname: values.productName,
                  productdetails: values.productDescription,
              });
          } else {
              // Otherwise, create a new product
              await createProduct({
                  productid: Math.floor(Math.random() * 50),
                  productname: values.productName,
                  productdetails: values.productDescription,
              });
          }
          resetForm();
          console.log('Product processed successfully');
          onClose();
      } catch (error) {
          console.log(error?.message);
      }
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
        {initialValues.productid ? 'Update' : 'Submit'}
      </Button>
      
    </Box>
  );
};

export default ProductForm;
