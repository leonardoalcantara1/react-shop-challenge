import React, { FC } from 'react';
import Banner from '../../molecules/Banner';
import ListProducts from '../../molecules/ListProducts';

const Home: FC = () => {
  return <>
    <Banner />
    <ListProducts />
  </>
}

export default Home;