import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import api from '@/lib/api';
import PengumumanCard from '@/pages/dashboard/pre-event/jurnalistik/components/dashboard/PengumumanCard';

type JoinTeamRobotikProps = {
  code_team: string;
};

export default function JoinTeamRobotik() {
  const dialog = useDialog();
  const router = useRouter();

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { query } = router;

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { teamId, category } = query;

  function openWarningJoin({ data }: { data: JoinTeamRobotikProps }) {
    dialog({
      title: 'Apakah Anda Yakin Data Yang Anda Masukan Sudah Benar!!!',
      description: `Apakah Anda Yakin untuk Join Tim Ini?`,
      submitText: 'Join Team',
      variant: 'warning',
      catchOnCancel: true,
    }).then(() => {
      joinTeam(data, {
        onSuccess: () => {
          router.push('/dashboard/pre-event/robotik/main');
        },
      });
    });
  }

  const methods = useForm<JoinTeamRobotikProps>();
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const { mutate: joinTeam, isLoading: joinTeamLoading } = useMutationToast<
    void,
    JoinTeamRobotikProps
  >(
    useMutation((data) => {
      return api.post('pre_event/robotik/join', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    })
  );

  const onSubmit = (data: JoinTeamRobotikProps) => {
    openWarningJoin({ data });
  };

  return (
    <DashboardLayout>
      <header className='dashboard-layout'>
        <div className='flex justify-between items-center'>
          <Typography as='h5' variant='h5' className='font-bold'>
            Robot Line Tracer
          </Typography>
          <Breadcrumb
            crumbs={[
              '/dashboard/pre-event/robotik',
              '/dashboard/pre-event/robotik/join',
            ]}
          />
        </div>
      </header>
      <main className='dashboard-layout !pt-8 space-y-6'>
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
