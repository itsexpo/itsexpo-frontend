import withAuth from "@/components/hoc/withAuth";

export default withAuth(LoginPage, "public");

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
