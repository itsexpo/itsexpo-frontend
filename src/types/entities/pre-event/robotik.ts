import NextImage from '@/components/NextImage';
import { ExtractProps } from '@/types/helper';

export type TimelineRobotikData = {
  img: ExtractProps<typeof NextImage>;
  date: string;
  caption: string;
};

export type RobotikSubContestData = {
  img: ExtractProps<typeof NextImage>;
  title: string;
  caption: string;
};

export type JuriRobotikData = {
  img: ExtractProps<typeof NextImage>;
  name: string;
  position: string;
  description: string;
};

export type HadiahRobotikData = {
  img: ExtractProps<typeof NextImage>;
  text: string;
  prize: string;
};

export type FAQRobotikData = {
  title: string;
  content: string;
};
