import * as React from 'react';
import { FaChrome } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import Layout from '@/layouts/Layout';

export default function ButtonSandbox() {
  return (
    <Layout>
      <section className=''>
        <div className='layout min-h-screen py-20 flex flex-wrap justify-between'>
          <div className='space-y-3 h-fit'>
            <div className='space-x-3'>
              <Button variant='red' size='large'>
                Text Only
              </Button>
              <Button variant='red' size='base'>
                Text Only
              </Button>
              <Button variant='red' size='small'>
                Text Only
              </Button>
            </div>
            <div className='space-x-3'>
              <Button variant='yellow' size='large'>
                Text Only
              </Button>
              <Button variant='yellow' size='base'>
                Text Only
              </Button>
              <Button variant='yellow' size='small'>
                Text Only
              </Button>
            </div>
            <div className='space-x-3'>
              <Button variant='green' size='large'>
                Text Only
              </Button>
              <Button variant='green' size='base'>
                Text Only
              </Button>
              <Button variant='green' size='small'>
                Text Only
              </Button>
            </div>
          </div>
          <div className='space-y-3 h-fit'>
            <div className='space-x-3'>
              <Button variant='red' size='large' leftIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='red' size='base' leftIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='red' size='small' leftIcon={FaChrome}>
                Text Only
              </Button>
            </div>
            <div className='space-x-3'>
              <Button variant='yellow' size='large' leftIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='yellow' size='base' leftIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='yellow' size='small' leftIcon={FaChrome}>
                Text Only
              </Button>
            </div>
            <div className='space-x-3'>
              <Button variant='green' size='large' leftIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='green' size='base' leftIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='green' size='small' leftIcon={FaChrome}>
                Text Only
              </Button>
            </div>
          </div>
          <div className='space-y-3 h-fit'>
            <div className='space-x-3'>
              <Button variant='red' size='large' rightIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='red' size='base' rightIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='red' size='small' rightIcon={FaChrome}>
                Text Only
              </Button>
            </div>
            <div className='space-x-3'>
              <Button variant='yellow' size='large' rightIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='yellow' size='base' rightIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='yellow' size='small' rightIcon={FaChrome}>
                Text Only
              </Button>
            </div>
            <div className='space-x-3'>
              <Button variant='green' size='large' rightIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='green' size='base' rightIcon={FaChrome}>
                Text Only
              </Button>
              <Button variant='green' size='small' rightIcon={FaChrome}>
                Text Only
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
