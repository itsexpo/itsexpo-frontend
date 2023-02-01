import * as React from 'react';
import { FaChrome } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Typography from '@/components/typography/Typography';
import Layout from '@/layouts/Layout';

export default function ButtonSandbox() {
  return (
    <Layout>
      <section className='min-h-screen'>
        <Typography variant='h4' className='layout text-white pt-10'>
          Button
        </Typography>
        <div className='layout py-10 flex flex-wrap justify-between'>
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

        <Typography variant='h4' className='layout text-white pt-10'>
          IconButton
        </Typography>
        <div className='layout min-h-screen py-10 flex flex-wrap justify-between'>
          <div className='space-y-3 h-fit'>
            <div className='space-x-3'>
              <IconButton variant='red' size='large' icon={FaChrome} />
              <IconButton variant='red' size='base' icon={FaChrome} />
              <IconButton variant='red' size='small' icon={FaChrome} />
            </div>
            <div className='space-x-3'>
              <IconButton variant='yellow' size='large' icon={FaChrome} />
              <IconButton variant='yellow' size='base' icon={FaChrome} />
              <IconButton variant='yellow' size='small' icon={FaChrome} />
            </div>
            <div className='space-x-3'>
              <IconButton variant='green' size='large' icon={FaChrome} />
              <IconButton variant='green' size='base' icon={FaChrome} />
              <IconButton
                variant='green'
                size='small'
                icon={FaChrome}
              ></IconButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
