import * as React from 'react'
import { supabase } from '../lib/initSupabase'
import { GetFavoritedPodcasts, DeleteFavoritedPodcasts } from '../services/accessor'
import { useState, useEffect } from 'react'
import { Grid, Typography, Container, TextField, Snackbar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useRouter } from 'next/router'
import ResponsiveAppBar from '../components/global/appbar'
import MuiAlert from '@mui/material/Alert'
import jwtDecode from 'jwt-decode'
import '../styles/favoritedPodcast.css'
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
      <Container maxWidth="md" className="container">
        <Typography variant="h1" className="heading">
          Favorited Podcasts
        </Typography>
        {favoritedPodcasts.length > 0
          ? (
          <>
            <Typography variant="subtitle1" className="subtitle">
              RSS Feed Url
            </Typography>
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
                <Button
                  variant="contained"
                  className="add-button"
                  onClick={() => {
                    copy(rssFeedUrl)
                    handleCopyClick()
                  }}
                >
                  Copy
                </Button>
              </Grid>
            </Grid>
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleCopyClose}
              className="snackbar"
            >
              <Alert onClose={handleCopyClose} severity="success" sx={{ width: '100%' }}>
                Copied!
              </Alert>
            </Snackbar>
          </>
            )
          : (
          <></>
            )}
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => handleAddPodcast()}
          className="add-button"
        >
          Add Podcast
        </Button>
        {favoritedPodcasts.map((podcast, index) => {
          return (
            <div key={index}>
              {index !== 0 ? <hr className="hr-line" /> : <div />}
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 0, sm: 0, md: 0 }}
              >
                <Grid item md={2} sm={3} xs={5}>
                  <img src={podcast.ImageUrl} alt="" className="image" />
                </Grid>
                <Grid item md={8} sm={6} xs={6} align="left">
                  <Typography variant="subtitle1" style={{ marginTop: '20px' }}>
                    {podcast.Title}
                  </Typography>
                  <Typography variant="subtitle2">
                    Date Added: {new Date(podcast.CreateDate).toDateString()}
                  </Typography>
                </Grid>
                <Grid item md={2} sm={2} xs={6} className="grid-item">
                  <Button
                    variant="outlined"
                    style={{ color: '#01357b' }}
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(index, podcast)}
                  >
                    Delete
                  </Button>
                </Grid>
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
