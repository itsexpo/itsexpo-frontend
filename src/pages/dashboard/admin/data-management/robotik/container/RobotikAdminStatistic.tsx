import * as React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { HiClock } from 'react-icons/hi';
import {
  IoIosCheckmarkCircle,
  IoIosCloseCircle,
  IoMdWallet,
} from 'react-icons/io';
import { RiPencilFill } from 'react-icons/ri';

import StatisticCard from '@/pages/dashboard/admin/data-management/robotik/components/StatisticCard';
import { AdminRobotikMeta } from '@/types/entities/data-management/robotik';

export default function RobotikAdminStatistic({
  total_tim,
  pembayaran,
}: AdminRobotikMeta) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
      <StatisticCard
        label='Total Tim'
        icon={BsFillPeopleFill}
        count={total_tim ?? 0}
      />
      <StatisticCard
        label='Menunggu Pembayaran:'
        icon={IoMdWallet}
        count={pembayaran?.awaiting_payment ?? 0}
        iconClassName='bg-[#F1EBFB] fill-[#713BDB]'
        countClassName='text-[#713BDB]'
      />
      <StatisticCard
        label='Pembayaran Gagal:'
        icon={IoIosCloseCircle}
        count={pembayaran?.gagal ?? 0}
        iconClassName='bg-critical-100 fill-critical-600'
        countClassName='text-critical-600'
      />
      <StatisticCard
        label='Pembayaran Revisi:'
        icon={RiPencilFill}
        count={pembayaran?.revisi ?? 0}
        iconClassName='bg-[#30B1FE] fill-[#30B1FE] bg-opacity-10'
        countClassName='text-[#30B1FE]'
      />
      <StatisticCard
        label='Menunggu Verifikasi:'
        icon={HiClock}
        count={pembayaran?.awaiting_verification ?? 0}
        iconClassName='bg-warning-100 fill-warning-600'
        countClassName='text-warning-600'
      />
      <StatisticCard
        label='Pembayaran Berhasil:'
        icon={IoIosCheckmarkCircle}
        count={pembayaran?.success ?? 0}
        iconClassName='bg-success-100 fill-success-600'
        countClassName='text-success-600'
      />
    </div>
  );
}
