import { IContainer } from '../../interface';
import './styles.scss';

export function Container(props: IContainer) {
  return <div className='container'>{props.children}</div>;
}
