import { useState } from 'react';

export const useStretch = (min: number = 50, max: number = 150) => {
  const [height, setHeight] = useState(min);

  const style = { height, overflow: 'hidden', transition: 'height 0.3s' };

  const state = height === min;

  const trigger = () => {
    if (state) {
      setHeight(max);
    } else {
      setHeight(min);
    }
  };

  return [style, trigger, state];
};
