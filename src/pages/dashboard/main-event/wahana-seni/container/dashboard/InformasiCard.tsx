import { Tab } from '@headlessui/react';
import * as React from 'react';

import PengumumanEventCard from '@/container/PengumumanEventCard';
import clsxm from '@/lib/clsxm';
import { WahanaSeniData } from '@/types/entities/main-event/wahana-seni';

export type PaymentStatusWahanaSeni = {
  payment_id: string;
  payment_status: string;
};

const Event = {
  '2d': 'Karya Seni 2D',
  '3d': 'Karya Seni 3D',
};

export default function InformasiCard({
  data,
  selectedContest,
  setSelectedContest,
}: {
  data: WahanaSeniData['main_event']['wahana_seni'];
  setSelectedContest: React.Dispatch<React.SetStateAction<'2d' | '3d'>>;
  selectedContest: '2d' | '3d';
}) {
  return (
    <div className='bg-white p-6 rounded-2xl border-[1px] border-typo-outline'>
      <div className='w-full'>
        <Tab.Group>
          <Tab.List className='flex justify-around space-x-1 rounded-lg p-2 bg-typo-light '>
            {Object.entries(data).map(([contest]) => {
              if (data[contest as '2d' | '3d'] == null) return null;
              return (
                <Tab
                  key={contest}
                  className={({ selected }) =>
                    clsxm(
                      selected ? 'bg-white shadow-sm' : '',
                      'py-2.5 rounded-md w-full text-center font-semibold cursor-pointer max-w-[240px]'
                    )
                  }
                  onClick={() => setSelectedContest(contest as '2d' | '3d')}
                >
                  {Event[contest as '2d' | '3d']}
                </Tab>
              );
            })}
          </Tab.List>
        </Tab.Group>

        <div className='mt-4'>
          <PengumumanEventCard id={selectedContest === '2d' ? '51' : '52'} />
        </div>
      </div>
    </div>
  );
}
