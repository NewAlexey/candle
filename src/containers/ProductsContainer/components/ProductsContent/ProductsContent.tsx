import React from 'react';

import ProductCard from '../ProductCard/ProductCard';
import { IProduct } from '../../../../interfaces/interfaces';
import { FlexContainer } from '../../../../components/FlexContainer';
import { DiscountFilter } from './components/DiscountFilter';
// eslint-disable-next-line max-len
import { CollapsedFiltersList } from '../../../../components/CollapsedFiltersList';
import { useFilterChange } from '../../../../hooks/useFilterChange';
import { SkeletonComponent } from '../../../../components/SkeletonComponent';
import { SKELETON_LIST } from '../../../../helpers/constants';

interface IProductsContent {
  initialProducts: Array<IProduct>;
  loading: boolean;
  errorMessage: string;
}

export const ProductsContent: React.FC<IProductsContent> = ({
  initialProducts,
  loading,
  errorMessage,
}) => {
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

      {errorMessage && !productList.length && <span>{errorMessage}</span>}

      {loading ? (
        <FlexContainer flexWrap="wrap" justifyContent="space-around">
          {SKELETON_LIST.map((key) => (
            <SkeletonComponent key={key} />
          ))}
        </FlexContainer>
      ) : (
        <FlexContainer flexWrap="wrap" justifyContent="space-around">
          {productList.map(
            ({
              _id,
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
                key={_id}
                _id={_id}
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
      )}
    </>
  );
};
