import { IHeader } from '../../interface/interface';

import './Header.scss';

export function Header(props: IHeader) {
  return (
    <>
      <header className={props.className}>
        <h1>{props.content}</h1>
      </header>
    </>
  );
}
