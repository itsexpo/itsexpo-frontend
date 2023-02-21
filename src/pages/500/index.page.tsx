import SEO from '@/components/SEO';
import ErrorInfo from '@/components/shared/ErrorInfo';
import Layout from '@/layouts/Layout';
import BackgroundIllustration from '@/pages/500/container/BackgroundIllustration';

export default function Page505() {
  return (
    <Layout withNavbar={false} withFooter={false}>
      <SEO title='500' description='Internal server error' />
      <main className=''>
        <section className='flex min-h-screen overflow-hidden items-center justify-center bg-tainted-100'>
          {/* //*#region=========== Background Illustration =========== */}
          <BackgroundIllustration />
          {/* //*endregion=========== Background Illustration =========== */}
          {/* <>
            {Page505?.map((item)=>{
              <div key={item.title}>
                <ErrorInfo errorInfo={item}/>
              </div>
            })}
          </> */}
          <ErrorInfo
            withErrorIcons={true}
            status={500}
            title='internal server errors..'
            desc='Server sedang mengalami gangguan. Harap bersabar atau coba lagi nanti.'
          />
        </section>
      </main>
    </Layout>
  );
}
