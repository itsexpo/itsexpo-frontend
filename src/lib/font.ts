import { Montserrat } from '@next/font/google';
import localFont from '@next/font/local';

export const upakarti = localFont({
  src: '../styles/fonts/upakarti.ttf',
  variable: '--font-upakarti',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});
