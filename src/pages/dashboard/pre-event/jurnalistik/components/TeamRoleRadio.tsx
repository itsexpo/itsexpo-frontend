import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import get from 'lodash.get';
import * as React from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';
import { IconType } from 'react-icons/lib';

export type TeamRoleRadioProps = {
  /** Input label */
  label: string;
  options: {
    label: string;
    value: string;
    icon?: IconType;
  }[];
  id: string;
  /** Add value only if you're using grouped checkbox, omit value if using a single checkbox */
  value?: string | number;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
  iconClassName?: string;
};

export default function TeamRoleRadio({
  validation,
  options,
  label,
  id,
  iconClassName,
}: TeamRoleRadioProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);
  return (
    <div className=''>
      <Controller
        control={control}
        rules={validation}
        name={id}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange}>
            <RadioGroup.Label className='text-sm font-semibold '>
              {label}
            </RadioGroup.Label>
            <div className='gap-4 flex flex-wrap mt-1'>
              {options.map((item) => (
                <RadioGroup.Option
                  key={item.value}
                  value={item.value}
                  className={({ active, checked }) =>
                    `${error ? 'ring-1 ring-critical-500 bg-critical-100' : ''}
                    ${active ? 'ring-2 ring-white ring-opacity-60 ' : ''}
                  ${
                    checked
                      ? 'bg-success-100 text-success-600 border border-success-500'
                      : 'bg-white border border-typo-outline'
                  }
                    relative flex cursor-pointer rounded-lg px-12 md:px-20 py-5 focus:outline-none`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className='flex flex-col items-center justify-center gap-y-2'>
                        <RadioGroup.Label
                          as='p'
                          className={` ${
                            checked ? 'text-success-600' : 'text-typo-icon'
                          }`}
                        >
                          {item.icon && (
                            <item.icon
                              className={clsx(iconClassName)}
                              size={48}
                            />
                          )}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as='span'
                          className={`inline ${
                            checked ? 'text-success-600' : 'text-typo-icon'
                          } font-medium`}
                        >
                          {item.label}
                        </RadioGroup.Description>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        )}
      ></Controller>
      <div className='mt-1'>
        {error && (
          <span className='text-sm text-red-500 flex gap-x-1'>
            <HiExclamationCircle className='text-xl text-red-500' />
            {error?.message as unknown as string}
          </span>
        )}
      </div>
    </div>
  );
}
