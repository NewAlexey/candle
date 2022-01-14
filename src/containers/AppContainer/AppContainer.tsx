import React from 'react';
import styled from 'styled-components';

export const AppContainer: React.FC = ({ children }) => (
  <AppContainerDiv>{children}</AppContainerDiv>
);

const AppContainerDiv = styled.div`
  width: 1320px;
  padding: 0 40px;
  margin: 0 auto;

  @media (max-width: 1500px) {
    width: 1000px;
  }

  @media (max-width: 1200px) {
    width: 700px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
`;
