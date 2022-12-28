import { FormProvider, useForm } from "react-hook-form";

import Button from "@/components/buttons/Button";
import Input from "@/components/forms/Input";
import withAuth from "@/components/hoc/withAuth";
import Layout from "@/layouts/Layout";
import { Login } from "@/types/entities/login";

export default withAuth(LoginPage, "public");

function LoginPage() {
  const methods = useForm<Login>();
  const { handleSubmit } = methods;

  const onSubmit = (data: Login) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <Layout>
      <main>
        <section>
          <div className="layout h-screen flex justify-center items-center">
            <div className="w-3/5 h-5/6 flex flex-col space-y-3 justify-center items-center">
              <h1 className="text-5xl">Login</h1>
              <FormProvider {...methods}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col justify-center items-center"
                >
                  <Input
                    id="email"
                    label="E-mail"
                    type="email"
                    placeholder="Masukkan Email"
                    validation={{
                      required: true,
                    }}
                  />
                  <Input
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Masukkan Password"
                    validation={{
                      required: true,
                    }}
                  />
                  <Button
                    type="submit"
                    variant="outline"
                    className="mt-4 flex h-14 justify-center"
                  >
                    Masuk
                  </Button>
                </form>
              </FormProvider>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
