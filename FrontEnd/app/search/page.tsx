import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/NavBar";
import PageHeading from "@/components/PageHeading";
import { SearchComponent } from "./search-component";

export default async function SearchPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <Navbar />
      <div className="container max-w-screen-lg">
        <PageHeading>Search</PageHeading>
        <SearchComponent />
      </div>
    </>
  );
}
