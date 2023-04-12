import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import { create } from 'zustand';

import {
  PembayaranWahanaSeniData,
  WahanaSeniPendaftaran2D,
} from '@/types/entities/main-event/wahana-seni';

type Store2DType = {
  bioData: WahanaSeniPendaftaran2D;
  paymentData: PembayaranWahanaSeniData;
  setBioData: (data: WahanaSeniPendaftaran2D) => void;
  setPaymentData: (data: PembayaranWahanaSeniData) => void;
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
    bank_id: 0,
    atas_nama: '',
    bukti_bayar: [],
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
