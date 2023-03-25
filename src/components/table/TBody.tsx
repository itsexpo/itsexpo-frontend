import { flexRender, RowData, Table } from '@tanstack/react-table';
import * as React from 'react';

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

type TBodyProps<T extends RowData> = {
  table: Table<T>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TBody<T extends RowData>({
  className,
  table,
  ...rest
}: TBodyProps<T>) {
  return (
    <tbody className={clsxm(className)} {...rest}>
      {table.getRowModel().rows.map((row, index) => (
        <tr
          key={row.id}
          className={clsxm(index % 2 === 0 ? 'bg-white' : 'bg-typo-light')}
        >
          {row.getVisibleCells().map((cell) => (
            <Typography
              key={cell.id}
              as='td'
              variant='b2'
              className='truncate whitespace-nowrap py-4 px-3'
              title={cell.getValue() as string}
              style={{ maxWidth: cell.column.getSize() }}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Typography>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
