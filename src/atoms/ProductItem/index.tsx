import React from 'react';
import { ProductName } from './style';
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

const ProductItem = ({ theme }: any) => {
  const classes = useStyles();
  return <Grid item xs={12} sm={6} md={4} lg={3}>
    <Card>
      <CardHeader subheader={'#Motorola'} />
      <CardMedia className={classes.img} image="https://imagens.canaltech.com.br/produto/buscape/o292298908.jpg" />
      <CardContent>
        <ProductName>
          Smartphone Motorola Moto G6 Play Dual Chip Android Oreo - 8.0 Tela 5.7" Octa-Core 1.4 GHz 32GB 4G Câmera 13MP - Índigo
        </ProductName>
        <p style={{ fontSize: '1.3em', marginTop: theme.spacing }}>
          <b>
            {formatPrice(1099.50)}
          </b>
        </p>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          VER DETALHES
        </Button>
      </CardActions>
    </Card>
  </Grid>;
}

export default withTheme(ProductItem);