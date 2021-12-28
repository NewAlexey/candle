import React from 'react';
import styled from 'styled-components';

const AppContainer: React.FC = ({ children }) => (
  <AppContainerDiv>{children}</AppContainerDiv>
);

export default AppContainer;

const AppContainerDiv = styled.div`
  width: 1400px;
  margin: 0 auto;
`;
