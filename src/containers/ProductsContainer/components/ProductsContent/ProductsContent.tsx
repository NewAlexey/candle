import React from 'react';
import productsJson from '../../../../assets/products/example.json';

import ProductCard from '../ProductCard/ProductCard';
import { IProduct } from '../../../../interfaces/interfaces';
import { FlexContainer } from '../../../../components/FlexContainer';
import { DiscountFilter } from './components/DiscountFilter';
// eslint-disable-next-line max-len
import { CollapsedFiltersList } from '../../../../components/CollapsedFiltersList';
import { useFilterChange } from '../../../../hooks/useFilterChange';

const initialProducts = productsJson.map(
  (
    {
      title,
      description,
      imageSrc,
      price,
      onDiscount,
      discountPrice,
      amountOfDiscount,
      options,
    },
    index,
  ) => ({
    id: `${price}_${index}`,
    title,
    description,
    imageSrc,
    price,
    onDiscount,
    discountPrice,
    amountOfDiscount,
    options,
  }),
) as Array<IProduct>;

export const ProductsContent: React.FC = () => {
  const {
    productList,
    isOnDiscount,
    setIsOnDiscount,
    selectedFilter,
    setSelectedFilter,
  } = useFilterChange(initialProducts);

  return (
    <>
      <FlexContainer width="100%" justifyContent="space-between">
        <DiscountFilter
          isOnDiscount={isOnDiscount}
          setIsOnDiscount={setIsOnDiscount}
        />
        <CollapsedFiltersList
          title="Sort"
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </FlexContainer>

      <FlexContainer flexWrap="wrap" justifyContent="space-around">
        {productList.map(
          ({
            id,
            title,
            description,
            options,
            imageSrc,
            price,
            onDiscount,
            discountPrice,
            amountOfDiscount,
          }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              description={description}
              options={options}
              imageSrc={imageSrc}
              price={price}
              onDiscount={onDiscount}
              discountPrice={discountPrice}
              amountOfDiscount={amountOfDiscount}
            />
          ),
        )}
      </FlexContainer>
    </>
  );
};
