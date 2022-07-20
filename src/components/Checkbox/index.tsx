import { useState } from 'react';

import { ICheckbox } from '../../interface';
import './styles.scss';

export function Checkbox(props: ICheckbox) {
  const [checked, setChecked] = useState<boolean>(false);

  const toggle = () => {
    setChecked(!checked);
  };

  const checkedClass: string = checked ? 'checked' : '';
  const containerClass: string = `checkbox ${checkedClass}`.trim();

  return <div className={containerClass} onClick={toggle}></div>;
}
