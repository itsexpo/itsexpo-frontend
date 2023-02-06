import * as React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';
import Seo from '@/components/SEO';
import Typography from '@/components/typography/Typography';
// import TextButton from '@/components/buttons/TextButton';
import Layout from '@/layouts/Layout';

export default function TextButtonPage() {
  return (
    <Layout>
      <Seo title='Text Link & Button' />
      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='h4' color='tertiary'>
              Plain Button
            </Typography>
            <div className='mt-4 space-y-8'>
              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h5' color='tertiary'>
                  Primary
                </Typography>
                <div className='flex gap-x-4'>
                  <PrimaryLink href='/' variant='primary'>
                    Button
                  </PrimaryLink>
                  <PrimaryLink href='/' variant='primary' size='small'>
                    Button
                  </PrimaryLink>
                </div>
              </div>
              <div className='flex flex-col gap-3 bg-white'>
                <Typography as='h2' variant='h5'>
                  Secondary
                </Typography>
                <div className='flex gap-x-4'>
                  <PrimaryLink href='/' variant='secondary'>
                    Button
                  </PrimaryLink>
                  <PrimaryLink href='/' variant='secondary' size='small'>
                    Button
                  </PrimaryLink>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h5' color='tertiary'>
                  Danger
                </Typography>
                <div className='flex gap-x-4'>
                  <PrimaryLink href='/' variant='critical'>
                    Button
                  </PrimaryLink>
                  <PrimaryLink href='/' variant='critical' size='small'>
                    Button
                  </PrimaryLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
