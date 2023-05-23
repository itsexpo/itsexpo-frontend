import NextImage from '@/components/NextImage';
import { FileWithPreview } from '@/types/dropzone';
import { PaymentId } from '@/types/entities/pembayaran';
import { Payment } from '@/types/entities/pre-event/jurnalistik';
import { ExtractProps } from '@/types/helper';

export interface KTIPendaftaranForm {
  team_name: string;
  asal_instansi: string;
  nama_ketua: string;
  no_telp_ketua: string;

  team_member: {
    nama: string;
    no_telp: string;
  }[];

  file_abstrak: FileWithPreview[];
  follow_sosmed: FileWithPreview[];
  bukti_repost: FileWithPreview[];
  twibbon: FileWithPreview[];
}

export type TimelineKTIData = {
  img: ExtractProps<typeof NextImage>;
  imgDesktop?: ExtractProps<typeof NextImage>;
  date: string;
  caption: string;
};

export type KTISubContestData = {
  img: ExtractProps<typeof NextImage>;
  title: string;
  caption: string;
};

export type HadiahKTIData = {
  img: ExtractProps<typeof NextImage>;
  text: string;
  prize: string;
};

export type FAQKTIData = {
  title: string;
  content: string;
  winner_prize?: Array<string>;
};

export type Peserta = {
  id: string;
  user_id: string;
  name: string;
  ketua: boolean;
};

export type JurnalistikDataRecapType = {
  total_tim?: number;
  pembayaran?: {
    revisi: number;
    gagal: number;
    success: number;
    awaiting_verification: number;
    awaiting_payment: number;
  };
};

export interface DetailTimKTI {
  team_id: string;
  team_name: string;
  asal_instansi: string;
  lead_name: string;
  no_telp: string;
  full_paper: string;

  payment: {
    payment_id: string;
    payment_status: PaymentId;
  };

  members: Array<{
    name: string;
    no_telp: string;
  }>;

  follow_sosmed: string;
  share_poster: string;
  twibbon: string;
  abstrak: string;
}

export interface DetailAdminTimKTI {
  team_name: string;
  team_code: string;
  asal_instansi: string;
  follow_sosmed: string;
  bukti_repost: string;
  twibbon: string;
  abstrak: string;

  payment: Payment;

  team_member: Array<{
    name: string;
    ketua: string;
    no_telp: string;
  }>;
}

export interface KTIVerification {
  pembayaran_id: string;
  status_pembayaran_id: 3 | 1;
}
