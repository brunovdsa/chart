import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';

import { Header } from '../../components/Header/Header';
import { AlertIcon } from '../../components/ICons/Icons';

import './NotFound.scss';

export function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>404 - Page not found</title>
      </Helmet>
      <Header content='Stock Exchange' />
      <Container>
        <div className='not-found'>
          <AlertIcon />
          <h1>404 - NotFound</h1>
          <h2>Oops! We ran into some problems.</h2>
          <p>
            The page you were looking for does not exist or is not available
          </p>
          <Link to={'/'} className='not-found-btn'>
            Go back to the home page
          </Link>
        </div>
      </Container>
    </>
  );
}
