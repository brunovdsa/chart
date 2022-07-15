import { ITable } from '../../interface';
import { Container } from '../Container';
import './styles.scss';

export function Table(props: ITable) {
  return (
    <Container>
      <table className='table'>
        <thead className='table-head'>
          <tr className='thead-row'>
            <td>Symbol</td>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody className='table-body'>{props.children}</tbody>
      </table>
    </Container>
  );
}
