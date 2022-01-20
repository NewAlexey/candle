import React from 'react';
import styled from 'styled-components';
import { IMAGE_SIZE } from '../../helpers/constants';
import { IOrderProduct } from '../../interfaces/interfaces';
import { DiscountBadge } from '../../atoms/DiscountBadge';

export const OrderCard: React.FC<IOrderProduct> = ({
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
}) => {
  return (
    <OrderCardContainer>
      <ImageContainer>
        {onDiscount && <DiscountBadge discount={amountOfDiscount} />}
        <img
          src={imageSrc}
          alt={title}
          width={IMAGE_SIZE.WIDTH}
          height={IMAGE_SIZE.HEIGHT}
        />
      </ImageContainer>
      <InformationContainer>
        <h3>{title}</h3>
        <span>{description}</span>
        <ProductOptions>
          {options.map((option) => (
            <ProductOption>{option}</ProductOption>
          ))}
        </ProductOptions>
      </InformationContainer>
    </OrderCardContainer>
  );
};

const OrderCardContainer = styled.div`
  display: flex;
  margin: 50px 0;
  -webkit-box-shadow: 2px 6px 14px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 6px 14px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 2px 6px 14px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 250px;
  position: relative;
  overflow: hidden;
  flex-grow: 0;
`;

const InformationContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
`;

const ProductOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 15px;
`;

const ProductOption = styled.span``;
