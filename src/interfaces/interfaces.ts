import { CollapsedFiltersEnum } from '../helpers/constants';

export interface IOrderProduct extends IProduct {
  count: number;
  totalPrice: number;
}

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  imageSrc: string;
  price: string;
  onDiscount: boolean;
  discountPrice: string;
  amountOfDiscount: string;
  options: Array<string>;
}

export interface IQueryResponse {
  products: Array<IProduct>;
  status: number;
  message: string;
}

export interface IContainer {
  pageTitle: string;
}

export interface ICollapsedFilter {
  title: string;
  value: CollapsedFiltersEnum;
}
