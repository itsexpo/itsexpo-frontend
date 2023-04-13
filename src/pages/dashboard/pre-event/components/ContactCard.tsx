import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import Typography from '@/components/typography/Typography';
import {
  CpJurnalisticBlogger,
  CpJurnalisticTelevisi,
  CpKTI,
  CpRobotik,
  CpTalkshow,
  CpWahanaSeni,
} from '@/contents/dashboard/ContactPerson';

type DashboardContactPersonProps = {
  eventCategory: string;
  contactType: string;
};

const DashboardContactPerson = ({
  eventCategory,
  contactType,
}: DashboardContactPersonProps) => {
  let eventCp;

  switch (eventCategory) {
    case 'BLOGGER':
      eventCp = CpJurnalisticBlogger;
      break;
    case 'TELEVISION':
      eventCp = CpJurnalisticTelevisi;
      break;
    case 'KTI':
      eventCp = CpKTI;
      break;
    case 'ROBOTIK':
      eventCp = CpRobotik;
      break;
    case 'TALKSHOW':
      eventCp = CpTalkshow;
      break;
    case 'WAHANA_SENI':
      eventCp = CpWahanaSeni;
      break;
    default:
      eventCp = CpJurnalisticBlogger;
  }

  return (
    <div className='flex flex-col justify-center items-start bg-typo-white p-6 rounded-xl border-typo-outline border-[1px]'>
      <Typography variant='h6' className='font-bold'>
        Contact Us
      </Typography>
      <Typography variant='p' className='mt-4 sm:mt-5'>
        Untuk Informasi lebih lanjut, silahkan hubungi kami melalui:
      </Typography>
      <Typography
        variant='b1'
        className='font-bold mt-3 sm:mt-4 text-sm sm:text-[16px] leading-normal'
      >
        {contactType == 'LINE' ? (
          <p>Line Only</p>
        ) : contactType == 'WA' ? (
          <p>WhatsApp Only</p>
        ) : (
          <p>Line & WhatsApp</p>
        )}
      </Typography>

      <div className='flex flex-col w-full sm:flex-row gap-4 mt-3 sm:mt-4'>
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
    </div>
  );
};

export default DashboardContactPerson;
