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
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '121',
      height: '66',
    },
    date: '2 Juni 2023',
    caption: 'Karya Tulis Ilmiah',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '2 - 11 Juni 2023',
    caption: 'Jurnalistic Competition',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '2 Juni 2023',
    caption: 'Robotic Competition',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 4',
      width: '121',
      height: '66',
    },
    date: '3 Juni 2023',
    caption: 'Talkshow',
  },
  {
    img: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '121',
      height: '66',
    },
    date: '4 Juni 2023',
    caption: 'Parade Budaya dan Pentas Kolosal',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 3',
      width: '121',
      height: '66',
    },
    date: '4 Juni 2023',
    caption: 'Exhibition',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '11 Juni 2023',
    caption: 'Grbyar ITS Expo 2023',
  },
];

export default landingTimelineContents;
