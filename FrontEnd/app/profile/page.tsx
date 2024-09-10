import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/NavBar";
import PageHeading from "@/components/PageHeading";

export default async function ProfilePage() {
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
        <PageHeading>Profile</PageHeading>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col">
            <div className="mt-6">
              <div className="flex items-center space-x-2">
                <p className="text-lg">Email:</p>
                <p className="text-lg font-semibold">{user?.email}</p>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <p className="text-lg">Premium Account:</p>
                <p className="text-lg font-semibold">No</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex items-center space-x-2 text-gray-500">
                <p className="text-md">Account Created:</p>
                <p className="text-md">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(user?.created_at))}</p>
              </div>
              <div className="flex items-center space-x-2 mt-1 text-gray-500">
                <p className="text-md">Last Sign In:</p>
                <p className="text-md">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(user?.last_sign_in_at!))}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-12 text-gray-500">
              <p className="text-sm">Need account updates? Contact us at <a href="mailto:podcapsuleapp@gmail.com">podcapsuleapp@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
