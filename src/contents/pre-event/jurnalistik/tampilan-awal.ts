import {
  FAQJurnalistikData,
  HadiahJurnalistikData,
  JuriJurnalistikData,
  JurnalistikSubContestData,
  TimelineJurnalistikData,
} from '@/types/entities/pre-event/jurnalistik';

export const jurnalistikClosedDate: Date = new Date('May 01, 2023 23:59:59');

export const timelineJurnalistik: TimelineJurnalistikData[] = [
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '1 April - 1 Mei 2023',
    caption: 'Masa Pendaftaran',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    date: '27 Mei 2023',
    caption: 'Technical Meeting',
  },
  {
    img: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '121',
      height: '66',
    },
    date: '2 - 4 Juni 2023',
    caption: 'Pelaksanaan Lomba 1',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 4',
      width: '121',
      height: '66',
    },
    date: '9 - 11 Juni 2023',
    caption: 'Pelaksanaan Lomba 2',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '21 Juni 2023',
    caption: 'Pengumuman Pemenang',
  },
];

export const jurnalistikSubContest: JurnalistikSubContestData[] = [
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/cabang-lomba-1.png',
      alt: 'SMA/SMK Jurnalistik Sub Contest',
      width: 1525,
      height: 1024,
    },
    title: 'Liputan Video Blogger',
    caption: 'SMA/SMK Sederajat',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/cabang-lomba-2.png',
      alt: 'Mahasiswa/Umum Jurnalistik Sub Contest',
      width: 1525,
      height: 1024,
    },
    title: 'Liputan Televisi',
    caption: 'Mahasiswa/Umum',
  },
];

export const juriJurnalistikContents: JuriJurnalistikData[] = [
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juri-1.png',
      alt: 'judge photo',
      width: '100',
      height: '100',
    },
    name: 'Darren Prasetya',
    position: 'CEO Tokopedia',
    description:
      'Laoreet orci duis vitae placerat justo et amet. Sociis pulvinar in neque convallis facilisi mus condimentum morbi quis. Gravida est nunc ullamcorper amet cursus pellentesque.',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juri-2.png',
      alt: 'judge photo',
      width: '100',
      height: '100',
    },
    name: 'Yoel Mountanus Sitorus',
    position: 'CEO Google',
    description:
      'Laoreet orci duis vitae placerat justo et amet. Sociis pulvinar in neque convallis facilisi mus condimentum morbi quis. Gravida est nunc ullamcorper amet cursus pellentesque.',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juri-3.png',
      alt: 'judge photo',
      width: '100',
      height: '100',
    },
    name: 'Muhammad Ersya Vinorian',
    position: 'CEO Github',
    description:
      'Laoreet orci duis vitae placerat justo et amet. Sociis pulvinar in neque convallis facilisi mus condimentum morbi quis. Gravida est nunc ullamcorper amet cursus pellentesque.',
  },
];

export const hadiahJurnalistikContents: HadiahJurnalistikData[] = [
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-1-liputan-televisi-bg.png',
      alt: '1st place liputan televisi prize',
      width: '500',
      height: '160',
    },
    text: 'Juara 1 Liputan Televisi',
    prize: 'Rp1.500.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-2-liputan-televisi-bg.png',
      alt: '2nd place liputan televisi prize',
      width: '500',
      height: '160',
    },
    text: 'Juara 2 Liputan Televisi',
    prize: 'Rp1.000.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-3-liputan-televisi-bg.png',
      alt: '3rd place liputan televisi prize',
      width: '500',
      height: '160',
    },
    text: 'Juara 3 Liputan Televisi',
    prize: 'Rp800.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-1-liputan-vlog-bg.png',
      alt: '1st place liputan vlog prize',
      width: '500',
      height: '160',
    },
    text: 'Juara 1 Liputan Vlog',
    prize: 'Rp1.000.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-2-liputan-vlog-bg.png',
      alt: '2nd place liputan vlog prize',
      width: '500',
      height: '160',
    },
    text: 'Juara 2 Liputan Vlog',
    prize: 'Rp800.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-3-liputan-vlog-bg.png',
      alt: '3rd place liputan vlog prize',
      width: '500',
      height: '160',
    },
    text: 'Juara 3 Liputan Vlog',
    prize: 'Rp500.000,-',
  },
];

