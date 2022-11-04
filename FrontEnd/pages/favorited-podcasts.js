import Link from 'next/link'
import { supabase } from '../lib/initSupabase'
import { GetFavoritedPodcasts } from '../services/accessor'
import { useState, useEffect } from "react";

export default function FavoritedPodcasts({ user }) {

  let [favoritedPodcasts, setFavoritedPodcasts] = useState([]);

  useEffect(() => {
    const userAccessToken = supabase.auth.session().access_token;
    GetFavoritedPodcasts(userAccessToken).then((result) => {
      setFavoritedPodcasts(result)
    })
  }, []);

  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      {favoritedPodcasts.map((podcast, index) => {
        return (
          <p>{podcast.Title}</p>
        );
      })}
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: '/', permanent: false } }
  }

  // If there is a user, return it.
  return { props: { user } }
}
