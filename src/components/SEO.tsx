import { NextSeo, NextSeoProps } from 'next-seo';

type SEOProps = {
  title: string;
  description?: string;
} & NextSeoProps;

export default function SEO({ title, description, ...rest }: SEOProps) {
  return (
    <NextSeo
      title={title}
      description={description}
      {...rest}
      openGraph={{
        type: 'website',
        url: 'https://expo-its.com',
        title: 'ITS EXPO 2023',
        description:
          "Rangkaian Kreativitas Keluarga Mahasiswa ITS dalam Acara 'Salam Seni, Ilmu, dan Budaya'",
        images: [
          {
            url: 'https://expo-its.com/images/og-itsexpo.png',
            width: 1200,
            height: 627,
            alt: 'ITS EXPO 2023',
          },
        ],
      }}
    />
  );
}
