import UserForm from "@/components/home/UserForm";
import { auth } from "@/lib/auth/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>hello</h1>
      <h2>{session?.user?.name ?? "Not Authenticated"}</h2>
      <UserForm />
    </main>
  );
}
