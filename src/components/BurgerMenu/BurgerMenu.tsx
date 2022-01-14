import React from 'react';
import styled, { css } from 'styled-components';

import { APP_ROUTER, CustomLink } from '../../router/Router';
import { Z_INDEXES } from '../../helpers/constants';

export const BurgerMenu: React.FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  const handleCloseOpenedMenu = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setIsBurgerOpen(false);
  };

  return (
    <BurgerContainer>
      {isBurgerOpen ? (
        <>
          <OpenedBurgerMenu zIndex={Z_INDEXES.MODAL_Z_INDEX}>
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
          <OpenedBurgerMenuBackGround onClick={handleCloseOpenedMenu} />
        </>
      ) : (
        <ClosedBurgerMenu onClick={() => setIsBurgerOpen(true)}>
          <ClosedBurgerLine />
          <ClosedBurgerMiddleLine />
          <ClosedBurgerLine />
        </ClosedBurgerMenu>
      )}
    </BurgerContainer>
  );
};

const BurgerContainer = styled.div`
  height: 30px;
  margin: 10px 0;
  position: relative;
`;

const OpenedBurgerMenuBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const OpenedBurgerMenu = styled.div<{ zIndex: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 85%;
  height: 100%;
  background-color: navajowhite;

  ${({ zIndex }) => css`
    z-index: ${zIndex};
  `}
`;

const ClosedBurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClosedBurgerLine = styled.div`
  height: 3px;
  width: 30px;
  background-color: black;
`;

const ClosedBurgerMiddleLine = styled.div`
  height: 3px;
  width: 23px;
  background-color: black;
  margin: 5px 0;
`;
