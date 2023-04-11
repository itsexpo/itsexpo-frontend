import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

const CompletedForm2D = () => {
  const eventCp = [
    {
      name: 'Vika',
      contact: 'vikaputri353',
      contactMedia: 'LINE',
    },
    {
      name: 'Zuma',
      contact: 'miftahazuma_',
      contactMedia: 'LINE',
    },
  ];
  return (
    <div className='flex flex-col-reverse items-center xl:flex-row bg-typo-white p-6 rounded-xl shadow-pendaftaran'>
      <div className='flex flex-col'>
        <Typography variant='h6' className='font-bold text-typo-primary'>
          Pendaftaranmu sedang <br />
          diproses oleh panitia!{' '}
        </Typography>
        <Typography
          variant='b1'
          className='font-light text-typo-secondary mt-4 md:mt-6'
        >
          Mohon menunggu proses verifikasi. Apabila dalam waktu 3x24 jam masih
          belum terproses, peserta dapat menghubungi cp dibawah ini (Line only):
        </Typography>
        <div className='flex gap-4 my-4 md:my-8'>
          {eventCp.map(({ name, contact, contactMedia }) => (
            <>
              <UnstyledLink
                href={
                  contactMedia == 'LINE'
                    ? `https://line.me/ti/p/${contact}`
                    : `https://wa.me/${contact}`
                }
                key={name}
                className='flex flex-col items-start p-4 w-full border-[1px] border-typo-outline rounded-2xl hover:border-typo-primary transition duration-200'
              >
                <Typography variant='c' className='font-medium text-typo-icon'>
                  {name}
                </Typography>
                <Typography
                  variant='p'
                  className='font-semibold text-typo-primary'
                >
                  {contact}
                </Typography>
              </UnstyledLink>
            </>
          ))}
        </div>
        <ButtonLink
          size='large'
          variant='green'
          href='/dashboard/main-event/wahana-seni'
        >
          Baik, Matur Sembah Selangkong
        </ButtonLink>
      </div>
      <div className='flex-1'>
        <NextImage
          src='/wahana-seni/2dform-logo.png'
          alt='logo'
          width='277'
          height='365'
          priority={true}
          className=''
        />
      </div>
    </div>
  );
};

export default CompletedForm2D;
