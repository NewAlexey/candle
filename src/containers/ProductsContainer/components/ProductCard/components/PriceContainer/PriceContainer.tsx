import React from 'react';
import styled from 'styled-components';
import { PRICE_FONT_SIZE } from '../../../../../../helpers/constants';

interface IProps {
  onDiscount: boolean;
  price: string;
  discountPrice: string;
}

export const PriceContainer: React.FC<IProps> = ({
  onDiscount,
  price,
  discountPrice,
}) => (
  <Container>
    {onDiscount ? (
      <>
        <OldPrice>{price}$</OldPrice>
        <DiscountPrice>{discountPrice}$</DiscountPrice>
      </>
    ) : (
      <UsualPrice>{price}$</UsualPrice>
    )}
  </Container>
);

const Container = styled.div`
  padding-top: 15px;
`;

const UsualPrice = styled.span`
  font-size: ${PRICE_FONT_SIZE};
`;

const OldPrice = styled(UsualPrice)`
  text-decoration: line-through;
  padding-right: 5px;
`;

const DiscountPrice = styled.span`
  font-size: ${PRICE_FONT_SIZE};
  color: blue;
`;
