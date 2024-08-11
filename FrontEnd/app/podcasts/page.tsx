import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/NavBar";
import PageHeading from "@/components/PageHeading";
import { PodcastList } from "./podcast-list";

export default async function PodcastsPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = (await supabase.auth.getUser());

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <Navbar/>
      <div className="container max-w-screen-lg">
        <PageHeading>Podcasts</PageHeading>
        <PodcastList></PodcastList>
      </div>
    </>
  );
}
