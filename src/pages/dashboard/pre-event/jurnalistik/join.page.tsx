import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import withAuth from '@/components/hoc/withAuth';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import PengumumanCard from '@/pages/dashboard/pre-event/jurnalistik/components/dashboard/PengumumanCard';

type JoinTeamJurnalistikProps = {
  code_team: string;
};

export default withAuth(JoinTeamJurnalistik, ['jurnalistik_join.store']);

function JoinTeamJurnalistik() {
  const router = useRouter();

  const methods = useForm<JoinTeamJurnalistikProps>();
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const { mutate: joinTeam, isLoading: joinTeamLoading } = useMutationToast<
    void,
    JoinTeamJurnalistikProps
  >(
    useMutation((data) => {
      return api.post('pre_event/jurnalistik/join', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    })
  );

  const onSubmit = (data: JoinTeamJurnalistikProps) => {
    joinTeam(data, {
      onSuccess: () => {
        router.push('/dashboard/pre-event/jurnalistik/main');
      },
    });
  };
  return (
    <DashboardLayout>
      <header className='dashboard-layout'>
        <div className='flex justify-between items-center'>
          <Typography as='h5' variant='h5' className='font-bold'>
            Journalistic
          </Typography>
          <Breadcrumb
            crumbs={[
              '/dashboard/pre-event/jurnalistik',
              '/dashboard/pre-event/jurnalistik/join',
            ]}
          />
        </div>
      </header>
      <main className='dashboard-layout !pt-8 space-y-4'>
        <PengumumanCard />
        <div className='grid grid-cols-2'>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='p-6 rounded-xl border-typo-outline border-[1px] space-y-4'>
                <Typography as='h5' variant='h5' className='font-bold'>
                  Join Team
                </Typography>
                <Input
                  id='code_team'
                  label='Kode Team'
                  validation={{
                    required: 'Kode team tidak boleh kosong',
                  }}
                />
                <div className='flex justify-end'>
                  <Button
                    type='submit'
                    variant='green'
                    isLoading={joinTeamLoading}
                    disabled={!isDirty}
                  >
                    Gabung Team
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </main>
    </DashboardLayout>
  );
}
