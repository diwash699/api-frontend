import React, {useState} from "react";
import {Button,Card,CardActions,CardContent,Dialog,DialogContent,DialogTitle,Typography,} from "@mui/material";
import {useDeleteProductMutation,useUpdateProductMutation,} from "../redux/productslice/productService";
import ProductForm from "../creare-new-product/page";

const ProductCard = ({ title, description, productid }) => {
  const [deleteProduct] = useDeleteProductMutation();
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleDelete = async () => {
    try {
      await deleteProduct(productid).unwrap();
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Failed to delete the product", error);
    }
  };

  const handleUpdate = () => {
    setCurrentProduct({ 
      productname: title, // Match the form's expected field names
      productdetails: description, 
      productid 
    });
    setOpen(true); // Open the update dialog
  };

  const handleFormClose = () => {
    setOpen(false); // Close the dialog
    setCurrentProduct({}); // Clear the current product
  };


  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "16px", boxShadow: 3 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleUpdate}>
            Update
          </Button>
          <Button size="small" color="secondary" onClick={handleDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleFormClose}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent>
          <ProductForm
            initialValues={currentProduct}
            onClose={handleFormClose}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
