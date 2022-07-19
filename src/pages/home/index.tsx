import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { ITable } from '../../interface';
import { API, API_KEY } from '../../services/api';

import './styles.scss';

export function Home() {
  const [data, setData] = useState<ITable[]>([]);
  const [symbol, setSymbol] = useState<string[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const [companysSelected, setCompanysSelected] = useState([
    { symbol: `${checked}` },
  ]);

  useEffect(() => {
    API.get<ITable[]>(`/stock/list?apikey=${API_KEY}`)
      .then((res: any) => {
        const limitedData = res.data;
        setData(limitedData.slice(0, 20));
        setSymbol(res.data.symbol);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [symbol]);

  function handleSelect(e: any) {
    setChecked([e.target.value]);

    setCompanysSelected([...companysSelected, { symbol: e.target.value }]);
  }
  console.log(companysSelected);

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Stock Exchange - Home</title>
      </Helmet>
      <Header content='Stock Exchange' />
      <Table>
        {data.map((item: any) => {
          return (
            <tr key={item.symbol} className={'table-row'}>
              <td className={'table-collum'}>{item.symbol}</td>
              <td className={'table-collum'}>{item.name}</td>
              <td className={'table-collum'}>{item.price}</td>
              <td className={'table-collum'}>
                <input
                  className=''
                  value={item.symbol}
                  onClick={handleSelect}
                  type={'checkbox'}
                />
              </td>
            </tr>
          );
        })}
      </Table>
    </>
  );
}
