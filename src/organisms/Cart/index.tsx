import React, { FC, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  Paper,
  Grid,
  IconButton,
  ButtonGroup,
  Button
} from '@material-ui/core';
import {
  RemoveShoppingCartOutlined
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import req from '../../utils/request';
import { InternWrapper } from '../styles';
import withTheme from '../../Theme';
import formatPrice from '../../utils/price';
import { Price, CartRow, FinalPrice } from './styles';

import { removeToCart, changeQuantity } from '../../store/cart/actions';

const useStyles = makeStyles({
  img: {
    textAlign: 'center'
  }
})

const Cart: FC = connect(
  ({ cart }: any) => ({ cart })
)(({ theme, cart }: any) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const ids = cart.map((a: any) => a.id);

    const [rows, setRows] = useState([]);
    const [productsStock, setProductsStock] = useState([]);

    const finalValue: number = rows.length > 0 ?
      ([...rows] as any).reduce(
        (a: any, b: any) => {
          const price = (a.price * a.quantity) + (b.price * b.quantity);
          return {
            quantity: 1,
            price
          }
        }
      ).price
      : 0;
    
    useEffect(
      () => {
        if (cart.length > 0) {
          req.get(`/products?id=${ids.join('&id=')}`)
            .then((res: any) => {
              const rows = res.data.map(
                (row:any) => {
                  const item = cart.find((b:any) => b.id === row.id);
                  return {
                    ...row,
                    quantity: item.quantity
                  }
                }
              );
              setProductsStock(res.data);
              setRows(rows);
            })
            .catch(e => console.log('get cart products info error', e));
        } else {
          setRows(cart);
        }
      },
      [cart]
    );

    return <InternWrapper>
      <div className="wrapper">
        {
          cart.length > 0 ? (
            <>
              <Paper>
                {rows.map((row: any) => (
                  <CartRow key={row.id}>
                    <Grid
                      container
                      spacing={4}
                      style={{
                        padding: `${theme.spacing}px`,
                        alignItems: 'center'
                      }}
                    >
                      <Grid item xs={12} md={2} className={classes.img}>
                        <img src={row.picture} alt="" />
                      </Grid>
                      <Grid item xs={12} sm={12} md>{row.title}</Grid>
                      <Grid
                        item
                        xs={4}
                        sm={5}
                        md={2}
                      >
                        <Price>
                          {formatPrice(row.price)}
                        </Price>
                      </Grid>
                      <Grid
                        item
                        xs={5}
                        sm={5}
                        md={2}
                        style={{
                          textAlign: 'center'
                        }}
                      >
                        <ButtonGroup size="small" aria-label="small outlined button group">
                          <Button onClick={() => {
                            const productStock = productsStock.find((a:any) => a.id === row.id) || { quantity: 1 };
                            return dispatch(changeQuantity(row.id, row.quantity - 1, productStock.quantity));
                          }}>-</Button>
                          <Button disabled>{row.quantity}</Button>
                          <Button onClick={() => {
                            const productStock = productsStock.find((a:any) => a.id === row.id) || { quantity: 1 };
                            return dispatch(changeQuantity(row.id, row.quantity + 1, productStock.quantity));
                          }}>+</Button>
                        </ButtonGroup>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sm={2}
                        md={1}
                        style={{
                          textAlign: 'center'
                        }}
                      >
                        <IconButton color="secondary" onClick={() => dispatch(removeToCart(row))}>
                          <RemoveShoppingCartOutlined />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CartRow>
                ))}
              </Paper>
              <FinalPrice className="title">
                Valor final: {
                  formatPrice(finalValue)
                }
              </FinalPrice>
            </>
          ) : (
            <p style={{ textAlign: 'center' }}>
              Nenhum produto no carrinho
            </p>
          )
        }
      </div>
    </InternWrapper>
  }
);

export default withTheme(Cart);