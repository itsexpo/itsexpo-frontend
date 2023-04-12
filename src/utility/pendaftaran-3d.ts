import { WahanaSeniPendaftaran3DForm } from '@/types/entities/main-event/wahana-seni';

export const setCookiesPendaftaran3D = (data: WahanaSeniPendaftaran3DForm) => {
  localStorage.setItem('@itsexpo/pendaftaran-3d', JSON.stringify(data));
};

export const getCookiesPendaftaran3d = () => {
  const data = localStorage.getItem('@itsexpo/pendaftaran-3d');
  if (!data) return null;
  return JSON.parse(data) as WahanaSeniPendaftaran3DForm;
};
