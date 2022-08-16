import { Link } from 'react-router-dom';
import { ISearch } from '../../interface/interface';
import { SearchIcon } from '../ICons/Icons';
import './SearchBar.scss';

export default function SearchBar(props: ISearch) {
  return (
    <div className='search'>
      <div className='search-inputs'>
        <input
          type='text'
          placeholder='Search for a company...'
          value={props.value}
          onChange={props.OnChange}
        />
        <SearchIcon />
      </div>
      <Link className='compare-btn' to={`/income-statement/${props.checked}`}>
        Compare
      </Link>
    </div>
  );
}
