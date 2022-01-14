import React from 'react';
import {
  Link,
  LinkProps,
  useMatch,
  useResolvedPath,
  useRoutes,
} from 'react-router-dom';

import { FirstContainer } from '../containers/FirstContainer';
import { SecondContainer } from '../containers/SecondContainer';
import { ProductsContainer } from '../containers/ProductsContainer';
import { NotFoundContainer } from '../containers/404';
import { FourthContainer } from '../containers/FourthContainer';
import { ThirdContainer } from '../containers/ThirdContainer';
import { BasketContainer } from '../containers/BasketContainer';

export interface IRoute {
  path: string;
  title: string;
  element: React.ReactElement;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const CustomLink = ({ children, to }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link style={{ color: match ? 'red' : 'black' }} to={to}>
      {children}
    </Link>
  );
};

export const APP_ROUTER: Array<IRoute> = [
  {
    path: '/',
    title: 'First Section',
    element: <FirstContainer pageTitle="Candle" />,
  },
  {
    path: '/second',
    title: 'Second Section',
    element: <SecondContainer />,
  },
  {
    path: '/products',
    title: 'products',
    element: <ProductsContainer pageTitle="Products" />,
  },
  {
    path: '/third',
    title: 'Third Section',
    element: <ThirdContainer />,
  },
  {
    path: '/fourth',
    title: 'Fourth Section',
    element: <FourthContainer />,
  },
  {
    path: '/basket',
    title: 'basket',
    element: <BasketContainer pageTitle="Basket" />,
  },
  {
    path: '*',
    title: '',
    element: <NotFoundContainer />,
  },
];

export const AppRouterContent: React.FC = () => useRoutes(APP_ROUTER);
