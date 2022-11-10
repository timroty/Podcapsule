import Link from 'next/link'
import { supabase } from '../lib/initSupabase'
import { GetFavoritedPodcasts, DeleteFavoritedPodcasts } from '../services/accessor'
import { useState, useEffect } from "react";
import { Grid } from '@mui/material';
import { format } from 'date-fns'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useRouter } from 'next/router';

export default function FavoritedPodcasts({ user }) {

  const router = useRouter()

  let [favoritedPodcasts, setFavoritedPodcasts] = useState([]);

  useEffect(() => {
    const userAccessToken = supabase.auth.session().access_token;
    GetFavoritedPodcasts(userAccessToken).then((result) => {
      setFavoritedPodcasts(result)
    })
  }, []);

  const handleDelete = (index, podcast) => {
    const userAccessToken = supabase.auth.session().access_token;
    DeleteFavoritedPodcasts(userAccessToken, podcast.Id).then(() => {
        setFavoritedPodcasts(favoritedPodcasts.filter((v, i) => i !== index));
    });
  }

  return (
    <div style={{ maxWidth: '500px', margin: '96px auto' }}>
      <Button variant="outlined" startIcon={<AddCircleOutlineIcon />} onClick={() => router.push('/add-podcast')}>
                  Add Podcast
      </Button>
      {favoritedPodcasts.map((podcast, index) => {
        return (
          <>
            {index != 0 ? <hr/> : <div></div>}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
              <Grid item xs={4}>
                <img src={podcast.ImageUrl} height='120px'/>
              </Grid>
              <Grid item xs={6}>
                <p>{podcast.Title}</p>
                <p>Date Added: {format(Date.parse(podcast.CreateDate), 'mm/dd/yyyy')}</p>
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(index, podcast)}>
                  Delete
                </Button>
              </Grid>
            </Grid>
          </>
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
