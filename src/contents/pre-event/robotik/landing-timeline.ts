import NextImage from '@/components/NextImage';
import { ExtractProps } from '@/types/helper';

type Timeline = {
  img: ExtractProps<typeof NextImage>;
  date: string;
  caption: string;
};

const landingTimelineRoboticsContents: Timeline[] = [
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '01 April - 15 Mei 2023',
    caption: 'Masa Pendaftaran',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '01 Mei -  15 Mei 2023',
    caption: 'Pengumpulan Video',
  },
  {
    img: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '121',
      height: '66',
    },
    date: '20 Mei 2023',
    caption: 'Pengumpulan Seleksi',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 4',
      width: '121',
      height: '66',
    },
    date: '28 Mei 2023',
    caption: 'Technical Meeting',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '1 Juni 2023',
    caption: 'Running Test',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '2 Juni 2023',
    caption: 'Perlombaan',
  },
];

export default landingTimelineRoboticsContents;
