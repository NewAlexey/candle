import React from 'react';
import { useLocation } from 'react-router-dom';

import ProductCard from '../../../../components/ProductCard/ProductCard';
import { FlexContainer } from '../../../../components/FlexContainer';
import { DiscountFilter } from './components/DiscountFilter';
// eslint-disable-next-line max-len
import { CollapsedFiltersList } from '../../../../components/CollapsedFiltersList';
import { useFilterChange } from '../../../../hooks/useFilterChange';
import { SkeletonComponent } from '../../../../components/SkeletonComponent';
import { SKELETON_LIST } from '../../../../helpers/constants';

import { useCustomQuery } from '../../../../hooks/useCustomQuery';

export const ProductsContent: React.FC = () => {
  const products = useLocation().pathname.slice(1);
  const { data, loading, errorMessage } = useCustomQuery(products);

  const {
    productList,
    isOnDiscount,
    setIsOnDiscount,
    selectedFilter,
    setSelectedFilter,
  } = useFilterChange(data);

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
