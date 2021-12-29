import React from 'react';
import styled from 'styled-components';
import { PRICE_FONT_SIZE } from '../../../../../../helpers/constants';

interface IDiscountContainer {
  price: string;
  discountPrice: string;
}

export const DiscountContainer: React.FC<IDiscountContainer> = ({
  price,
  discountPrice,
}) => (
  <>
    <UsualPrice>{price}$</UsualPrice>
    <DiscountPrice>{discountPrice}$</DiscountPrice>
  </>
);

const UsualPrice = styled.span`
  font-size: ${PRICE_FONT_SIZE};
  text-decoration: line-through;
  padding-right: 5px;
`;

const DiscountPrice = styled.span`
  font-size: ${PRICE_FONT_SIZE};
  color: blue;
`;
