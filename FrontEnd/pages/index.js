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
        <div style={{ marginTop:'40px' }}>
          <Typography variant='subtitle1' style={{ marginTop:'5px', color: '#01357b' }}>
            Contact us at: podcapsuleapp@gmail.com
          </Typography>
        </div>
      </Container>
    </>
  )
}

export default Home