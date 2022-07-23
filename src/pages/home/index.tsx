import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Container } from '../../components/Container';
import { ICompany } from '../../interface';
import { Header } from '../../components/Header';
import { Table } from '../../components/Table';
import { API, API_KEY } from '../../services/api';
import SearchBar from '../../components/SearchBar';
import Company from '../../components/Company';

import './styles.scss';

export function Home() {
  const [data, setData] = useState<ICompany[]>([]);
  const [checked, setChecked] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<ICompany[]>([]);
  const [wordEntered, setWordEntered] = useState<string>('');

  useEffect(() => {
    API.get<ICompany[]>(`/stock/list?apikey=${API_KEY}`)
      .then((res: any) => {
        const limitedData = res.data;
        setData(limitedData.slice(0, 20));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    var updateList = [...checked];

    if (event.target.checked) {
      updateList = [...checked, event.target.value];
    } else {
      updateList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updateList);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord: string = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((value: any) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      return setFilteredData(data);
    } else {
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
        <SearchBar
          handleFilter={handleFilter}
          wordEntered={wordEntered}
          checked={checked}
        />
      </Container>
      <Container>
        <Table>
          {filteredData.map((company: ICompany) => {
            return (
              <Company
                symbol={company.symbol}
                name={company.name}
                price={company.price}
                handleChecked={handleChecked}
              />
            );
          })}
        </Table>
      </Container>
    </div>
  );
}
