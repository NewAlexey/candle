import React from 'react';
import { IOrderProduct } from '../interfaces/interfaces';

interface IBasketContext {
  basketCount: number;
  productsList: Array<IOrderProduct>;
  addProductInBasket: (product: IOrderProduct) => void;
}

export const AppContext = React.createContext({} as IBasketContext);

export const AppContextProvider: React.FC = ({ children }) => {
  const [productsList, setProductsList] = React.useState<Array<IOrderProduct>>(
    [],
  );

  const addProductInBasket = React.useCallback(
    (product: IOrderProduct) => {
      const isProductAlreadyInBasket = productsList.find(
        (productInList) => productInList._id === product._id,
      );

      if (isProductAlreadyInBasket) return;

      setProductsList([...productsList, product]);
    },
    [productsList],
  );

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        basketCount: productsList.length,
        addProductInBasket,
        productsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): IBasketContext => React.useContext(AppContext);
