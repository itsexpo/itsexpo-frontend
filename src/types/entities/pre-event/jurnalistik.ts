import NextImage from '@/components/NextImage';
import { FileWithPreview } from '@/types/dropzone';
import { ExtractProps } from '@/types/helper';

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

export type TimelineJurnalistikData = {
  img: ExtractProps<typeof NextImage>;
  date: string;
  caption: string;
};

export type JurnalistikSubContestData = {
  img: ExtractProps<typeof NextImage>;
  title: string;
  caption: string;
};

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

export type FAQJurnalistikData = {
  title: string;
  content: string;
};

export type Peserta = {
  id: string;
  user_id: string;
  name: string;
  ketua: boolean;
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
