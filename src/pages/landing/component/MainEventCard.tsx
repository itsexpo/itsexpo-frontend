import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

export default function MainEventCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div
      className='bg-tainted-100 z-[1] md:max-w-[380px] rounded-lg'
      data-aos='fade-up'
    >
      <div
        className={clsxm(
          'flex flex-col justify-start px-10 py-8 rounded-lg group md:hover-this'
        )}
      >
        <div
          className={clsxm(
            'absolute -z-10 top-0 left-0 h-full w-full',
            'bg-[url(/images/landing/pattern-background.png)] bg-cover bg-no-repeat rounded-xl',
            'opacity-100 md:opacity-0 hover-this-show-this transition ease-in-out duration-300'
          )}
        ></div>
        <div>
          <Typography
            variant='h4'
            as='h4'
            className='font-primary text-left text-4xl md:text-5xl mb-4 md:group-hover:text-white text-white md:text-black'
          >
            {title}
          </Typography>
          <Typography
            variant='b'
            as='b'
            className='md:group-hover:text-white text-white md:text-black font-normal text-sm md:text-lg'
          >
            {description}
          </Typography>
          <div className='md:mt-4 mt-11'>
            <div className='opacity-100 md:opacity-0 group-hover:opacity-100'>
              <ButtonLink
                href={link}
                variant='discolored'
                size='base'
                className=''
              >
                Baca Selengkapnya
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
