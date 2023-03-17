import NextImage from '@/components/NextImage';
import { FileWithPreview } from '@/types/dropzone';
import { ExtractProps } from '@/types/helper';

export interface KTIPendaftaranForm {
  team_name: string;
  asal_instansi: string;
  nama_ketua: string;
  no_telp_ketua: string;

  team_member: string;

  abstrak: FileWithPreview[];
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

export interface DetailPendaftarJurnalistik {
  id_tim: string;
  name_tim: string;
  ketua_tim: boolean;
  code_tim: string;

  status: {
    status: boolean;
    pembayaran: string;
  };
  category_jurnalistik: string;
  peserta: Array<Peserta>;
  jenis_kegiatan: string;

  personal: {
    id: string;
    user_id: string;
    nama: string;
    provinsi: string;
    kabupaten: string;
    asal_instansi: string;
  };
}

export interface DetailTimJurnalistik {
  team_name: string;
  team_code: string;
  payment: {
    payment_status:
      | 'WAITING_PAYMENT'
      | 'REVISI'
      | 'GAGAL'
      | 'SUCCESS'
      | 'WAITING_VERIFICATION';
    payment_image: string;
  };
  team_member: Array<{
    name: string;
    ketua: 'KETUA' | 'MEMBER';
    provinsi: string;
    kabupaten: string;
    id_line: string;
    id_card_url: string;
    follow_sosmed_url: string;
    share_poster_url: string;
  }>;
}

export interface JurnalistikVerification {
  id_jurnalistik?: string;
  status: 'TERIMA' | 'TOLAK';
}
