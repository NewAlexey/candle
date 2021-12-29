import React from 'react';
import { Helmet } from 'react-helmet';

import { FlexContainer } from '../../components/FlexContainer';
import { IContainer } from '../../interfaces/interfaces';

export const FirstContainer: React.FC<IContainer> = ({ pageTitle }) => (
  <FlexContainer>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
    <p>Rollup + TypeScript + React = ❤️</p>
  </FlexContainer>
);
