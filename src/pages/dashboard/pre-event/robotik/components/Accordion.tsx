import { Disclosure, Transition } from '@headlessui/react';
import React from 'react';
import { RxChevronDown } from 'react-icons/rx';

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import { FAQRobotikData } from '@/types/entities/pre-event/robotik';

const Accordion = ({ title, content }: FAQRobotikData) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className='p-4 space-y-2 rounded-lg bg-typo-surface'>
          <Disclosure.Button className='w-full flex justify-between items-center'>
            <Typography
              as='h6'
              variant='b2'
              className='text-left font-bold md:font-medium text-sm md:text-base text-typo-primary'
            >
              {title}
            </Typography>
            <div className='ml-1.5'>
              <RxChevronDown
                className={clsxm(
                  'w-4 h-4 text-typo-secondary transition-transform duration-200 ease-in-out',
                  open && 'rotate-180'
                )}
              />
            </div>
          </Disclosure.Button>

          <Transition
            className='transition-all duration-300 overflow-hidden'
            enterFrom='opacity-0 max-h-0'
            enterTo='opacity-100 max-h-96'
            leaveFrom='opacity-100 max-h-96'
            leaveTo='opacity-0 max-h-0'
          >
            <Disclosure.Panel>
              <Typography
                variant='b2'
                color='secondary'
                className='text-sm md:text-base'
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
