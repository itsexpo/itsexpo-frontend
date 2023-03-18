import * as React from 'react';

import Accordion from '@/components/disclosure/Accordion';
import Typography from '@/components/typography/Typography';
import { FAQJurnalistikContents } from '@/contents/pre-event/jurnalistik/tampilan-awal';

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
        {FAQJurnalistikContents.map((faq, index) => (
          <Accordion key={index} title={faq.title}>
            <Typography
              variant='b2'
              color='secondary'
              className='text-sm md:text-base'
            >
              {faq.content}
            </Typography>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
