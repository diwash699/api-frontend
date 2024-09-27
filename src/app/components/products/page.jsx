'use client';
import React from 'react';
import { Container } from '@mui/material';
import ProductCard from '../card/page';
import Grid from '@mui/material/Grid2';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const products = [
        {
            id: 1,
            title: 'Air Sneakers',
            description: 'Lightweight sneakers with embedded micro-jets.',
        },
        {
            id: 2,
            title: 'Running Shoes',
            description: 'Shoes designed for maximum comfort and performance.',
        },
        {
            id: 3,
            title: 'Casual Sneakers',
            description: 'Stylish sneakers for everyday wear.',
        },
    ];
    const productName = useSelector((state) => state.product.productName);
    const productDescription = useSelector((state) => state.product.productDescription);
  console.log(productName,productDescription)
    return (
        <Container sx = {{ padding: 0, marginTop: '64px'}}>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard
                            title={product.title}
                            description={product.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomePage;
