import { AxiosResponse } from 'axios';

export function ConstructBase64File(res: AxiosResponse) {
  const base64string = Buffer.from(
    new Uint8Array(res.data).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
    }, ''),
    'binary'
  ).toString('base64');

  const contentType = res.headers['content-type'];
  return {
    data: `data:${contentType};base64,${base64string}`,
  };
}

export function base64FiletoBlob(res: { data: string }) {
  const base64WithoutPrefix = res.data.replace(
    /^data:application\/pdf;base64,/,
    ''
  );
  const bytes = atob(base64WithoutPrefix);
  let length = bytes.length;
  const out = new Uint8Array(length);
  while (length--) {
    out[length] = bytes.charCodeAt(length);
  }
  const blob = new Blob([out], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  return url;
}
