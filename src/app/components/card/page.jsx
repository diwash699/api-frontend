import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const ProductCard = ({ title, description}) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '16px', boxShadow: 3 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Update
                </Button>
                <Button size="small" color="secondary">
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
};

export default ProductCard;
