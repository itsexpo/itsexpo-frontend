import NextImage from '@/components/NextImage';
import { ExtractProps } from '@/types/helper';

type Timeline = {
  img: ExtractProps<typeof NextImage>;
  date: string;
  caption: string;
};

const landingTimelineKtiContents: Timeline[] = [
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '1-30 April 2023',
    caption: 'Masa Pendaftaran dan Pengumpulan Abstrak',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '30 April 2023',
    caption: 'Deadline Pengumpulan Abstrak',
  },
  {
    img: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '121',
      height: '66',
    },
    date: '2 Mei 2023',
    caption: 'Pengumuman Lolos Abstrak',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 4',
      width: '121',
      height: '66',
    },
    date: '3-12 Mei 2023',
    caption: 'Full Paper Gelombang 1',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '13-22 Mei 2023',
    caption: 'Full Paper Gelombang 2',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '23-27 Mei 2023',
    caption: 'Penjurian Full Paper',
  },
  {
    img: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '121',
      height: '66',
    },
    date: '28 Mei 2023',
    caption: 'Pengumuman Finalis 10 Besar',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 4',
      width: '121',
      height: '66',
    },
    date: '29 Mei 2023',
    caption: 'Technical Meeting Pra Presentasi',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '2 Juni 2023',
    caption:
      'Pelaksanaan Presentasi serta Pengumuman Juara dan Penyerahan Hadiah',
  },
];

export default landingTimelineKtiContents;
