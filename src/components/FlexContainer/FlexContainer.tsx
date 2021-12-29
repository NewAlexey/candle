import React from 'react';
import styled, { css } from 'styled-components';

interface IFlexContainer {
  alignItems?: string;
  justifyContent?: string;
  flexWrap?: string;
  flexDirection?: string;
  height?: string;
  width?: string;
}

export const FlexContainer: React.FC<IFlexContainer> = ({
  alignItems = 'center',
  justifyContent = 'center',
  flexWrap,
  flexDirection,
  height,
  width,

  children,
}) => (
  <Flex
    alignItems={alignItems}
    justifyContent={justifyContent}
    flexWrap={flexWrap}
    flexDirection={flexDirection}
    height={height}
    width={width}
  >
    {children}
  </Flex>
);

const Flex = styled.div<{
  alignItems: string;
  justifyContent: string;
  flexWrap?: string;
  flexDirection?: string;
  height?: string;
  width?: string;
}>`
  display: flex;
  ${({ alignItems }) => css`
    align-items: ${alignItems};
  `}
  ${({ justifyContent }) => css`
    justify-content: ${justifyContent};
  `}
  ${({ flexWrap }) => css`
    flex-wrap: ${flexWrap};
  `}
  ${({ flexDirection }) => css`
    flex-direction: ${flexDirection};
  `}  
  ${({ height }) => css`
    height: ${height};
  `}  
  ${({ width }) => css`
    width: ${width};
  `}
`;
