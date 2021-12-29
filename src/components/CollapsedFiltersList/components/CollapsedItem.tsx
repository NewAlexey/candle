import React from 'react';
import styled, { css } from 'styled-components';

import { ICollapsedFilter } from '../../../interfaces/interfaces';
import { CollapsedFiltersEnum } from '../../../helpers/constants';

interface ICollapsedItem {
  item: ICollapsedFilter;
  checked: boolean;
  setFilter: React.Dispatch<React.SetStateAction<CollapsedFiltersEnum | null>>;
}

export const CollapsedItem: React.FC<ICollapsedItem> = ({
  item,
  checked,
  setFilter,
}) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  const handleCheck = (): void => {
    setIsChecked(true);
    setFilter(item.value);
  };

  return (
    <ItemContainer isChecked={isChecked} onClick={handleCheck}>
      <span>{item.title}</span>
    </ItemContainer>
  );
};

const ItemContainer = styled.div<{ isChecked: boolean }>`
  padding: 10px 0;
  border: 1px solid black;
  font-size: 16px;
  cursor: pointer;
  background-color: white;

  ${({ isChecked }) =>
    isChecked &&
    css`
      background-color: #afafaf;
    `}

  &:hover {
    background-color: #afafaf;
  }
`;
