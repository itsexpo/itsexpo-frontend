import React from 'react';

import Modal from '@/components/modal/Modal';

export default function SponsorModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <Modal.Title className='font-semibold'>Add Permissions</Modal.Title>
        <Modal.Body>
          <p>HJallo</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
