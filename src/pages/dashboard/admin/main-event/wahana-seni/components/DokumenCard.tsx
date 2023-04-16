import * as React from 'react';

import DokumenPendukungCard from '@/components/shared/DokumenPendukungCard';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import { TeamDataWahanaSeni3D } from '@/types/entities/main-event/wahana-seni';

export default function DokumenCard({
  tim,
  className,
}: {
  tim?: TeamDataWahanaSeni3D;
  className?: string;
}) {
  const [selected, setSelected] = React.useState(0);

  return (
    <section
      className={clsxm(
        'space-y-6 p-6 rounded-xl bg-typo-white shadow-pendaftaran',
        className
      )}
    >
      <Typography
        as='h6'
        variant='h6'
        className='font-semibold text-typo-primary'
      >
        Dokumen Pendukung
      </Typography>

      <div className='grid grid-cols-3 gap-x-2 p-2 rounded-lg bg-typo-light'>
        {tim?.team_member.map((member, index) => (
          <div
            key={index}
            className={clsxm(
              'p-2 cursor-pointer rounded-md',
              selected === index
                ? 'bg-typo-white shadow-sm'
                : 'hover:bg-typo-outline',
              'transition-colors duration-200 ease-out'
            )}
            onClick={() => setSelected(index)}
          >
            <Typography
              className={clsxm(
                'text-center font-semibold text-typo-secondary',
                selected === index && 'text-typo-primary',
                'transition-colors duration-200 ease-out'
              )}
            >
              {member.ketua === true ? 'Ketua Tim' : `Anggota ${index}`}
            </Typography>
          </div>
        ))}
      </div>
      {tim?.team_member.map((member, index) => (
        <div key={index} className={clsxm(selected !== index && 'hidden')}>
          <DokumenPendukungCard
            imgPath={member.bukti_upload_ktm || ''}
            title='Foto KTM'
            caption={`Foto KTM ${member.name}`}
          />
        </div>
      ))}
    </section>
  );
}
