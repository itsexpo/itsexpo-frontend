import { BsCheckCircleFill, BsFillPeopleFill } from 'react-icons/bs';
import { HiClock } from 'react-icons/hi';
import { IoIosCloseCircle, IoMdWallet } from 'react-icons/io';
import { RiPencilFill } from 'react-icons/ri';

import Typography from '@/components/typography/Typography';
import { JurnalistikDataRecapType } from '@/types/entities/data-management/jurnalistik';

export function KTIDataRecap({
  total_tim,
  pembayaran,
}: JurnalistikDataRecapType) {
  return (
    <div className='grid md:grid-cols-3 grid-cols-2 grid-flow-row gap-6'>
      {/* Total Tim */}
      <div className='flex flex-col gap-2 p-4 rounded-xl shadow-pendaftaran bg-typo-white'>
        <Typography as='b1' variant='b1' className='text-typo-icon'>
          Total Tim
        </Typography>
        <div className='flex flex-1 flex-row gap-2 items-center'>
          <div className='w-[50px] h-[50px] rounded-full bg-typo-light flex justify-center items-center'>
            <BsFillPeopleFill className='text-typo-icon text-3xl' />
          </div>
          <Typography
            as='h5'
            variant='h5'
            className='text-typo-primary font-semibold'
          >
            {total_tim}
          </Typography>
        </div>
      </div>

      {/* Menunggu Pembayaran */}
      <div className='flex flex-col gap-2 p-4 rounded-xl shadow-pendaftaran bg-typo-white'>
        <Typography as='b1' variant='b1' className='text-typo-icon'>
          Menunggu Pembayaran:
        </Typography>
        <div className='flex flex-row gap-2 flex-1 items-center'>
          <div className='w-[50px] h-[50px] rounded-full bg-[#F1EBFB] flex justify-center items-center'>
            <IoMdWallet className='text-[#713BDB] text-3xl' />
          </div>
          <Typography
            as='h5'
            variant='h5'
            className='text-[#713BDB] font-semibold'
          >
            {pembayaran?.awaiting_payment}
          </Typography>
        </div>
      </div>

      {/* Pembayaran Gagal */}
      <div className='flex flex-col gap-2 p-4 rounded-xl shadow-pendaftaran bg-typo-white'>
        <Typography as='b1' variant='b1' className='text-typo-icon'>
          Pembayaran Gagal:
        </Typography>
        <div className='flex flex-row gap-2 flex-1 items-center'>
          <div className='w-[50px] h-[50px] rounded-full bg-critical-100 flex justify-center items-center'>
            <IoIosCloseCircle className='text-critical-600 text-3xl' />
          </div>
          <Typography
            as='h5'
            variant='h5'
            className='text-critical-600 font-semibold'
          >
            {pembayaran?.gagal}
          </Typography>
        </div>
      </div>

      {/* Pembayaran Revisi */}
      <div className='flex flex-col gap-2 p-4 rounded-xl shadow-pendaftaran bg-typo-white'>
        <Typography as='b1' variant='b1' className='text-typo-icon'>
          Pembayaran Revisi:
        </Typography>
        <div className='flex flex-row gap-2 flex-1 items-center'>
          <div className='w-[50px] h-[50px] rounded-full bg-[#30B1FE] bg-opacity-10 flex justify-center items-center'>
            <RiPencilFill className='text-[#30B1FE] text-3xl' />
          </div>
          <Typography
            as='h5'
            variant='h5'
            className='text-[#30B1FE] font-semibold'
          >
            {pembayaran?.revisi}
          </Typography>
        </div>
      </div>

      {/* Menunggu Verifikasi */}
      <div className='flex flex-col gap-2 p-4 rounded-xl shadow-pendaftaran bg-typo-white'>
        <Typography as='b1' variant='b1' className='text-typo-icon'>
          Menunggu Verifikasi:
        </Typography>
        <div className='flex flex-row gap-2 flex-1 items-center'>
          <div className='w-[50px] h-[50px] rounded-full bg-warning-100 flex justify-center items-center'>
            <HiClock className='text-warning-600 text-3xl' />
          </div>
          <Typography
            as='h5'
            variant='h5'
            className='text-warning-600 font-semibold'
          >
            {pembayaran?.awaiting_verification}
          </Typography>
        </div>
      </div>

      {/* Pembayaran Berhasil */}
      <div className='flex flex-col gap-2 p-4 rounded-xl shadow-pendaftaran bg-typo-white'>
        <Typography as='b1' variant='b1' className='text-typo-icon'>
          Pembayaran Berhasil:
        </Typography>
        <div className='flex flex-row gap-2 flex-1 items-center'>
          <div className='w-[50px] h-[50px] rounded-full bg-success-100 flex justify-center items-center'>
            <BsCheckCircleFill className='text-success-600 text-3xl' />
          </div>
          <Typography
            as='h5'
            variant='h5'
            className='text-success-600 font-semibold'
          >
            {pembayaran?.success}
          </Typography>
        </div>
      </div>
    </div>
  );
}
