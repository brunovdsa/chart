import { Link } from 'react-router-dom';
import { IHeader } from '../../interface/interface';

import './Header.scss';

export function Header(props: IHeader) {
  return (
    <>
      <header className={props.className}>
        <Link to={'/'} className='header-link'>
          <h1>{props.content}</h1>
        </Link>
      </header>
    </>
  );
}
