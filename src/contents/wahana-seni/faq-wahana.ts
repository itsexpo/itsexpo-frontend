type FaqWahana = {
  title: string;
  description: string;
  detail_description?: string;
  karya?: Array<string>;
  karya2?: Array<string>;
};
export const FAQWahanaContents: FaqWahana[] = [
  {
    title:
      'Apakah masyarakat umum dapat berpartisipasi dalam Sayembara Karya Mahasiswa di ITS EXPO 2023?',
    description:
      'Sayembara Karya Mahasiswa dikhususkan untuk para mahasiswa di Institut Teknologi Sepuluh Nopember saja. Namun, masyarakat umum dapat turut menikmati hasil dari para pemenang sayembara di Exhibition ITS EXPO 2023!',
  },
  {
    title:
      'Apakah Sayembara Karya Mahasiswa hanya dapat diikuti secara individu?',
    description:
      'Tidak! ITS EXPO 2023 juga memberikan kesempatan kepada para mahasiswa yang ingin berpartisipasi secara berkelompok dengan maksimal 3 anggota lewat karya kategori 3D.',
  },
  {
    title: 'Berapa anggota maksimal untuk kelompok karya kategori 3D?',
    description:
      'Jumlah maksimal dalam satu kelompok untuk pengumpulan karya kategori 3D adalah 3 anggota dimana ketiganya berasal dari Institut Teknologi Sepuluh Nopember',
  },
  {
    title:
      'Salah satu ketentuan berkas yang diperlukan pada pengumpulan adalah Hasil Karya, bagaimana cara menyajikan berkas tersebut?',
    description: 'Karya 2D : ',
    karya: [
      'Apabila peserta membuat karya 2D secara manual, peserta dapat mendokumentasikan tampak depan dari hasil karyanya ',
      'Apabila peserta membuat karya 2D secara digital, peserta dapat memasukkan file dari hasil karyanya ',
      'Foto maupun file dari hasil karya peserta diunggah menggunakan format JPG/PNG dengan format penamaan : Nama Ketua_Kategori_Nama Karya_Foto Karya.',
    ],
    detail_description: 'Karya 3D : ',
    karya2: [
      'Peserta dapat mendokumentasikan tampak depan serta tampak 2 sisi lain dari hasil karya',
      'Foto dokumentasi hasil karya diharapkan berupa file JPG/PNG dengan format penamaan Nama Lengkap Ketua_Tampak Kanan dimana bagian Tampak Kanan dapat diubah menyesuaikan dengan tampak dari foto dokumentasi hasil karya kemudian disatukan menjadi satu folder file ZIP',
      'File ZIP tersebut kemudian diunggah dengan format penamaan format penamaan : Nama Ketua_Kategori_Nama Karya_Foto Karya.',
    ],
  },
  {
    title:
      'Salah satu ketentuan berkas yang diperlukan pada pengumpulan adalah Deskripsi Karya, bagaimana cara menyajikan berkas tersebut?',
    description:
      'Peserta cukup membuat deskripsi singkat berisi penjelasan tentang karya yang dibuat serta bagaimana karya tersebut mewujudkan tema yang dibawakan. Deskripsi singkat ini kemudian diunggah dalam file PDF dengan format penamaan : Nama Ketua_Kategori_Nama Karya_Deskripsi Karya.       ',
  },
  {
    title:
      'Salah satu ketentuan berkas yang diperlukan pada pengumpulan adalah Form Keaslian Karya, bagaimana cara menyajikan berkas tersebut?',
    description:
      'Peserta dapat membuka template form (....) lalu klik File kemudian Make a copy. Setelah itu, peserta dapat mengisi data yang ada dengan benar. Download file dengan format PDF lalu diunggah dengan format penamaan : Nama Ketua_Kategori_Nama Karya_Form Keaslian Karya.',
  },
];
