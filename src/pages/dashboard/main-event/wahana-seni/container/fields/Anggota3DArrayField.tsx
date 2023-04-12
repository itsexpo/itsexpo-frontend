import * as React from 'react';
import { useFieldArray } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';
import Typography from '@/components/typography/Typography';

export default function Anggota3DArrayField({
  departemen,
}: {
  departemen: Array<{ id: number; name: string }>;
}) {
  const { fields, append, remove } = useFieldArray({
    name: 'team_member[]',
    shouldUnregister: true,
  });

  return (
    <div className='space-y-6'>
      {fields.map((field, index) => (
        <div key={field.id} className='space-y-0'>
          <div className='flex justify-between items-center gap-2 p-6 rounded-t-xl bg-white shadow-pendaftaran'>
            <Typography variant='p' className='font-medium'>
              ANGGOTA {index + 1}
            </Typography>
            <Button
              variant='outline'
              leftIcon={HiOutlineTrash}
              leftIconClassName='text-critical-500'
              onClick={() => remove(index)}
            >
              <Typography className='text-critical-500'>
                Hapus Anggota
              </Typography>
            </Button>
          </div>

          <div className='space-y-4'>
            <Input
              id={`team_member.${index}.name`}
              label='Nama'
              placeholder='Masukkan Nama'
              validation={{ required: 'Nama tidak boleh kosong' }}
            />
            <Input
              id={`team_member.${index}.nrp`}
              label='NRP'
              placeholder='Masukkan NRP'
              validation={{ required: 'NRP tidak boleh kosong' }}
            />
            <SelectInput
              id={`team_member.${index}.departemen_id`}
              label='Pilih Departemen'
              placeholder='Pilih Departemen'
              validation={{ required: 'Departemen tidak boleh kosong' }}
            >
              {departemen.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </SelectInput>
            <Input
              id={`team_member.${index}.kontak`}
              label='Kontak Aktif'
              placeholder='Masukkan Kontak Anda'
              helperText='Isilah dengan kontak aktif. Dapat berupa ID Line/No. Whatsapp'
              validation={{ required: 'Kontak aktif tidak boleh kosong' }}
            />
            <DropzoneInput
              id={`team_member.${index}.ktm`}
              label='Upload Dokumen Scan KTM/FRS'
              accept={{
                'image/*': ['.jpg', '.jpeg', '.png'],
              }}
              acceptTypes='JPG / JPEG / PNG'
              validation={{
                required: 'Dokumen Scan KTM/FRS tidak boleh kosong',
              }}
            />
          </div>
        </div>
      ))}
      <div className='flex justify-end gap-6'>
        {fields.length < 3 && (
          <Button
            variant='outline'
            leftIcon={AiOutlinePlus}
            leftIconClassName='text-typo-secondary'
            className='flex-1'
            onClick={() => append({})}
          >
            <Typography className='text-typo-secondary'>
              Tambahkan Anggota Baru
            </Typography>
          </Button>
        )}
        <Button type='submit' variant='green'>
          Daftar
        </Button>
      </div>
    </div>
  );
}
