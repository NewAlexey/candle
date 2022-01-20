import React from 'react';
import { IOrderProduct } from '../interfaces/interfaces';

interface IBasketContext {
  basketCount: number;
  productsList: Array<IOrderProduct>;
  addProductInBasket: (product: IOrderProduct) => void;
  removeProductFromBasket: (id: string) => void;
}

const BasketContext = React.createContext({} as IBasketContext);

export const BasketContextProvider: React.FC = ({ children }) => {
  const [productsList, setProductsList] = React.useState<Array<IOrderProduct>>(
    [],
  );

  const addProductInBasket = React.useCallback(
    (product: IOrderProduct) => {
      setProductsList([...productsList, product]);
    },
    [productsList],
  );

  const removeProductFromBasket = React.useCallback(
    (id: string) => {
      const filteredBasket = productsList.filter(
        (productInList) => productInList._id !== id,
      );

      setProductsList([...filteredBasket]);
    },
    [productsList],
  );

  const memoizedContextValue = React.useMemo(
    () => ({
      basketCount: productsList.length,
      addProductInBasket,
      removeProductFromBasket,
      productsList,
    }),
    [addProductInBasket, productsList, removeProductFromBasket],
  );

  return (
    <BasketContext.Provider value={memoizedContextValue}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketContext = (): IBasketContext =>
  React.useContext(BasketContext);
