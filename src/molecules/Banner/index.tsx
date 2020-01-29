import React from 'react';
import {
  Button
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles';
import { Container, ProductInfo } from './styles';
import Smartphone from './moto-g6.png';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.primary.main
  }
}));

const Banner = () => {
  const classes = useStyles();
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          VER MAIS
        </Button>
      </ProductInfo>
    </div>
  </Container>;
}

export default Banner;