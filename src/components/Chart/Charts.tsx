import { Chart } from 'react-google-charts';
import { IChart } from '../../interface/interface';

import './Charts.scss';

export function Charts(props: IChart) {
  const options = {
    chart: {
      title: props.symbol,
      subtitle: `Financial statements of ${props.symbol} from the year of ${props.subtitle}`,
    },
    colors: ['#0c4251', '#17657a', '#1c7791', '#218ba8'],
  };

  return (
    <Chart
      chartType={props.chartType}
      data={props.data}
      options={options}
      className='chart'
      width={'350px'}
      height={'400px'}
    />
  );
}
