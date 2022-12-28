import withAuth from "@/components/hoc/withAuth";

export default withAuth(SignupPage, "public");

function SignupPage() {
  return (
    <div>
      <h1>Signup</h1>
    </div>
  );
}
