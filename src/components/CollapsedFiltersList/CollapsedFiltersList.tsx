import React from 'react';
import styled from 'styled-components';

import { CollapsedItem } from './components';
import { ICollapsedFilter } from '../../interfaces/interfaces';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { CollapsedFiltersEnum } from '../../helpers/constants';

const COLLAPSED_ITEMS: Array<ICollapsedFilter> = [
  {
    title: 'Price Low To Height',
    value: CollapsedFiltersEnum.LOW_PRICE,
  },
  {
    title: 'Price Height to Low',
    value: CollapsedFiltersEnum.HEIGHT_PRICE,
  },
];

interface ICollapsedList {
  title: string;
  selectedFilter: CollapsedFiltersEnum | null;
  setSelectedFilter: React.Dispatch<
    React.SetStateAction<CollapsedFiltersEnum | null>
  >;
}

export const CollapsedFiltersList: React.FC<ICollapsedList> = ({
  title,
  selectedFilter,
  setSelectedFilter,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const collapsedRef = React.useRef(null);
  useOutsideClick(collapsedRef, setIsOpen);

  const handleChangeState = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <CollapsedBaseElement onClick={handleChangeState} ref={collapsedRef}>
      <FilterTitle>{title}</FilterTitle>
      {isOpen && (
        <CollapsedItemsContainer>
          {COLLAPSED_ITEMS.map((collapsedItem) => (
            <CollapsedItem
              key={collapsedItem.value}
              item={collapsedItem}
              checked={collapsedItem.value === selectedFilter}
              setFilter={setSelectedFilter}
            />
          ))}
        </CollapsedItemsContainer>
      )}
    </CollapsedBaseElement>
  );
};

const CollapsedBaseElement = styled.div`
  position: relative;
  width: 150px;
  text-align: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
`;

const CollapsedItemsContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
`;
