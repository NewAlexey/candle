import React from 'react';
import { FlexContainer } from '../FlexContainer';

export const TitleComponent: React.FC = () => (
  <FlexContainer justifyContent="space-between" height="50px">
    <div>search</div>
    <div>logo</div>
    <div>basket</div>
  </FlexContainer>
);
