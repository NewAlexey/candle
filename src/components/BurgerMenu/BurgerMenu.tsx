import React from 'react';
import styled, { css } from 'styled-components';

import { APP_ROUTER, CustomLink } from '../../router/Router';
import { Z_INDEXES } from '../../helpers/constants';
import { BurgerIcon } from './components/BurgerIcon';
import { BurgerClosedCross } from './components/BurgerClosedCross';

export const BurgerMenu: React.FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  const handleCloseMenu = (event: React.MouseEvent): void => {
    if (isBurgerOpen) {
      event.stopPropagation();
      setIsBurgerOpen(false);
    }
  };

  const handleOpenMenu = (): void => {
    setIsBurgerOpen(true);
  };

  return (
    <BurgerContainer>
      <BurgerIcon handleOpenMenu={handleOpenMenu} />
      {isBurgerOpen && (
        <OpenedBurgerMenuBackGround
          onClick={handleCloseMenu}
          isModalOpen={isBurgerOpen}
        />
      )}
      <OpenedBurgerMenu
        zIndex={Z_INDEXES.MODAL_Z_INDEX}
        isModalOpen={isBurgerOpen}
      >
        <BurgerClosedCross handleCloseMenu={handleCloseMenu} />
        <nav>
          <ul>
            {APP_ROUTER.map(
              ({ path, title }) =>
                title && (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                  <li key={path} onClick={() => setIsBurgerOpen(false)}>
                    <CustomLink to={path}>{title}</CustomLink>
                  </li>
                ),
            )}
          </ul>
        </nav>
      </OpenedBurgerMenu>
    </BurgerContainer>
  );
};

const BurgerContainer = styled.div`
  height: 30px;
  margin: 10px 0;
  position: relative;
  display: inline-block;
`;

const OpenedBurgerMenuBackGround = styled.div<{ isModalOpen: boolean }>`
  background-color: ${(props) =>
    props.isModalOpen ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)'};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 300ms ease-in;
`;

const OpenedBurgerMenu = styled.div<{ zIndex: number; isModalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isModalOpen ? '0' : '-85%')};
  width: 85%;
  height: 100%;
  background-color: navajowhite;
  transition: all 300ms ease-in;

  ${({ zIndex }) => css`
    z-index: ${zIndex};
  `}
`;
