import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import TextArea from '@/components/forms/TextArea';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import { EVENT_ID } from '@/constant/event';
import useMutationToast from '@/hooks/toast/useMutationToast';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import { CreateAnnouncement } from '@/types/entities/announcement';

export default withAuth(AnnouncementCreate, ['pengumuman.store']);

function AnnouncementCreate() {
  const router = useRouter();
  const methods = useForm<CreateAnnouncement>();
  const { mutate, isLoading } = useMutationToast<void, CreateAnnouncement>(
    useMutation((data) => api.post('/pengumuman', data), {
      onSuccess: () => router.push('/dashboard/admin/announcement'),
    })
  );

  const handleCreate = (data: CreateAnnouncement) => mutate(data);
  return (
    <DashboardLayout className='bg-typo-surface'>
      <main>
        <section className='dashboard-layout'>
          <div className='min-h-screen flex flex-col gap-6 pb-20'>
            <div className='md:flex md:justify-between md:items-center'>
              <div>
                <Breadcrumb
                  crumbs={[
                    '/dashboard/admin/announcement',
                    '/dashboard/admin/announcement/buat',
                  ]}
                />
                <Typography
                  as='h5'
                  variant='h5'
                  className='font-bold text-typo-primary text-[32px]'
                >
                  Pengumuman
                </Typography>
              </div>
            </div>
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
                        label='Judul Pengumuman'
                        id='title'
                        placeholder='Judul Pengumuman'
                        validation={{
                          required: 'Judul Pengumuman tidak boleh kosong',
                        }}
                        disabled={isLoading}
                      />
                      <SelectInput
                        label='Event'
                        id='event_id'
                        placeholder='Pilih Event'
                        validation={{
                          required: 'Event tidak boleh kosong',
                        }}
                        disabled={isLoading}
                      >
                        {Object.entries(EVENT_ID).map(([key, value]) => (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        ))}
                      </SelectInput>
                      <div className='col-span-2 w-full'>
                        <TextArea
                          label='Deskripsi'
                          id='description'
                          placeholder='Deskripsi Pengumuman'
                          validation={{
                            required: 'Deskripsi Pengumuman tidak boleh kosong',
                          }}
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
