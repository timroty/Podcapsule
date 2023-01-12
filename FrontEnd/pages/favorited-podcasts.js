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
import ResponsiveAppBar from '../components/global/appbar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function FavoritedPodcasts({ user }) {

  let [favoritedPodcasts, setFavoritedPodcasts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const userAccessToken = supabase.auth.session()?.access_token;

    if (userAccessToken){
      GetFavoritedPodcasts(userAccessToken).then((result) => {
        setFavoritedPodcasts(result)
      });
    } else {
      {router.push('/')}
    }
  }, []);

  const handleDelete = (index, podcast) => {
    const userAccessToken = supabase.auth.session().access_token;
    DeleteFavoritedPodcasts(userAccessToken, podcast.Id).then(() => {
        setFavoritedPodcasts(favoritedPodcasts.filter((v, i) => i !== index));
    });
  }

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container maxWidth="md">
        <h3>
          Your unquie RSS Feed
        </h3>
          <h4>
            {process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/user/rss/{user.id}
          </h4>
          <Button variant="outlined" 
                  startIcon={<AddCircleOutlineIcon />} 
                  onClick={() => router.push('/add-podcast')}
                  style= {{ marginBottom: '15px', marginTop: '15px'}}>
            Add Podcast
          </Button>
          {favoritedPodcasts.map((podcast, index) => {
            return (
              <>
                <Paper elevation={2} variant="outlined" style={{ marginBottom:'10px' }}>
                  <Box alignItems='center'>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                      <Grid item xs={4}>
                        <img src={podcast.ImageUrl} height='120px' style={{ borderRadius:'5px' }}/>
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
                  </Box>
                </Paper>
              </>
            );
          })}
          </Container>
      </>
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
