import { Button } from '@mantine/core';
import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

export const WheelPage = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

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

  const handleSpinClick = () => {
    if (!isSpinning) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setIsSpinning(true);
    }
  };

  return (
    <>
      <Wheel
        mustStartSpinning={isSpinning}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => setIsSpinning(false)}
        backgroundColors={['#3e3e3e', '#df3428']}
      />
      <Button onClick={handleSpinClick}>Spin</Button>
    </>
  );
};
