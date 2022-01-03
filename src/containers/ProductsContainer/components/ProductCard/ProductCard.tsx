import React from 'react';
import styled from 'styled-components';

import { IProduct } from '../../../../interfaces/interfaces';
import { DiscountContainer } from './components/DiscountContainer';
import { IMAGE_SIZE, PRICE_FONT_SIZE } from '../../../../helpers/constants';
import DiscountBadge from './components/DiscountBadge/DiscountBadge';

const ProductCard: React.FC<IProduct> = ({
  title,
  description,
  imageSrc,
  price,
  onDiscount,
  discountPrice,
  amountOfDiscount,
}) => (
  <ProductCardContainer>
    <ImageContainer>
      {onDiscount && <DiscountBadge amountOfDiscount={amountOfDiscount} />}
      <img
        src={imageSrc}
        alt={title}
        width={IMAGE_SIZE.WIDTH}
        height={IMAGE_SIZE.HEIGHT}
      />
    </ImageContainer>
    <InformationContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PriceContainer>
        {onDiscount ? (
          <DiscountContainer price={price} discountPrice={discountPrice} />
        ) : (
          <UsualPrice>{price}$</UsualPrice>
        )}
      </PriceContainer>
    </InformationContainer>
  </ProductCardContainer>
);

export default ProductCard;

const ImageContainer = styled.div`
  width: 300px;
  height: 250px;
  position: relative;
  overflow: hidden;
`;

const ProductCardContainer = styled.div`
  width: 300px;
  margin: 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  -webkit-box-shadow: 2px 6px 14px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 6px 14px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 2px 6px 14px 0 rgba(0, 0, 0, 0.2);
`;

const InformationContainer = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
`;

const Title = styled.span`
  font-size: 18px;
`;

const Description = styled.span`
  font-size: 16px;
  padding-top: 10px;
  text-align: center;
`;

const UsualPrice = styled.span`
  font-size: ${PRICE_FONT_SIZE};
`;

const PriceContainer = styled.div`
  padding-top: 15px;
`;
