import React, { ReactElement } from 'react';
import {
  useRoutes,
  Link,
  useResolvedPath,
  useMatch,
  LinkProps,
} from 'react-router-dom';
import styled from 'styled-components';
import { FirstContainer } from '../containers/FirstContainer';
import { SecondContainer } from '../containers/SecondContainer';
import { ProductsContainer } from '../containers/ProductsContainer';
import { NotFoundContainer } from '../containers/404';
import { FourthContainer } from '../containers/FourthContainer';
import { ThirdContainer } from '../containers/ThirdContainer';

interface IRoute {
  path: string;
  title: string;
  element: ReactElement;
}

const APP_ROUTER: Array<IRoute> = [
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
    path: '*',
    title: '',
    element: <NotFoundContainer />,
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const CustomLink = ({ children, to }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link style={{ color: match ? 'red' : 'black' }} to={to}>
      {children}
    </Link>
  );
};

export const AppRouterContent: React.FC = () => useRoutes(APP_ROUTER);

export const AppNavigationComponent: React.FC = () => (
  <nav>
    <Ul>
      {APP_ROUTER.map(
        ({ path, title }) =>
          title && (
            <Li key={path}>
              <CustomLink to={path}>{title}</CustomLink>
            </Li>
          ),
      )}
    </Ul>
  </nav>
);

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const Li = styled.li`
  padding: 0 20px;
  text-transform: uppercase;

  &:hover {
    a {
      transition: all 0.3s ease-in-out;
      color: red !important;
    }
  }

  a {
    color: black;
  }

  a,
  a:active,
  a:hover {
    text-decoration: none;
  }
`;
