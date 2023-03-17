import * as React from 'react';

import Typography from '@/components/typography/Typography';
import { FAQRobotikContents } from '@/contents/pre-event/robotik/tampilan-awal';
import Accordion from '@/pages/dashboard/pre-event/robotik/components/Accordion';

export default function FAQCard() {
  return (
    <div className='p-4 md:p-6 space-y-6 shadow-pendaftaran rounded-xl bg-typo-white'>
      <Typography as='h6' variant='h6' className='font-bold text-typo-primary'>
        FAQ
      </Typography>
      <div className='space-y-4'>
        {FAQRobotikContents.map((faq, index) => (
          <Accordion {...faq} key={index} />
        ))}
      </div>
    </div>
  );
}
