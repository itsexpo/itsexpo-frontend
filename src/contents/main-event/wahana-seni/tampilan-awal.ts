import {
  CPWahanaSeniData,
  FAQWahanaSeniData,
  HadiahWahanaSeniData,
  TimelineWahanaSeniData,
  WahanaSeniSubContestData,
} from '@/types/entities/main-event/wahana-seni';

export const CPWahanaSeni: CPWahanaSeniData[] = [
  {
    name: 'Vika',
    id_line: 'vikaputri353',
  },
  {
    name: 'Zuma',
    id_line: 'miftahazuma_',
  },
];

export const timelineWahanaSeni: TimelineWahanaSeniData[] = [
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '13 April - 30 April 2023',
    caption: 'Pendaftaran',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '13 April - 21 Mei 2023',
    caption: 'Pengumpulan Karya',
  },
  {
    img: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '121',
      height: '66',
    },
    date: '-',
    caption: 'Seleksi Berkas',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 4',
      width: '121',
      height: '66',
    },
    date: '3 Juni 2023',
    caption: 'Penjurian Terbuka',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '-',
    caption: 'Pengumuman Karya Terpilih',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '-',
    caption: 'Exhibition ITS EXPO 2023',
  },
];

export const wahanaSeniSubContest: WahanaSeniSubContestData[] = [
  {
    img: {
      src: '/dashboard/main-event/wahana-seni/tampilan-awal/cabang-lomba-1.png',
      alt: 'Mahasiswa Karya Seni 2D Sub Contest',
      width: 1525,
      height: 1024,
    },
    title: 'Karya Seni 2D',
    caption: 'Mahasiswa',
  },
  {
    img: {
      src: '/dashboard/main-event/wahana-seni/tampilan-awal/cabang-lomba-2.png',
      alt: 'Mahasiswa Karya Seni 3D Sub Contest',
      width: 1525,
      height: 1024,
    },
    title: 'Karya Seni 3D',
    caption: 'Mahasiswa',
  },
];

export const hadiahWahanaSeniContents: HadiahWahanaSeniData[] = [
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-1-liputan-televisi-bg.png',
      alt: 'winner prize',
      width: '500',
      height: '160',
    },
    text: 'Winner',
    prize: 'Rp1.000.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-3-liputan-televisi-bg.png',
      alt: 'karya favorit prize',
      width: '500',
      height: '160',
    },
    text: 'Karya Favorit',
    prize: 'Rp?.???.???,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-1-liputan-vlog-bg.png',
      alt: 'runner up prize',
      width: '500',
      height: '160',
    },
    text: 'Runner-Up',
    prize: 'Rp1.000.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-3-liputan-vlog-bg.png',
      alt: 'honorable mention prize',
      width: '500',
      height: '160',
    },
    text: 'Honorable Mention',
    prize: 'Rp?.???.???,-',
  },
];

export const FAQWahanaSeniContents: FAQWahanaSeniData[] = [
  {
    title:
      'Apakah masyarakat umum dapat berpartisipasi dalam Sayembara Karya Mahasiswa di ITS EXPO 2023?',
    content: [
      'Sayembara Karya Mahasiswa dikhususkan untuk para mahasiswa di Institut Teknologi Sepuluh Nopember saja. Namun, masyarakat umum dapat turut menikmati hasil dari para pemenang sayembara di Exhibition ITS EXPO 2023!',
    ],
  },
  {
    title:
      'Apakah Sayembara Karya Mahasiswa hanya dapat diikuti secara individu?',
    content: [
      'Tidak! ITS EXPO 2023 juga memberikan kesempatan kepada para mahasiswa yang ingin berpartisipasi secara berkelompok maksimal 3 anggota lewat karya kategori 3D',
    ],
  },
  {
    title: 'Berapa anggota maksimal untuk kelompok karya kategori 3D?',
    content: [
      'Jumlah maksimal dalam satu kelompok untuk pengumpulan karya kategori 3D adalah 3 anggota dimana ketiganya berasal dari Institut Teknologi Sepuluh Nopember',
    ],
  },
  {
    title:
      'Salah satu ketentuan berkas yang diperlukan pada pengumpulan adalah Hasil Karya, bagaimana cara menyajikan berkas tersebut?',
    content: [
      'Untuk Karya 2D, apabila peserta membuat karya secara manual maka peserta dapat mendokumentasikan tampak depan dari hasil karyanya. Apabila peserta membuat karya secara digital maka peserta dapat memasukkan file dari hasil karyanya. Foto maupun file dari hasil karya peserta diunggah menggunakan format JPG/PNG dengan format penamaan: Nama Ketua_Kategori_Nama Karya_Foto Karya',
      'Untuk Karya 3D, peserta dapat mendokumentasikan tampak depan serta tampak 2 sisi lain dari hasil karya. Foto dokumentasi hasil karya diharapkan berupa file JPG/PNG dengan format penamaan: Nama Lengkap Ketua_Tampak Kanan. Bagian “Tampak Kanan” dapat diubah menyesuaikan dengan tampak dari foto dokumentasi hasil karya. File-file tersebut kemudian disatukan menjadi satu folder file ZIP dan diunggah dengan format penamaan: Nama Ketua_Kategori_Nama Karya_Foto Karya',
    ],
  },
  {
    title:
      'Salah satu ketentuan berkas yang diperlukan pada pengumpulan adalah Deskripsi Karya, bagaimana cara menyajikan berkas tersebut?',
    content: [
      'Peserta cukup membuat deskripsi singkat berisi penjelasan tentang karya yang dibuat serta bagaimana karya tersebut mewujudkan tema yang dibawakan. Deskripsi singkat ini kemudian diunggah dalam file PDF dengan format penamaan: Nama Ketua_Kategori_Nama Karya_Deskripsi Karya',
    ],
  },
  {
    title:
      'Salah satu ketentuan berkas yang diperlukan pada pengumpulan adalah Form Keaslian Karya, bagaimana cara menyajikan berkas tersebut?',
    content: [
      'Peserta dapat membuka template form (....) lalu klik File kemudian Make a copy. Setelah itu, peserta dapat mengisi data yang ada dengan benar. Download file dengan format PDF lalu diunggah dengan format penamaan: Nama Ketua_Kategori_Nama Karya_Form Keaslian Karya',
    ],
  },
];
