import React from 'react';
import styled from 'styled-components';

import { CollapsedItem } from './components';
import { ICollapsedFilter, IProduct } from '../../interfaces/interfaces';
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

function sortProducts(
  productList: Array<IProduct>,
  selectedFilters: CollapsedFiltersEnum | null,
  initialProducts: Array<IProduct>,
): Array<IProduct> {
  if (!selectedFilters) {
    return initialProducts;
  }
  if (selectedFilters === CollapsedFiltersEnum.LOW_PRICE) {
    return [...productList.sort((a, b) => Number(a.price) - Number(b.price))];
  }

  return [...productList.sort((a, b) => Number(b.price) - Number(a.price))];
}

interface ICollapsedList {
  title: string;
  setProductList: React.Dispatch<React.SetStateAction<Array<IProduct>>>;
  initialProducts: Array<IProduct>;
  productList: Array<IProduct>;
  onDiscount: boolean;
}

export const CollapsedFiltersList: React.FC<ICollapsedList> = ({
  title,
  productList,
  setProductList,
  initialProducts,
  onDiscount,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedFilter, setSelectedFilter] =
    React.useState<CollapsedFiltersEnum | null>(null);
  const collapsedRef = React.useRef(null);
  useOutsideClick(collapsedRef, setIsOpen);

  const handleChangeState = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    setProductList(sortProducts(productList, selectedFilter, initialProducts));
  }, [selectedFilter, onDiscount]);

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
