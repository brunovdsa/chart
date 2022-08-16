import { Chart } from 'react-google-charts';
import { IChart } from '../../interface/interface';

export function Charts(props: IChart) {
  return (
    <>
      <Chart
        chartType={props.chartType}
        width='100%'
        height='400px'
        data={props.data}
        options={props.options}
      />
    </>
  );
}
