import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import { create } from 'zustand';

import { Pembayaran3DState } from '@/pages/dashboard/main-event/wahana-seni/components/Pembayaran3DForm';
import { WahanaSeniPendaftaran3DForm } from '@/types/entities/main-event/wahana-seni';

type Store3DType = {
  payment: Pembayaran3DState;
  biodata: WahanaSeniPendaftaran3DForm;
  setBiodata: (data: WahanaSeniPendaftaran3DForm) => void;
  setPayment: (data: Pembayaran3DState) => void;
};

const use3DStoreBase = create<Store3DType>((set) => ({
  biodata: {
    team_name: '',
    deskripsi_karya: '',
    name: '',
    nrp: '',
    departemen_id: 1,
    kontak: '',
    ktm: [],
    team_member: [],
  },
  payment: {
    atas_nama: '',
    bank_id: '',
    bukti_bayar: [],
  },
  setBiodata: (data) =>
    set(
      produce<Store3DType>((state) => {
        state.biodata = data = { ...state.biodata, ...data };
      })
    ),
  setPayment: (data) =>
    set(
      produce<Store3DType>((state) => {
        state.payment = data = { ...state.payment, ...data };
      })
    ),
}));

const use3DStore = createSelectorHooks(use3DStoreBase);

export default use3DStore;
