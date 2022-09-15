import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamation,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { IICons } from '../../interface/interface';

export function SearchIcon(props: IICons) {
  return (
    <FontAwesomeIcon
      id={props.id}
      icon={faMagnifyingGlass}
      className='search-icon'
    />
  );
}

export function CloseIcon(props: IICons) {
  return (
    <FontAwesomeIcon id={props.id} icon={faXmark} className='close-icon' />
  );
}

export function AlertIcon(props: IICons) {
  return (
    <FontAwesomeIcon
      id={props.id}
      icon={faExclamation}
      className='alert-icon'
    />
  );
}
