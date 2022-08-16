import { ICompany } from '../../interface/interface';

export default function Company(props: ICompany) {
  return (
    <>
      <tr key={props.symbol} className={'table-row'}>
        <td className='table-collum'>{props.symbol}</td>
        <td className='table-collum'>{props.name}</td>
        <td className='table-collum'>{props.price}</td>
        <td className='table-collum'>
          <input
            className=''
            value={props.symbol}
            onChange={props.handleChecked}
            type='checkbox'
          />
        </td>
      </tr>
    </>
  );
}
