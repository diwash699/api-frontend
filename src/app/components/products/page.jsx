"use client";
import React from "react";
import { Container } from "@mui/material";
import ProductCard from "../card/page";
import Grid from "@mui/material/Grid2";
import { useGetAllProductsQuery } from "../redux/productslice/productService";

const HomePage = () => {
  const { data:products } = useGetAllProductsQuery();
  console.log(products);

  return (
    <Container sx={{ padding: 0, marginTop: "64px" }}>
      <Grid container spacing={2}>
                {products?.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.productid}>
                        <ProductCard
                            title={product.productname}
                            description={product.productdetails}
                            productid={product.productid} 
                        />
                    </Grid>
                ))}
            </Grid>
    </Container>
  );
};

export default HomePage;
