import 'aos/dist/aos.css';

import * as React from 'react';

import HadiahCard from '@/pages/robotics/components/HadiahCard';
const HadiahState = [
  {
    img: '/robotics/juara1.png',
    text: 'Rp 1.500.000,-',
  },
  {
    img: '/robotics/juara2.png',
    text: 'Rp 1.000.000,-',
  },
  {
    img: '/robotics/juara3.png',
    text: 'Rp 800.000,-',
  },
];

export const Reward1 = () => {
  return (
    <>
      <div className='mt-16 md:mt-10 lg:mt-2 xl:mt-16 space-y-4 md:-space-y-8 lg:-space-y-6 xl:space-y-4 p-4'>
        {HadiahState.map((item, index) => (
          <HadiahCard key={index} img={item.img} text={item.text} />
        ))}
      </div>
    </>
  );
};
