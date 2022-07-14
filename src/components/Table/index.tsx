import { ITable } from '../../interface';
import './styles.scss';

export function Table(props: ITable) {
  console.log(props.symbol);

  // const symbol: any = props.symbol;
  // const name: any = props.name;
  // const price: any = props.price;

  return (
    <div className='table-container'>
      <table className='table'>
        <thead className='table-head'>
          <tr className='thead-row'>
            <td>Symbol</td>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody className='table-body'>
          <tr className='tbody-row'>
            {/* {data.slice(0, 10).map((item: any) => (
              <>
                <td>{item.symbol}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </>
            ))} */}

            {/* {symbol.slice(0, 10).map((item: any) => (
              <td key={item.symbol}>{item.symbol}</td>
            ))}
            {name.slice(0, 10).map((item: any) => (
              <td>{item.name}</td>
            ))}
            {price.slice(0, 10).map((item: any) => (
              <td>{item.price}</td>
            ))} */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
