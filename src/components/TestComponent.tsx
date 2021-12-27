import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../helpers/AppContext';
import { IContext } from '../interfaces/interfaces';

interface ITestComponent {
  text: string;
}

const TestComponent: React.FC<ITestComponent> = ({
  text,
}) => {
  const { data } =
    React.useContext<IContext>(AppContext);

  return (
    <div>
      <p>{data}</p>
      <Text>{text}</Text>
    </div>
  );
};

export default TestComponent;

const Text = styled.p`
  font-size: 30px;
  color: red;
`;
