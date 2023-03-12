import 'aos/dist/aos.css';

import * as React from 'react';

import HadiahCard from '@/pages/jurnalistik/component/HadiahCard';
const HadiahState = [
  {
    img: '/jurnalistik/juara1.png',
    text: 'Rp 1.500.000,-',
  },
  {
    img: '/jurnalistik/juara2.png',
    text: 'Rp 1.000.000,-',
  },
  {
    img: '/jurnalistik/juara3.png',
    text: 'Rp 800.000,-',
  },
];

export const RewardTV = () => {
  return (
    <>
      <div className='pt-6 sm:pt-16'>
        {HadiahState.map((item, index) => (
          <HadiahCard key={index} img={item.img} text={item.text} />
        ))}
      </div>
    </>
  );
};
