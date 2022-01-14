import React from 'react';
import styled from 'styled-components';

interface IProps {
  productCount: number;
  setProductCount: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductCounter: React.FC<IProps> = ({
  productCount,
  setProductCount,
}) => {
  const handleClickPlus = (): void => {
    setProductCount((prevState) => prevState + 1);
  };

  const handleClickMinus = (): void => {
    const count = productCount === 1 ? 1 : productCount - 1;
    setProductCount(count);
  };

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const eventValue = Number(event.target.value);
    const value = String(eventValue).length >= 3 ? productCount : eventValue;
    const count = value < 1 ? 1 : value;
    setProductCount(count);
  };

  return (
    <Container>
      <Counter
        value={productCount}
        onChange={handleChangeInput}
        type="number"
      />
      <ArrowsContainer>
        <UpArrow onClick={handleClickPlus} />
        <DownArrow onClick={handleClickMinus} />
      </ArrowsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Counter = styled.input`
  font-size: 1.5rem;
  width: 30px;
  text-align: center;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  height: 25px;
`;

const Arrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  cursor: pointer;

  &:hover {
    border-color: green;
  }
`;

const UpArrow = styled(Arrow)`
  transform: rotate(-135deg);
`;

const DownArrow = styled(Arrow)`
  transform: rotate(45deg);
`;
