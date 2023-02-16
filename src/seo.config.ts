// @SEE https://www.npmjs.com/package/next-seo#default-seo-configuration

import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.expo-its.com/',
    siteName: 'ITS Expo 2023',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  titleTemplate: '%s | ITS EXPO 2023',
  description: 'this is a description',
  defaultTitle: 'ITS EXPO 2023',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/images/favicon.ico',
    },
  ],
};

export default config;
