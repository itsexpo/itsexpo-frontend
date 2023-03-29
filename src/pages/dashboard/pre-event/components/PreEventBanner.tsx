import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

type PreEventBannerProps = {
  title: string;
  participant: string;
  img: string;
  url: string;
};

const PreEventBanner = ({
  title,
  participant,
  img,
  url,
}: PreEventBannerProps) => {
  return (
    <UnstyledLink
      href={url}
      className='relative hover:brightness-75 transition duration-200'
    >
      <NextImage
        src={img}
        alt={title}
        width='500'
        height='160'
        className='rounded-xl w-full'
        useSkeleton
        blurClassName='bg-typo-inline rounded-xl z-10'
      />
      <div className='absolute flex flex-col items-start bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4'>
        <Typography
          variant='t'
          className='font-semibold text-typo-white text-sm sm:text-[20px] leading-normal'
        >
          {title}
        </Typography>
        <Typography
          variant='c'
          className='font-normal text-typo-white text-xs sm:text-[16px] leading-normal'
        >
          {participant}
        </Typography>
      </div>
    </UnstyledLink>
  );
};

export default PreEventBanner;
