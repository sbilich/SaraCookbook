import { Button } from '@mantine/core';
import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

export const WheelPage = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const data = [
    {
      option: 'Mexican',
      style: { backgroundColor: 'gold', textColor: 'black' },
    },
    {
      option: 'Thai',
      style: { backgroundColor: 'lightblue', textColor: 'black' },
    },
    {
      option: 'Italian',
      style: { backgroundColor: 'crimson', textColor: 'black' },
    },
  ];

  return (
    <>
      <Wheel
        mustStartSpinning={isSpinning}
        prizeNumber={0}
        data={data}
        onStopSpinning={() => setIsSpinning(false)}
        backgroundColors={['#3e3e3e', '#df3428']}
      />
      <Button onClick={() => setIsSpinning(true)}>Spin</Button>
    </>
  );
};
