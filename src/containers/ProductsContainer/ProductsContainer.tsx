import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import { ProductsContent } from './components/ProductsContent';
import { useCustomQuery } from '../../hooks/useCustomQuery';

interface IProductContainer {
  pageTitle: string;
}

export const ProductsContainer: React.FC<IProductContainer> = ({
  pageTitle,
}) => {
  const products = useLocation().pathname.slice(1);
  const { data, loading, errorMessage } = useCustomQuery(products);
  return (
    <ProductSection>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <h1>{pageTitle}</h1>
      <ProductsContent
        initialProducts={data || []}
        loading={loading}
        errorMessage={errorMessage}
      />
    </ProductSection>
  );
};

const ProductSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 25px 20px;
  margin-bottom: 50px;
  box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.2);
`;
