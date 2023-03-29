import 'aos/dist/aos.css';

import * as React from 'react';

import HadiahCard from '@/pages/robotika/components/HadiahCard';
const HadiahState = [
  {
    img: '/robotics/juara1.png',
    text: 'Rp 3.000.000,-',
  },
  {
    img: '/robotics/juara2.png',
    text: 'Rp 2.000.000,-',
  },
  {
    img: '/robotics/juara3.png',
    text: 'Rp 1.000.000,-',
  },
];

export const Reward1 = () => {
  return (
    <>
      <div className='pt-16 xl:pt-28'>
        {HadiahState.map((item, index) => (
          <HadiahCard key={index} img={item.img} text={item.text} />
        ))}
      </div>
    </>
  );
};
