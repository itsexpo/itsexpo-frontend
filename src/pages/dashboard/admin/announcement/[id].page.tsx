import { useMutation } from '@tanstack/react-query';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { serialize } from 'object-to-formdata';
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
import api, { setApiContext } from '@/lib/api';
import { ApiReturn } from '@/types/api';
import {
  AnnouncementColumns,
  UpdateAnnouncement,
} from '@/types/entities/announcement';

export default withAuth(AnnouncementUpdate, ['pengumuman.store']);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  setApiContext(context);
  const id = context.params?.id;
  const url = `/pengumuman?id=${id}`;
  const res = await api.get<ApiReturn<AnnouncementColumns>>(url);
  return {
    props: {
      res: res.data.data,
    },
  };
}

function AnnouncementUpdate({
  res,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { id } = useRouter().query;

  const methods = useForm<UpdateAnnouncement>();

  const { mutate, isLoading } = useMutationToast<void, UpdateAnnouncement>(
    useMutation((data) => api.put(`/pengumuman/${id}`, serialize(data)))
  );

  const handleUpdate = (data: UpdateAnnouncement) => {
    const _data = {
      event_id: data.event_id,
      title: data.title,
      description: data.description,
      id: id as string,
    };
    mutate(_data);
  };

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
                  Update Pengumuman
                </Typography>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(handleUpdate)}>
                    <div className='grid grid-cols-2 mt-3 gap-x-10 gap-y-6'>
                      <Input
                        label='Title'
                        id='title'
                        placeholder={res.title}
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
                          placeholder={res.description}
                          disabled={isLoading}
                        />
                      </div>
                      <Button
                        className='col-span-1 !text-critical-600 border-critical-600'
                        isLoading={isLoading}
                        size='large'
                        variant='outline'
                      >
                        Batalkan
                      </Button>
                      <Button
                        className='col-span-1'
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
