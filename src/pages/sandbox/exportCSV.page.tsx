import React from 'react';

import ConvertToCSV from '@/components/ExportExcel';

const exportCSV = () => {
  return (
    <div className='p-4'>
      <ConvertToCSV
        size='base'
        variant='outline'
        url='https://jsonplaceholder.typicode.com/todos'
        name='Todos'
      />
    </div>
  );
};

export default exportCSV;
