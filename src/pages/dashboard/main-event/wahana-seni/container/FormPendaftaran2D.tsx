import { useQuery } from '@tanstack/react-query';
import * as React from 'react';

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import BioDataForm2D from '@/pages/dashboard/main-event/wahana-seni/components/BioDataForm2D';
import CompletedForm2D from '@/pages/dashboard/main-event/wahana-seni/components/CompletedForm2D';
import PembayaranForm2D from '@/pages/dashboard/main-event/wahana-seni/components/PembayaranForm2D';
import TimelineStep from '@/pages/dashboard/main-event/wahana-seni/components/TimelineStep';
import { ApiReturn } from '@/types/api';

export default function FormPendaftaran3D() {
  const [step, setStep] = React.useState(1);

  const { data: departemen } = useQuery<
    ApiReturn<Array<{ id: number; name: string }>>
  >(['departemen']);

  return (
    <div className='grid grid-cols-1 md:grid-cols-9 gap-6'>
      <div className={clsxm(step > 1 ? 'col-span-6' : 'col-span-5')}>
        {step === 1 && departemen && (
          <BioDataForm2D setStep={setStep} departemen={departemen.data} />
        )}
        {step === 2 && <PembayaranForm2D setStep={setStep} />}
        {step === 3 && <CompletedForm2D />}
      </div>
      <div
        className={clsxm(
          step > 1 ? 'col-span-6 md:col-span-3' : 'col-span-5 md:col-span-4',
          'order-first md:order-last'
        )}
      >
        <div className='flex items-center justify-center rounded-xl bg-white shadow-pendaftaran h-28 pb-2'>
          <TimelineStep step={step} />
        </div>
        {step === 2 && (
          <div className='flex flex-col p-4 items-center rounded-lg bg-navy-100 shadow-pendaftaran text-navy-800 mt-6'>
            <Typography variant='b1' className='font-medium'>
              Peserta melakukan pembayaran dengan cara transfer ke rekening
              Exhibition ITS Expo melalui
            </Typography>
            <div className='p-4 ml-4'>
              <ul className='list-disc'>
                <li>
                  <Typography variant='b1' className='font-medium'>
                    Bank Mandiri 1400019841544 a/n Astridea Hasni Aurelita
                  </Typography>
                </li>
                <li>
                  <Typography variant='b1' className='font-medium'>
                    Gopay 082110006848 a/n Astridea Hasni
                  </Typography>
                </li>
                <li>
                  <Typography variant='b1' className='font-medium'>
                    Shopeepay 082110006848 a/n Astridea Hasni
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
