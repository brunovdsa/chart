import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import { Charts } from '../../components/Chart/Charts';
import { Container } from '../../components/Container/Container';

import { Header } from '../../components/Header/Header';
import { API_KEY, API_URL } from '../../services/api/Api';

import loader from '../../assets/svg/loader.svg';

import './About.scss';

export function About() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const id = useParams();

  const formatedId = Object.values(id);
  useEffect(() => {
    setTimeout(async () => {
      const symbols = formatedId
        .map((symbol: any) => symbol.split(',').map((sym: any) => sym.trim()))
        .flat();

      const urls = symbols.map(
        (symbol: any) =>
          `${API_URL}income-statement/${symbol}?apikey=${API_KEY}`
      );

      Promise.all(
        urls.map((url) =>
          fetch(url)
            .then((response) => response.json())
            .then((response) => response)
        )
      )
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('Failed to fetch one or more of these URLs:');
          console.error(err);
        });
    }, 500);
    // eslint-disable-next-line
  }, [id]);

  console.log(data);

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Stock Exchange - About</title>
      </Helmet>
      <Header content='Stock Exchange' />
      <Container>
        {isLoading && (
          <Container>
            <div className='container-loader'>
              <img className='loader' src={loader} alt='loding icon' />
              <span>loading...</span>
            </div>
          </Container>
        )}
        {data.map((company: any) => {
          console.log(company);
          const chartData = [
            ['Year', 'Revenue', 'Expenses', 'Proffit', 'Ebitda'],
            [
              company[0].calendarYear,
              company[0].revenue,
              company[0].operatingExpenses,
              company[0].grossProfit,
              company[0].ebitda,
            ],
          ];
          return (
            <div className='charts'>
              {
                <Charts
                  chartType={'Bar'}
                  data={chartData}
                  symbol={company[0].symbol}
                  subtitle={company[0].calendarYear}
                />
              }
            </div>
          );
        })}
      </Container>
    </>
  );
}
