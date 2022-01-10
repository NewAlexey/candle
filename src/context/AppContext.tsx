import React from 'react';
import { IProduct } from '../interfaces/interfaces';

interface IBasketContext {
  basketCount: number;
  productsList: Array<IProduct>;
  addProductInBasket: (product: IProduct) => void;
}

export const AppContext = React.createContext({} as IBasketContext);

export const AppContextProvider: React.FC = ({ children }) => {
  const [productsList, setProductsList] = React.useState<Array<IProduct>>([]);

  const addProductInBasket = React.useCallback(
    (product: IProduct) => {
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
