import _ from 'lodash';
import * as React from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page as ReactPdfPage } from 'react-pdf';

import Loading from '@/components/Loading';
import api from '@/lib/api';
import { base64FiletoBlob, ConstructBase64File } from '@/lib/buildFile';

type PdfFlipBookProps = {
  pdfUrl: string;
  fromServer?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

const Page = React.forwardRef<
  HTMLDivElement,
  { pageNumber: number; page: number; isDesktop: boolean }
>(({ pageNumber: number, isDesktop }, ref) => {
  return (
    <div ref={ref} className='md:!w-[400px] !w-[290px]'>
      <ReactPdfPage pageNumber={number} width={isDesktop ? 400 : 276} />
    </div>
  );
});

/**
 * Shows a flipbook from a PDF file
 * @param file URL within public folder
 * @param fromServer Fetch url path from the server
 */
export default function PDFFlipBook({
  pdfUrl,
  fromServer = false,
}: PdfFlipBookProps) {
  // State
  const [fileData, setFileData] = React.useState<string>(pdfUrl);
  const [numPages, setNumPages] = React.useState<number>();
  const [isDesktop, setIsDesktop] = React.useState<boolean>(false);

  const maxPages = React.useRef<number>(1);

  // OnLoadSuccess
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(1);
    maxPages.current = numPages;
    if (window.innerWidth > 768) setIsDesktop(true);
  };

  // Callbacks
  const getImageURL = React.useCallback(async ({ url }: { url: string }) => {
    const response = api
      .get(url, {
        responseType: 'arraybuffer',
      })
      .then((response) => ConstructBase64File(response))
      .then((response) => setFileData(base64FiletoBlob(response)));
    return response;
  }, []);

  React.useEffect(() => {
    if (fromServer) {
      getImageURL({ url: `/stream_image?path=${pdfUrl}` });
    }
  }, [pdfUrl, fromServer, getImageURL]);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) setIsDesktop(true);
      else setIsDesktop(false);
    });

    return () => {
      window.removeEventListener('resize', () => {
        if (window.innerWidth > 768) setIsDesktop(true);
        else setIsDesktop(false);
      });
    };
  }, []);

  return (
    <div>
      <Document
        file={fileData}
        className='relative flex items-center justify-center overflow-hidden'
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
          minHeight={isDesktop ? 600 : 400}
          maxHeight={1533}
          className='md:w-[400px] w-[320px]'
          startPage={0}
          drawShadow={true}
          flippingTime={800}
          usePortrait={true}
          startZIndex={20}
          autoSize={false}
          maxShadowOpacity={0.1}
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
              return (
                <Page
                  pageNumber={i + 1}
                  key={i}
                  page={numPages}
                  isDesktop={isDesktop}
                />
              );
            })}
        </HTMLFlipBook>
      </Document>
    </div>
  );
}
