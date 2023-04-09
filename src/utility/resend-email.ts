import Cookies from 'universal-cookie';

import { showToast, WARNING_TOAST } from '@/components/Toast';

const cookies = new Cookies();

export const setResendTime = (date: Date) => {
  cookies.set('@itsexpo/resend', {
    path: '/',
    date: date,
    maxAge: 60 * 5,
  });
};

export const getResendTime = () => {
  return cookies.get('@itsexpo/resend');
};

export const removeResendTime = () => {
  cookies.remove('@itsexpo/resend', {
    path: '/',
  });
};
// Resend

export const setResendEmailCookies = () => {
  const date = new Date();
  if (!validateResendEmailCookies()) return;
  setResendTime(date);
};

export const validateResendEmailCookies = () => {
  const date = getResendTime();
  if (date) {
    if (!date.date) {
      removeResendTime();
      return true;
    }
    const now = new Date();
    const time = now.getTime() - new Date(date.date).getTime();
    const seconds = Math.floor(time / 1000);
    if (seconds > 200) {
      removeResendTime();
      return true;
    }
    showToast(
      `Silahkan tunggu ${200 - seconds} detik untuk mengirim ulang email`,
      WARNING_TOAST
    );
    return false;
  }
  return true;
};

export const removeResendEmailCookies = () => {
  if (!validateResendEmailCookies()) removeResendTime();
};
