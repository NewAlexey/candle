import React from 'react';
import styled from 'styled-components';

export const AppContainer: React.FC = ({ children }) => (
  <AppContainerDiv>{children}</AppContainerDiv>
);

const AppContainerDiv = styled.div`
  width: 1400px;
  margin: 0 auto;

  @media (max-width: 1500px) {
    width: 1000px;
  }
`;
