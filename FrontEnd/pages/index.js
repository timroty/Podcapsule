import Link from 'next/link'
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Grid, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Container maxWidth="md" style={{ textAlign: "center"}}>
        <Grid container rowSpacing={1} 
              style={{ textAlign: "center", 
                        display: "flex", 
                        alignItems:"center", 
                        marginTop:'20px',
                        marginBottom:'20px',
                        backgroundColor: '#f7f7f7',
                        padding: '50px 20px',
                        borderRadius: '10px'
                        }} 
              columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={4} sm={6} xs={12} style={{ textAlign: "center", display: "flex", alignItems:"center", display:'block'}}>
              <img src='/Podcapsule.png' 
                  width='250px' 
                  style={{ borderRadius:'5px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}/>
            </Grid>
            <Grid item md={8} sm={6} xs={12} style={{textAlign: "center"}}>
              <Typography variant='h1' fontSize='48px' fontWeight='medium' style={{ marginTop:'20px', color: '#01357b' }}>
                PodCapsule
              </Typography>
              <Typography variant='subtitle1' style={{ marginTop:'5px', color: '#01357b' }}>
                Your podcast RSS feed time capsule
              </Typography>
            </Grid>
        </Grid>
        <Link href="/sign-in">
          <Button variant="outlined" style={{color: '#fff', backgroundColor: '#01357b', borderRadius: '50px', padding: '10px 30px', marginTop: '40px'}}>
              Sign In
          </Button>
        </Link>
        <div style={{ marginTop:'100px', textAlign:"left" }}>
          <Typography variant='h5' style={{ marginTop:'5px', color: '#01357b', fontWeight: 'bold' }}>
            What Is PodCapsule?
          </Typography>
          <Typography variant='body1' style={{ marginTop:'5px', color: '#01357b' }}>
             Discover new episodes from your favorite podcasts with PodCapsule! Each day, PodCapsule adds a new episode from one of your favorited podcasts to a custom RSS feed. Catch up on episodes you missed or revisit the best ones from the past. Let PodCapsule make sure you never fall behind!
          </Typography>
        </div>
        <div style={{ marginTop:'40px', textAlign:"left" }}>
          <Typography variant='h5' style={{ marginTop:'5px', color: '#01357b', fontWeight: 'bold' }}>
            Getting Started
          </Typography>
          <Typography variant='body1' style={{ marginTop:'5px', color: '#01357b' }}>
            To start using PodCapsule:
          </Typography>
          <Typography variant='body1' style={{marginTop:'5px', color: '#01357b' }}>
            1. Sign up for a free account on the sign in page.
          </Typography>
          <Typography variant='body1' style={{marginTop:'5px', color: '#01357b' }}>
            2. Favorite a couple podcasts by searching and clicking on the add button next to their name.
          </Typography>
          <Typography variant='body1' style={{marginTop:'5px', color: '#01357b' }}>
            3. After favoriting your podcasts, copy your custom RSS link for your PodCapsule feed. 
          </Typography>
          <Typography variant='body1' style={{marginTop:'5px', color: '#01357b' }}>
            4. Open your favorite podcast player and find the option to add a new podcast by RSS feed URL. 
               If you need help, follow this <a target="_blank" href="https://medium.com/@joshmuccio/how-to-manually-add-a-rss-feed-to-your-podcast-app-on-desktop-ios-android-478d197a3770">Medium article</a>. 
          </Typography>
          <Typography variant='body1' style={{marginTop:'5px', color: '#01357b' }}>
            5. Paste in the PodCapsule feed link and voila! You'll start receiving a new PodCapsule episode in your player every day.
          </Typography>
          <Typography variant='body1' style={{marginTop:'5px', color: '#01357b' }}>
            Note: PodCapsule is not compatible with Spotify since Spotify does not support adding shows by URLs.
          </Typography>
        </div>
        <div style={{ marginTop:'40px', textAlign:"left" }}>
          <Typography variant='h5' style={{ marginTop:'5px', color: '#01357b', fontWeight: 'bold' }}>
            Contact Us
          </Typography>
          <Typography variant='body1' style={{ marginTop:'5px', color: '#01357b' }}>
            For support or inquiries, contact us at: podcapsuleapp@gmail.com
          </Typography>
        </div>
      </Container>
    </>
  )
}

export default Home