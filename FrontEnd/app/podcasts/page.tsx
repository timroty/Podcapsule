import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/NavBar";
import PageHeading from "@/components/PageHeading";
import { PodcastList } from "./podcast-list";
import CopyButton from "@/components/buttons/CopyButton";

export default async function PodcastsPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const rssFeedUrl =
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/user/rss/" + user.id;

  return (
    <>
      <Navbar />
      <div className="container max-w-screen-lg">
        <PageHeading>Podcasts</PageHeading>
        <h2 className="text-lg mt-4">RSS feed URL:</h2>
        <div className="flex items-center space-x-4 mt-1">
          <div className="flex flex-col w-full">
            <input
              id="disabled-input"
              type="text"
              placeholder={rssFeedUrl}
              disabled
              className="block w-full px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded"
            />
          </div>
          <CopyButton copyValue={rssFeedUrl} />
        </div>
        <PodcastList></PodcastList>
      </div>
    </>
  );
}
