import { HiOutlineHome } from 'react-icons/hi';

import ButtonLink from '@/components/links/ButtonLink';
import Typography from '@/components/typography/Typography';

export default function ComingSoon({ href = '/' }: { href?: string }) {
  return (
    <>
      <Typography
        data-aos-delay='100'
        data-aos='fade-up'
        data-aos-duration='300'
        data-aos-easing='ease-in-out'
        variant='h1'
        className='font-primary text-5xl md:text-[80px]'
      >
        coming soon
      </Typography>
      <Typography
        data-aos-delay='200'
        data-aos='fade-up'
        data-aos-duration='300'
        data-aos-easing='ease-in-out'
        variant='p'
        color='secondary'
        className='text-justify'
      >
        Website kami sedang dalam proses penyempurnaan dan akan segera hadir
        untuk Anda. Kami berkomitmen untuk menyediakan pengalaman pengguna yang
        luar biasa dan kami yakin Anda akan senang dengan hasil akhir. Kami
        meminta maaf atas ketidaknyamanan sementara ini dan berjanji untuk
        segera memperkenalkan fitur-fitur baru dan desain yang menakjubkan.
        Terima kasih telah bersabar dan nantikan kehadiran website kami yang
        akan mengejutkan anda.
      </Typography>
      <ButtonLink
        variant='green'
        size='large'
        leftIcon={HiOutlineHome}
        className='mt-8'
        href={href}
      >
        Home Page
      </ButtonLink>
    </>
  );
}
