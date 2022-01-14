import React from 'react';
import styled from 'styled-components';
import { APP_ROUTER, CustomLink } from '../../router/Router';
import { useMobileViewport } from '../../hooks/useMediaQuery';
import { BurgerMenu } from '../BurgerMenu';

export const AppNavigationComponent: React.FC = () => {
  const isMobile = useMobileViewport();
  return isMobile ? (
    <BurgerMenu />
  ) : (
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
};

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
