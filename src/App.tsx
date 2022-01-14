import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './app.scss';
import { AppContextProvider } from './context/AppContext';
import { HeaderContainer } from './containers/HeaderContainer';
import { BodyContainer } from './containers/BodyContainer';

const App: React.FC = () => (
  <AppContextProvider>
    <BrowserRouter>
      <HeaderContainer />

      <BodyContainer />
    </BrowserRouter>
  </AppContextProvider>
);

export default App;
