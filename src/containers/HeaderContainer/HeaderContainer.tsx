import React from 'react';
import styled from 'styled-components';

import { AppContainer } from '../AppContainer';
import { TitleComponent } from '../../components/TitleComponent';
import { AppNavigationComponent } from '../../components/AppRouterComponent';

export const HeaderContainer: React.FC = () => (
  <Header>
    <AppContainer>
      <TitleComponent />
      <AppNavigationComponent />
    </AppContainer>
  </Header>
);

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d2d2d2;
  border-radius: 0 0 25px 25px;
  padding: 0 40px;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
`;
