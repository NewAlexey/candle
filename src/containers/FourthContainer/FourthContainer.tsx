import React from 'react';
import { Helmet } from 'react-helmet';
import { FlexContainer } from '../../components/FlexContainer';

export const FourthContainer: React.FC = () => (
  <FlexContainer>
    <Helmet>
      <title>First Container</title>
    </Helmet>
    <p>Rollup + TypeScript + React = ❤️</p>
  </FlexContainer>
);
