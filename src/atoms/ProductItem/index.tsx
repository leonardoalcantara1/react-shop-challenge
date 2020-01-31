import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { addToCart } from '../../store/cart/actions';
import { ProductName, ProductBrand } from './style';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid
} from '@material-ui/core';
import withTheme from '../../Theme';
import { makeStyles } from '@material-ui/core/styles';

import formatPrice from '../../utils/price';

const useStyles = makeStyles(theme => ({
  img: {
    height: 140,
    backgroundSize: 'contain'
  }
}));

interface ProductProps {
  theme: any,
  product: any
}

const ProductItem: FC<ProductProps> = connect(
  ({ cart }: any) => ({ cart })
)(
  ({ theme, product, cart }: any) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const cartProduct = cart.find((a: any) => a.id === product.id);
    const cartQuantity = cartProduct ? cartProduct.quantity : 0;
    const disabled = cartQuantity >= product.quantity;

    return <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardHeader
          subheader={
            <ProductBrand>
              #{product.brand}
            </ProductBrand>
          }
        />
        <CardMedia className={classes.img} image={product.picture} />
        <CardContent>
          <ProductName>
            {product.title}
          </ProductName>
          <p style={{ fontSize: '1.3em', marginTop: theme.spacing }}>
            <b>
              {formatPrice(product.price)}
            </b>
          </p>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(addToCart(product));
            }}
            disabled={disabled}
          >
            {disabled ? 'ESGOTADO' : 'COMPRAR'}
          </Button>
        </CardActions>
      </Card>
    </Grid>;
  }
);

export default withTheme(ProductItem);