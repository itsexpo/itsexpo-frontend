/* eslint-disable @next/next/no-img-element */
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import * as React from 'react';

import api from '@/lib/api';

type ImageFetchProps = {
  imgPath: string;
  tag: string;
  label: string;
  alt: string;
} & React.ComponentPropsWithoutRef<'div'>;

const ImageFetch = ({ imgPath, label, alt, ...props }: ImageFetchProps) => {
  const [imgSrc, setImgSrc] = React.useState<string>('');

  const getImageURL = React.useCallback(async ({ url }: { url: string }) => {
    api
      .get(url, {
        responseType: 'arraybuffer',
      })
      .then((res) => {
        const base64string = btoa(
          new Uint8Array(res.data).reduce(function (data, byte) {
            return data + String.fromCharCode(byte);
          }, '')
        );

        const contentType = res.headers['content-type'];
        return {
          data: `data:${contentType};base64,${base64string}`,
        };
      })
      .then((res) => {
        setImgSrc(res.data);
      });
  }, []);

  React.useEffect(() => {
    if (imgPath) {
      getImageURL({ url: `/stream_image?path=${imgPath}` });
    }
  }, [getImageURL, imgPath]);

  return (
    <>
      <div {...props} className='cursor-pointer'>
        {imgSrc && (
          <div className='w-full'>
            <label className='block text-sm font-semibold text-typo pb-2'>
              {label}
            </label>

            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <img src={imgSrc} alt={alt} className='w-full' />
            </LightGallery>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageFetch;
