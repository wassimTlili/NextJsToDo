import { getUser } from "@/actions/userActions";
import Todos from "@/components/Todos";
import { currentUser, User } from "@clerk/nextjs/server";

export default async function Home() {
  const user: User | null = await currentUser();
  if (!user) return;
  const fetchedData = await getUser(user?.id);
  console.log(fetchedData);

  return (
    fetchedData && (
      <main className="flex  items-center justify-between ">
        <Todos todos={fetchedData[0].todos} user={fetchedData[0]} />
      </main>
    )
  );
}