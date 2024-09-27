"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ProductForm from '../creare-new-product/page';

const Navbar = () => {
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Product Management
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>
            Add New Product
          </Button>
        </Toolbar>
      </AppBar>


      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <ProductForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Navbar;
