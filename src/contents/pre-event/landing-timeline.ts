import NextImage from '@/components/NextImage';
import { ExtractProps } from '@/types/helper';

type Timeline = {
  img: ExtractProps<typeof NextImage>;
  date: string;
  caption: string;
};

const landingTimelineContents: Timeline[] = [
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '51',
    },
    date: 'Mei - Juni',
    caption: 'Pre Event ITS EXPO',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '107',
      height: '53',
    },
    date: '3 - 4 Juni',
    caption: 'Opening ITS EXPO',
  },
  {
    img: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '108',
      height: '54',
    },
    date: '9 - 10 Juni',
    caption: 'Main Event ITS EXPO',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 4',
      width: '67',
      height: '66',
    },
    date: '11 Juni',
    caption: 'Gebyar ITS EXPO 2023',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 5',
      width: '121',
      height: '51',
    },
    date: '12 Februari 2022',
    caption: 'Open Recruitment Brand Ambasador',
  },
];

export default landingTimelineContents;
