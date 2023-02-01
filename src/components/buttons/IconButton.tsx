import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'red',
  'yellow',
  'green',
}
enum ButtonSize {
  'small',
  'base',
  'large',
}

type IconButtonProps = {
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
  icon?: IconType;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      icon: Icon,
      variant = 'outline',
      disabled: buttonDisabled,
      iconClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        disabled={buttonDisabled}
        className={clsxm(
          'button inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'transition duration-100',
          'min-h-[28px] min-w-[28px] rounded-lg p-1 md:min-h-[34px] md:min-w-[34px] md:p-2',
          //#region  //*=========== Variant ===========
          variant === 'red' && [
            'border border-typo-outline text-typo-secondary hover:bg-secondary-100 active:bg-secondary-200',
            'disabled:brightness-70 disabled:border-typo-outline disabled:bg-gray-100 disabled:text-typo-outline',
          ],

          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        {Icon && <Icon className={clsxm(iconClassName)} />}
      </button>
    );
  }
);

export default IconButton;
