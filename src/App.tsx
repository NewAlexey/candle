import React from 'react';
import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import { AppContext, contextData } from './helpers/AppContext';
import AppContainer from './containers/AppContainer/AppContainer';
import {
  AppRouterContent,
  NavigationComponent,
} from './components/Router/Router';

const App = (): JSX.Element => (
  <AppContext.Provider value={contextData}>
    <BrowserRouter>
      <NavigationComponent />
      <AppContainer>
        <AppRouterContent />
      </AppContainer>
    </BrowserRouter>
  </AppContext.Provider>
);

export default App;
