import { useMutation } from '@tanstack/react-query';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
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

  try {
    const res = await api.get<ApiReturn<AnnouncementColumns>>(url);
    return {
      props: {
        res: res.data.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

function AnnouncementUpdate({
  res,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { id } = router.query;
  const methods = useForm<UpdateAnnouncement>({
    defaultValues: {
      event_id: res.list_event_id,
      title: res.title,
      description: res.description,
    },
  });
  const {
    formState: { isDirty },
  } = methods;

  const { mutate, isLoading } = useMutationToast<void, UpdateAnnouncement>(
    useMutation((data) => {
      return api.put(`/pengumuman/${id}`, data);
    })
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
            <div className='md:flex md:justify-between md:items-center'>
              <div>
                <Breadcrumb
                  crumbs={[
                    '/dashboard/admin/announcement',
                    '/dashboard/admin/announcement/detail',
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
                          placeholder={res.description}
                          disabled={isLoading}
                        />
                      </div>
                      <Button
                        className='col-span-full'
                        size='large'
                        variant='green'
                        disabled={!isDirty}
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
