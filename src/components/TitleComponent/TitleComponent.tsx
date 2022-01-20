import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { FlexContainer } from '../FlexContainer';
import { useBasketContext } from '../../context/BasketContext';

export const TitleComponent: React.FC = () => {
  const { basketCount } = useBasketContext();
  const navigate = useNavigate();

  const handleGoToBasket = (): void => {
    navigate('/basket');
  };

  return (
    <FlexContainer
      justifyContent="space-between"
      height="50px"
      padding="10px 0 0"
    >
      <div>search</div>
      <div>logo</div>
      <BasketContainer onClick={handleGoToBasket}>
        <img src="assets/svg/basket.svg" alt="basket" width={60} height={50} />
        <ProductCountContainer>
          <ProductCount>{basketCount}</ProductCount>
        </ProductCountContainer>
      </BasketContainer>
    </FlexContainer>
  );
};

const BasketContainer = styled.div`
  width: 50px;
  height: 40px;
  cursor: pointer;
  position: relative;
`;

const ProductCountContainer = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: whitesmoke;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 30px;
  right: -10px;
`;

const ProductCount = styled.span`
  font-size: 17px;
`;
