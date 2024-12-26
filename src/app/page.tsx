import { options } from "@/app/api/auth/[...nextauth]/options";
import LogoutButton from "@/components/LogoutButton";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <>
 
      <h1 className="my-auto text-2xl">{`Welcome ${session?.user?.id}`}</h1>
      <LogoutButton />
    </>
  );
}
