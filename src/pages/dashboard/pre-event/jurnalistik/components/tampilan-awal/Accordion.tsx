import React from 'react';
import { RxChevronDown } from 'react-icons/rx';

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import { FAQJurnalistikData } from '@/types/entities/pre-event/jurnalistik';

const Accordion = ({ title, content }: FAQJurnalistikData) => {
  const [showAccordion, setShowAccordion] = React.useState<boolean>(false);

  return (
    <div className='flex flex-col p-4 bg-typo-surface rounded-lg'>
      <div
        className={clsxm(
          'cursor-pointer text-typo flex justify-between items-center',
          'transition-all ease-in-out duration-500'
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
          'mt-0 max-h-0 transition-all ease-in-out duration-500 invisible opacity-0 rounded-b-xl',
          showAccordion && 'mt-2 max-h-64 block visible opacity-100'
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
