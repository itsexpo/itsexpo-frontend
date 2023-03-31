import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import * as React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

import Button from '@/components/buttons/Button';
import Loading from '@/components/Loading';
import Typography from '@/components/typography/Typography';

type PDFViewerProps = {
  url: string;
};

const PDFViewer = React.forwardRef<HTMLDivElement, PDFViewerProps>(
  ({ url }: { url: string }, ref) => {
    const [numPages, setNumPages] = React.useState<number>();
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
    // Use Ref
    const maxPages = React.useRef<number>(0);
    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
      setNumPages(1);
      maxPages.current = numPages;
    };

    return (
      <div ref={ref}>
        <Document
          file={url}
          className=''
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className='flex justify-center items-center h-full'>
              <Loading />
            </div>
          }
          onLoadProgress={({ loaded, total }) => {
            <div className='flex justify-center items-center h-full'>
              <p>
                {loaded} of {total}
              </p>
            </div>;
          }}
        >
          <Page
            pageNumber={numPages}
            className='border border-typo-inline rounded-md duration-150 transition-all hover:shadow-md'
          />
        </Document>
        <div className='flex justify-center items-center space-x-2 mt-4'>
          <Button
            className='p-2'
            variant='outline'
            onClick={() => {
              if (numPages && numPages > 1) {
                setNumPages(numPages - 1);
              }
            }}
          >
            Prev
          </Button>
          <Button
            className='p-2'
            variant='outline'
            onClick={() => {
              if (numPages && numPages < maxPages.current) {
                setNumPages(numPages + 1);
              }
            }}
          >
            Next
          </Button>
        </div>

        <Typography variant='p' className='text-center py-2'>
          Page {numPages} of {maxPages.current}
        </Typography>
      </div>
    );
  }
);

export default PDFViewer;
