import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

import { Charts } from '../../components/Chart/Chart';
import { Container } from '../../components/Container/Container';

import { Header } from '../../components/Header/Header';
import { API_KEY, API_URL } from '../../services/api/Api';

export function About() {
  const [data, setData] = useState<any>([]);
  const [companySymbol, setCompanySymbol] = useState<any>('');
  const [year, setYear] = useState<number>();
  const [revenue, setRevenue] = useState<number>();
  const [operatingExpenses, setOperatingExpenses] = useState<number>();
  const [grossProfit, setGrossProfit] = useState<number>();
  const [ebitda, setEbitda] = useState<number>();

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
          setData({ data });
          const mapedData = data.map(
            (company: any, index: number) => company[index]
          );
          mapedData.map(
            (item: any) => (
              setCompanySymbol(item.symbol),
              setRevenue(item.revenue),
              setYear(item.calendarYear),
              setOperatingExpenses(item.operatingExpenses),
              setGrossProfit(item.grossProfit),
              setEbitda(item.ebitda)
            )
          );
        })
        .catch((err) => {
          console.error('Failed to fetch one or more of these URLs:');
          console.error(err);
        });
    }, 500);
  }, [id]);

  const options = {
    chart: {
      title: companySymbol,
      subtitle: `Financial statements of ${companySymbol}`,
    },
  };

  const chartData = [
    ['Year', 'Revenue', 'Expenses', 'Profit', 'Ebitda'],
    [year, revenue, operatingExpenses, grossProfit, ebitda],
  ];

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Stock Exchange - Home</title>
      </Helmet>
      <Header content='Stock Exchange' />
      <Container>
        <Charts chartType={'Bar'} data={chartData} options={options} />
      </Container>
    </>
  );
}
