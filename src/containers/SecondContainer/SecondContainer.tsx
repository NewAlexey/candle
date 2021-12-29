import React from 'react';
import { Helmet } from 'react-helmet';
import { FlexContainer } from '../../components/FlexContainer';

export const SecondContainer: React.FC = () => (
  <FlexContainer>
    <Helmet>
      <title>Second Container</title>
    </Helmet>
    <p>Rollup + TypeScript + React = ❤️</p>
    <p>Rollup + TypeScript + React = ❤️</p>
    <p>Rollup + TypeScript + React = ❤️</p>
    <p>Rollup + TypeScript + React = ❤️</p>
  </FlexContainer>
);
