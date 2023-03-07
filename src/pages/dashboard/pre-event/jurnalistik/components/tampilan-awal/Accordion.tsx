import React from 'react';
import { RxChevronDown } from 'react-icons/rx';

import Typography from '@/components/typography/Typography';
import { FAQJurnalistikData } from '@/types/entities/pre-event/jurnalistik';

const Accordion = ({ title, content }: FAQJurnalistikData) => {
  return (
    <button className='group bg-typo-surface rounded-lg focus:outline-none'>
      <div className='flex items-center justify-between p-4 bg-typo-surface rounded-lg'>
        <Typography
          variant='b2'
          as='h6'
          className='font-medium text-left text-[14px] md:text-base'
        >
          {title}
        </Typography>
        <RxChevronDown className='text-typo-secondary w-4 h-4' />
      </div>
      <div>
        <div className='px-4 max-h-0 overflow-hidden duration-300 group-focus:max-h-96 md:group-focus:max-h-60 text-left'>
          <Typography
            variant='b2'
            className='pb-4 text-typo-secondary text-[13px] md:text-sm'
          >
            {content}
          </Typography>
        </div>
      </div>
    </button>
  );
};

export default Accordion;
