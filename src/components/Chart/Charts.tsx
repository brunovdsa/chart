import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { IChart } from '../../interface/interface';

import './Charts.scss';

export function Charts(props: IChart) {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);

  const options = {
    chart: {
      title: props.symbol,
      subtitle: `Financial statements of ${props.symbol} from the year of ${props.subtitle}`,
    },
    colors: ['#0c4251', '#17657a', '#1c7791', '#218ba8'],
  };

  console.log(screenSize.dynamicWidth);

  return screenSize.dynamicWidth >= 1100 ? (
    <Chart
      chartType={props.chartType}
      data={props.data}
      options={options}
      className='chart'
      width={'450px'}
      height={'500px'}
    />
  ) : (
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
