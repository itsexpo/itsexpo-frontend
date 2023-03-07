import {
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
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-1-liputan-vlog-bg.png',
      alt: '1st place liputan vlog prize',
      width: '1024',
      height: '160',
    },
    text: 'Juara 1 Liputan Vlog',
    prize: 'Rp15.000.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-2-liputan-vlog-bg.png',
      alt: '2nd place liputan vlog prize',
      width: '1024',
      height: '160',
    },
    text: 'Juara 2 Liputan Vlog',
    prize: 'Rp15.000.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-3-liputan-vlog-bg.png',
      alt: '3rd place liputan vlog prize',
      width: '1024',
      height: '160',
    },
    text: 'Juara 3 Liputan Vlog',
    prize: 'Rp15.000.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-1-liputan-televisi-bg.png',
      alt: '1st place liputan televisi prize',
      width: '1024',
      height: '160',
    },
    text: 'Juara 1 Liputan Televisi',
    prize: 'Rp15.000.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-2-liputan-televisi-bg.png',
      alt: '2nd place liputan televisi prize',
      width: '1024',
      height: '160',
    },
    text: 'Juara 2 Liputan Televisi',
    prize: 'Rp15.000.000,-',
  },
  {
    img: {
      src: '/dashboard/pre-event/jurnalistik/tampilan-awal/juara-3-liputan-televisi-bg.png',
      alt: '3rd place liputan televisi prize',
      width: '1024',
      height: '160',
    },
    text: 'Juara 3 Liputan Televisi',
    prize: 'Rp15.000.000,-',
  },
];
