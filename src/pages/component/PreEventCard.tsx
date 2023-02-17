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
  ...props
}: PreEventCardProps) {
  return (
    <div className='relative mx-auto mt-8 z-[1] bg-white rounded-3xl overflow-hidden'>
      <div className='md:flex'>
        <div className='md:shrink-0'>
          <NextImage
            src={image}
            alt='preevent frame'
            width='478'
            height='512'
            className='object-cover md:h-full'
          />
        </div>
        <div className='p-8'>
          <Typography
            variant='h5'
            className='text-left font-semibold text-typo-black mb-6'
            data-aos='fade-up'
          >
            {title}
          </Typography>
          <Typography
            variant='p'
            className='text-left text-typo-black'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            {description}
          </Typography>
          <UnstyledLink href={link}>
            <Typography
              variant='c'
              color='theme'
              className='font-secondary font-semibold underline mt-6 text-success-500'
            >
              Baca Selengkapnya
            </Typography>
          </UnstyledLink>
        </div>
      </div>
    </div>
  );
}
