import React from 'react';
import styled from 'styled-components';

interface IDiscountBadge {
  amountOfDiscount: string;
}

const DiscountBadge: React.FC<IDiscountBadge> = ({ amountOfDiscount }) => (
  <Badge>{amountOfDiscount}</Badge>
);
export default DiscountBadge;

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
