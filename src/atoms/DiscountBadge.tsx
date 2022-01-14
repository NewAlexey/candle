import React from 'react';
import styled from 'styled-components';

interface IProps {
  discount: string;
}

export const DiscountBadge: React.FC<IProps> = ({ discount }) => (
  <Badge>{discount}</Badge>
);
const Badge = styled.div`
  position: absolute;
  right: -16px;
  transform: rotate(30deg);
  top: 10px;
  width: 126px;
  text-align: center;
  background-color: #bcbbff;
  font-size: 20px;
`;
