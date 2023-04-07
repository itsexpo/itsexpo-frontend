import { FileWithPreview } from '@/types/dropzone';

export interface WahanaSeniPendaftaranForm {
  team_name: string;
  team_member: Array<{
    nama: string;
    nrp: string;
    departemen: number;
    kontak_aktif: string;
    ktm: FileWithPreview[];
  }>;
}
