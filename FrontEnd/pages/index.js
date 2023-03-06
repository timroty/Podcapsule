import Link from 'next/link'
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Grid, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Container maxWidth="md"  style={{ textAlign: "center"}}>
        <Grid container rowSpacing={1} 
                        style={{ textAlign: "center", 
                        display: "flex", 
                        alignItems:"center", 
                        marginTop:'20px',
                        marginBottom:'20px'}} 
                        columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={4} sm={6} xs={12} style={{ textAlign: "center", display: "flex", alignItems:"center", display:'block'}}>
              <img src='https://mefobhismocgsttbgjwe.supabase.co/storage/v1/object/public/podcapsule-bucket/Podcapsule.png' 
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
          <Button variant="outlined" style={{color: '#01357b', borderColor: '#01357b'}}>
              Sign In
          </Button>
        </Link>
        <div style={{ marginTop:'100px', textAlign:"left" }}>
          <Typography variant='h5' style={{ marginTop:'5px', color: '#01357b' }}>
            What Is PodCapsule?
          </Typography>
          <Typography variant='body1' style={{ marginTop:'5px', color: '#01357b' }}>
           PodCapsule allows you to discover episodes from your favorite podcasts that you may have missed!
           Each day, PodCapsule adds a new episode from one of your favorited podcasts onto a custom RSS feed. 
           Now, you'll have the oppurtunity to queue and listen to episodes that were posted prior to when you
           started listening to a show or listen again to great episodes.
          </Typography>
        </div>
        <div style={{ marginTop:'40px', textAlign:"left" }}>
          <Typography variant='h5' style={{ marginTop:'5px', color: '#01357b' }}>
            Getting Started
          </Typography>
          <Typography variant='body1' style={{ marginTop:'5px', color: '#01357b' }}>
           To start using PodCapsule, first create an account. Note, emails from PodCapsule
           may be flagged as spam by your email provider. 
          </Typography>
          <Typography variant='body1' style={{marginTop:'5px', color: '#01357b' }}>
           Next, favorite a couple podcasts you enjoy listening to. Your PodCapsule feed won't
           be populated until you favorite at least one podcast.
          </Typography>
          <Typography variant='body1' style={{marginTop:'5px', color: '#01357b' }}>
           Finally, copy the RSS link for your PodCapsule feed and add it to your podcast player
           of choice.  ㅤ
           <a target="_blank" href="https://medium.com/@joshmuccio/how-to-manually-add-a-rss-feed-to-your-podcast-app-on-desktop-ios-android-478d197a3770">This Medium article </a> 
           explains the process of adding shows by an RSS feed URL on different popular podcast players. 
           Unfortunately, Spotify does not support adding shows by URLs meaning PodCapsule is incompatible to be used on Spotify.
          </Typography>
          <Typography variant='body1' style={{marginTop:'5px', color: '#01357b' }}>
           Now wait! Each day you'll have a new PodCapsule episode reccomended on your player without you having to do a thing!
           Whenever you are looking to change it up, log back into podcapsule and update your favorited podcasts.
          </Typography>
        </div>
        <div style={{ marginTop:'40px', textAlign:"left" }}>
          <Typography variant='h5' style={{ marginTop:'5px', color: '#01357b' }}>
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