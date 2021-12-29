import React from 'react';
import styled, { css } from 'styled-components';
import { FlexContainer } from '../../../../../../components/FlexContainer';

interface IDiscountFilter {
  isOnDiscount: boolean;
  setIsOnDiscount: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DiscountFilter: React.FC<IDiscountFilter> = ({
  isOnDiscount,
  setIsOnDiscount,
}) => {
  const handleChangeIsChecked = (): void => {
    setIsOnDiscount(!isOnDiscount);
  };

  return (
    <FlexContainer>
      <FilterTitle>only discount</FilterTitle>
      <Checkbox isOnDiscount={isOnDiscount} onClick={handleChangeIsChecked} />
    </FlexContainer>
  );
};

const FilterTitle = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

const Checkbox = styled.div<{ isOnDiscount: boolean }>`
  width: 15px;
  height: 15px;
  border: 1px solid black;

  ${({ isOnDiscount }) => css`
    background-color: ${isOnDiscount ? '#bcbbff' : ''};
  `}
`;
