import { Transition } from '@headlessui/react';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

type PreEventCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function PreEventCard({
  title,
  description,
  link,
  image,
}: PreEventCardProps) {
  return (
    <div className='relative mx-auto mt-8 z-[1] bg-white rounded-3xl overflow-hidden'>
      <Transition
        show={true}
        enter='transition-opacity duration-500'
        enterFrom='opacity-0'
        enterTo='opacity-100'
      >
        <div className='lg:flex transition-transform '>
          <div className='lg:shrink-0 grow'>
            <NextImage
              src={image}
              alt='preevent'
              width='478'
              height='512'
              useSkeleton
              className='h-full w-full object-cover lg:h-full lg:w-96'
            />
          </div>
          <div className='p-8 lg:p-6 xl:p-8'>
            <Typography
              variant='h5'
              className='text-left hidden lg:block lg:font-semibold text-typo-black lg:mb-3 xl:mb-6'
              data-aos='fade-up'
            >
              {title}
            </Typography>
            <Typography
              variant='h4'
              className='text-left font-semibold lg:hidden text-typo-black mb-6'
              data-aos='fade-up'
            >
              {title}
            </Typography>
            <Typography
              variant='p'
              className='text-justify text-typo-secondary font-[14px] lg:text-[16px] xl:font-[18px]'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              {description}
            </Typography>
            <UnstyledLink href={link}>
              <Typography
                variant='c'
                color='theme'
                className='font-secondary font-semibold underline mt-6 lg:mt-3 xl:mt-6 text-success-500'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                Baca Selengkapnya
              </Typography>
            </UnstyledLink>
          </div>
        </div>
      </Transition>
    </div>
  );
}
