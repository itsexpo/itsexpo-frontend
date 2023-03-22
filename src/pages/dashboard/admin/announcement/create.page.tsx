import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import { EVENT_ID } from '@/constant/event';
import useMutationToast from '@/hooks/toast/useMutationToast';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import { CreateAnnouncement } from '@/types/entities/announcement';

export default withAuth(AnnouncementCreate, ['pengumuman.store']);

function AnnouncementCreate() {
  const methods = useForm<CreateAnnouncement>();
  const { mutate, isLoading } = useMutationToast<void, CreateAnnouncement>(
    useMutation((data) => api.post('/pengumuman', data))
  );

  const handleCreate = (data: CreateAnnouncement) => mutate(data);
  return (
    <DashboardLayout className='bg-typo-surface'>
      <main>
        <section className='dashboard-layout'>
          <div className='min-h-screen flex flex-col gap-6 pb-20'>
            <section className='md:flex md:justify-between md:items-center'>
              <span>
                <Typography
                  as='p'
                  variant='b1'
                  className='font-medium text-success-600'
                >
                  ITS EXPO 2023
                </Typography>
                <Typography
                  as='h5'
                  variant='h5'
                  className='font-bold text-typo-primary text-[32px]'
                >
                  Pengumuman
                </Typography>
              </span>
            </section>
            <section>
              <div className='flex flex-col gap-2 p-4 rounded-xl shadow-pendaftaran bg-typo-white'>
                <Typography
                  as='h6'
                  variant='h6'
                  className='text-black font-bold'
                >
                  Buat Pengumuman Baru
                </Typography>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(handleCreate)}>
                    <div className='grid grid-cols-2 mt-3 gap-x-10 gap-y-6'>
                      <Input
                        label='Title'
                        id='title'
                        placeholder='Mountanus'
                        disabled={isLoading}
                      />
                      <SelectInput
                        label='Event'
                        id='event_id'
                        disabled={isLoading}
                      >
                        <option value={11}>{EVENT_ID['11']}</option>
                        <option value={12}>{EVENT_ID['12']}</option>
                        <option value={13}>{EVENT_ID['13']}</option>
                        <option value={21}>{EVENT_ID['21']}</option>
                        <option value={22}>{EVENT_ID['22']}</option>
                        <option value={31}>{EVENT_ID['31']}</option>
                      </SelectInput>
                      <div className='col-span-2 w-full'>
                        <Input
                          label='Deskripsi'
                          id='description'
                          placeholder='The mountains, so vast, rugged and grand,
                          Are an embodiment of strength that will never end,
                          I feel so small, yet so connected to all,
                          In the midst of these towering natural walls.'
                          disabled={isLoading}
                        />
                      </div>
                      <Button
                        className='col-span-2'
                        size='large'
                        variant='green'
                        type='submit'
                        isLoading={isLoading}
                      >
                        Kirim
                      </Button>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </section>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
