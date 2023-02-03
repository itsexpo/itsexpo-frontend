import { RowData, Table } from '@tanstack/react-table';
import * as React from 'react';
import { FiSearch, FiXCircle } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

type FilterProps<T extends RowData> = {
  table: Table<T>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Filter<T extends RowData>({
  className,
  table,
  ...rest
}: FilterProps<T>) {
  const handleClearFilter = () => table.setGlobalFilter('');

  return (
    <div className={clsxm('relative mt-1 self-start', className)} {...rest}>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <FiSearch className='text-typo text-xl' />
      </div>
      <input
        type='text'
        value={table.getState().globalFilter ?? ''}
        onChange={(e) => {
          table.setGlobalFilter(String(e.target.value));
        }}
        className={clsxm(
          'block rounded-lg pl-9 text-sm shadow-sm',
          'border-secondary-250 bg-secondary-250 focus:border-primary-border focus:ring-0',
          'placeholder:text-typo-tertiary',
          'caret-primary-400'
        )}
        placeholder='Search...'
      />
      {table.getState().globalFilter !== '' && (
        <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
          <button type='button' onClick={handleClearFilter} className='p-1'>
            <FiXCircle className='text-typo-icons text-xl text-danger-main' />
          </button>
        </div>
      )}
    </div>
  );
}
