import * as React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

const breadcrumbs = {
  // Admin
  '/admin/user': 'User',
  '/admin/role': 'Role',
  '/admin/role/detail': 'Detail Role',
  '/admin/permission': 'Permission',
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
          <PrimaryLink href={crumb} className='font-medium'>
            {breadcrumbs[crumb]}
          </PrimaryLink>
          <span className='text-sm font-medium'>/</span>
        </React.Fragment>
      ))}
      <Typography as='span'>{breadcrumbs[lastCrumb]}</Typography>
    </div>
  );
}
