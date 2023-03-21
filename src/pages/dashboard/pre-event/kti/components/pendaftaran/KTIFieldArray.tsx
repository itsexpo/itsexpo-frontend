import * as React from 'react';
import { useFieldArray } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import { REG_PHONE } from '@/constant/regex';

export default function KTIFieldArray() {
  const { fields, append, remove } = useFieldArray({
    name: 'team_member[]',
    shouldUnregister: true,
    rules: { required: true },
  });

  return (
    <div className='space-y-4'>
      {fields.map((item, index) => (
        <div key={item.id} className='space-y-2'>
          <Input
            id={`team_member.${index}.nama`}
            label={`Nama Anggota ${index + 1}`}
            placeholder='Nama Lengkap'
            validation={{
              required: 'Nama harus diisi',
            }}
          />
          <Input
            id={`team_member.${index}.no_telp`}
            label={`No. Telp Anggota ${index + 1}`}
            placeholder='Nomor Telepon'
            helperText='Nomor telepon harus diawali +62'
            validation={{
              required: 'Nomor telepon wajib diisi',
              pattern: {
                value: REG_PHONE,
                message: 'Nomor telepon tidak valid',
              },
            }}
          />
        </div>
      ))}
      <div className='flex justify-center gap-x-4'>
        {fields.length < 4 && (
          <Button
            onClick={() => append({})}
            variant='outline'
            className='mt-2 !border-success-600 !text-success-600'
          >
            Tambah Anggota
          </Button>
        )}
        {fields.length > 1 && (
          <Button
            onClick={() => remove(fields.length - 1)}
            variant='red'
            className='mt-2'
          >
            Hapus Anggota
          </Button>
        )}
      </div>
    </div>
  );
}
