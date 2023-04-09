import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import create from 'zustand';

import { WahanaSeniPendaftaran2D } from '@/types/entities/main-event/wahana-seni';

type Store2DType = {
  bioData: Omit<WahanaSeniPendaftaran2D, 'bukti_pembayaran'>;
  paymentData: Omit<
    WahanaSeniPendaftaran2D,
    'name' | 'nrp' | 'departemen_id' | 'kontak' | 'ktm'
  >;
  setBioData: (data: Omit<WahanaSeniPendaftaran2D, 'bukti_pembayaran'>) => void;
  setPaymentData: (
    data: Omit<
      WahanaSeniPendaftaran2D,
      'name' | 'nrp' | 'departemen_id' | 'kontak' | 'ktm'
    >
  ) => void;
};

const use2DStoreBase = create<Store2DType>((set) => ({
  bioData: {
    name: '',
    nrp: '',
    departemen_id: 0,
    kontak: '',
    ktm: [],
  },
  paymentData: {
    bukti_pembayaran: [],
  },

  setBioData: (data) =>
    set(
      produce<Store2DType>((state) => {
        state.bioData = data = { ...state.bioData, ...data };
      })
    ),

  setPaymentData: (data) =>
    set(
      produce<Store2DType>((state) => {
        state.paymentData = data = { ...state.paymentData, ...data };
      })
    ),
}));

const use2DStore = createSelectorHooks(use2DStoreBase);

export default use2DStore;
