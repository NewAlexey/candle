import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { useBasketContext } from '../../context/BasketContext';
import { OrderCard } from '../../components/OrderCard';

interface IBasketContainer {
  pageTitle: string;
}

export const BasketContainer: React.FC<IBasketContainer> = ({ pageTitle }) => {
  const { productsList } = useBasketContext();

  return (
    <BasketContent>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      {!productsList.length && <h2>Your basket is empty yet ;)</h2>}

      {productsList.map(
        ({
          imageSrc,
          title,
          description,
          count,
          price,
          discountPrice,
          amountOfDiscount,
          options,
          onDiscount,
          _id,
          totalPrice,
        }) => (
          <OrderCard
            key={_id}
            _id={_id}
            imageSrc={imageSrc}
            price={price}
            amountOfDiscount={amountOfDiscount}
            options={options}
            description={description}
            discountPrice={discountPrice}
            onDiscount={onDiscount}
            count={count}
            title={title}
            totalPrice={totalPrice}
          />
        ),
      )}
    </BasketContent>
  );
};

const BasketContent = styled.div`
  text-align: center;
  padding: 0 25px 20px;
`;
