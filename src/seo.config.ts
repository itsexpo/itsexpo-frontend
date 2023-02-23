// @SEE https://www.npmjs.com/package/next-seo#default-seo-configuration

import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'in_ID',
    url: 'https://www.expo-its.com',
    siteName: 'ITS Expo 2023',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  titleTemplate: '%s | ITS EXPO 2023',
  description:
    "Rangkaian Kreativitas Keluarga Mahasiswa ITS dalam Acara 'Salam Seni, Ilmu, dan Budaya'",
  defaultTitle: 'ITS EXPO 2023',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/images/favicon.ico',
    },
  ],
};

export default config;
