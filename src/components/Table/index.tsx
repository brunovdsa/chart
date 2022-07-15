import { ITable } from '../../interface';
import { Container } from '../Container';
import './styles.scss';

export function Table(props: ITable) {
  return (
    <Container>
      <table className='table'>
        <thead className='table-head'>
          <tr className='thead-row'>
            <td className='thead-collum'>Symbol</td>
            <td className='thead-collum'>Name</td>
            <td className='thead-collum'>Price</td>
          </tr>
        </thead>
        <tbody className='table-body'>{props.children}</tbody>
      </table>
    </Container>
  );
}
