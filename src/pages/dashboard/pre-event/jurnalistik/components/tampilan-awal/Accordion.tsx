import { Disclosure, Transition } from '@headlessui/react';
import React from 'react';
import { RxChevronDown } from 'react-icons/rx';

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import { FAQJurnalistikData } from '@/types/entities/pre-event/jurnalistik';

const Accordion = ({ title, content }: FAQJurnalistikData) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className='mb-4 w-full'>
          <Disclosure.Button
            className={clsxm(
              'bg-typo-surface rounded-t-lg text-left p-4 w-full flex justify-between items-center',
              !open && 'rounded-lg'
            )}
          >
            <Typography
              variant='b2'
              as='h6'
              className='font-medium text-left text-[14px] md:text-base'
            >
              {title}
            </Typography>
            <div className='min-w-max pl-1.5'>
              <RxChevronDown
                className={clsxm(
                  'text-typo-secondary w-4 h-4 transition-transform duration-200 ease-in-out',
                  open && 'rotate-180'
                )}
              />
            </div>
          </Disclosure.Button>
          <Transition
            enter='transition duration-200 ease-out'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition duration-200 ease-out'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Disclosure.Panel className='bg-typo-surface p-4 overflow-hidden text-left transition rounded-b-lg mb-4'>
              <Typography
                variant='b2'
                className='text-typo-secondary text-[13px] md:text-sm'
              >
                {content}
              </Typography>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};

export default Accordion;
