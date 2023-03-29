import 'aos/dist/aos.css';

import { Disclosure, Transition } from '@headlessui/react';
import * as React from 'react';
import { BsChevronUp } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

export const OtherFaq = () => {
  return (
    <div>
      <Disclosure as='div' className='mt-4'>
        {({ open }) => (
          <>
            <div className='rounded-lg bg-tainted-900'>
              <Disclosure.Button
                className={clsxm(
                  'flex w-full justify-center rounded-lg bg-tainted-900 px-4 py-4 text-left text-sm font-medium text-tainted-300',
                  'focus:outline-none focus-visible:ring focus-visible:ring-tainted-700 focus-visible:ring-opacity-75'
                )}
              >
                <span>Lihat lebih lanjut</span>
                <BsChevronUp
                  className={clsxm(
                    'text-warning-300 mx-2 transition duration-200 ease-in-out h-5 w-5',
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
                <Disclosure.Panel className='px-4 md:-mt-2.5 pb-4 text-sm text-tainted-300'>
                  Dalam satu kelompok maksimal terdapat 5 anggota dan minimal 3
                  anggota dengan salah satu diantaranya sebagai ketua.
                </Disclosure.Panel>
              </Transition>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};
