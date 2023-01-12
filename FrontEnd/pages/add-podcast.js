import Link from 'next/link'
import { supabase } from '../lib/initSupabase'
import { SearchPodcasts, AddFavoritedPodcasts } from '../services/accessor'
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useRouter } from 'next/router';
import ResponsiveAppBar from '../components/global/appbar';

export default function FavoritedPodcasts({ user }) {

    const router = useRouter()

    let [podcastSearchText, setPodcastSearchText] = useState('');
    let [podcastSearchResult, setPodcastSearchResult] = useState([]);

    const handlePodcastSearchTextChange = (e) => { 
        setPodcastSearchText(e.target.value);
    }

    const handlePodcastAdd = (podcast) => { 
        const userAccessToken = supabase.auth.session().access_token;
        AddFavoritedPodcasts(userAccessToken, podcast.id).then(() => {
            setPodcastSearchText('');
            setPodcastSearchResult([]);
        });
    }

    const handlePodcastSearch = () => { 
        const userAccessToken = supabase.auth.session().access_token;
        SearchPodcasts(userAccessToken, podcastSearchText).then((result) => {
            setPodcastSearchResult(result);
          });
    }

  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <div style={{ maxWidth: '1000px', margin: '96px auto' }}>
        <Button variant="outlined" onClick={() => router.push('/favorited-podcasts')}>
            Favorited Podcasts
        </Button>

    <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
        <Grid item xs={8}>
            <TextField value={podcastSearchText} onChange={ (e) => handlePodcastSearchTextChange(e)} />
        </Grid>
        <Grid item xs={4}>
            <Button variant="outlined" onClick={handlePodcastSearch}>
                Search
            </Button>
        </Grid>
    </Grid>
    {podcastSearchResult.map((podcast, index) => {
        return (
          <>
            {index != 0 ? <hr/> : <div></div>}
            <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
              <Grid item xs={2}>
                <img src={podcast.imageUrl} height='120px'/>
              </Grid>
              <Grid item xs={6}>
                <p>{podcast.title}</p>
                <p>{podcast.description}</p>
              </Grid>
              <Grid item xs={2}>
                <p>Number of Episodes: {podcast.numberOfEpisodes}</p>
                <p>Rating Average {podcast.ratingAverage}</p>
                <p>Rating Count {podcast.ratingCount}</p>
              </Grid>
              <Grid item xs={2}>
                <Button variant="outlined" onClick={() => handlePodcastAdd(podcast)}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </>
        );
      })}
    </div>
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
