import { CollapsedFiltersEnum } from '../helpers/constants';

export interface IContext {
  data?: string;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  price: string;
  onDiscount: boolean;
  discountPrice: string;
  amountOfDiscount: string;
  options: Array<string>;
}

export interface IContainer {
  pageTitle: string;
}

export interface ICollapsedFilter {
  title: string;
  value: CollapsedFiltersEnum;
}
