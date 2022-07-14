import { Helmet } from 'react-helmet';

import { Header } from '../../components/Header';

export function About() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Stock Exchange - Home</title>
      </Helmet>
      <Header content='Stock Exchange' />
      <h1>Hello About</h1>
    </>
  );
}
