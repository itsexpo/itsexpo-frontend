import * as React from 'react';
import { HiOutlineExternalLink, HiOutlinePaperClip } from 'react-icons/hi';

import UnstyledLink from '@/components/links/UnstyledLink';
import Modal from '@/components/modal/Modal';
import PDFViewer from '@/components/PdfViewer';
import api from '@/lib/api';
import { base64FiletoBlob, ConstructBase64File } from '@/lib/buildFile';

type FileFetchProps = {
  filePath: string;
  label?: string;
  width?: number;
  height?: number;
  imgClassName?: string;
  alt: string;
} & React.ComponentPropsWithoutRef<'div'>;

const FileFetch = ({
  filePath,
  label,
  className,
  ...props
}: FileFetchProps) => {
  const [fileData, setfileData] = React.useState<string>();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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
    if (filePath) {
      getImageURL({ url: `/stream_image?path=${filePath}` });
    }
  }, [getImageURL, filePath]);

  return (
    <>
      <div {...props} className='cursor-pointer'>
        {fileData && (
          <div className={className}>
            {label && (
              <>
                <label className='block font-bold text-lg pb-2'>{label}</label>
                <li
                  key={label}
                  className='flex items-center justify-between py-3 pl-3 pr-4 text-sm border border-typo-inline rounded-md hover:bg-gray-50'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className='flex items-center flex-1 w-0'>
                    <HiOutlinePaperClip
                      className='flex-shrink-0 w-5 h-5 text-gray-400'
                      aria-hidden='true'
                    />
                    <span className='flex-1 w-0 ml-2 truncate'>{label}</span>
                  </div>
                  <div className='flex items-center flex-shrink-0 ml-4 space-x-2'>
                    <UnstyledLink
                      href={fileData}
                      className='text-gray-500 rounded focus:outline-none focus:ring focus:ring-primary-500 hover:text-gray-700'
                    >
                      <HiOutlineExternalLink size={20} />
                    </UnstyledLink>
                  </div>
                </li>
              </>
            )}
          </div>
        )}
        {fileData && (
          <Modal
            open={isOpen}
            setOpen={setIsOpen}
            modalContainerClassName='!max-w-2xl'
          >
            <Modal.Title className='font-semibold'>{label}</Modal.Title>
            <Modal.Body>
              <PDFViewer url={fileData} />
            </Modal.Body>
          </Modal>
        )}
      </div>
    </>
  );
};

export default FileFetch;
