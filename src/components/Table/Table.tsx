import { ITable } from '../../interface/interface';
import './Table.scss';

export function Table(props: ITable) {
  return (
    <>
      <table className='table'>
        <thead className='table-head'>
          <tr className='thead-row'>
            <td className='thead-collum'>Symbol</td>
            <td className='thead-collum'>Name</td>
            <td className='thead-collum'>Price</td>
            <td className='thead-collum'></td>
          </tr>
        </thead>
        <tbody className='table-body'>{props.children}</tbody>
      </table>
    </>
  );
}
