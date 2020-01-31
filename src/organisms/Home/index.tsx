import React, { FC, useEffect, useState } from 'react';
import req from '../../utils/request';
import { Grid } from '@material-ui/core';
import Banner from '../../molecules/Banner';
import ListProducts from '../../molecules/ListProducts';
import withTheme from '../../Theme';

const Home: FC = ({ theme }: any) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    req.get('/products').then((res:any) => {
      setProducts(res.data || []);
    }).catch(e => {
      console.log('error get home products', e);
    });
  }, []);

  return <>
    <Banner />
    <Grid
      container
      style={{
        justifyContent: 'center'
      }}
    >
      <Grid item style={{
        maxWidth: theme.utilArea,
      }}>
        <ListProducts list={products} />
      </Grid>
    </Grid>
  </>
}

export default withTheme(Home);