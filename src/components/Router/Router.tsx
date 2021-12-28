import React, { ReactElement } from 'react';
import { Link, useRoutes } from 'react-router-dom';
import styled from 'styled-components';
import FirstContainer from '../../containers/FirstContainer/FirstContainer';
import SecondContainer from '../../containers/SecondContainer/SecondContainer';
import NotFoundContainer from '../../containers/404/SecondContainer';

interface IRoute {
  path: string;
  title: string;
  element: ReactElement;
}

const APP_ROUTER: Array<IRoute> = [
  {
    path: '/',
    title: 'first-container',
    element: <FirstContainer />,
  },
  {
    path: '/second',
    title: 'second-container',
    element: <SecondContainer />,
  },
  {
    path: '*',
    title: '',
    element: <NotFoundContainer />,
  },
];

export const AppRouterContent: React.FC = () => useRoutes(APP_ROUTER);

export const NavigationComponent: React.FC = () => (
  <NavigationContainer>
    <nav>
      <Ul>
        {APP_ROUTER.map(
          ({ path, title }) =>
            title && (
              <Li key={path}>
                <Link to={path}>{title}</Link>
              </Li>
            ),
        )}
      </Ul>
    </nav>
  </NavigationContainer>
);

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d2d2d2;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const Li = styled.li`
  padding: 0 20px;
`;
