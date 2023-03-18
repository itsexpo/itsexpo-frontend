import * as React from 'react';

import Accordion from '@/components/disclosure/Accordion';
import Typography from '@/components/typography/Typography';
import { FAQKTIContents } from '@/contents/pre-event/kti/tampilan-awal';

export default function FAQCard() {
  return (
    <div className='p-6 shadow-pendaftaran rounded-xl bg-typo-white'>
      <Typography
        as='h6'
        variant='h6'
        className='font-bold text-typo-primary text-center md:text-left'
      >
        FAQ
      </Typography>
      <div className='mt-6 space-y-4'>
        {FAQKTIContents.map((faq, index) => (
          <Accordion key={index} title={faq.title}>
            <Typography
              variant='b2'
              color='secondary'
              className='text-sm md:text-base'
            >
              {faq.content}
            </Typography>
            {faq.winner_prize?.map((prizes, index) => (
              <li
                key={index}
                className='list-item list-disc ml-4 pb-2 text-typo-secondary text-sm md:text-base'
              >
                <Typography
                  variant='b2'
                  className='text-typo-secondary text-sm md:text-base pl-2'
                >
                  {prizes}
                </Typography>
              </li>
            ))}
          </Accordion>
        ))}
      </div>
    </div>
  );
}
