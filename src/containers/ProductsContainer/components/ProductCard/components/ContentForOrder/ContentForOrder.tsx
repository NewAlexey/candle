import React from 'react';
import styled from 'styled-components';

import { ProductCounter } from './ProductCounter';
import { useAppContext } from '../../../../../../context/AppContext';
import { IProduct } from '../../../../../../interfaces/interfaces';
import { createProductForOrder } from '../../../../../../helpers/helpers';

export const ContentForOrder: React.FC<IProduct> = (props) => {
  const [productCount, setProductCount] = React.useState(1);
  const { addProductInBasket } = useAppContext();

  const handleAddToBasket = (): void => {
    addProductInBasket(createProductForOrder(props, productCount));
  };

  return (
    <Container>
      <ProductCounter
        productCount={productCount}
        setProductCount={setProductCount}
      />
      <BasketButton onClick={handleAddToBasket}>Add in basket</BasketButton>
    </Container>
  );
};

const BasketButton = styled.button``;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 10px;
`;
