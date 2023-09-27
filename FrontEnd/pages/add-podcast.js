import * as React from 'react'
import { supabase } from '../lib/initSupabase'
import { SearchPodcasts, AddFavoritedPodcasts } from '../services/accessor'
import { useState } from 'react'
import { TextField, Snackbar, Grid } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useRouter } from 'next/router'
import ResponsiveAppBar from '../components/global/appbar'
import MuiAlert from '@mui/material/Alert'
import { Heading, Divider, AddButton, CenteredGrid, PodcastTitle, PodcastImage, PodcastDescription, PodcastDetails, ContainerSpace, StyledButton, SpacedGrid } from '../styles/pages/add-podcast.styles'

export default function AddPodcasts ({ user }) {
  const router = useRouter()

  const [podcastSearchText, setPodcastSearchText] = useState('')
  const [podcastSearchResult, setPodcastSearchResult] = useState([])

  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const handlePodcastSearchTextChange = (e) => {
    setPodcastSearchText(e.target.value)
  }

  const handlePodcastAdd = (podcast) => {
    const userAccessToken = supabase.auth.session().access_token
    AddFavoritedPodcasts(userAccessToken, podcast.id).then(() => {
      setPodcastSearchText('')
      setPodcastSearchResult([])
    }).then((res) => {
      handleAddClick()
    })
  }

  const handlePodcastSearch = () => {
    const userAccessToken = supabase.auth.session().access_token
    SearchPodcasts(userAccessToken, podcastSearchText).then((result) => {
      setPodcastSearchResult(result)
    })
  }

  const truncateText = (text) => {
    if (text.length > 185) { return text.substring(0, 185) + '...' }
    return text
  }

  const handleAddClick = () => {
    setSnackbarOpen(true)
  }

  const handleAddClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarOpen(false)
  }

  const Alert = React.forwardRef(function Alert (props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <ContainerSpace maxWidth="md">
        <Heading>
          Podcast Search
        </Heading>
        <Divider/>
        <AddButton
          variant="outlined"
          onClick={() => router.push('/favorited-podcasts')}
          sx={{ textTransform: 'capitalize' }}
        >
          Favorited Podcasts
        </AddButton>
        <SpacedGrid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        >
          <CenteredGrid item sm={10} xs={9}>
            <TextField
              value={podcastSearchText}
              label="Search"
              onChange={(e) => handlePodcastSearchTextChange(e)}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  handlePodcastSearch()
                }
              }}
            />
          </CenteredGrid>
          <CenteredGrid item sm={2} xs={3}>
            <StyledButton
              variant="outlined"
              onClick={handlePodcastSearch}
              sx={{ textTransform: 'capitalize' }}
            >
              Search
            </StyledButton>
          </CenteredGrid>
        </SpacedGrid>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleAddClose}
        >
          <Alert onClose={handleAddClose} severity="success" sx={{ width: '100%' }}>
            Podcast Added!
          </Alert>
        </Snackbar>
        {podcastSearchResult.map((podcast, index) => {
          return (
            <div key={index}>
              {index !== 0 ? <Divider /> : <div />}
              <CenteredGrid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 0, sm: 0, md: 0 }}
                style={{ minHeight: '140px' }}
              >
                <CenteredGrid item md={2} sm={3} xs={4}>
                  <PodcastImage src={podcast.imageUrl} alt="Podcast Cover Image" />
                </CenteredGrid>
                <CenteredGrid item md={8} sm={7} xs={6}>
                  <div>
                    <PodcastTitle>
                      {podcast.title}
                    </PodcastTitle>
                    <PodcastDescription>
                      {truncateText(podcast.description)}
                    </PodcastDescription>
                    <CenteredGrid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 0, sm: 0, md: 0 }}
                    >
                      <Grid item sm={3} xs={2} style={{ marginRight: '30px' }}>
                        <PodcastDetails>
                          Episodes: {podcast.numberOfEpisodes}
                        </PodcastDetails>
                      </Grid>
                      <Grid item sm={3} xs={2} style={{ marginRight: '18px' }}>
                        <PodcastDetails>
                          Rating: {podcast.ratingAverage ? Math.round(podcast.ratingAverage * 10) / 10 : 'N/A'}
                        </PodcastDetails>
                      </Grid>
                      <Grid item sm={3} xs={2}>
                        <PodcastDetails>
                          Ratings: {podcast.ratingCount}
                        </PodcastDetails>
                      </Grid>
                    </CenteredGrid>
                  </div>
                </CenteredGrid>
                <CenteredGrid item md={2} sm={2} xs={2}>
                  <StyledButton
                    variant="outlined"
                    onClick={() => handlePodcastAdd(podcast)}
                    startIcon={<AddCircleOutlineIcon />}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    Add
                  </StyledButton>
                </CenteredGrid>
              </CenteredGrid>
            </div>
          )
        })}
      </ContainerSpace>
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

  // If there is a user, return it.
  return { props: { user } }
}
