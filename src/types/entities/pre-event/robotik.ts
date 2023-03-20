import NextImage from '@/components/NextImage';
import { FileWithPreview } from '@/types/dropzone';
import { ExtractProps } from '@/types/helper';

export interface RobotikPendaftaranForm {
  member_type: string;
  team_name?: string;
  name: string;
  provinsi_id: string;
  kabupaten_id: string;
  asal_instansi: string;
  opus_description: string; //dummy

  id_card: FileWithPreview[];
  follow_sosmed: FileWithPreview[];
  share_poster: FileWithPreview[];
}

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
