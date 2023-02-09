import { useMutation, useQuery } from '@tanstack/react-query';
import * as React from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import SEO from '@/components/SEO';
import {
  DANGER_TOAST,
  showToast,
  SUCCESS_TOAST,
  WARNING_TOAST,
} from '@/components/Toast';
import Typography from '@/components/typography/Typography';
import useLoadingToast from '@/hooks/toast/useLoadingToast';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useQueryToast from '@/hooks/toast/useQueryToast';
import Layout from '@/layouts/Layout';
import api from '@/lib/api';
import { ApiReturn } from '@/types/api';

type User = {
  id: number;
  name: string;
  token: string;
};

type LoginData = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

export default function SandboxPage() {
  const isLoading = useLoadingToast();

  const { data: mutationData, mutate } = useMutationToast<
    ApiReturn<LoginResponse>,
    LoginData
  >(useMutation((data) => api.post('/login', data).then((res) => res.data)));

  const { data: queryData } = useQueryToast<User>(useQuery(['/me']));

  return (
    <Layout>
      <SEO title='Sandbox' />

      <section className='bg-gray-100'>
        <div className='layout flex min-h-screen flex-col items-start space-y-3 py-20'>
          <>
            {mutationData && <pre>{JSON.stringify(mutationData, null, 2)}</pre>}
          </>
          <Button variant='green' onClick={() => toast.success('Success!')}>
            Success
          </Button>
          <Button variant='red' onClick={() => toast.error('Error!')}>
            Error
          </Button>
          <Button variant='outline' onClick={() => toast.custom('Custom!')}>
            Custom
          </Button>
          <Button variant='basic' onClick={() => toast.loading('Loading!')}>
            Loading
          </Button>

          <Button variant='outline' onClick={() => showToast('Toast Message')}>
            Default
          </Button>
          <Button
            variant='red'
            onClick={() => showToast('Toast Message', DANGER_TOAST)}
          >
            Danger
          </Button>
          <Button
            variant='green'
            onClick={() => showToast('Toast Message', SUCCESS_TOAST)}
          >
            Success
          </Button>
          <Button
            variant='yellow'
            onClick={() => showToast('Toast Message', WARNING_TOAST)}
          >
            Warning
          </Button>

          <Button
            isLoading={isLoading}
            onClick={() =>
              mutate({ email: 'admin@mail.com', password: 'admin' })
            }
          >
            Submit
          </Button>
          <Typography as='h3' variant='h3'>
            Query:
          </Typography>
          {queryData && <pre>{JSON.stringify(queryData, null, 2)}</pre>}
          <Typography as='h3' variant='h3'>
            Mutation:
          </Typography>
        </div>
      </section>
    </Layout>
  );
}
