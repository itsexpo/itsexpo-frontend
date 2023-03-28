import * as React from 'react';

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import DokumenPendukung from '@/pages/dashboard/admin/data-management/kti/components/DokumenPendukung';
import { DetailAdminTimKTI } from '@/types/entities/pre-event/kti';

export default function DokumenCard({
  tim,
  className,
}: {
  tim?: DetailAdminTimKTI;
  className?: string;
}) {
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

      {tim && (
        <DokumenPendukung
          uploadTwibbon={tim.twibbon}
          buktiRepost={tim.bukti_repost}
          followSosmed={tim.follow_sosmed}
          fileAbstrak={tim.abstrak}
        />
      )}
    </section>
  );
}
