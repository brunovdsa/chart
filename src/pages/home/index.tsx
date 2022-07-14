import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { ITable } from '../../interface';
import { API, API_KEY } from '../../services/api';

export function Home() {
  const [data, setData] = useState<any>();
  const [symbol, setSymbol] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>();

  useEffect(() => {
    API.get<ITable[]>(`/stock/list?apikey=${API_KEY}`)
      .then((res: any) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Stock Exchange - Home</title>
      </Helmet>
      <Header content='Stock Exchange' />
      <Table symbol={symbol} name={name} price={price} />
    </>
  );
}
