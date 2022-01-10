import React from 'react';
import styled from 'styled-components';

import { IProduct } from '../../../../interfaces/interfaces';
import { IMAGE_SIZE } from '../../../../helpers/constants';
import { ContentForOrder } from './components/ContentForOrder';
import { PriceContainer } from './components/PriceContainer';

const ProductCard: React.FC<IProduct> = ({
  title,
  description,
  imageSrc,
  price,
  onDiscount,
  discountPrice,
  amountOfDiscount,
  options,
  _id,
}) => (
  <ProductCardContainer>
    <ImageContainer>
      {onDiscount && <DiscountBadge>{amountOfDiscount}</DiscountBadge>}
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
      <PriceContainer
        onDiscount={onDiscount}
        price={price}
        discountPrice={discountPrice}
      />
      <ContentForOrder
        _id={_id}
        title={title}
        description={description}
        imageSrc={imageSrc}
        price={price}
        onDiscount={onDiscount}
        discountPrice={discountPrice}
        amountOfDiscount={amountOfDiscount}
        options={options}
      />
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

const DiscountBadge = styled.div`
  position: absolute;
  right: -16px;
  transform: rotate(30deg);
  top: 10px;
  width: 126px;
  text-align: center;
  background-color: #bcbbff;
  font-size: 20px;
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
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 10px 10px;
`;

const Title = styled.span`
  font-size: 18px;
`;

const Description = styled.span`
  font-size: 16px;
  padding-top: 10px;
  text-align: center;
`;
