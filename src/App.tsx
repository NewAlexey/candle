import React from 'react';
import TestComponent from './components/TestComponent';
import './app.scss';
import {
  AppContext,
  contextData,
} from './helpers/AppContext';
import AppContainer from './containers/AppContainer/AppContainer';
import Image from './components/Image/Image';

const App = (): JSX.Element => (
  <AppContext.Provider value={contextData}>
    <AppContainer>
      <p>Rollup + TypeScript + React = ❤️</p>
      <TestComponent text="hehehehh eehhehhehe" />
      <Image
        src="/public/images/sedan.png"
        alt="sedan"
      />
    </AppContainer>
  </AppContext.Provider>
);

export default App;
