import * as React from 'react'
import { supabase } from '../lib/initSupabase'
import { GetFavoritedPodcasts, DeleteFavoritedPodcasts } from '../services/accessor'
import { useState, useEffect } from 'react'
import { Grid, Container, TextField, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useRouter } from 'next/router'
import ResponsiveAppBar from '../components/global/appbar'
import MuiAlert from '@mui/material/Alert'
import jwtDecode from 'jwt-decode'
import { Heading, SubHeading, CopyButton, Divider, CopySnackbar, PodcastTitle, PodcastDateAdded, CenteredGrid, AddButton, PodcastImage } from '../styles/pages/favorited-podcast.styles'
const copy = require('clipboard-copy')

export default function FavoritedPodcasts ({ user }) {
  const [favoritedPodcasts, setFavoritedPodcasts] = useState([])
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const userAccessToken = supabase.auth.session()?.access_token
    if (userAccessToken) {
      GetFavoritedPodcasts(userAccessToken).then((result) => {
        setFavoritedPodcasts(result)
      })
    } else {
      supabase.auth.signOut()
      router.push('/')
    }
  }, [])

  const handleDelete = (index, podcast) => {
    const userAccessToken = supabase.auth.session().access_token
    DeleteFavoritedPodcasts(userAccessToken, podcast.Id).then(() => {
      setFavoritedPodcasts(favoritedPodcasts.filter((v, i) => i !== index))
    })
  }

  const handleCopyClick = () => {
    setSnackbarOpen(true)
  }

  const handleCopyClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarOpen(false)
  }

  const handleAddPodcast = () => {
    if (favoritedPodcasts.length < 5) {
      router.push('/add-podcast')
    } else {
      alert('Maximum 5 podcasts allowed on free plan.')
    }
  }

  const Alert = React.forwardRef(function Alert (props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

  const rssFeedUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/api/user/rss/' + user.id

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container maxWidth="md">
        <Heading>
          Favorited Podcasts
        </Heading>
        <Divider/>
        {favoritedPodcasts.length > 0
          ? (
            <>
              <SubHeading>
                RSS Feed Url
              </SubHeading>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                justify="center"
              >
                <Grid item xs={8} align="center">
                  <TextField
                    hiddenLabel
                    fullWidth
                    id="standard-read-only-input"
                    defaultValue={rssFeedUrl}
                    InputProps={{
                      readOnly: true
                    }}
                    variant="filled"
                    size="small"
                  />
                </Grid>
                <Grid item xs={4} align="left">
                  <CopyButton
                    variant="contained"
                    onClick={() => {
                      copy(rssFeedUrl)
                      handleCopyClick()
                    }}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    Copy
                  </CopyButton>
                </Grid>
              </Grid>
              <CopySnackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCopyClose}
              >
                <Alert onClose={handleCopyClose} severity="success">
                  Copied
                </Alert>
              </CopySnackbar>
            </>
            )
          : (
            <></>
            )}
        <AddButton>
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => handleAddPodcast()}
            sx={{ color: '#01357b', borderColor: '#01357b', textTransform: 'capitalize' }}
          >
            Add podcast
          </Button>
        </AddButton>
        {favoritedPodcasts.map((podcast, index) => {
          return (
            <div key={index}>
              {index !== 0 ? <Divider /> : <div />}
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 0, sm: 0, md: 0 }}
                style={{ height: '140px' }}
              >
                <CenteredGrid item md={2} sm={3} xs={4}>
                  <PodcastImage src={podcast.ImageUrl} alt="Podcast Cover Image" />
                </CenteredGrid>
                <CenteredGrid item md={9} sm={8} xs={7}>
                  <div>
                    <PodcastTitle>
                      {podcast.Title}
                    </PodcastTitle>
                    <PodcastDateAdded>
                      Date Added: {new Date(podcast.CreateDate).toDateString()}
                    </PodcastDateAdded>
                  </div>
                </CenteredGrid>
                <CenteredGrid item md={1} sm={1} xs={1}>
                  <IconButton
                    variant="outlined"
                    style={{ color: '#01357b' }}
                    onClick={() => handleDelete(index, podcast)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CenteredGrid>
              </Grid>
            </div>
          )
        })}
      </Container>
    </>
  )
}

export async function getServerSideProps ({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    supabase.auth.signOut()
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: '/', permanent: false } }
  }

  // First page user goes to, sign out if bad token
  const refreshToken = req.cookies['sb-refresh-token']
  const accessToken = req.cookies['sb-access-token']

  const decodedJwt = jwtDecode(accessToken)

  if ((Date.now() + 500) >= decodedJwt.exp * 1000) {
    const refreshResult = await supabase.auth.api.refreshAccessToken(refreshToken)
    if (refreshResult.data) {
      supabase.auth.setAuth(refreshResult.data.access_token)
    } else {
      supabase.auth.signOut()
      return { props: {}, redirect: { destination: '/', permanent: false } }
    }
  }

  // If there is a user, return it.
  return { props: { user } }
}
