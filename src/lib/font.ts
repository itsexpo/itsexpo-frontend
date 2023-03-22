import localFont from '@next/font/local';

export const upakarti = localFont({
  src: '../styles/fonts/upakarti.ttf',
  variable: '--font-upakarti',
});

export const montserrat = localFont({
  src: [
    {
      path: '../styles/fonts/montserrat/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/montserrat/Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../styles/fonts/montserrat/Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/fonts/montserrat/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat',
  display: 'swap',
});
