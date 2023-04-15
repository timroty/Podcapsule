import * as React from 'react';
import { supabase } from '../lib/initSupabase'
import { SearchPodcasts, AddFavoritedPodcasts } from '../services/accessor'
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { Container, TextField, Snackbar, Box, Grid, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useRouter } from 'next/router';
import ResponsiveAppBar from '../components/global/appbar';
import MuiAlert from '@mui/material/Alert';

export default function AddPodcasts({ user }) {

    const router = useRouter()

    let [podcastSearchText, setPodcastSearchText] = useState('');
    let [podcastSearchResult, setPodcastSearchResult] = useState([]);

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handlePodcastSearchTextChange = (e) => { 
      setPodcastSearchText(e.target.value);
    }

    const handlePodcastAdd = (podcast) => { 
      const userAccessToken = supabase.auth.session().access_token;
      AddFavoritedPodcasts(userAccessToken, podcast.id).then(() => {
          setPodcastSearchText('');
          setPodcastSearchResult([]);
      }).then((res) => {
        handleAddClick();
      });
    }

    const handlePodcastSearch = () => { 
      const userAccessToken = supabase.auth.session().access_token;
      SearchPodcasts(userAccessToken, podcastSearchText).then((result) => {
          setPodcastSearchResult(result);
        });
    }

    const truncateText = (text) => { 
      if (text.length > 180) 
        return text.substring(0, 150) + '...';
      return text;
    }

    const handleAddClick = () => {
      setSnackbarOpen(true);
    };
  
    const handleAddClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setSnackbarOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container maxWidth="md">
        <Typography variant='h1' fontSize='24px' fontWeight='medium' 
          style={{ marginTop:'20px', marginBottom:'20px' }}>
          Podcast Search
        </Typography>
        <Button variant="outlined" style={{color: '#01357b', borderColor: '#01357b'}} onClick={() => router.push('/favorited-podcasts')}>
          Favorited Podcasts
        </Button>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}
          style={{ marginTop:'20px', marginBottom:'20px' }}>
          <Grid item sm={10} xs={9} style={{ display: "flex", alignItems:"center" }}>
            <TextField value={podcastSearchText} label="Search"
              onChange={ (e) => handlePodcastSearchTextChange(e)} />
          </Grid>
          <Grid item sm={2} xs={3} style={{ display: "flex", alignItems:"center" }}>
            <Button variant="outlined" style={{color: '#01357b', borderColor: '#01357b'}} onClick={handlePodcastSearch}>
                Search
            </Button>
          </Grid>
        </Grid>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleAddClose}>
          <Alert onClose={handleAddClose} severity="success" sx={{ width: '100%' }}>
            Podcast Added!
          </Alert>
        </Snackbar>
        {podcastSearchResult.map((podcast, index) => {
            return (
              <div key={index}>
                {index != 0 ? <hr></hr> : <div/>}
                <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
                  <Grid item md={2} sm={3} xs={5} style={{ display: "flex", alignItems:"center" }}>
                    <img src={podcast.imageUrl} width='120px' style={{ borderRadius:'5px' }}/>
                  </Grid>
                  <Grid item md={8} sm={7} xs={6}>
                    <Typography variant='subtitle1' style={{ marginTop:'20px' }}>
                      {podcast.title}
                    </Typography>
                    <Typography variant='subtitle2' style={{ marginTop:'5px', maxWidth:'95%' }}>
                      {truncateText(podcast.description)}
                    </Typography>
                  </Grid>
                  <Grid item md={2} sm={2} xs={5} style={{ display: "flex", alignItems:"center" }}>
                    <Button variant="outlined"
                          onClick={() => handlePodcastAdd(podcast)}
                          style={{color: '#01357b', borderColor: '#01357b'}}
                          startIcon={<AddCircleOutlineIcon />} >
                        Add
                    </Button>
                  </Grid>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 0, md: 0 }}
                          style={{ marginTop:'5px'}}>
                    <Grid item md={2} sm={3} xs={5}> </Grid>
                    <Grid item sm={2} xs={2} style={{ marginRight:'10px'}}>
                      <Typography variant='subtitle2'>
                        Episodes: {podcast.numberOfEpisodes}
                      </Typography>
                    </Grid>
                    <Grid item sm={2} xs={2}>
                      <Typography variant='subtitle2'>
                        Rating: {podcast.ratingAverage ? Math.round(podcast.ratingAverage * 10) / 10 : 'N/A'}
                      </Typography>
                    </Grid>
                    <Grid item sm={2} xs={2}>
                      <Typography variant='subtitle2'>
                        Rating count: {podcast.ratingCount}
                      </Typography>
                    </Grid>
                    </Grid>
                </Grid>
              </div>
            );
          })}
      </Container>
    </>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    supabase.auth.signOut();
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: '/', permanent: false } }
  }

  // If there is a user, return it.
  return { props: { user } }
}
