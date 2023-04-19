import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import api from '@/lib/api';

enum ButtonVariant {
  'red',
  'yellow',
  'green',
  'outline',
  'basic',
  'discolored',
}
enum ButtonSize {
  'small',
  'base',
  'large',
}

type ButtonProps = {
  url: string;
  size: keyof typeof ButtonSize;
  variant: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;

const ConvertToCSV = ({ url, size = 'base', variant = 'red' }: ButtonProps) => {
  const [csvData, setCsvData] = useState<string>('');

  const handleDownload = () => {
    try {
      api.get(url).then((response) => {
        setCsvData(JSON.stringify(response.data));
      });
      const jsonArray = JSON.parse(csvData);
      // ... rest of the CSV conversion code
      const headers = Object.keys(jsonArray[0]);

      // Map each object to a CSV row
      const csvRows = jsonArray.map((object: { [x: string]: string }) =>
        headers.map((header) => object[header]).join(';')
      );

      // Add the headers as the first row
      csvRows.unshift(headers.join(';'));
      csvRows.unshift('sep=;');

      const csvString = csvRows.join('\n');

      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

      // Create a download link for the blob
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'data.csv';
      downloadLink.click();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error parsing CSV data:', error);
    }
  };

  // return button to download CSV
  return (
    <Button size={size} variant={variant} onClick={() => handleDownload()}>
      Download CSV
    </Button>
  );
};

export default ConvertToCSV;
