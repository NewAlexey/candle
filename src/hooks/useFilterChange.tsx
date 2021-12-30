import React from 'react';

import { IProduct } from '../interfaces/interfaces';
import { CollapsedFiltersEnum } from '../helpers/constants';
import { filterIsOnDiscountProducts, sortProducts } from '../helpers/helpers';

interface IUseFilterChange {
  productList: Array<IProduct>;
  isOnDiscount: boolean;
  setIsOnDiscount: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFilter: CollapsedFiltersEnum | null;
  setSelectedFilter: React.Dispatch<
    React.SetStateAction<CollapsedFiltersEnum | null>
  >;
}

export function useFilterChange(
  initialProducts: Array<IProduct>,
): IUseFilterChange {
  const [productList, setProductList] =
    React.useState<Array<IProduct>>(initialProducts);
  const [isOnDiscount, setIsOnDiscount] = React.useState(false);
  const [selectedFilter, setSelectedFilter] =
    React.useState<CollapsedFiltersEnum | null>(null);

  React.useEffect(() => {
    setProductList(sortProducts(productList, selectedFilter, initialProducts));
    // eslint-disable-next-line
  }, [selectedFilter, isOnDiscount]);

  React.useEffect(() => {
    if (isOnDiscount) {
      setProductList(filterIsOnDiscountProducts(productList));
    } else {
      setProductList(
        sortProducts(initialProducts, selectedFilter, initialProducts),
      );
    }
    // eslint-disable-next-line
  }, [isOnDiscount, initialProducts]);

  return {
    productList,
    isOnDiscount,
    setIsOnDiscount,
    selectedFilter,
    setSelectedFilter,
  };
}
