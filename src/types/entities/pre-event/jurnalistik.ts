import NextImage from '@/components/NextImage';
import { FileWithPreview } from '@/types/dropzone';
import { ExtractProps } from '@/types/helper';

enum JenisKegiatan {
  'KHUSUS',
  'UMUM',
}

export interface Jurnalistik {
  team_role: string;
  team_name?: string;
  name: string;
  jenis_kegiatan: keyof typeof JenisKegiatan;
  provinsi: string;
  kabupaten: string;
  asal_instansi: string;
  id_line: string;

  id_card: FileWithPreview;
  follow_sosmed: FileWithPreview;
  share_poster: FileWithPreview;
}

export type JuriJurnalistikData = {
  img: ExtractProps<typeof NextImage>;
  name: string;
  position: string;
  description: string;
};

export type HadiahJurnalistikData = {
  img: ExtractProps<typeof NextImage>;
  text: string;
  prize: string;
};
