import React from 'react';
import styled from 'styled-components';

interface IProps {
  handleOpenMenu: () => void;
}

export const BurgerIcon: React.FC<IProps> = ({ handleOpenMenu }) => {
  return (
    <BurgerContainer onClick={handleOpenMenu}>
      <ClosedBurgerLine />
      <ClosedBurgerMiddleLine />
      <ClosedBurgerLine />
    </BurgerContainer>
  );
};

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClosedBurgerLine = styled.div`
  height: 3px;
  width: 30px;
  background-color: black;
`;

const ClosedBurgerMiddleLine = styled.div`
  height: 3px;
  width: 23px;
  background-color: black;
  margin: 5px 0;
`;
