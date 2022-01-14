import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { useAppContext } from '../../context/AppContext';
import { OrderCard } from '../../components/OrderCard';

interface IBasketContainer {
  pageTitle: string;
}

const mockData = [
  {
    amountOfDiscount: '25%',
    count: 1,
    description: 'loooong long loooong description of product',
    discountPrice: '75',
    imageSrc: 'assets/images/pickup.png',
    onDiscount: true,
    options: ['hello', 'hello-1'],
    price: '5',
    title: 'title of product',
    totalPrice: 75,
    _id: '61cd8fa8c81d22202404f1c9',
  },
];

export const BasketContainer: React.FC<IBasketContainer> = ({ pageTitle }) => {
  const { productsList } = useAppContext();

  console.log(mockData);

  return (
    <BasketContent>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {!productsList.length && <h2>Your basket is empty yet ;)</h2>}
      {mockData.map(
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
