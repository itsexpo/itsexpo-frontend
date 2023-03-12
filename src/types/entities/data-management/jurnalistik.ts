export type AdminJurnalistikColumn = {
  ketua_tim: string;
  nama_tim: string;
  kode_tim: string;
  created_at: string;
  status_pembayaran:
    | 'REVISI'
    | 'GAGAL'
    | 'SUCCESS'
    | 'AWAITING VERIFICATION'
    | 'AWAITING PAYMENT';
};

export type JurnalistikDataRecapType = {
  total_tim?: number;
  pembayaran?: {
    revisi: number;
    gagal: number;
    success: number;
    awaiting_verification: number;
    awaiting_payment: number;
  };
};
