import NextImage from '@/components/NextImage';
import { ExtractProps } from '@/types/helper';

type Timeline = {
  img: ExtractProps<typeof NextImage>;
  date: string;
  caption: string;
};

const jurnalistikTimelineContents: Timeline[] = [
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '1 April - 1 Mei 2023',
    caption: 'Masa Pendaftaran',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '27 Mei 2023',
    caption: 'Technical Meeting',
  },
  {
    img: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '121',
      height: '66',
    },
    date: '1 - 4 Juni 2023',
    caption: 'Pelaksanaan Lomba 1',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 4',
      width: '121',
      height: '66',
    },
    date: '9 - 11 Juni 2023',
    caption: 'Pelaksanaan Lomba 2',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 5',
      width: '121',
      height: '66',
    },
    date: '21 Juni 2023',
    caption: 'Pengumuman Pemenang',
  },
];

export default jurnalistikTimelineContents;
