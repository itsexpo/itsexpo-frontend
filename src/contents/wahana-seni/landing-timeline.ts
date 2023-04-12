import NextImage from '@/components/NextImage';
import { ExtractProps } from '@/types/helper';

type Timeline = {
  img: ExtractProps<typeof NextImage>;
  date: string;
  caption: string;
};

const landingTimelineWahanaContents: Timeline[] = [
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '13 April - 30 April 2023',
    caption: 'Masa Pendaftaran',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '13 April -  21 Mei 2023',
    caption: 'Pengumpulan Karya',
  },
  {
    img: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '121',
      height: '66',
    },
    date: '29 Mei - 1 Juni 2023',
    caption: 'Seleksi Berkas',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 4',
      width: '121',
      height: '66',
    },
    date: '3 Juni 2023',
    caption: 'Penjurian Terbuka',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '4 Juni 2023',
    caption: 'Pengumuman Karya Terpilih',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '9 - 10 Juni 2023',
    caption: 'Exhibition ITS EXPO 2023',
  },
];

export default landingTimelineWahanaContents;
