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

export interface WahanaSeniPendaftaran2D {
  name: string;
  nrp: string;
  departemen_id: number;
  kontak: string;
  atas_nama: string;
  bank_id: number;
  ktm: FileWithPreview[];
  bukti_pembayaran: FileWithPreview[];
}
