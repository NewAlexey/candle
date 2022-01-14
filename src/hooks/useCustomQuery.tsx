import React from 'react';
import { IProduct, IQueryResponse } from '../interfaces/interfaces';
import { RESPONSE_CODE } from '../helpers/constants';

interface IUseCustomQueryOutput {
  data: Array<IProduct>;
  loading: boolean;
  errorMessage: string;
}

export function useCustomQuery(products: string): IUseCustomQueryOutput {
  const [data, setData] = React.useState<Array<IProduct>>([]);
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    async function fetchData(productsForQuery: string): Promise<void> {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/api?product=${productsForQuery}`,
        );
        const result = (await response.json()) as IQueryResponse;

        if (result.status === RESPONSE_CODE.COOL) {
          setData(result.products);
        } else {
          setErrorMessage(result.message);
        }
      } catch (err: any) {
        setErrorMessage(`${err}` ?? 'Error... sorry. Try later');
      } finally {
        setLoading(false);
      }
    }

    fetchData(products);
  }, [products]);

  return { data, loading, errorMessage };
}
