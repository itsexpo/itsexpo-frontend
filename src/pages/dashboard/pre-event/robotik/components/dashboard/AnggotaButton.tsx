import { Menu, Transition } from '@headlessui/react';
import { useMutation } from '@tanstack/react-query';
import * as React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi';

import Typography from '@/components/typography/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useDialog from '@/hooks/useDialog';
import api from '@/lib/api';
import { ApiReturn } from '@/types/api';

type ButtonProps = {
  id: string;
  name: string;
  ketua: boolean;
  isTeamLead: boolean;
  id_team: string;
} & React.ComponentPropsWithRef<'button'>;

type DeleteAnggota = {
  id_personal: string;
  code_team: string;
};

const AnggotaButton = ({
  name,
  id,
  id_team,
  ketua,
  isTeamLead,
}: ButtonProps) => {
  const { mutate: deleteAnggota } = useMutationToast<
    ApiReturn<undefined>,
    DeleteAnggota
  >(
    useMutation(async (data) => {
      await api.delete('/pre_event/robotik/team', { data });
    })
  );

  const dialog = useDialog();
  function openWarningDelete() {
    dialog({
      title: 'Apakah Anda Yakin!!!',
      description: `Hapus Anggota dengan Nama: ${name} ?`,
      submitText: 'Delete',
      variant: 'warning',
      catchOnCancel: true,
    }).then(() => deleteAnggota({ id_personal: id, code_team: id_team }));
  }
  return (
    <div className='w-full rounded-xl p-4 border-typo-outline border-[1px] flex items-center justify-between'>
      <div className='space-y-2'>
        <Typography as='p' variant='c' className='font-medium text-typo-icon'>
          {ketua ? 'Ketua Tim' : 'Anggota'}
        </Typography>
        <Typography
          as='p'
          variant='p'
          className='text-typo-primary font-semibold'
        >
          {name}
        </Typography>
      </div>
      {!ketua && isTeamLead && (
        <div>
          <Menu as='div' className='relative inline-block text-left'>
            <div>
              <Menu.Button className='inline-flex w-full justify-center'>
                <BsThreeDots className='text-xl' />
              </Menu.Button>
            </div>
            <Transition
              as={React.Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='px-1 py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={openWarningDelete}
                      >
                        <FiTrash2 className='mr-3 h-5 w-5 text-critical-600' />
                        Hapus Anggota
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default AnggotaButton;
