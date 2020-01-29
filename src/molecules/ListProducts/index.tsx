import React from 'react';
import {
  Grid
} from '@material-ui/core';
import withTheme from '../../Theme';
import ProductItem from '../../atoms/ProductItem';

const ListProducts = ({ theme }: any) => {
  return <Grid container style={{ justifyContent: 'center', overflow: 'hidden' }}>
    <Grid
      container
      spacing={3}
      style={{
        maxWidth: theme.utilArea,
        padding: `${theme.spacing * 2}px 0`,
        overflow: 'hidden'
      }}
    >
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Grid>
  </Grid>
}

export default withTheme(ListProducts);