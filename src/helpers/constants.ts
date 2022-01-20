export const PRICE_FONT_SIZE = '19px';

export enum CollapsedFiltersEnum {
  LOW_PRICE = 'FROM_LOW_PRICE',
  HEIGHT_PRICE = 'FROM_HEIGHT_PRICE',
}

export enum RESPONSE_CODE {
  COOL = 200,
  BAD = 500,
}

export enum IMAGE_SIZE {
  WIDTH = 300,
  HEIGHT = 250,
}

export enum CARD_SIZE {
  WIDTH = 340,
  HEIGHT = 440,
}

const SKELETON_COUNT = 9;

export const SKELETON_LIST = new Array(SKELETON_COUNT)
  .fill(1)
  .map(() => Math.floor(Math.random() * 1000));

export enum Z_INDEXES {
  MODAL_Z_INDEX = 50,
}

export enum PRODUCT_BASKET {
  PRODUCT_IN_BASKET = 'Remove',
  PRODUCT_NOT_IN_BASKET = 'Add',
}
