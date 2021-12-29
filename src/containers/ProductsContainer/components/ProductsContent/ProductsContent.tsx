import React, { useEffect } from 'react';
import productsJson from '../../../../assets/products/example.json';

import ProductCard from '../ProductCard/ProductCard';
import { IProduct } from '../../../../interfaces/interfaces';
import { FlexContainer } from '../../../../components/FlexContainer';
import { DiscountFilter } from './components/DiscountFilter';
// eslint-disable-next-line max-len
import { CollapsedFiltersList } from '../../../../components/CollapsedFiltersList';

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

function filterIsOnDiscountProducts(
  productList: Array<IProduct>,
): Array<IProduct> {
  return productList.filter((product) => product.onDiscount);
}

export const ProductsContent: React.FC = () => {
  const [productList, setProductList] =
    React.useState<Array<IProduct>>(initialProducts);
  const [isOnDiscount, setIsOnDiscount] = React.useState(false);

  useEffect(() => {
    if (isOnDiscount) {
      setProductList(filterIsOnDiscountProducts(productList));
    } else {
      setProductList(initialProducts);
    }
    // eslint-disable-next-line
  }, [isOnDiscount]);

  return (
    <>
      <FlexContainer width="100%" justifyContent="space-between">
        <DiscountFilter
          isOnDiscount={isOnDiscount}
          setIsOnDiscount={setIsOnDiscount}
        />
        <CollapsedFiltersList
          title="Sort"
          initialProducts={initialProducts}
          productList={productList}
          setProductList={setProductList}
          onDiscount={isOnDiscount}
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
