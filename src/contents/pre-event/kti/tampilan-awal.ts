import {
  FAQKTIData,
  HadiahKTIData,
  TimelineKTIData,
} from '@/types/entities/pre-event/kti';
export const KTIClosedDate: Date = new Date('May 01, 2023 23:59:59');

export const timelineKTI: TimelineKTIData[] = [
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '1 - 15 Mei 2023',
    caption: 'Masa Pendaftaran dan Pengumpulan Berkas',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 2',
      width: '121',
      height: '66',
    },
    imgDesktop: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '15 Mei 2023',
    caption: 'Deadline Pengumpulan Berkas',
  },
  {
    img: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 3',
      width: '121',
      height: '66',
    },
    imgDesktop: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '16 Mei 2023',
    caption: 'Pengumuman Lolos Abstrak',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 4',
      width: '121',
      height: '66',
    },
    imgDesktop: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '17-24 Mei 2023',
    caption: 'Full Paper Gelombang 1',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    imgDesktop: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '25-29 Mei 2023',
    caption: 'Full Paper Gelombang 2',
  },
  {
    img: {
      src: '/landing/timeline-2.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '30 Mei 2023',
    caption: 'Pengumuman Full Paper',
  },
  {
    img: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    imgDesktop: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '31 Mei 2023',
    caption: 'Technical Meeting',
  },
  {
    img: {
      src: '/landing/timeline-4.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    imgDesktop: {
      src: '/landing/timeline-3.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '2 Juni 2023',
    caption: 'Final',
  },
  {
    img: {
      src: '/landing/timeline-1.png',
      alt: 'timeline illustration 1',
      width: '121',
      height: '66',
    },
    date: '11 Juni 2023',
    caption: 'Pengumuman',
  },
];

export const hadiahKTIContents: HadiahKTIData[] = [
  {
    img: {
      src: '/dashboard/pre-event/kti/tampilan-awal/juara-1-kti.png',
      alt: '1st place lomba karya tulis ilmiah prize',
      width: '500',
      height: '160',
    },
    text: 'Juara 1',
    prize: 'Rp2.500.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/kti/tampilan-awal/juara-2-kti.png',
      alt: '2nd place lomba karya tulis ilmiah prize',
      width: '500',
      height: '160',
    },
    text: 'Juara 2',
    prize: 'Rp2.000.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/kti/tampilan-awal/juara-3-kti.png',
      alt: '3rd place lomba karya tulis ilmiah prize',
      width: '500',
      height: '160',
    },
    text: 'Juara 3',
    prize: 'Rp1.000.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/kti/tampilan-awal/best-poster.png',
      alt: '4th place lomba karya tulis ilmiah prize',
      width: '500',
      height: '160',
    },
    text: 'Best Poster',
    prize: 'Rp500.000,-',
  },
];

export const FAQKTIContents: FAQKTIData[] = [
  {
    title:
      'Siapa saja yang dapat mengikuti Lomba Karya Tulis Ilmiah dari ITS Expo 2023 ?',
    content:
      'Peserta yang dapat mengikuti Lomba KTI ITS Expo ini merupakan mahasiswa aktif Perguruan Tinggi Negeri/Swasta jenjang D3, D4, dan S1 se-Indonesia yang dibuktikan dengan melampirkan scan/foto Kartu Tanda Mahasiswa saat melakukan pendaftaran.',
  },
  {
    title: 'Apakah ada ketentuan khusus untuk Karya Ilmiah yang diajukan?',
    content:
      'Karya tulis bersifat kritis terhadap suatu permasalah dan isu terkini yang bersifat orisinil dan belum pernah dipublikasikan atau menjadi juara pada ajang karya tulis serupa. Karya tulis tersebut juga bersifat objektif, tidak mengandung SARA dan didukung literatur dan sumber yang faktual.',
  },
  {
    title: 'Berapa banyak anggota dalam satu tim yang bisa ikut berkompetisi?',
    content:
      'Banyaknya anggota terdiri dari dua sampai empat mahasiswa dengan satu orang sebagai ketua dan yang lainnya sebagai anggota kelompok. Tim yang telah terdaftar tidak diperbolehkan untuk melakukan pergantian anggota.',
  },
  {
    title:
      'Tim untuk perlombaan apakah harus dari instansi pendidikan yang sama?',
    content:
      'Iya harus, satu tim peserta harus berasal dari perguruan tinggi yang sama dan diperbolehkan dari angkatan yang berbeda.',
  },
  {
    title: 'Apakah peserta diperbolehkan untuk mendaftar di 2 tim sekaligus?',
    content:
      'Boleh, satu orang peserta dapat bergabung maksimal dalam dua tim yang berbeda.',
  },
  {
    title:
      'Apakah peserta diperbolehkan mendaftarkan lebih dari satu karya ilmiah?',
    content:
      'Boleh, peserta diperbolehkan mendaftarkan lebih dari satu karya tulis ilmiah.',
  },
  {
    title: 'Apa saja benefit yang didapatkan jika kita mengikuti lomba ini?',
    content:
      'Peserta dapat mengasah dan meningkatkan kemampuan berpikir kritis serta berbicara di depan khalayak umum dalam menyampaikan informasi. Selain itu, seluruh peserta juga akan mendapatkan e-sertifikat. Untuk pemenang di masing-masing kategori lomba akan mendapatkan :',
    winner_prize: [
      'Juara 1 : Uang Pembinaan + Trofi + Sertifikat',
      'Juara 2 : Uang Pembinaan + Trofi + Sertifikat ',
      'Juara 3 : Uang Pembinaan + Trofi + Sertifikat',
    ],
  },
  {
    title:
      'Dimana kita bisa mendapatkan informasi lebih lengkap mengenai tiap perlombaan di Karya Tulis Ilmiah ITS Expo 2023?',
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
