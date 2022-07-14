import { IHeader } from '../../interface';

import './styles.scss';

export function Header(props: IHeader) {
  return (
    <>
      <header className={props.className}>
        <h1>{props.content}</h1>
      </header>
    </>
  );
}
