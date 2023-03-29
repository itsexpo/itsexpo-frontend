import { AiOutlineExclamationCircle } from 'react-icons/ai';

import Typography from '@/components/typography/Typography';
import { InformasiLKTI } from '@/contents/pre-event/kti/pendaftaran';
export default function Informasi() {
  return (
    <div className='col-span-2 h-fit flex flex-col gap-y-[1px] order-first md:order-last'>
      <div className='relative shadow-pendaftaran p-4 rounded-t-xl'>
        <Typography variant='b1' className='text-typo-primary'>
          Informasi Penting!
        </Typography>
      </div>
      <div className='flex flex-col gap-y-8 p-4 shadow-pendaftaran rounded-b-xl'>
        {InformasiLKTI.map(({ caption }, index) => (
          <div key={index} className='flex items-center '>
            <AiOutlineExclamationCircle className='text-lg text-typo-secondary' />
            <Typography className='text-typo-secondary pl-2' variant='b1'>
              {caption}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
