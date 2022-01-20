import React from 'react';
import styled from 'styled-components';

interface IProps {
  handleCloseMenu: (event: React.MouseEvent) => void;
}

export const BurgerClosedCross: React.FC<IProps> = ({ handleCloseMenu }) => (
  <Container onClick={handleCloseMenu}>
    <CrossLine />
    <SecondCrossLine />
  </Container>
);

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 35px;
  height: 35px;
  right: 10px;
  top: 10px;
`;

const CrossLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  position: absolute;
  top: 15px;
  transform: rotate(45deg);
  left: 0;
`;

const SecondCrossLine = styled(CrossLine)`
  transform: rotate(-45deg);
`;
