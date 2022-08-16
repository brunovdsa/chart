import { IContainer } from '../../interface/interface';
import './Container.scss';

export function Container(props: IContainer) {
  return <div className='container'>{props.children}</div>;
}
