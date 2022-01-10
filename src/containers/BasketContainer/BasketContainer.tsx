import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';

export const BasketContainer: React.FC = () => {
  const { productsList } = useAppContext();

  console.log('productsList', productsList);
  return <BasketContent></BasketContent>;
};

const BasketContent = styled.div``;
