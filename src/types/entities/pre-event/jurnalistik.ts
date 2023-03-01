import { FileWithPreview } from '@/types/dropzone';

enum JenisKegiatan {
  'KHUSUS',
  'UMUM',
}

export interface Jurnalistik {
  team_role: string;
  team_name?: string;
  jenis_kegiatan: keyof typeof JenisKegiatan;
  name: string;
  province: string;
  kabupaten: string;
  asal_instansi: string;
  id_line: string;

  id_card: FileWithPreview;
  follow_sosmed: FileWithPreview;
  share_poster: FileWithPreview;
}
