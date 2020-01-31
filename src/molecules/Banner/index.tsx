import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart/actions';
import req from '../../utils/request';
import {
  Button
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles';

import formatPrice from '../../utils/price';
import { Container, ProductInfo } from './styles';
import Smartphone from './moto-g6.png';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.primary.main
  }
}));

const Banner = connect(
  ({ cart }: any) => ({ cart })
)(
  ({ cart }: any) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [product, setProduct]:any = useState({});

    const cartProduct = cart.find((a: any) => a.id === product.id);
    const cartQuantity = cartProduct ? cartProduct.quantity : 0;
    const disabled = cartQuantity >= product.quantity;

    useEffect(() => {
      req.get('/products', {
        params: {
          id: 133453169
        }
      }).then((res:any) => {
        setProduct(res.data && res.data[0] || {});
      }).catch(e => {
        console.log('error get banner product', e);
      });
    }, []);

    return <Container>
      <div className="wrapper">
        <img src={Smartphone} alt="" />
        <ProductInfo>
          <h2 className="title">
            MOTO G6 PLAY<br />
            <small>
              DUAL CHIP 32GB COM CÂMERA 13MP
            </small>
          </h2>
          <p>
            Misturando inovação, modernidade e qualidade, o novo moto g6 play chegou para deixar tudo o que você precisa na palma da sua mão, desbravando um mundo de novidades e experiências extremamente inesquecíveis.
          </p>
          <h3 className="price">
            <small>POR APENAS</small><br />
            {formatPrice(product.price)}
          </h3>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={() => {
              dispatch(addToCart(product));
            }}
            disabled={disabled}
          >
            {disabled ? 'ESGOTOU :(' : 'COMPRAR'}
          </Button>
        </ProductInfo>
      </div>
    </Container>;
  }
);

export default Banner;