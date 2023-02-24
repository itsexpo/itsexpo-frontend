import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import useAuthStore from '@/store/useAuthStore';

type UserActionProps = React.ComponentPropsWithoutRef<'div'>;

export default function UserAction({ className, ...rest }: UserActionProps) {
  const user = useAuthStore.useUser();
  const logout = useAuthStore.useLogout();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <Disclosure
      as='div'
      className={clsxm(
        'relative inline-block px-3 text-left mt-1 bg-white',
        className
      )}
      {...rest}
    >
      {({ open }) => (
        <div className='rounded-md'>
          <Disclosure.Button
            className={clsx(
              'hover:bg-secondary-100 group w-full rounded-md px-3.5 py-2 text-left font-medium',
              'focus:outline-none'
            )}
          >
            <div className='flex w-full items-center justify-between gap-2'>
              <div className='flex min-w-0 items-center justify-between space-x-3'>
                <NextImage
                  className='h-10 w-10 flex-shrink-0 overflow-hidden rounded-full'
                  src='/dashboard/avatar.png'
                  width={256}
                  height={256}
                  alt='avatar'
                />
                <div className='flex min-w-0 flex-1 flex-col'>
                  <Typography
                    variant='body'
                    className='font-secondary text-typo font-medium'
                  >
                    {user?.name}
                  </Typography>
                </div>
              </div>
              <FiChevronDown
                className={clsx(
                  'h-5 w-5 flex-shrink-0 text-typo group-hover:text-gray-500',
                  open && 'rotate-180'
                )}
                aria-hidden='true'
              />
            </div>
          </Disclosure.Button>
          {/* //! Don't forget to adjust MobileNavigation component */}
          <Disclosure.Panel
            className={clsx('mt-2 flex flex-col gap-1', 'pl-14 pr-3.5 pb-3')}
          >
            <ButtonLink
              href='/change-password'
              className='w-full'
              variant='discolored'
            >
              Change Password
            </ButtonLink>
            <Button
              className='w-full !text-critical-500 bg-white'
              variant='outline'
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
