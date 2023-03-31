import _ from 'lodash';
import * as React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page as ReactPdfPage, pdfjs } from 'react-pdf';

import Loading from '@/components/Loading';
import api from '@/lib/api';
import { base64FiletoBlob, ConstructBase64File } from '@/lib/buildFile';

type PdfFlipBookProps = {
  pdfUrl: string;
  fromServer: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

const Page = React.forwardRef<
  HTMLDivElement,
  { pageNumber: number; page: number }
>(({ pageNumber: number }, ref) => {
  let width = 315;
  const _width = window.innerWidth * 0.4;
  if (_width < 315) {
    width = 315;
  } else {
    width = 400;
  }

  return (
    <div ref={ref} className='relative'>
      <ReactPdfPage pageNumber={number} width={width} />
    </div>
  );
});
export default function PDFFlipBook({ pdfUrl, fromServer }: PdfFlipBookProps) {
  const [fileData, setfileData] = React.useState<string>();
  const [numPages, setNumPages] = React.useState<number>();
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  const maxPages = React.useRef<number>(1);
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(1);
    maxPages.current = numPages;
  };
  const getImageURL = React.useCallback(async ({ url }: { url: string }) => {
    api
      .get(url, {
        responseType: 'arraybuffer',
      })
      .then((res) => {
        return ConstructBase64File(res);
      })
      .then((res) => {
        setfileData(base64FiletoBlob(res));
      });
  }, []);

  React.useEffect(() => {
    if (pdfUrl) {
      if (fromServer) getImageURL({ url: `/stream_image?path=${pdfUrl}` });
      else setfileData(pdfUrl);
    }
  }, [fromServer, getImageURL, pdfUrl]);

  return (
    <div>
      <Document
        file={fileData}
        className='relative overflow-hidden'
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className='flex justify-center items-center'>
            <Loading />
          </div>
        }
      >
        <HTMLFlipBook
          width={400}
          height={600}
          size='stretch'
          minWidth={315}
          maxWidth={1000}
          minHeight={600}
          maxHeight={1533}
          className='absolute top-0 left-0 !w-[400px]'
          startPage={0}
          drawShadow={false}
          flippingTime={300}
          usePortrait={true}
          startZIndex={20}
          autoSize={false}
          maxShadowOpacity={0}
          showCover={false}
          mobileScrollSupport={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={0}
          style={{ backgroundColor: 'transparent' }}
          showPageCorners={false}
          disableFlipByClick={false}
        >
          {numPages &&
            _.times(maxPages.current, (i) => {
              return <Page pageNumber={i + 1} key={i} page={numPages} />;
            })}
        </HTMLFlipBook>
      </Document>
    </div>
  );
}
