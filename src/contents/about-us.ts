import NextImage from '@/components/NextImage';
import { ExtractProps } from '@/types/helper';

type SejarahITSExpo = {
  img: ExtractProps<typeof NextImage>;
  year: string;
  caption: string;
};

type Slogan = {
  title: string;
  caption: string;
};
const sejarahITSExpo: SejarahITSExpo[] = [
  {
    img: {
      src: '/aboutus/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '51',
    },
    year: '2012',
    caption: 'ITS EXPO gabungan Pekan Ilmiah dan Hari Budaya',
  },
  {
    img: {
      src: '/aboutus/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '107',
      height: '53',
    },
    year: '2013',
    caption:
      'ITS EXPO disahkan tahunan oleh Pemprov Jatim, dengan tema 2013 kemaritiman.',
  },
  {
    img: {
      src: '/aboutus/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '108',
      height: '54',
    },
    year: '2014',
    caption: 'ITS EXPO konsep time traveler, Indonesia masa ke masa.',
  },
  {
    img: {
      src: '/aboutus/timeline-4.png',
      alt: 'timeline illustration 4',
      width: '67',
      height: '66',
    },
    year: '2015',
    caption: 'ITS EXPO mengusung tema ilusi kesadaran semu.',
  },
  {
    img: {
      src: '/aboutus/timeline-2.png',
      alt: 'timeline illustration 5',
      width: '108',
      height: '54',
    },
    year: '2016',
    caption: 'ITS EXPO mengusung tema Ekspresi Optimisme',
  },
  {
    img: {
      src: '/aboutus/timeline-3.png',
      alt: 'timeline illustration 5',
      width: '108',
      height: '54',
    },
    year: '2017',
    caption:
      'ITS EXPO tema Rectoverso, menginspirasi persatuan dan semangat, karena perbedaan hanyala sekat semu.',
  },
  {
    img: {
      src: '/aboutus/timeline-4.png',
      alt: 'timeline illustration 5',
      width: '67',
      height: '66',
    },
    year: '2019',
    caption: 'ITS EXPO kembali hadir dengan tema Manusia dalam teknologi',
  },
  {
    img: {
      src: '/aboutus/timeline-1.png',
      alt: 'timeline illustration 5',
      width: '121',
      height: '51',
    },
    year: '2021',
    caption:
      'ITS EXPO dilaksanakan secara online dengan tema Ruang Inovasi Anak Bangsa.',
  },
];

const slogan: Slogan[] = [
  {
    title: 'Seni: ',
    caption: 'sebagai wujud ekspresi jiwa manusia',
  },
  {
    title: 'Ilmu: ',
    caption: 'sebagai landasan peradaban',
  },
  {
    title: 'Budaya: ',
    caption: 'sebagai warisan luhur bangsa',
  },
];

const aboutUsSwiperContents: ExtractProps<typeof NextImage>[] = [
  {
    src: '/aboutus/about-content-1.png',
    alt: 'content gallery',
    width: '496',
    height: '344',
  },
  {
    src: '/aboutus/about-content-2.png',
    alt: 'content gallery',
    width: '496',
    height: '344',
  },
  {
    src: '/aboutus/about-content-3.png',
    alt: 'content gallery',
    width: '496',
    height: '344',
  },
  {
    src: '/aboutus/about-content-1.png',
    alt: 'content gallery',
    width: '496',
    height: '344',
  },
  {
    src: '/aboutus/about-content-2.png',
    alt: 'content gallery',
    width: '496',
    height: '344',
  },
  {
    src: '/aboutus/about-content-3.png',
    alt: 'content gallery',
    width: '496',
    height: '344',
  },
];

export { aboutUsSwiperContents, sejarahITSExpo, slogan };
