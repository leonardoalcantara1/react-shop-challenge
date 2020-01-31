import React, { FC } from 'react';
import ListProducts from '../../molecules/ListProducts';
import { InternWrapper } from '../styles';

const Products: FC = (props: any) => {
  const brand = props.match.params.brand;
  if (brand) { 
    console.log(brand);
  }
  return <InternWrapper>
    <div className="wrapper">
      <ListProducts />
    </div>
  </InternWrapper>
}

export default Products;