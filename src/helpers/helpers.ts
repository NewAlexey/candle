import { IProduct, IProductInOrder } from '../interfaces/interfaces';
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

function calculateTotalPrice(count: number, price: string): number {
  return Number(Number(count * Number(price)).toFixed(2));
}

export function createProductForOrder(
  productData: IProduct,
  count: number,
): IProductInOrder {
  const price = productData.onDiscount
    ? productData.discountPrice
    : productData.price;
  return {
    ...productData,
    count,
    totalPrice: calculateTotalPrice(count, price),
  };
}
