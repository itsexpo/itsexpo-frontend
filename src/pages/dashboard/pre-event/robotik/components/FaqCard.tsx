import * as React from 'react';

import Accordion from '@/components/disclosure/Accordion';
import Typography from '@/components/typography/Typography';
import { FAQRobotikContents } from '@/contents/pre-event/robotik/tampilan-awal';

export default function FAQCard() {
  return (
    <div className='p-4 md:p-6 space-y-6 shadow-pendaftaran rounded-xl bg-typo-white'>
      <Typography
        as='h6'
        variant='h6'
        className='font-bold text-typo-primary text-center md:text-left'
      >
        FAQ
      </Typography>
      <div className='space-y-4'>
        {FAQRobotikContents.map((faq, index) => (
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