export const FAQJurnalistikContents: FAQJurnalistikData[] = [
  {
    title:
      'Apakah perlombaan journalistic ITS Expo 2023 ini digelar secara luring?',
    content:
      'Perlombaan journalistic ITS Expo 2023 akan digelar secara luring. Semua peserta diwajibkan datang ke Surabaya, terkhusus di lingkungan Institut Teknologi Sepuluh Nopember selama satu atau dua hari untuk melakukan liputan on site. Teknisnya, anda akan datang untuk melakukan liputan salah satu kegiatan di saat puncak ITS Expo 2023. Dengan jadwal puncak ITS Expo 2023 dilaksanakan secara serentak pada bulan Juni (1-2 minggu secara berturut-turut).',
  },
  {
    title: 'Konsep perlombaan seperti apa yang akan dilaksanakan?',
    content:
      'Pada kompetisi journalistic ITS Expo 2023 terdapat dua perlombaan yang akan dilaksanakan. Perlombaan tersebut yaitu Liputan Televisi yang bisa diikuti oleh mahasiswa dan masyarakat umum, serta Liputan Video Blogger yang bisa diikuti oleh siswa SMA/sederajat. Dengan ketentuan tambahan akan ada 2 jenis kegiatan yang bisa diliput, kegiatan khusus berupa Gebyar ITS Expo 2023 (terbatas) dan kegiatan umum (pre-event dan main event) yang pembagiannya akan diacak pada saat technical meeting mendatang.',
  },
  {
    title: 'Berapa banyak anggota dalam satu tim yang bisa ikut berkompetisi?',
    content:
      'Dalam satu kelompok maksimal terdapat 5 anggota dan minimal 3 anggota dengan salah satu diantaranya sebagai ketua.',
  },
  {
    title:
      'Tim untuk perlombaan apakah harus dari instansi pendidikan yang sama?',
    content:
      'Dalam satu tim lomba, anggota tim boleh terdiri dari anggota yang berasal dari sekolah yang berbeda. Tidak ada ketentuan khusus untuk asal instansi peserta.',
  },
  {
    title: 'Apakah peserta diperbolehkan untuk mendaftar di 2 tim sekaligus?',
    content:
      ' Setiap peserta hanya diperbolehkan untuk bergabung di satu tim saja.',
  },
  {
    title:
      'Berkas apa saja yang perlu dipersiapkan untuk kompetisi journalistic ITS Expo 2023 nantinya?',
    content:
      'Berkas yang harus dilampirkan untuk pendaftaran kompetisi journalistic ITS Expo 2023 adalah kartu identitas berupa Kartu Tanda Penduduk (KTP) untuk mahasiswa/umum dan kartu pelajar untuk siswa SMA/SMK sederajat, bukti follow media sosial ITS Expo 2023, dan bukti repost postingan poster lomba journalistic.',
  },
  {
    title: 'Apa saja benefit yang didapatkan jika kita mengikuti lomba ini?',
    content:
      'Peserta dapat mengasah dan meningkatkan kemampuan berpikir kritis serta berbicara di depan khalayak umum dalam menyampaikan informasi. Selain itu, seluruh peserta juga akan mendapatkan e-sertifikat. Untuk pemenang di masing-masing kategori lomba akan mendapatkan: Kontol',
  },
  {
    title:
      'Dimana kita bisa mendapatkan informasi lebih lengkap mengenai tiap perlombaan di journalistic ITS Expo 2023?',
    content:
      'Anda dapat membuka guidebook pada masing-masing kategori lomba di website ITS Expo atau pada link berikut (https://www.expo-its.com/).',
  },
  {
    title:
      'Bagaimana jika saya memiliki pertanyaan lain yang tidak tercantum di FAQ ini?',
    content:
      'Anda bisa memantau instagram ITS Expo atau langsung menghubungi contact person yang terdapat di guidebook pada masing-masing kategori lomba untuk terus mendapatkan informasi terbaru terkait kompetisi jurnalistik.',
  },
];
