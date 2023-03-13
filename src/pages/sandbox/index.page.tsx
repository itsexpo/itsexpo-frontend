import ButtonLink from '@/components/links/ButtonLink';
import SEO from '@/components/SEO';
import Layout from '@/layouts/Layout';

export default function Home() {
  return (
    <Layout withFooter={false} withNavbar={false}>
      <SEO title='Home' description='This is the home page' noindex />
      <main>
        <section className='min-h-screen bg-primary-200'>
          <div className='layout py-20 space-x-2'>
            <ButtonLink href='/sandbox/button'>Button</ButtonLink>
            <ButtonLink href='/sandbox/colors'>Color</ButtonLink>
            <ButtonLink href='/sandbox/form'>Form</ButtonLink>
            <ButtonLink href='/sandbox/typography'>Typography</ButtonLink>
            <ButtonLink href='/sandbox/table'>Table</ButtonLink>
            <ButtonLink href='/sandbox/query-toast'>Query</ButtonLink>
            <ButtonLink href='/sandbox/tag'>Tag</ButtonLink>
            <ButtonLink href='/sandbox/imagefetch'>Image Fetch</ButtonLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
