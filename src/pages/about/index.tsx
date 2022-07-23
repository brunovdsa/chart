import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import { API_KEY, API_URL } from '../../services/api';

export function About() {
  const [data, setData] = useState<any>([]);

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
          console.log(data);
          setData({ data });
        })
        .catch((err) => {
          console.error('Failed to fetch one or more of these URLs:');
          console.error(err);
        });
    }, 500);
  }, [id]);

  console.log(data);
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Stock Exchange - Home</title>
      </Helmet>
      <Header content='Stock Exchange' />
      <h1>Hello About</h1>
      <div></div>
    </>
  );
}
