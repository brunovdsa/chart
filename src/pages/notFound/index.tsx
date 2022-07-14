import { Helmet } from 'react-helmet';

import { Header } from '../../components/Header';

export function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>404 - Page not found</title>
      </Helmet>
      <Header content='Stock Exchange' />
      <h1>NotFound</h1>
    </>
  );
}
