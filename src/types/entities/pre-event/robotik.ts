import NextImage from '@/components/NextImage';
import { FileWithPreview } from '@/types/dropzone';
import { PaymentId } from '@/types/entities/pembayaran';
import { ExtractProps } from '@/types/helper';

export interface RobotikPendaftaranForm {
  member_type: string;
  name: string;
  no_telp: string;
  team_name?: string;
  provinsi_id: string;
  kabupaten_id: string;
  asal_sekolah: string;
  deskripsi_karya: string;

  id_card: FileWithPreview[];
  follow_sosmed: FileWithPreview[];
  share_poster: FileWithPreview[];
}

export interface DetailPendaftarRobotik {
  id_tim: string;
  name_tim: string;
  ketua_tim: boolean;
  code_tim: string;
  deskripsi_karya: string;

  payment: {
    id: string;
    status: PaymentId;
  };

  peserta: Array<{
    id: string;
    name: string;
    ketua: boolean;
    share_poster: string;
    id_card: string;
    follow_sosmed: string;
  }>;

  personal: {
    id: string;
    name: string;
    follow_sosmed: string;
    id_card: string;
    share_poster: string;
    asal_instansi: string;
  };
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
