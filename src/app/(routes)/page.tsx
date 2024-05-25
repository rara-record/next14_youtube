import { ModeToggle } from "@/components/mode-toggle";
import { auth } from "@/lib/auth/auth";

import Image from "next/image";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>{session?.user?.name ?? "Not Authenticated"}</h2>
    </main>
  );
}
