import 'swiper/css';
import 'swiper/css/autoplay';

import { useQuery } from '@tanstack/react-query';
import * as React from 'react';

import PengumumanCard from '@/components/pengumuman/PengumanCard';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import { ApiReturn } from '@/types/api';

type PengumumanEventCardProps = {
  id: string;
} & React.ComponentPropsWithoutRef<'div'>;

type Pengumuman = {
  id: string;
  list_event_id: number;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
};

export default function PengumumanEventCard({ id }: PengumumanEventCardProps) {
  const { data: pengumumanData, isLoading } = useQuery<ApiReturn<Pengumuman[]>>(
    [`/pengumuman?event_id=${id}`]
  );

  return (
    <div
      className={clsxm(
        'w-full p-6 bg-typo-white rounded-xl space-y-4 border-typo-outline border-[1px] max-h-[300px] overflow-auto'
      )}
    >
      <Typography as='h6' variant='h6' className='text-typo-primary font-bold'>
        Pengumuman
      </Typography>
      <div
        className={clsxm(
          'grid gap-2',
          pengumumanData?.data.length || 0 > 1
            ? 'md:grid-cols-2 grid-cols-1'
            : 'grid-cols-1'
        )}
      >
        {isLoading && (
          <Typography as='p' variant='p' className='text-typo-primary'>
            Memuat...
          </Typography>
        )}
        {pengumumanData && pengumumanData.data.length > 0 ? (
          pengumumanData.data.map(
            ({ title, description, created_at, updated_at }, index) => (
              <PengumumanCard
                key={index + title}
                title={title}
                description={description}
                created_at={created_at}
                updated_at={updated_at}
              />
            )
          )
        ) : (
          <Typography as='p' variant='p' className='text-typo-primary'>
            Tidak ada pengumuman
          </Typography>
        )}
      </div>
    </div>
  );
}
