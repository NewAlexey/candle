import React from 'react';
import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { AppContext, contextData } from './helpers/AppContext';
import { TitleComponent } from './components/TitleComponent';
import { AppRouterContent, AppNavigationComponent } from './utils/Router';
import { AppContainer } from './containers/AppContainer';

const App: React.FC = () => (
  <AppContext.Provider value={contextData}>
    <BrowserRouter>
      <HeaderContainer>
        <AppContainer>
          <TitleComponent />
          <AppNavigationComponent />
        </AppContainer>
      </HeaderContainer>

      <AppContainer>
        <AppRouterContent />
      </AppContainer>
    </BrowserRouter>
  </AppContext.Provider>
);

export default App;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d2d2d2;
  border-radius: 0 0 25px 25px;
`;
