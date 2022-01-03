import React from 'react';
import styled from 'styled-components';

import { FlexContainer } from '../FlexContainer';

export const TitleComponent: React.FC = () => {
  const handleBasketClick = (): void => {
    console.log('basket click');
  };

  return (
    <FlexContainer
      justifyContent="space-between"
      height="50px"
      padding="10px 0 0"
    >
      <div>search</div>
      <div>logo</div>
      <BasketContainer onClick={handleBasketClick}>
        <img src="assets/svg/basket.svg" alt="basket" width={50} height={40} />
      </BasketContainer>
    </FlexContainer>
  );
};

const BasketContainer = styled.div`
  width: 50px;
  height: 40px;
  cursor: pointer;
`;
