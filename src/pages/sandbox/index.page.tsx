import ButtonLink from "@/components/links/ButtonLink";
import SEO from "@/components/SEO";
import Layout from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is the home page" />
      <section>
        <div className="layout py-20 space-x-2">
          <ButtonLink href="/sandbox/button">Button</ButtonLink>
          <ButtonLink href="/sandbox/colors">Color</ButtonLink>
          <ButtonLink href="/sandbox/form">Form</ButtonLink>
          <ButtonLink href="/sandbox/typography">Typography</ButtonLink>
        </div>
      </section>
    </Layout>
  );
}
