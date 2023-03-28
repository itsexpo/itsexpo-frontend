import { PaymentId } from '@/types/entities/pembayaran';

export interface AdminRobotikColumn {
  id_tim: string;
  ketua_tim: string;
  nama_tim: string;
  kode_tim: string;
  created_at: string;
  status_pembayaran: PaymentId;
}

export interface AdminRobotikMeta {
  total_tim?: number;
  pembayaran?: {
    revisi: number;
    gagal: number;
    success: number;
    awaiting_verification: number;
    awaiting_payment: number;
  };
}
