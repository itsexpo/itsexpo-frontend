import NextImage from '@/components/NextImage';
import { FileWithPreview } from '@/types/dropzone';
import { ExtractProps } from '@/types/helper';

export interface CPWahanaSeniData {
  name: string;
  id_line: string;
}

export interface TimelineWahanaSeniData {
  img: ExtractProps<typeof NextImage>;
  date: string;
  caption: string;
}

export type WahanaSeniSubContestData = {
  img: ExtractProps<typeof NextImage>;
  title: string;
  caption: string;
};

export interface HadiahWahanaSeniData {
  img: ExtractProps<typeof NextImage>;
  text: string;
  prize: string;
}

export interface FAQWahanaSeniData {
  title: string;
  content: string[];
}

/** POST main-event/3d */
export interface WahanaSeniPendaftaran3DForm {
  team_name: string;
  deskripsi_karya: string;

  // Lead
  name: string;
  nrp: string;
  kontak: string;
  departemen_id: number;
  ktm: FileWithPreview[];

  // Member
  team_member: Array<{
    nama: string;
    nrp: string;
    departemen_id: number;
    kontak: string;
    ktm: FileWithPreview[];
  }>;
}

export interface PembayaranWahanaSeniData {
  bukti_bayar: FileWithPreview[];
  atas_nama: string;
  bank_id: number;
}

export interface WahanaSeniPendaftaran2D {
  name: string;
  nrp: string;
  departemen_id: number;
  kontak: string;
  ktm: FileWithPreview[];
}

/**
 * GET main-event/wahana_seni
 */

export interface WahanaSeniData {
  main_event: {
    wahana_seni: {
      '2d': {
        id: string;
        nama: string;
        nrp: string;
        departemen: string;
        kontak: string;
        ktm: string;
        status: boolean;
        payment: {
          payment_id: string;
          payment_status: string;
        };
      };
      '3d': {
        id: string;
        team_name: string;
        team_code: string;
        deskripsi_karya: string;
        payment: {
          payment_id: string;
          payment_status: string;
        };
        member: Array<AnggotaWahanaSeni>;
      };
    };
  };
}

export type AnggotaWahanaSeni = {
  name: string;
  ketua: boolean;
  nrp: string;
  departemen: string;
  kontak: string;
  ktm_url: string;
};

export type AdminWahanaSeniColumn = {
  name: string;
  id_tim: string;
  created_at: string;
  status_pembayaran:
    | 'REVISI'
    | 'GAGAL'
    | 'SUCCESS'
    | 'AWAITING VERIFICATION'
    | 'AWAITING PAYMENT';
};

export type WahanaSeniDataRecapType = {
  total_tim?: number;
  pembayaran?: {
    revisi: number;
    gagal: number;
    success: number;
    awaiting_verification: number;
    awaiting_payment: number;
  };
};
