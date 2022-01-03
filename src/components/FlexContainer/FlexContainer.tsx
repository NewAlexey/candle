import React from 'react';
import styled, { css } from 'styled-components';

interface IFlexContainer {
  alignItems?: string;
  justifyContent?: string;
  flexWrap?: string;
  flexDirection?: string;
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
}

export const FlexContainer: React.FC<IFlexContainer> = ({
  alignItems = 'center',
  justifyContent = 'center',
  flexWrap,
  flexDirection,
  height,
  width,
  padding,
  margin,

  children,
}) => (
  <Flex
    alignItems={alignItems}
    justifyContent={justifyContent}
    flexWrap={flexWrap}
    flexDirection={flexDirection}
    height={height}
    width={width}
    padding={padding}
    margin={margin}
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
  padding?: string;
  margin?: string;
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
  ${({ padding }) => css`
    padding: ${padding};
  `}
  ${({ margin }) => css`
    margin: ${margin};
  `}
`;
