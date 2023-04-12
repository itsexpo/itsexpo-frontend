import * as React from 'react';

import clsxm from '@/lib/clsxm';
import BioDataForm3D from '@/pages/dashboard/main-event/wahana-seni/components/BioDataForm3D';
import CompletedForm3D from '@/pages/dashboard/main-event/wahana-seni/components/CompletedForm3D';
import Pembayaran3DForm from '@/pages/dashboard/main-event/wahana-seni/components/Pembayaran3DForm';
import TimelineStep from '@/pages/dashboard/main-event/wahana-seni/components/TimelineStep';

export default function Pendaftaran3DForm() {
  // State
  const [step, setStep] = React.useState(1);

  return (
    <div className='grid grid-cols-1 md:grid-cols-9 gap-6'>
      <div className='col-span-5'>
        {step === 1 && <BioDataForm3D setStep={setStep} />}
        {step === 2 && <Pembayaran3DForm setStep={setStep} />}
        {step === 3 && <CompletedForm3D />}
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
      </div>
    </div>
  );
}
