import React from 'react'
import Link from 'next/link'
import { Grid } from '@mui/material'
import {
  Background,
  HeadingContainer,
  Logo,
  HeadingTextContainer,
  HeadingText,
  SubheadingText,
  ActionButtons,
  LogInButton,
  SignUpButton
} from '../styles/pages/index.styles'

const Home = () => {
  return (
    <>
      <Background>
        <HeadingContainer maxWidth="lg">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
            <Grid item md={4} sm={12} xs={12}>
              <Logo src="/Podcapsule.png" alt="Podcapsule Logo" />
            </Grid>
            <HeadingTextContainer item md={8} sm={12} xs={12}>
              <HeadingText variant="h1">
                PodCapsule
              </HeadingText>
              <SubheadingText variant="subtitle1">
                Your podcast RSS feed time capsule
              </SubheadingText>
            </HeadingTextContainer>
          </Grid>
          <ActionButtons>
            <Link href="/sign-in#auth-sign-up">
              <SignUpButton variant="outlined" sx={{ textTransform: 'capitalize' }}>
                Sign Up
              </SignUpButton>
            </Link>
            <Link href="/sign-in">
              <LogInButton variant="outlined" sx={{ textTransform: 'capitalize' }}>
                Sign In
              </LogInButton>
            </Link>
          </ActionButtons>
        </HeadingContainer>
      </Background>

      {/* <Container maxWidth="md" className={styles.container}>
        <div className={styles['text-container']}>
          <Typography variant="h5" className={styles.text}>
            What Is PodCapsule?
          </Typography>
          <Typography variant="body1" className={styles.text}>
            Discover new episodes from your favorite podcasts with PodCapsule! Each day, PodCapsule adds a new episode from one of your favorited podcasts to a custom RSS feed. Catch up on episodes you missed or revisit the best ones from the past. Let PodCapsule make sure you never fall behind!
          </Typography>
        </div>
        <div className={styles['text-container']}>
          <Typography variant="h5" className={styles.text}>
            Getting Started
          </Typography>
          <Typography variant="body1" className={styles.text}>
            To start using PodCapsule:
          </Typography>
          <Typography variant="body1" className={styles.text}>
            1. Sign up for a free account on the <a className={styles.link} href="/sign-in">sign-in page</a>.
          </Typography>
          <Typography variant="body1" className={styles.text}>
            2. Favorite a couple of podcasts by searching and clicking on the add button next to their name.
          </Typography>
          <Typography variant="body1" className={styles.text}>
            3. After favoriting your podcasts, copy your custom RSS link for your PodCapsule feed.
          </Typography>
          <Typography variant="body1" className={styles.text}>
            4. Open your favorite podcast player and find the option to add a new podcast by RSS feed URL. If you need help, follow this <a className={styles.link} href="https://medium.com/@joshmuccio/how-to-manually-add-a-rss-feed-to-your-podcast-app-on-desktop-ios-android-478d197a3770">Medium article</a>.
          </Typography>
          <Typography variant="body1" className={styles.text}>
            5. Paste in the PodCapsule feed link and voila! You&apos;ll start receiving a new PodCapsule episode in your player every day.
          </Typography>
          <Typography variant="body1" className={styles.text}>
            Note: PodCapsule is not compatible with Spotify since Spotify does not support adding shows by URLs.
          </Typography>
        </div>
        <div className={styles['text-container']}>
          <Typography variant="h5" className={styles.text}>
            Contact Us
          </Typography>
          <Typography variant="body1" className={styles.text}>
            For support or inquiries, contact us at: <a className={styles.link} href="mailto:podcapsuleapp@gmail.com">podcapsuleapp@gmail.com</a>
          </Typography>
        </div>
      </Container> */}
    </>
  )
}

export default Home
