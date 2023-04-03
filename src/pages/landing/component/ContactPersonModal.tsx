import React from 'react';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
import Modal from '@/components/modal/Modal';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import {
  CpJurnalisticBlogger,
  CpJurnalisticTelevisi,
  CpKTI,
  CpRobotik,
  CpTalkshow,
} from '@/contents/dashboard/ContactPerson';

//#region  //*======== Typing ===========

type ModalReturnType = {
  openModal: () => void;
};

//#endregion  //*======== Typing ===========

export default function ContactPersonModal({
  children,
  contactType,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  contactType: string;
}) {
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
  };

  let eventCp, eventCp2, titleCp, descCp, descCp2;

  switch (contactType) {
    case 'robot':
      eventCp = CpRobotik;
      titleCp = 'Contact Pre Event : Robot In Action';
      descCp = 'Robot Line Tracer & Open Category';
      break;
    case 'journalistic':
      eventCp = CpJurnalisticBlogger;
      titleCp = 'Contact Pre Event : Jurnalistik';
      eventCp2 = CpJurnalisticTelevisi;
      descCp = 'Vlog (Video Blogger)';
      descCp2 = 'Televisi';
      break;
    case 'kti':
      eventCp = CpKTI;
      titleCp = 'Contact Pre Event : Karya Tulis Ilmiah';
      descCp = 'Scientific Paper Competition';
      break;
    case 'talkshow':
      eventCp = CpTalkshow;
      titleCp = 'Contact Pre Event : Talkshow';
      break;
    default:
      eventCp = CpRobotik;
  }

  return (
    <>
      {children(modalReturn)}
      <Modal
        className=''
        modalContainerClassName={`${
          contactType === 'coming-soon' ? 'sm:max-w-lg' : 'sm:max-w-[60vw]'
        } bg-red-400 bg-tainted-100`}
        open={open}
        setOpen={setOpen}
      >
        {contactType !== 'coming-soon' && (
          <NextImage
            src='/landing/modal-leaf.png'
            width={347}
            height={236}
            className='absolute top-3 right-3 w-48'
            alt='leaf'
          />
        )}

        {contactType !== 'coming-soon' && (
          <>
            <Modal.Title>
              <Typography variant='h6' as='h6' className='font-bold'>
                {titleCp}
              </Typography>
              <Typography variant='p' as='p' className='font-normal mt-4'>
                Untuk Informasi lebih lanjut, silahkan hubungi kami melalui:
              </Typography>
            </Modal.Title>
            <Modal.Body>
              <div>
                <Typography variant='p' as='p' className='font-bold'>
                  {descCp}
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
                        <Typography
                          variant='c'
                          className='font-medium text-typo-icon'
                        >
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

              {eventCp2 && (
                <div className='mt-4'>
                  <Typography variant='p' as='p' className='font-bold'>
                    {descCp2}
                  </Typography>
                  <div className='flex flex-col w-full sm:flex-row gap-4 mt-3 sm:mt-4'>
                    {eventCp2.map(({ name, contact, contactMedia }) => (
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
                          <Typography
                            variant='c'
                            className='font-medium text-typo-icon'
                          >
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
              )}
            </Modal.Body>
            <Button
              className='w-full mt-4 bg-tainted-700 text-white'
              onClick={() => setOpen(false)}
              variant='discolored'
            >
              Baik, Matur Sembah Selangkong
            </Button>
          </>
        )}
        {contactType === 'coming-soon' && (
          <>
            <Modal.Title>
              <Typography variant='h6' as='h6' className='font-bold'>
                Coming Soon
              </Typography>
            </Modal.Title>
            <Modal.Body>
              <div>
                <Typography variant='p' as='p' className=''>
                  Jangan lewatkan event terbaru kami yang akan segera datang!
                  Pastikan untuk selalu memeriksa akun media sosial kami agar
                  selalu mendapatkan informasi terbaru mengenai acara kami. Yuk,
                  tunggu apa lagi? Follow akun media sosial kami sekarang juga!
                </Typography>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
}
