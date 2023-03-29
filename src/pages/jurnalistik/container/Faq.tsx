import 'aos/dist/aos.css';

import { Disclosure, Transition } from '@headlessui/react';
import * as React from 'react';
import { BsChevronUp } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

type FrequentlyaqProps = {
  title: string;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Frequentlyaq({
  title,
  description,
}: FrequentlyaqProps) {
  return (
    <div className='mx-1'>
      <Disclosure as='div' className='mt-4'>
        {({ open }) => (
          <>
            <div className='rounded-lg items-center bg-tainted-300'>
              <Disclosure.Button
                className={clsxm(
                  'flex w-full justify-between rounded-lg bg-tainted-300 px-4 py-2 md:py-4 text-left text-xs md:text-lg font-medium text-tainted-900',
                  'focus:outline-none focus-visible:ring focus-visible:ring-tainted-700 focus-visible:ring-opacity-75'
                )}
              >
                <span>{title}</span>
                <BsChevronUp
                  className={clsxm(
                    'text-warning-900 transition duration-200 ease-in-out h-5 w-5',
                    open && 'rotate-180'
                  )}
                />
              </Disclosure.Button>
              <Transition
                enter='transition duration-200 ease-out'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition duration-200 ease-out'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Disclosure.Panel className='px-4 md:-mt-2.5 pb-4 text-sm bg-tainted-300 rounded-lg text-tainted-800'>
                  {description}
                </Disclosure.Panel>
              </Transition>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
}
