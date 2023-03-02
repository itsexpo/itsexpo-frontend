import { flexRender, RowData, Table } from '@tanstack/react-table';
import * as React from 'react';

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
            <td
              key={cell.id}
              className='truncate whitespace-nowrap py-4 pl-[30px] pr-3'
              style={{ maxWidth: cell.column.getSize() }}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
