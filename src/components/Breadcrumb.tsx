import * as React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

const breadcrumbs = {
  // Admin
  '/dashboard/admin/user': 'User',
  '/dashboard/admin/role': 'Role',
  '/dashboard/admin/role/detail': 'Detail Role',
  '/dashboard/admin/permission': 'Permission',
  '/dashboard/admin/url-shortener': 'URL Shortener',
  '/dashboard/admin/url-shortener/generate': 'Generate',
  '/dashboard/admin/data-management/': 'Data Management',
  '/dashboard/admin/data-management/jurnalistik': 'Jurnalistik',
  '/dashboard/admin/data-management/jurnalistik/detail': 'Detail',
  '/dashboard/admin/data-management/kti': 'KTI',
  '/dashboard/admin/data-management/kti/detail': 'Detail',
  '/dashboard/admin/data-management/robotika': 'Robotika',
  '/dashboard/admin/data-management/robotika/detail': 'Detail',

  // Pengumuman
  '/dashboard/admin/announcement': 'Pengumuman',
  '/dashboard/admin/announcement/detail': 'Detail',
  '/dashboard/admin/announcement/buat': 'Buat',

  // User
  '/dashboard/pre-event/jurnalistik': 'Journalistic',
  '/dashboard/pre-event/jurnalistik/main': 'Dashboard',
  '/dashboard/pre-event/jurnalistik/join': 'Join Team',
  '/dashboard/pre-event/jurnalistik/pendaftaran': 'Pendaftaran',
  '/dashboard/pre-event/jurnalistik/pembayaran': 'Pembayaran',

  // Robotik
  '/dashboard/pre-event/robotika': 'Robot In Action',
  '/dashboard/pre-event/robotika/join': 'Join',
  '/dashboard/pre-event/robotika/pendaftaran': 'Pendaftaran',
  '/dashboard/pre-event/robotika/main': 'Dashboard',
  '/dashboard/pre-event/robotika/pembayaran': 'Pembayaran',

  // KTI
  '/dashboard/pre-event/kti': 'KTI',
  '/dashboard/pre-event/kti/main': 'Dashboard',
  '/dashboard/pre-event/kti/pendaftaran': 'Pendaftaran',
  '/dashboard/pre-event/kti/pembayaran': 'Pembayaran',
};
type BreadcrumbProps = {
  crumbs: Array<keyof typeof breadcrumbs>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Breadcrumb({
  className,
  crumbs: _crumbs,
  ...rest
}: BreadcrumbProps) {
  // split array into the last part and the rest
  const lastCrumb = _crumbs[_crumbs.length - 1];
  const crumbs = _crumbs.slice(0, _crumbs.length - 1);

  return (
    <div className={clsxm('space-x-1', className)} {...rest}>
      {crumbs.map((crumb) => (
        <React.Fragment key={crumb}>
          <PrimaryLink
            href={crumb}
            variant='success'
            className='font-semibold no-underline'
          >
            {breadcrumbs[crumb]}
          </PrimaryLink>
          <span className='text-md font-medium'>/</span>
        </React.Fragment>
      ))}
      <Typography
        as='span'
        className={crumbs.length == 0 && 'font-bold'}
        color={crumbs.length == 0 && 'success'}
      >
        {breadcrumbs[lastCrumb]}
      </Typography>
    </div>
  );
}
