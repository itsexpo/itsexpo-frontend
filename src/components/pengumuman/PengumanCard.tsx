import { format } from 'date-fns';

import Typography from '@/components/typography/Typography';

type PengumumanCardProps = {
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
} & React.ComponentPropsWithoutRef<'div'>;

export default function PengumumanCard({
  title,
  description,
  created_at,
  updated_at,
}: PengumumanCardProps) {
  const isNew =
    new Date().getTime() - new Date(created_at).getTime() < 86400000 ||
    new Date().getTime() - new Date(updated_at).getTime() < 86400000;
  return (
    <div className='border-typo-outline border-[1px] rounded-md px-3 py-4 space-y-2'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <Typography
            as='p'
            variant='p'
            className='text-typo-primary font-semibold'
          >
            {title}
          </Typography>
          <div className='py-1 px-3 rounded-2xl bg-success-600 w-fit'>
            {isNew && (
              <Typography
                as='p'
                variant='c'
                className='text-typo-white font-medium'
              >
                NEW!
              </Typography>
            )}
          </div>
        </div>
        <Typography
          as='p'
          variant='c'
          className='text-typo-icon text-end md:text-center'
        >
          {new Date(updated_at).getTime() > new Date(created_at).getTime() ? (
            <>
              <span className='hidden md:inline'>Diperbarui pada </span>
              {updated_at && format(new Date(updated_at), 'dd MMMM yyyy')}
            </>
          ) : (
            <>{created_at && format(new Date(created_at), 'dd MMMM yyyy')}</>
          )}
        </Typography>
      </div>
      <Typography as='p' variant='b1' className='text-typo-secondary'>
        {description}
      </Typography>
    </div>
  );
}
