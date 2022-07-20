import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { ICompany } from '../../interface';
import { API, API_KEY } from '../../services/api';

import './styles.scss';

export function Home() {
  const [symbol, setSymbol] = useState<string[]>([]);

  const [companys, setCompanys] = useState<ICompany[]>([]);

  //array de companys selecionadas
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    API.get<ICompany[]>(`/stock/list?apikey=${API_KEY}`)
      .then((res: any) => {
        const limitedData = res.data;
        setCompanys(limitedData.slice(0, 20));
        setSymbol(res.data.symbol);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [symbol]);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    var updateList = [...checked];

    if (event.target.checked) {
      updateList = [...checked, event.target.value];
    } else {
      updateList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updateList);
  };

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Stock Exchange - Home</title>
      </Helmet>
      <Header content='Stock Exchange' />
      <Table>
        {companys.map((company: any) => {
          return (
            <tr key={company.symbol} className={'table-row'}>
              <td className={'table-collum'}>{company.symbol}</td>
              <td className={'table-collum'}>{company.name}</td>
              <td className={'table-collum'}>{company.price}</td>
              <td className={'table-collum'}>
                <input
                  className=''
                  value={company.symbol}
                  onChange={handleChecked}
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
