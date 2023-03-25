import NextImage from '@/components/NextImage';
import { FileWithPreview } from '@/types/dropzone';
import { PaymentId } from '@/types/entities/pembayaran';
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

export type AdminJurnalistikColumn = {
  ketua_tim: string;
  nama_tim: string;
  kode_tim: string;
  created_at: string;
  status_pembayaran:
    | 'REVISI'
    | 'GAGAL'
    | 'SUCCESS'
    | 'AWAITING VERIFICATION'
    | 'AWAITING PAYMENT';
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

export interface JurnalistikVerification {
  id_jurnalistik?: string;
  status: 'TERIMA' | 'TOLAK';
}
