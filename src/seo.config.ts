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
    handle: '@ITS_EXPO',
    site: 'https://twitter.com/ITS_EXPO',
    cardType: 'summary_large_image',
  },
  titleTemplate: '%s | ITS EXPO 2023',
  description:
    'Sebuah acara yang mewadahi seluruh Keluarga Mahasiswa ITS untuk mempertunjukan hasil pemikirannya kepada masyarakat umum yang diharapkan membawa kebermanfaatan nyata untuk masyarakat.',
  defaultTitle: 'ITS EXPO 2023',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/images/favicon.ico',
    },
  ],
};

export default config;
