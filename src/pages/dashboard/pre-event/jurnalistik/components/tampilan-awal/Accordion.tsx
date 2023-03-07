import React from 'react';
import { RxChevronDown } from 'react-icons/rx';

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import { FAQJurnalistikData } from '@/types/entities/pre-event/jurnalistik';

const Accordion = ({ title, content }: FAQJurnalistikData) => {
  const [showAccordion, setShowAccordion] = React.useState<boolean>(false);

  return (
    <div className='mt-4'>
      <div
        className={clsxm(
          'cursor-pointer px-6 py-4 bg-typo-surface text-typo rounded-xl transition-all ease-in-out duration-500 flex justify-between items-center',
          showAccordion && 'rounded-b-none'
        )}
        onClick={() => setShowAccordion(!showAccordion)}
      >
        <Typography
          variant='b2'
          className='text-sm md:text-base font-semibold md:font-bold cursor-pointer text-typo-label'
        >
          {title}
        </Typography>
        <RxChevronDown
          className={clsxm(
            'transition-all ease-in-out duration-200 cursor-pointer',
            showAccordion && 'rotate-180'
          )}
        />
      </div>
      <div
        className={clsxm(
          'bg-typo-surface px-6 h-0 transition-all ease-in-out duration-500 invisible opacity-0 rounded-b-xl',
          showAccordion && 'h-64 md:h-32 min-h-max block visible opacity-100'
        )}
      >
        <Typography
          variant='c'
          color='secondary'
          className='text-xs md:text-sm min-h-max text-typo-secondary'
        >
          {content}
        </Typography>
      </div>
    </div>
  );
};

export default Accordion;
