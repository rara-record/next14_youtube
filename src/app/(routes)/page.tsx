import { auth } from "@/lib/auth/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>hello</h1>
      <h2>{session?.user?.name ?? "Not Authenticated"}</h2>
      <form className="flex w-full space-x-4 rounded bg-white p-4 shadow-md">
        <input
          type="text"
          placeholder="Enter something..."
          className="flex-grow rounded border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
        />
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-700 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
