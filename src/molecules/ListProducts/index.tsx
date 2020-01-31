import React from 'react';
import {
  Grid
} from '@material-ui/core';
import withTheme from '../../Theme';
import ProductItem from '../../atoms/ProductItem';

const ListProducts = ({ theme, list }: any) => {
  return <Grid
    container
    style={{
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: theme.spacing,
      paddingBottom: theme.spacing
    }}
  >
    <Grid
      container
      spacing={3}
    >
      {
        list.map((item:any) => <ProductItem key={item.id} product={item} />)
      }
    </Grid>
  </Grid>
}

export default withTheme(ListProducts);