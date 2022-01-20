import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './app.scss';
import { BasketContextProvider } from './context/BasketContext';
import { HeaderContainer } from './containers/HeaderContainer';
import { BodyContainer } from './containers/BodyContainer';

const App: React.FC = () => (
  <BasketContextProvider>
    <BrowserRouter>
      <HeaderContainer />

      <BodyContainer />
    </BrowserRouter>
  </BasketContextProvider>
);

export default App;
