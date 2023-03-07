import * as React from 'react';

import Typography from '@/components/typography/Typography';
import { FAQJurnalistikContents } from '@/contents/pre-event/jurnalistik/tampilan-awal';
import Accordion from '@/pages/dashboard/pre-event/jurnalistik/components/tampilan-awal/Accordion';

export default function FAQCard() {
  return (
    <div className='p-6 shadow-pendaftaran rounded-xl bg-typo-white'>
      <Typography as='h6' variant='h6' className='font-bold text-typo-primary'>
        FAQ
      </Typography>
      <div>
        {FAQJurnalistikContents.map((faq, index) => (
          <Accordion {...faq} key={index} />
        ))}
      </div>
    </div>
  );
}
