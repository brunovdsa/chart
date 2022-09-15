import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { API, API_KEY } from '../../services/api/Api';

import { ICompany } from '../../interface/interface';

import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';
import { Table } from '../../components/Table/Table';
import SearchBar from '../../components/SearchBar/SearchBar';
import Company from '../../components/Company/Company';

import './Home.scss';

export function Home() {
  const [data, setData] = useState<ICompany[]>([]);
  const [filteredData, setFilteredData] = useState<ICompany[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    API.get<ICompany[]>(`/stock/list?apikey=${API_KEY}`)
      .then((res: any) => {
        const limitedData = res.data;
        setData(limitedData.slice(1, 20));
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    var updateList = [...checked];

    if (e.target.checked) {
      updateList = [...checked, e.target.value];
    } else {
      updateList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updateList);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord: string = event.target.value;
    setSearch(searchWord);

    const newFilter = data.filter((value: any) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord.length > 0) {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className='home'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Stock Exchange - Home</title>
      </Helmet>
      <Header content='Stock Exchange' />
      <Container>
        <SearchBar OnChange={handleFilter} value={search} checked={checked} />
      </Container>
      <Container>
        <Table>
          {search.length > 0 ? (
            <>
              {filteredData.map((company: ICompany) => {
                return (
                  <Company
                    symbol={company.symbol}
                    name={company.name}
                    price={`£${company.price}`}
                    handleChecked={handleChecked}
                  />
                );
              })}
            </>
          ) : (
            <>
              {data.map((company: ICompany) => {
                return (
                  <Company
                    symbol={company.symbol}
                    name={company.name}
                    price={`£${company.price}`}
                    handleChecked={handleChecked}
                  />
                );
              })}
            </>
          )}
        </Table>
      </Container>
    </div>
  );
}
