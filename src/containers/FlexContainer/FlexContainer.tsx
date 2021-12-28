import React from 'react';
import styled, { css } from 'styled-components';

interface IFlexContainer {
  alignItems?: string;
  justifyContent?: string;
}

const FlexContainer: React.FC<IFlexContainer> = ({
  alignItems = 'center',
  justifyContent = 'center',
  children,
}) => (
  <Flex
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </Flex>
);

export default FlexContainer;

const Flex = styled.div<{
  alignItems: string;
  justifyContent: string;
}>`
  display: flex;
  ${({ alignItems }) => css`
    align-items: ${alignItems};
  `}
  ${({ justifyContent }) => css`
    justify-content: ${justifyContent};
  `}
`;
