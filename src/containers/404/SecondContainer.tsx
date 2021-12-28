import React from 'react';
import { Link } from 'react-router-dom';
import FlexContainer from '../FlexContainer/FlexContainer';

const NotFoundContainer: React.FC = () => (
  <FlexContainer>
    <p>Sorry, wrong way</p>
    <Link to="/">Go home</Link>
  </FlexContainer>
);

export default NotFoundContainer;
