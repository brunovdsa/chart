import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { IICons } from '../../interface';

export function SearchIcon(props: IICons) {
  return <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />;
}

export function CloseIcon(props: IICons) {
  return (
    <FontAwesomeIcon id={props.id} icon={faXmark} className='close-icon' />
  );
}
