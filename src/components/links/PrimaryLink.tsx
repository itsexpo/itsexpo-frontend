import * as React from 'react';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

const PrimaryLinkSize = ['medium', 'small'] as const;
const PrimaryLinkVariant = ['primary', 'secondary', 'critical'] as const;

type PrimaryLinkProps = {
  size?: (typeof PrimaryLinkSize)[number];
  variant?: (typeof PrimaryLinkVariant)[number];
} & UnstyledLinkProps;

const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
  (
    { className, children, size = 'medium', variant = 'primary', ...rest },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'button inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring',
          'transition duration-150',
          'underline decoration-current hover:decoration-white/0 active:decoration-current disabled:hover:decoration-current',
          //*=========== Size ===========
          size === 'medium' && 'text-md md:text-lg ',
          size === 'small' && 'text-sm md:text-md',
          //*======== Size ===========
          //*=========== Variant ===========
          variant === 'primary' && [
            'text-primary-500 hover:text-primary-600 active:text-primary-700',
            'focus-visible:ring-primary-400',
          ],
          variant === 'secondary' && [
            'text-black', // color config?
            'focus-visible:ring-secondary-400',
          ],
          variant === 'critical' && [
            'text-critical-500 hover:text-critical-600 active:text-critical-600',
            'focus-visible:ring-critical-400',
          ],
          //*======== Variant ===========
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default PrimaryLink;
