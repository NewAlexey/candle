import React from 'react';
import styled from 'styled-components';

import { ProductCounter } from './ProductCounter';
import { useBasketContext } from '../../../../context/BasketContext';
import { IOrderProduct, IProduct } from '../../../../interfaces/interfaces';
import { createProductForOrder } from '../../../../helpers/helpers';
import { PRODUCT_BASKET } from '../../../../helpers/constants';

function isProductInBasket(id: string, productsList: IOrderProduct[]): boolean {
  return !productsList.find((product) => product._id === id);
}

export const ContentForOrder: React.FC<IProduct> = ({ _id, ...props }) => {
  const [productCount, setProductCount] = React.useState(1);
  const { addProductInBasket, productsList, removeProductFromBasket } =
    useBasketContext();

  return (
    <Container>
      <ProductCounter
        productCount={productCount}
        setProductCount={setProductCount}
      />
      {isProductInBasket(_id, productsList) ? (
        <BasketAddButton
          onClick={() =>
            addProductInBasket(
              createProductForOrder({ _id, ...props }, productCount),
            )
          }
        >
          {PRODUCT_BASKET.PRODUCT_NOT_IN_BASKET}
        </BasketAddButton>
      ) : (
        <BasketRemoveButton onClick={() => removeProductFromBasket(_id)}>
          {PRODUCT_BASKET.PRODUCT_IN_BASKET}
        </BasketRemoveButton>
      )}
    </Container>
  );
};

const BasketAddButton = styled.button``;

const BasketRemoveButton = styled.button``;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 10px;
`;
