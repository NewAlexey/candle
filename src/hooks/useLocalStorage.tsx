import React from 'react';
import { IOrderProduct } from '../interfaces/interfaces';
import {
  appVersionLocalStorage,
  basketLocalStorage,
} from '../helpers/constants';
import { APP_VERSION } from '../helpers/config';
import { useFirstRenderEffect } from './useFirstRenderEffect';

const { localStorage } = window;

function localStorageSetItemWrapper(products: Array<IOrderProduct>): void {
  localStorage.setItem(basketLocalStorage, JSON.stringify(products));
}

function localStorageGetItemWrapper(): Array<IOrderProduct> {
  const productsInLocalStorage = localStorage.getItem(basketLocalStorage);

  return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : [];
}

export function checkAppVersion(): boolean {
  const appVersion = localStorage.getItem(appVersionLocalStorage);

  if (appVersion && appVersion === APP_VERSION) return true;

  localStorage.setItem(appVersionLocalStorage, APP_VERSION);

  return false;
}

export function getStartValueFromLocalStorage(): Array<IOrderProduct> {
  return localStorageGetItemWrapper();
}

export function useLocalStorage(
  products: Array<IOrderProduct>,
  setProductsList: React.Dispatch<React.SetStateAction<Array<IOrderProduct>>>,
): void {
  React.useLayoutEffect(() => {
    const isValidAppVersion = checkAppVersion();

    if (!isValidAppVersion) return;

    const productsInLocalStorage = localStorageGetItemWrapper();

    setProductsList(productsInLocalStorage);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    localStorageSetItemWrapper(products);
  }, [products]);
}
