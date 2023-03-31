import * as React from 'react';

import PDFFlipBook from '@/components/PdfFlipBook';
import Typography from '@/components/typography/Typography';

export default function PdFFlipBookPage() {
  const path = '/example.pdf';
  return (
    <div className='layout py-20 space-x-4'>
      <Typography variant='h1' font='upakarti'>
        PDF Flip Book
      </Typography>
      <div className='md:w-1/2 w-full '>
        <PDFFlipBook pdfUrl={path} fromServer={false} />
      </div>
    </div>
  );
}
