import { IProduct } from '../interfaces/interfaces';
import { CollapsedFiltersEnum } from './constants';

export function sortProducts(
  productList: Array<IProduct>,
  selectedFilters: CollapsedFiltersEnum | null,
  initialProductList: Array<IProduct>,
): Array<IProduct> {
  if (!selectedFilters) {
    return initialProductList;
  }
  if (selectedFilters === CollapsedFiltersEnum.LOW_PRICE) {
    return [...productList.sort((a, b) => Number(a.price) - Number(b.price))];
  }

  return [...productList.sort((a, b) => Number(b.price) - Number(a.price))];
}

export function filterIsOnDiscountProducts(
  productList: Array<IProduct>,
): Array<IProduct> {
  return productList.filter((product) => product.onDiscount);
}
