import { Tab } from '@headlessui/react';
import * as React from 'react';

import DokumenPendukungCard from '@/components/shared/DokumenPendukungCard';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import { AnggotaWahanaSeni } from '@/types/entities/main-event/wahana-seni';

export default function DataDiri3D({
  members,
}: {
  members: Array<AnggotaWahanaSeni>;
}) {
  return (
    <div className='mt-3'>
      <Tab.Group>
        <Tab.List className='flex justify-around space-x-1 rounded-lg p-2 bg-typo-light overflow-x-auto'>
          {members.map((member) => (
            <Tab
              key={member.nrp}
              className={({ selected }) =>
                clsxm(
                  selected ? 'bg-white shadow-sm' : '',
                  'py-2.5 rounded-md w-full text-center font-semibold cursor-pointer min-w-fit'
                )
              }
            >
              {member.ketua ? 'Ketua' : 'Anggota'}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {members.map((member) => (
            <Tab.Panel key={member.nrp}>
              <div className='space-y-2'>
                <div className='flex flex-col gap-y-1'>
                  <Typography
                    as='label'
                    variant='label'
                    className='font-semibold'
                  >
                    NRP
                  </Typography>
                  <Typography
                    as='p'
                    variant='p'
                    className='rounded-md bg-typo-surface px-4 py-3'
                  >
                    {member.nrp}
                  </Typography>
                </div>
                <div className='flex flex-col gap-y-1'>
                  <Typography
                    as='label'
                    variant='label'
                    className='font-semibold'
                  >
                    Nama
                  </Typography>
                  <Typography
                    as='p'
                    variant='p'
                    className='rounded-md bg-typo-surface px-4 py-3'
                  >
                    {member.name}
                  </Typography>
                </div>
                <div className='flex flex-col gap-y-1'>
                  <Typography
                    as='label'
                    variant='label'
                    className='font-semibold'
                  >
                    Asal Departemen
                  </Typography>
                  <Typography
                    as='p'
                    variant='p'
                    className='rounded-md bg-typo-surface px-4 py-3'
                  >
                    {member.departemen}
                  </Typography>
                </div>
                <div className='flex flex-col gap-y-1'>
                  <Typography
                    as='label'
                    variant='label'
                    className='font-semibold'
                  >
                    Kontak Aktif
                  </Typography>
                  <Typography
                    as='p'
                    variant='p'
                    className='rounded-md bg-typo-surface px-4 py-3'
                  >
                    {member.kontak}
                  </Typography>
                </div>
                <DokumenPendukungCard
                  imgPath={member.ktm_url}
                  title='KTM'
                  caption='Kartu Tanda Mahasiswa'
                />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
