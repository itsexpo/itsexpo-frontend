import React from 'react';
import { toast } from 'react-hot-toast';

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
  name: string;
} & React.ComponentPropsWithRef<'button'>;

const ConvertToCSV = ({
  url,
  size = 'base',
  variant = 'red',
  name,
}: ButtonProps) => {
  const handleDownload = async () => {
    try {
      toast.promise(
        (async () => {
          const response = await api.get(url);
          const jsonArray = JSON.parse(JSON.stringify(response.data));

          const headers = Object.keys(jsonArray[0]);

          // Map each object to a CSV row
          const csvRows = jsonArray.map((object: { [x: string]: string }) =>
            headers.map((header) => object[header]).join(';')
          );

          // Add the headers as the first row
          csvRows.unshift(headers.join(';'));
          csvRows.unshift('sep=;');

          const csvString = csvRows.join('\n');

          const blob = new Blob([csvString], {
            type: 'text/csv;charset=utf-8;',
          });

          // Create a download link for the blob
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(blob);
          downloadLink.download = `${name}.csv`;
          downloadLink.click();
        })(),
        {
          loading: 'Downloading CSV',
          success: 'CSV downloaded',
          error: 'Error downloading CSV',
        }
      );
    } catch (error) {
      toast.error('Error downloading CSV');
    }
  };

  return (
    <Button size={size} variant={variant} onClick={() => handleDownload()}>
      Download CSV
    </Button>
  );
};

export default ConvertToCSV;
