import { FileWithPreview } from '@/types/dropzone';

enum JenisKegiatan {
  'KHUSUS',
  'UMUM',
}

enum CategoryLomba {
  'BLOGGER',
  'TELEVISION',
}

export interface Jurnalistik {
  member_type: string;
  team_name?: string;
  name: string;
  lomba_category?: keyof typeof CategoryLomba;
  jenis_kegiatan: keyof typeof JenisKegiatan;
  provinsi_id: string;
  kabupaten_id: string;
  asal_instansi: string;
  id_line: string;

  id_card: FileWithPreview[];
  follow_sosmed: FileWithPreview[];
  share_poster: FileWithPreview[];
}
